<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的saas管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace app\service\admin\upgrade;

use app\dict\addon\AddonDict;
use app\dict\sys\AppTypeDict;
use app\dict\sys\TaskDict;
use app\dict\sys\UpgradeDict;
use app\model\addon\Addon;
use app\model\site\Site;
use app\model\sys\SysTask;
use app\service\admin\install\InstallSystemService;
use app\service\admin\sys\ConfigService;
use app\service\core\addon\CoreAddonCloudService;
use app\service\core\addon\CoreAddonInstallService;
use app\service\core\addon\CoreAddonService;
use app\service\core\addon\CoreDependService;
use app\service\core\addon\WapTrait;
use app\service\core\channel\CoreH5Service;
use app\service\core\menu\CoreMenuService;
use app\service\core\niucloud\CoreCloudBuildService;
use app\service\core\niucloud\CoreModuleService;
use app\service\core\schedule\CoreScheduleInstallService;
use core\base\BaseAdminService;
use core\exception\CloudBuildException;
use core\exception\CommonException;
use core\util\DbBackup;
use core\util\StepLogger;
use core\util\niucloud\BaseNiucloudClient;
use core\util\niucloud\CloudService;
use think\facade\Cache;
use think\facade\Db;
use think\facade\Log;

/**
 * 框架及插件升级
 * @package app\service\core\upgrade
 */
class UpgradeService extends BaseAdminService
{
    use WapTrait;
    use ExecuteSqlTrait;

    protected $upgrade_dir;

    protected $root_path;

    protected $cache_key = 'upgrade';

    protected $upgrade_task = null;

    protected $addon = '';

    // 升级相关接口（method 仅记录路由形式：[http方法]路由；操作名称记录在 name 字段）
    private const API_UPGRADE         = '[post]niucloud/upgrade';
    private const API_UPGRADE_EXECUTE = '[post]niucloud/upgrade/execute';
    private const API_UPGRADE_CLEAR   = '[post]niucloud/upgrade/clear';

    /**
     * 升级包下载分片大小（字节）
     * 需与 CoreAddonCloudService::downloadUpgradeFile() 的 $chunk_size 保持一致，
     * 用于把「已完成分片数」换算成已下载字节数。
     */
    public const DOWNLOAD_CHUNK_SIZE = 1024 * 1024;

    // 接口路由 -> 操作名称（写入 name 字段）
    private const UPGRADE_API_NAME = [
        self::API_UPGRADE         => '发起升级',
        self::API_UPGRADE_EXECUTE => '执行升级步骤',
        self::API_UPGRADE_CLEAR   => '清除升级任务(取消)',
    ];

    private $steps = [
        'requestUpgrade' => [ 'step' => 'requestUpgrade', 'title' => '请求升级' ],
        'downloadFile' => [ 'step' => 'downloadFile', 'title' => '' ],
        'backupCode' => [ 'step' => 'backupCode', 'title' => '备份源码' ],
        'backupSql' => [ 'step' => 'backupSql', 'title' => '' ],
        'coverCode' => [ 'step' => 'coverCode', 'title' => '合并更新文件' ],
        'handleUniapp' => [ 'step' => 'handleUniapp', 'title' => '处理uniapp' ],
        'installDepend' => ['step' => 'installDepend', 'title' => '合并依赖'],
        'refreshMenu' => [ 'step' => 'refreshMenu', 'title' => '刷新菜单' ],
        'installSchedule' => [ 'step' => 'installSchedule', 'title' => '安装计划任务' ],
        'upgradeComplete' => [ 'step' => 'upgradeComplete', 'title' => '升级完成' ]
    ];

    public function __construct()
    {
        parent::__construct();

        $this->root_path = dirname(root_path()) . DIRECTORY_SEPARATOR;
        $this->upgrade_dir = $this->root_path . 'upgrade' . DIRECTORY_SEPARATOR;
        $this->upgrade_task = Cache::get($this->cache_key);

        if (!empty($this->upgrade_task) && !isset($this->upgrade_task[ 'upgrade_apps' ])) {
            $this->upgrade_task[ 'upgrade_apps' ] = [ AddonDict::FRAMEWORK_KEY ];
        }
    }

    /**
     * 获取升级步骤记录文件(steps.jsonl)路径，按 upgrade_key 落到临时目录
     * @param string $upgradeKey
     * @return string
     */
    private function upgradeStepFile(string $upgradeKey): string
    {
        if (empty($upgradeKey)) return '';
        return task_runtime_path() . 'backup' . DIRECTORY_SEPARATOR . 'upgrade' . DIRECTORY_SEPARATOR . $upgradeKey . DIRECTORY_SEPARATOR . 'steps.jsonl';
    }

    /**
     * 写入一条升级步骤记录（容错：记录失败不影响主流程）
     * @param string $upgradeKey
     * @param string $step
     * @param string $method
     * @param array  $params
     * @param array  $result
     * @param string $status
     * @param array  $next
     */
    private function upgradeLogStep(string $upgradeKey, string $step, string $method, string $desc = '', array $params = [], array $result = [], string $status = 'success', array $next = [])
    {
        $file = $this->upgradeStepFile($upgradeKey);
        if (!$file) return;
        try {
            StepLogger::append($file, [
                'type'     => 'upgrade',
                'task_key' => $upgradeKey,
                'step'     => $step,
                'name'     => self::UPGRADE_API_NAME[ $method ] ?? $method,
                'desc'     => $desc,
                'method'   => $method,
                'params'   => $params,
                'result'   => $result,
                'status'   => $status,
                'next'     => $next,
            ]);
        } catch (\Throwable $e) {
        }
    }

    /**
     * 记录某步骤执行成功，并写入下一步入口
     * @param string $step
     * @param array  $steps 升级步骤顺序（键名数组）
     */
    private function logUpgradeStepSuccess(string $step, array $steps)
    {
        $nextStep = $steps[ array_search($step, $steps) + 1 ] ?? '';
        $desc = $this->steps[ $step ][ 'title' ] ?? ( '执行升级步骤：' . $step );
        $this->upgradeLogStep($this->upgrade_task[ 'key' ], $step, self::API_UPGRADE_EXECUTE, $desc, [], [], 'success', [
            'method' => $nextStep ? self::API_UPGRADE_EXECUTE : '',
            'params' => []
        ]);
    }

    /**
     * 记录某步骤执行失败
     * @param string $step
     */
    private function logUpgradeStepFail(string $step)
    {
        $desc = $this->steps[ $step ][ 'title' ] ?? ( '执行升级步骤失败：' . $step );
        $this->upgradeLogStep($this->upgrade_task[ 'key' ], $step, self::API_UPGRADE_EXECUTE, $desc, [], [], 'fail', [
            'method' => self::API_UPGRADE_EXECUTE,
            'params' => []
        ]);
    }

    /**
     * 升级前环境检测
     * @param string $addon
     * @return array|array[]
     */
    public function upgradePreCheck(string $addon = '')
    {
        $niucloud_dir = $this->root_path . 'niucloud' . DIRECTORY_SEPARATOR;
        $upgrade_dir = $this->root_path . 'upgrade' . DIRECTORY_SEPARATOR;
        $admin_dir = $this->root_path . 'admin' . DIRECTORY_SEPARATOR;
        $web_dir = $this->root_path . 'web' . DIRECTORY_SEPARATOR;
        $wap_dir = $this->root_path . 'uni-app' . DIRECTORY_SEPARATOR;

        if (!is_dir($admin_dir)) throw new CommonException('ADMIN_DIR_NOT_EXIST');
        if (!is_dir($web_dir)) throw new CommonException('WEB_DIR_NOT_EXIST');
        if (!is_dir($wap_dir)) throw new CommonException('UNIAPP_DIR_NOT_EXIST');

        $data = [
            // 目录检测
            'dir' => [
                // 要求可读权限
                'is_readable' => [],
                // 要求可写权限
                'is_write' => []
            ]
        ];

        $data[ 'dir' ][ 'is_readable' ][] = [ 'dir' => str_replace(project_path(), '', $niucloud_dir), 'status' => is_readable($niucloud_dir) ];
        $data[ 'dir' ][ 'is_readable' ][] = [ 'dir' => str_replace(project_path(), '', $upgrade_dir), 'status' => is_readable($upgrade_dir) ];

        $data[ 'dir' ][ 'is_readable' ][] = [ 'dir' => str_replace(project_path(), '', $admin_dir), 'status' => is_readable($admin_dir) ];
        $data[ 'dir' ][ 'is_readable' ][] = [ 'dir' => str_replace(project_path(), '', $web_dir), 'status' => is_readable($web_dir) ];
        $data[ 'dir' ][ 'is_readable' ][] = [ 'dir' => str_replace(project_path(), '', $wap_dir), 'status' => is_readable($wap_dir) ];

        $data[ 'dir' ][ 'is_write' ][] = [ 'dir' => str_replace(project_path(), '', $niucloud_dir), 'status' => is_write($niucloud_dir) ];
        $data[ 'dir' ][ 'is_write' ][] = [ 'dir' => str_replace(project_path(), '', $upgrade_dir), 'status' => is_write($upgrade_dir) ];
        $data[ 'dir' ][ 'is_write' ][] = [ 'dir' => str_replace(project_path(), '', $admin_dir), 'status' => is_write($admin_dir) ];
        $data[ 'dir' ][ 'is_write' ][] = [ 'dir' => str_replace(project_path(), '', $web_dir), 'status' => is_write($web_dir) ];
        $data[ 'dir' ][ 'is_write' ][] = [ 'dir' => str_replace(project_path(), '', $wap_dir), 'status' => is_write($wap_dir) ];

        // 检测全部目录及文件是否可读可写，忽略指定目录

        // 忽略指定目录，admin
        $exclude_admin_dir = [ 'dist', 'node_modules', '.git', '.user.ini' ];
        $check_res = checkDirPermissions(project_path() . 'admin', [], $exclude_admin_dir);

        // 忽略指定目录，uni-app
        $exclude_uniapp_dir = [ 'dist', 'node_modules', '.git', '.user.ini' ];
        $check_res = array_merge2($check_res, checkDirPermissions(project_path() . 'uni-app', [], $exclude_uniapp_dir));

        // 忽略指定目录，web
        $exclude_web_dir = [ '.nuxt', '.output', 'dist', 'node_modules', '.git', '.user.ini' ];
        $check_res = array_merge2($check_res, checkDirPermissions(project_path() . 'web', [], $exclude_web_dir));

        // 忽略指定目录，niucloud
        $exclude_niucloud_dir = [
            'public' . DIRECTORY_SEPARATOR . 'admin',
            'public' . DIRECTORY_SEPARATOR . 'admin' . DIRECTORY_SEPARATOR .'niucloud.ico',
            'public' . DIRECTORY_SEPARATOR . 'wap',
            'public' . DIRECTORY_SEPARATOR . 'web',
            'public' . DIRECTORY_SEPARATOR . 'upload',
            'public' . DIRECTORY_SEPARATOR . 'file',
            'public' . DIRECTORY_SEPARATOR . 'favicon.ico',
            'runtime',
            'vendor',
            '.user.ini',
            '.git'
        ];
        $check_res = array_merge2($check_res, checkDirPermissions(project_path() . 'niucloud', [], $exclude_niucloud_dir));

        if (!empty($check_res[ 'unreadable' ])) {
            foreach ($check_res[ 'unreadable' ] as $item) {
                $data[ 'dir' ][ 'is_readable' ][] = [ 'dir' => str_replace(project_path(), '', $item), 'status' => false ];
            }
        }
        if (!empty($check_res[ 'not_writable' ])) {
            foreach ($check_res[ 'not_writable' ] as $item) {
                $data[ 'dir' ][ 'is_write' ][] = [ 'dir' => str_replace(project_path(), '', $item), 'status' => false ];
            }
        }

        $check_res = array_merge(
            array_column($data[ 'dir' ][ 'is_readable' ], 'status'),
            array_column($data[ 'dir' ][ 'is_write' ], 'status')
        );

        // 是否通过校验
        $data[ 'is_pass' ] = !in_array(false, $check_res);

        return $data;
    }

    /**
     * 升级
     * @param $addon
     * @return array
     */
    public function upgrade(string $addon = '', $data = [])
    {
        if ($this->upgrade_task) throw new CommonException('UPGRADE_TASK_EXIST');

        $upgrade_content = $this->getUpgradeContent($addon);
        if (empty($upgrade_content['content'])) throw new CommonException("NOT_EXIST_UPGRADE_CONTENT");

        // 过滤掉没有更新版本的插件
        $upgrade_content['content'] = array_values(array_filter(array_map(function ($item){
            if (!empty($item['version_list'])) return $item;
        }, $upgrade_content['content'])));
        if (empty($upgrade_content['content'])) throw new CommonException("NOT_EXIST_UPGRADE_CONTENT");

        $upgrade_content['upgrade_apps'] = [];
        foreach ($upgrade_content['content'] as $item) {
            if (!empty($item['app']['app_key'])) {
                $upgrade_content['upgrade_apps'][] = $item['app']['app_key'];
            }
        }

        $upgrade_title = '框架';

        $upgrade = [
            'product_key' => BaseNiucloudClient::PRODUCT,
            'framework_version' => config('version.version')
        ];

        $upgrade[ 'app_key' ] = $upgrade_content['content'][0]['app']['app_key'] ?? '';
        $upgrade[ 'version' ] = $upgrade_content['content'][0]['version'] ?? '';

        $response = ( new CoreAddonCloudService() )->upgradeAddon($upgrade);
        if (isset($response[ 'code' ]) && $response[ 'code' ] == 0) {
            $detail = $response[ 'data' ] ?? '';
            if (is_array($detail)) $detail = $detail[0] ?? '';
            if (is_array($detail)) $detail = json_encode($detail, JSON_UNESCAPED_UNICODE);
            throw new CommonException(trim(($response[ 'msg' ] ?? '') . ' ' . $detail));
        }

        $key = uniqid();
        $upgrade_dir = $this->upgrade_dir . $key . DIRECTORY_SEPARATOR;

        if (!is_dir($upgrade_dir)) {
            dir_mkdir($upgrade_dir);
        }

        // 是否需要备份
        $is_need_backup = $data['is_need_backup'] ?? true;
        if (!$is_need_backup) {
            unset($this->steps['backupCode']);
            unset($this->steps['backupSql']);
        }

        // 备份使用独立标识：sys_task.task_key 上有唯一索引（uk_task_key），
        // 备份记录不能与升级任务共用 key；归档目录也随之独立为 upgrade/{backup_key}/backup
        $backup_key = $is_need_backup ? uniqid() : '';

        try {
            $upgrade_task = [
                'key' => $key,
                'backup_key' => $backup_key,
                'upgrade' => $upgrade,
                'steps' => $this->steps,
                'step' => 'requestUpgrade',
                'executed' => [ 'requestUpgrade' ],
                'log' => [ $this->steps[ 'requestUpgrade' ][ 'title' ] ],
                'params' => [ 'app_key' => $upgrade[ 'app_key' ], 'token' => $response[ 'token' ] ],
                'upgrade_content' => $upgrade_content,
                'upgrade_apps' => $upgrade_content['upgrade_apps'],
                'is_need_backup' => $is_need_backup,
            ];

            foreach ($upgrade_content[ 'content' ] as $k => $v) {
                unset($upgrade_content[ 'content' ][ $k ][ 'version_list' ]);
            }

            // 记录升级日志
            ( new UpgradeRecordsService() )->add([
                'upgrade_key' => $upgrade_task[ 'key' ],
                'app_key' => $upgrade[ 'app_key' ],
                'name' => $upgrade_title,
                'content' => json_encode($upgrade_content),
                'prev_version' => "",
                'current_version' => "",
                'status' => UpgradeDict::STATUS_READY
            ]);

            Cache::set($this->cache_key, $upgrade_task);

            // 备份独立成一条任务记录（sys_task），与升级任务区分开，便于任务列表单独查看 / 恢复
            if ($backup_key !== '') $this->createBackupTask($backup_key, $key);

            // 记录升级第一步：请求升级
            $this->upgradeLogStep($key, 'requestUpgrade', self::API_UPGRADE, '请求升级并准备升级包', [
                'app_key' => $upgrade[ 'app_key' ] ?? '',
                'version' => $upgrade[ 'version' ] ?? ''
            ], [ 'upgrade_key' => $key ], 'success', [ 'method' => self::API_UPGRADE_EXECUTE, 'params' => [] ]);

            return $upgrade_task;
        } catch (\Exception $e) {
            throw new CommonException($e->getMessage());
        }
    }

    /**
     * 执行升级
     * @return true
     */
    public function execute()
    {
        if (!$this->upgrade_task) return true;

        $steps = isset($this->upgrade_task[ 'steps' ]) ? array_keys($this->upgrade_task[ 'steps' ]) : array_keys($this->steps);
        if (isset($this->upgrade_task[ 'steps' ])) $this->steps = $this->upgrade_task[ 'steps' ];
        $index = array_search($this->upgrade_task[ 'step' ], $steps);
        $step = $steps[ $index + 1 ] ?? '';
        $params = $this->upgrade_task[ 'params' ] ?? [];

        if ($step) {
            try {
                $res = $this->$step(...$params);

                if (is_array($res)) {
                    $this->upgrade_task[ 'params' ] = $res;
                } else {
                    $this->upgrade_task[ 'step' ] = $step;
                    $this->upgrade_task[ 'params' ] = [];
                    $this->upgrade_task[ 'executed' ][] = $step;
                    if (!empty($this->steps[ $step ][ 'title' ])) {
                        $this->upgrade_task[ 'log' ][] = $this->steps[ $step ][ 'title' ];
                    }
                    // 步骤执行完成（非分片中间态），记录成功步骤
                    $this->logUpgradeStepSuccess($step, $steps);
                }
                if (!in_array($step, [ 'upgradeComplete', 'restoreComplete' ])) {
                    Cache::set($this->cache_key, $this->upgrade_task);
                }
            } catch (CloudBuildException $e) {
                if (strpos($e->getMessage(), '队列') !== false) {
                    throw new CloudBuildException($e->getMessage());
                }
                $this->upgrade_task[ 'step' ] = $step;
                $this->logUpgradeStepFail($step);
                $this->upgrade_task[ 'error' ][] = '升级失败，失败原因：' . $e->getMessage() . $e->getFile() . $e->getLine();

                $fail_reason = [
                    'Message' => '失败原因：' . $e->getMessage(),
                    'File' => '文件：' . $e->getFile(),
                    'Line' => '代码行号：' . $e->getLine(),
                    'Trace' => $e->getTrace()
                ];
                $this->upgradeErrorHandle($fail_reason);
            } catch (\Exception $e) {
                $this->upgrade_task[ 'step' ] = $step;
                $this->logUpgradeStepFail($step);
                $this->upgrade_task[ 'error' ][] = '升级失败，失败原因：' . $e->getMessage() . $e->getFile() . $e->getLine();
                $fail_reason = [
                    'Message' => '失败原因：' . $e->getMessage(),
                    'File' => '文件：' . $e->getFile(),
                    'Line' => '代码行号：' . $e->getLine(),
                    'Trace' => $e->getTrace()
                ];
                $this->upgradeErrorHandle($fail_reason);
            }
            return true;
        } else {
            return true;
        }
    }

    /**
     * 下载升级文件
     * @param string $token
     * @param string $dir
     * @param int $index
     * @param $step
     * @return true|null
     */
    public function downloadFile(string $app_key, string $token, string $dir = '', int $index = -1, $step = 0, $length = 0)
    {
        if (!$dir) {
            $dir = $this->upgrade_dir . $this->upgrade_task[ 'key' ] . DIRECTORY_SEPARATOR . 'download' . DIRECTORY_SEPARATOR . $app_key . DIRECTORY_SEPARATOR;
            dir_mkdir($dir);
        }
        $res = ( new CoreAddonCloudService() )->downloadUpgradeFile($app_key, $token, $dir, $index, $step, $length);

        // 记录下载进度（分片下载）：供任务步骤按应用展开子步骤并渲染进度条
        $this->recordDownloadProgress($app_key, $res);

        if ($res === true) {
            $index = array_search($app_key, $this->upgrade_task['upgrade_apps']);
            if ($app_key == AddonDict::FRAMEWORK_KEY) {
                $this->upgrade_task['log'][] = "下载更新文件";
            } else {
                $app_name = $this->upgrade_task['upgrade_content']['content'][$index]['app']['app_name'] ?? $app_key;
                $this->upgrade_task['log'][] = "下载". $app_name ."更新文件";
            }
            $index++;
            if (isset($this->upgrade_task['upgrade_apps'][$index])) {
                $upgrade = [
                    'product_key' => BaseNiucloudClient::PRODUCT,
                    'framework_version' => config('version.version'),
                    'app_key' => $this->upgrade_task['upgrade_content']['content'][$index]['app']['app_key'] ?? '',
                    'version' => $this->upgrade_task['upgrade_content']['content'][$index]['version'] ?? ''
                ];
                $response = ( new CoreAddonCloudService() )->upgradeAddon($upgrade);
                if (isset($response[ 'code' ]) && $response[ 'code' ] == 0) {
                    $detail = $response[ 'data' ] ?? '';
                    if (is_array($detail)) $detail = $detail[0] ?? '';
                    if (is_array($detail)) $detail = json_encode($detail, JSON_UNESCAPED_UNICODE);
                    throw new CommonException(trim(($response[ 'msg' ] ?? '') . ' ' . $detail));
                }

                return ['app_key' => $upgrade[ 'app_key' ], 'token' => $response[ 'token' ]];
            }
        }
        return $res;
    }

    /**
     * 记录升级包下载进度
     *
     * 分片下载时 downloadUpgradeFile() 回传新的 index（已完成分片数）/ step（总分片数）/ length（总字节数），
     * 这里落到 upgrade_task.download，由 UpgradeTaskHandler 上报为「下载升级包」步骤的进度。
     * 同时每 10% 追加一条日志——按分片输出会把执行输出刷满（1MB 一片）。
     *
     * @param string $app_key 当前正在下载的应用标识（用于展开「每个应用一个子步骤」）
     * @param array|bool $res downloadUpgradeFile 的返回值
     * @return void
     */
    protected function recordDownloadProgress(string $app_key, $res): void
    {
        $total  = is_array($res) ? (int) ( $res[ 'step' ] ?? 0 ) : 0;
        $length = is_array($res) ? (int) ( $res[ 'length' ] ?? 0 ) : 0;

        // 下载结束（true）或切换到下一个应用（返回值只有 app_key / token）时清理，
        // 否则下一个应用会沿用上一个应用已推进到的百分比
        if ($total <= 0 || $length <= 0) {
            unset($this->upgrade_task[ 'download' ], $this->upgrade_task[ 'download_percent' ]);
            return;
        }

        $done = max(0, (int) ( $res[ 'index' ] ?? 0 ));

        $this->upgrade_task[ 'download' ] = [
            'app_key' => $app_key,
            'index'   => $done,
            'step'    => $total,
            'length'  => $length,
            'current' => min($done * self::DOWNLOAD_CHUNK_SIZE, $length)
        ];

        // 这里不再往 log 追加「下载 xx%」文本行：终端会把带「下载 + N%」的文本
        // 按云编译的启发式规则渲染成「编译产物下载」进度条，造成误标。
        // 下载进度改由 UpgradeTaskHandler 以结构化 progress 事件下发。
    }

    /**
     * 字节格式化
     * @param int $bytes
     * @return string
     */
    public static function formatBytes(int $bytes): string
    {
        $units = [ 'B', 'KB', 'MB', 'GB', 'TB' ];
        $bytes = max($bytes, 0);
        $power = $bytes > 0 ? min((int) floor(log($bytes, 1024)), count($units) - 1) : 0;

        return ( $power === 0 ? (string) $bytes : number_format($bytes / pow(1024, $power), 2) ) . ' ' . $units[ $power ];
    }

    /**
     * 备份源码
     *
     * 复用备份任务的「按根目录分片 + 可续跑复制」实现（BackupRecordsService）：
     * 原先一次请求内复制 admin / uni-app / web / niucloud 四个目录，耗时不可控，
     * 且步骤内没有任何进度——总进度条会一直停在上一阶段（表现为「还在下载那一步」）。
     * 改为每次 run 推进一个目录，复制进度落在 upgrade_task.backup_code，
     * 供任务步骤按目录展开子步骤并实时反映进度。
     *
     * @param int $index 分片序号（实际进度以 backup_code 状态为准，与 backupSql 同口径）
     * @return array|true
     */
    public function backupCode($index = 0)
    {
        $state    = (array) ( $this->upgrade_task[ 'backup_code' ] ?? [] );
        $finished = ( new BackupRecordsService() )->backupCode($this->backupKey(), $state);

        $this->upgrade_task[ 'backup_code' ] = $state;

        if ($finished === true) return true;

        // 未完成：保持当前步骤，等待下一次 run 驱动
        return [ 'index' => (int) ( $state[ 'code_root_index' ] ?? 0 ) ];
    }

    /**
     * 备份数据库
     * @return true
     */
    public function backupSql($index = 0)
    {
        // 备份归档目录随备份任务独立：upgrade/{backup_key}/backup/sql
        $backup_dir = $this->upgrade_dir . $this->backupKey() . DIRECTORY_SEPARATOR . 'backup' . DIRECTORY_SEPARATOR . 'sql' . DIRECTORY_SEPARATOR;
        // 创建目录
        dir_mkdir($backup_dir);

        $db = new DbBackup($backup_dir, 1024 * 1024 * 2, key: $this->upgrade_task[ 'key' ]);

        $prefix = config('database.connections.' . config('database.default'))[ 'prefix' ];

        // 不需要备份的表
        $not_need_backup = [
            "{$prefix}sys_schedule_log",
            "{$prefix}sys_user_log",
            "{$prefix}jobs",
            "{$prefix}jobs_failed",
            "{$prefix}sys_upgrade_records",
            "{$prefix}sys_backup_records"
        ];

        $result = $db->setExcludeTables($not_need_backup)->backupDatabaseSegment();

        $percent = (int) $db->getBackupProgress();
        if ($percent == 100) {
            $this->upgrade_task[ 'log' ][] = "数据库备份完成";
        } else {
            $this->upgrade_task[ 'log' ][] = $percent == 0 ? '数据库开始备份' : '数据库备份已备份'. $percent . '%';
        }

        // 供任务步骤渲染数据库备份进度
        $this->upgrade_task[ 'backup_sql' ] = [ 'percent' => $percent ];

        if ($result === true) {
            // 源码 + 数据库均备份完成：备份任务记录置为成功
            $this->completeBackupTask();

            // 同步落一条备份记录：backup_key 用备份任务标识（与归档目录同名），
            // 升级产生的备份归为「自动备份」
            ( new BackupRecordsService() )->finishBackup([
                'key'     => $this->backupKey(),
                'mode'    => BackupRecordsService::MODE_BACKUP,
                'content' => '自动备份'
            ]);

            // 备份完成即回写升级记录：即便后续升级失败（走不到 upgradeComplete），
            // 升级记录也能关联到本次产生的备份
            ( new UpgradeRecordsService() )->setBackupKey((string) ( $this->upgrade_task[ 'key' ] ?? '' ), $this->backupKey());

            return true;
        }
        return ['index' => $result];
    }

    /**
     * 本次备份的归档标识（备份任务在 sys_task 中的 task_key）
     *
     * 早期任务没有 backup_key 字段，回退到升级任务 key，保证在途任务不受影响。
     * @return string
     */
    protected function backupKey(): string
    {
        return (string) ( $this->upgrade_task[ 'backup_key' ] ?? $this->upgrade_task[ 'key' ] ?? '' );
    }

    /**
     * 把「本次升级实际使用的备份」写回升级记录
     *
     * 两种情况（与 restoreCode / restoreSql 的取备份口径保持一致）：
     * - 本次勾选了备份：使用本次产生的备份（backup_key 即备份任务标识）
     * - 未勾选备份：本次没有新备份，回滚 / 恢复都基于最近一次备份（upgrade_content.last_backup）
     *
     * 这样升级记录与备份记录指向同一个标识，列表展示的备份路径与可删除的备份都准确。
     *
     * @return void
     */
    protected function syncBackupKey(): void
    {
        $upgradeKey = (string) ( $this->upgrade_task[ 'key' ] ?? '' );
        if ($upgradeKey === '') return;

        $isNeedBackup = !isset($this->upgrade_task[ 'is_need_backup' ]) || !empty($this->upgrade_task[ 'is_need_backup' ]);
        $backupKey    = '';

        if ($isNeedBackup) {
            // 只取本次备份任务的标识：不能用 backupKey() 的回退值（旧结构缓存下它会回退成升级任务标识，
            // 导致升级记录把 upgrade_key 当成备份标识写入，与备份记录对不上）
            $backupKey = (string) ( $this->upgrade_task[ 'backup_key' ] ?? '' );

            // 二次确认：备份任务记录确实存在（避免备份未真正产生时写入无效标识）
            if ($backupKey !== '') {
                try {
                    $exists = Db::name('sys_task')
                        ->where([ [ 'task_key', '=', $backupKey ], [ 'task_type', '=', TaskDict::TYPE_BACKUP ] ])
                        ->count();
                    if ($exists <= 0) $backupKey = '';
                } catch (\Throwable $e) {
                    $backupKey = '';
                }
            }
        }

        // 未备份（或备份未生成）：沿用最近一次备份
        if ($backupKey === '') {
            $backupKey = (string) ( $this->upgrade_task[ 'upgrade_content' ][ 'last_backup' ][ 'backup_key' ] ?? '' );
        }

        ( new UpgradeRecordsService() )->setBackupKey($upgradeKey, $backupKey);
    }

    /**
     * 为本次升级的备份创建一条独立的任务记录（sys_task）
     *
     * sys_task.task_key 有唯一索引，备份不能复用升级任务的 key，因此独立生成；
     * 归档目录随之独立为 upgrade/{backup_key}/backup，产物查看与恢复都能定位到真实归档。
     *
     * @param string $backup_key 备份任务标识
     * @param string $upgrade_key 所属升级任务标识
     * @return void
     */
    protected function createBackupTask(string $backup_key, string $upgrade_key): void
    {
        if ($backup_key === '') return;

        try {
            $siteId = (int) request()->siteId();
        } catch (\Throwable $e) {
            $siteId = 0;
        }

        $now = time();

        Db::name('sys_task')->insert([
            'site_id'     => $siteId,
            'task_key'    => $backup_key,
            'parent_key'  => $upgrade_key,
            'task_type'   => TaskDict::TYPE_BACKUP,
            'title'       => '升级前自动备份',
            'status'      => TaskDict::STATUS_RUNNING,
            'end_reason'  => '',
            'progress'    => 0,
            'stage'       => '等待备份',
            'cursor'      => '',
            // mode=backup：与手动备份一致，任务列表据此开放「恢复」入口
            'params'      => json_encode([ 'mode' => 'backup', 'from' => 'upgrade', 'upgrade_key' => $upgrade_key ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES),
            'actions'     => json_encode([], JSON_UNESCAPED_UNICODE),
            'fail_reason' => '',
            'log_size'    => 0,
            'start_time'  => $now,
            'end_time'    => 0,
            'create_time' => $now
        ]);
    }

    /**
     * 标记备份任务记录完成（源码 + 数据库均备份完成）
     * @return void
     */
    protected function completeBackupTask(): void
    {
        $backup_key = $this->backupKey();
        if ($backup_key === '') return;

        $now = time();

        Db::name('sys_task')
            ->where([ [ 'task_key', '=', $backup_key ], [ 'task_type', '=', TaskDict::TYPE_BACKUP ] ])
            ->update([
                'status'      => TaskDict::STATUS_SUCCESS,
                'end_reason'  => TaskDict::END_REASON_COMPLETED,
                'progress'    => 100,
                'stage'       => '备份完成',
                'end_time'    => $now
            ]);
    }

    /**
     * 覆盖更新升级的代码
     * @return array|true
     */
    public function coverCode($index = 0, $addon = "")
    {
        $this->upgrade_task[ 'is_cover' ] = 1;
        if (empty($addon)) $addon = $this->upgrade_task['upgrade_apps'][0];

        $app_index = array_search($addon, $this->upgrade_task['upgrade_apps']);

        $version_list = array_reverse($this->upgrade_task[ 'upgrade_content' ]['content'][$app_index][ 'version_list' ]);
        $code_dir = $this->upgrade_dir . $this->upgrade_task[ 'key' ] . DIRECTORY_SEPARATOR . 'download' . DIRECTORY_SEPARATOR . $addon . DIRECTORY_SEPARATOR . 'code' . DIRECTORY_SEPARATOR;

        $version_item = $version_list[ $index ];
        $version_no = $version_item[ 'version_no' ];

        $to_dir = $addon == AddonDict::FRAMEWORK_KEY ? rtrim($this->root_path, DIRECTORY_SEPARATOR) : $this->root_path . 'niucloud' . DIRECTORY_SEPARATOR . 'addon' . DIRECTORY_SEPARATOR . $addon;

        // 获取文件变更记录（每行：操作 md5 相对路径，如 "- 57334dd7... admin/src/app/components/cloud-build/index.vue"；
        // 路径相对站点根目录且不带前导分隔符）
        if (file_exists($code_dir . $version_no . '.txt')) {
            $change = array_filter(explode("\n", file_get_contents($code_dir . $version_no . '.txt')));
            $removed = 0;
            $remove_failed = [];
            foreach ($change as $item) {
                $parts = explode(' ', trim($item));
                if (count($parts) < 3) continue;
                [ $operation, , $file ] = $parts;
                if ($operation != '-') continue;

                // 原实现是 @unlink($to_dir . $file)：$to_dir 已被 rtrim 掉结尾分隔符、记录里的路径
                // 也没有前导 '/'，拼出来是「站点根 + 相对路径」缺分隔符的错误路径，且失败被 @ 静默吞掉
                // —— 2.0.2 -> 2.1.0 的 489 条删除因此全部失效。这里统一解析路径（兼容前导分隔符）、
                // 目录递归删除，并把删除结果写进升级日志。
                $path = $this->resolveUpgradePath($to_dir, $file);
                if ($path === '' || (!file_exists($path) && !is_link($path))) continue;

                if ($this->removeUpgradePath($path)) {
                    $removed++;
                } else {
                    $remove_failed[] = $file;
                }
            }

            // 只写 log：写 error 会被判定为升级失败并进入回滚流程，而个别文件删不掉不应中断升级
            if ($removed > 0) {
                $this->upgrade_task['log'][] = "按变更记录删除已移除文件 {$removed} 个";
            }
            if (!empty($remove_failed)) {
                $this->upgrade_task['log'][] = '以下已移除文件未能自动删除，请手动清理：'
                    . implode('、', array_slice($remove_failed, 0, 5))
                    . (count($remove_failed) > 5 ? ' 等 ' . count($remove_failed) . ' 个' : '');
                Log::write('升级删除已移除文件失败：' . implode(', ', $remove_failed));
            }
        }

        // 覆盖文件
        if (is_dir($code_dir . $version_no)) {
            // 忽略环境变量文件
            $exclude_files = [ '.env.development', '.env.production', '.env', '.env.dev', '.env.product', 'favicon.ico', 'niucloud.ico' ];
            dir_copy($code_dir . $version_no, $to_dir, exclude_files: $exclude_files);
            if ($addon != AddonDict::FRAMEWORK_KEY) {
                ( new CoreAddonInstallService($addon) )->installDir();
            }
        } else {
            // 不能静默跳过：包目录缺失（下载/解压异常或打包结构与约定不符）时，
            // 下面的 SQL、升级脚本、插件静态资源同步也可能一并落空，必须留痕
            $this->upgrade_task[ 'log' ][] = "升级包中未找到版本 {$version_no} 的源码目录，跳过文件覆盖";
            Log::write("升级包中未找到版本 {$version_no} 的源码目录：{$code_dir}{$version_no}");
        }

        $upgrade_file_dir = 'v' . str_replace('.', '', $version_no);
        if ($addon == AddonDict::FRAMEWORK_KEY) {
            $class_path = "\\app\\upgrade\\{$upgrade_file_dir}\\Upgrade";
            $sql_file = root_path() . 'app' . DIRECTORY_SEPARATOR . 'upgrade' . DIRECTORY_SEPARATOR . $upgrade_file_dir . DIRECTORY_SEPARATOR . 'upgrade.sql';
        } else {
            $class_path = "\\addon\\{$addon}\\app\\upgrade\\{$upgrade_file_dir}\\Upgrade";
            $sql_file = root_path() . 'addon' . DIRECTORY_SEPARATOR . $addon . DIRECTORY_SEPARATOR . 'app' . DIRECTORY_SEPARATOR . 'upgrade' . DIRECTORY_SEPARATOR . $upgrade_file_dir . DIRECTORY_SEPARATOR . 'upgrade.sql';
        }

        // 执行升级sql
        if (file_exists($sql_file)) {
            $this->executeSql($sql_file);
        }

        // 执行升级方法
        if (class_exists($class_path)) {
            ( new $class_path() )->handle();
        }

        // 该版本的源码目录、变更记录、SQL、升级脚本全部不存在时，说明这个版本什么都没更新。
        // 旧实现会一路静默走完并把升级记录置为完成，站点变成「版本号是新的、代码是旧的」，
        // 之后再点升级云端也不会重新下发该包，只能手工处理，因此这里直接判失败触发回滚。
        if (!is_dir($code_dir . $version_no)
            && !file_exists($code_dir . $version_no . '.txt')
            && !file_exists($sql_file)
            && !class_exists($class_path)) {
            throw new CommonException("升级包中未找到版本 {$version_no} 的任何更新内容，请重新发起升级");
        }

        $index++;
        if ($index < count($version_list)) {
            return compact('index', 'addon');
        } else {
            $app_index++;
            if (isset($this->upgrade_task['upgrade_apps'][$app_index])) {
                return ['index' => 0, 'addon' => $this->upgrade_task['upgrade_apps'][$app_index]];
            }
            return true;
        }
    }

    /**
     * 升级包文件变更记录中的相对路径 => 绝对路径
     *
     * 记录里的路径相对目标目录且不带前导分隔符（如记录为 admin/src/app/xxx.vue），
     * 而 $baseDir 一般是 rtrim 掉结尾分隔符的路径，直接字符串拼接会得到缺分隔符的错误路径
     * （历史实现正是因此导致变更记录里的删除全部静默失效）。
     *
     * @param string $baseDir
     * @param string $relativePath
     * @return string
     */
    private function resolveUpgradePath(string $baseDir, string $relativePath): string
    {
        $base = rtrim($baseDir, '/\\');
        $relative = ltrim(str_replace([ '/', '\\' ], DIRECTORY_SEPARATOR, $relativePath), DIRECTORY_SEPARATOR);

        if ($base === '' || $relative === '') return '';

        return $base . DIRECTORY_SEPARATOR . $relative;
    }

    /**
     * 删除文件或目录（目录递归删除）
     * @param string $path
     * @return bool 目标是否已不存在
     */
    private function removeUpgradePath(string $path): bool
    {
        if ($path === '') return true;

        if (is_dir($path)) {
            del_target_dir($path, true);
        } elseif (file_exists($path) || is_link($path)) {
            @unlink($path);
        }

        clearstatcache();
        return !file_exists($path) && !is_link($path);
    }

    /**
     * 合并依赖
     * @param string $version_no
     * @return void
     */
    public function installDepend()
    {
        $depend_service = new CoreDependService();
        $addon_list = ( new CoreAddonService() )->getInstallAddonList();

        $composer = 'niucloud'. DIRECTORY_SEPARATOR .'composer.json';
        $admin_package = 'admin'. DIRECTORY_SEPARATOR .'package.json';
        $web_package = 'web'. DIRECTORY_SEPARATOR .'package.json';
        $uniapp_package = 'uni-app'. DIRECTORY_SEPARATOR .'package.json';

        $composer_original = $depend_service->getComposerContent();
        $admin_original = $depend_service->getNpmContent('admin');
        $web_original = $depend_service->getNpmContent('web');
        $uni_app_original = $depend_service->getNpmContent('uni-app');

        foreach ($addon_list as $addon => $item) {
            $new = $depend_service->jsonFileToArray($this->geAddonPackagePath($addon) . 'composer.json');
            if (!empty($new)) {
                foreach ($new as $name => $value) {
                    $composer_original[ $name ] = isset($composer_original[ $name ]) && is_array($composer_original[ $name ]) ? array_map('unserialize', array_unique(array_map('serialize', array_merge($composer_original[ $name ], $new[ $name ])))) : $new[ $name ];
                }
            }

            $new = $depend_service->jsonFileToArray($this->geAddonPackagePath($addon) . 'admin-package.json');
            if (!empty($new)) {
                foreach ($new as $name => $value) {
                    $admin_original[ $name ] = isset($admin_original[ $name ]) && is_array($admin_original[ $name ]) ? array_merge($admin_original[ $name ], $new[ $name ]) : $new[ $name ];
                }
            }

            $new = $depend_service->jsonFileToArray($this->geAddonPackagePath($addon) . 'web-package.json');
            if (!empty($new)) {
                foreach ($new as $name => $value) {
                    $web_original[ $name ] = isset($web_original[ $name ]) && is_array($web_original[ $name ]) ? array_merge($web_original[ $name ], $new[ $name ]) : $new[ $name ];
                }
            }

            $new = $depend_service->jsonFileToArray($this->geAddonPackagePath($addon) . 'uni-app-package.json');
            if (!empty($new)) {
                foreach ($new as $name => $value) {
                    $uni_app_original[ $name ] = isset($uni_app_original[ $name ]) && is_array($uni_app_original[ $name ]) ? array_merge($uni_app_original[ $name ], $new[ $name ]) : $new[ $name ];
                }
            }
        }
        $depend_service->writeArrayToJsonFile($composer_original, $this->root_path . $composer);
        $depend_service->writeArrayToJsonFile($admin_original, $this->root_path . $admin_package);
        $depend_service->writeArrayToJsonFile($web_original, $this->root_path . $web_package);
        $depend_service->writeArrayToJsonFile($uni_app_original, $this->root_path . $uniapp_package);

        (new CoreAddonInstallService(''))->rebuildPublicAdminAddonIndexJson();
        (new CoreAddonInstallService(''))->rebuildPublicWapAddonIndexJson();

        // 主线：上面的合并只处理「插件依赖」，框架自身新增的依赖没有任何路径补进老站点，
        // 这里按框架基准再补一次（只补缺失键，不覆盖站点已有版本）
        $this->mergeFrameworkDepend();
    }

    /**
     * 合并框架自身的 npm 依赖基准，并把结果写入升级日志
     *
     * 升级包只覆盖前端源码、不带 package.json 时，站点会出现「源码是新的、依赖清单是旧的」混合态：
     * 云编译 npm install 成功，但 npm run build 报 `Rollup failed to resolve import "xxx"`
     * （线上真实案例：v-code-diff）。这里补齐缺失键，并提示用户执行 npm install。
     * 补丁（sys_framework_patch）走的是「下载附件自行覆盖」，没有服务端落盘入口，
     * 因此补丁后由「云编译前校验」兜底，不在此处挂钩。
     *
     * @return void
     */
    protected function mergeFrameworkDepend(): void
    {
        try {
            $merged = ( new CoreDependService() )->mergeAllFrameworkDepend();
        } catch (\Throwable $e) {
            $this->upgrade_task[ 'log' ][] = '框架依赖合并失败：' . $e->getMessage();
            return;
        }

        $need_install = false;

        foreach ($merged as $item) {
            if (!empty($item[ 'error' ])) {
                $this->upgrade_task[ 'log' ][] = $item[ 'name' ] . ' 依赖写入失败：' . $item[ 'error' ];
                continue;
            }

            if (!empty($item[ 'added' ])) {
                $need_install = true;
                $added = [];
                foreach ($item[ 'added' ] as $name => $version) {
                    $added[] = $name . '@' . $version;
                }
                $this->upgrade_task[ 'log' ][] = $item[ 'name' ] . '补入框架依赖：' . implode('、', $added);
            }

            // 站点自定义 / 手工降级的版本一律不动，只提示，避免把用户改动冲掉
            if (!empty($item[ 'conflicts' ])) {
                $conflicts = [];
                foreach ($item[ 'conflicts' ] as $name => $version) {
                    $conflicts[] = sprintf('%s（站点 %s / 框架 %s）', $name, $version[ 'site' ], $version[ 'framework' ]);
                }
                $this->upgrade_task[ 'log' ][] = $item[ 'name' ] . '以下依赖版本与框架基准不一致，已保留站点版本：' . implode('、', $conflicts);
            }
        }

        if ($need_install) {
            $this->upgrade_task[ 'log' ][] = '请在 admin、uni-app、web 目录下执行 npm install 更新依赖后再进行云编译';
        }
    }

    /**
     * 处理手机端
     * @return true
     */
    public function handleUniapp()
    {
        // uni-app 源码随「框架」升级包下发，不能用 end($this->upgrade_task['upgrade_apps'])：
        // 一次同时升级框架 + 插件时，end() 取到的是最后一个插件的 key，拼出的
        // download/{插件}/code/uni-app 并不存在，而 dir_copy() 对不存在的源目录是静默
        // 返回 false 的——表现为升级全流程成功，但站点 uni-app 源码没有任何更新。
        $code_dir = $this->upgrade_dir . $this->upgrade_task[ 'key' ] . DIRECTORY_SEPARATOR . 'download' . DIRECTORY_SEPARATOR . AddonDict::FRAMEWORK_KEY . DIRECTORY_SEPARATOR . 'code' . DIRECTORY_SEPARATOR;

        $uniapp_src = $this->resolveUniappSourceDir($code_dir);
        if ($uniapp_src === '') {
            // 本次没有框架升级包（或升级包未携带 uni-app 源码）时跳过，但要留痕，避免再次静默
            $this->upgrade_task[ 'log' ][] = '升级包中未找到 uni-app 源码，已跳过源码覆盖';
            Log::write('升级包中未找到 uni-app 源码：' . $code_dir);
        } else {
            $exclude_files = [ '.env.development', '.env.production', 'manifest.json' ];
            dir_copy($uniapp_src, $this->root_path . 'uni-app', exclude_files: $exclude_files);
            $this->upgrade_task[ 'log' ][] = '覆盖 uni-app 源码（来源：' . str_replace($this->upgrade_dir, '', $uniapp_src) . '）';
        }

        $addon_list = ( new CoreAddonService() )->getInstallAddonList();

        if (!empty($addon_list)) {

            foreach ($addon_list as $addon => $item) {
                $this->addon = $addon;

                // 编译 pages.json 页面路由代码文件
                $this->installPageCode($this->root_path . 'uni-app' . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR);

                // 编译 加载插件标题语言包
                $this->compileLocale($this->root_path . 'uni-app' . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR, $addon);
            }
        }

        $map = ( new ConfigService() )->getMap();
        ( new CoreH5Service() )->mapKeyChange($map[ 'key' ]);

        return true;
    }

    /**
     * 定位升级包中的 uni-app 源码目录
     *
     * 兼容多种打包结构（大小写、连字符、下划线都做过归一化）：
     * 1. code/uni-app                                （uni-app 单独打包）
     * 2. code/{version_no}/uni-app                   （uni-app 打在版本目录内）
     * 3. 其它层级布局：递归向下找任意 uni-app 目录（最多 3 层）
     *
     * 都找不到时把 code 目录内容写进升级日志，便于确认升级包实际结构。
     *
     * @param string $code_dir 解压后的 code 目录（框架升级包）
     * @return string 源码目录绝对路径，未找到返回空串
     */
    private function resolveUniappSourceDir(string $code_dir): string
    {
        if (!is_dir($code_dir)) return '';

        // 兼容 uni-app / uniapp / UniApp / uni_app 等命名
        $names = [ 'uni-app', 'uniapp', 'UniApp', 'uni_app' ];

        // 结构一：code/uni-app
        foreach ($names as $name) {
            if (is_dir($code_dir . $name)) {
                return rtrim($code_dir . $name, '/\\');
            }
        }

        // 结构二：code/{version_no}/uni-app（按升级顺序取最新的版本目录）
        $app_index = array_search(AddonDict::FRAMEWORK_KEY, (array) ( $this->upgrade_task[ 'upgrade_apps' ] ?? [] ));
        if ($app_index !== false) {
            $version_list = $this->upgrade_task[ 'upgrade_content' ][ 'content' ][ $app_index ][ 'version_list' ] ?? [];

            foreach (array_reverse((array) $version_list) as $item) {
                $version_no = $item[ 'version_no' ] ?? '';
                if ($version_no === '') continue;

                foreach ($names as $name) {
                    $dir = $code_dir . $version_no . DIRECTORY_SEPARATOR . $name;
                    if (is_dir($dir)) return rtrim($dir, '/\\');
                }
            }
        }

        // 结构三：打包层级与预期不一致时，递归兜底查找
        $found = $this->findUniappDir($code_dir, 1, 3);
        if ($found !== '') return $found;

        // 仍未找到：把 code 目录内容写进日志，便于线上确认包结构
        $this->upgrade_task[ 'log' ][] = '升级包 code 目录内容：' . $this->listUpgradeDirs($code_dir);
        Log::write('升级包中未找到 uni-app 源码，code 目录内容：' . $this->listUpgradeDirs($code_dir));

        return '';
    }

    /**
     * 递归查找 uni-app 源码目录
     * @param string $dir
     * @param int $depth 当前深度
     * @param int $max_depth 最大深度
     * @return string
     */
    private function findUniappDir(string $dir, int $depth, int $max_depth): string
    {
        if ($depth > $max_depth) return '';

        $items = @scandir($dir);
        if (empty($items)) return '';

        foreach ($items as $item) {
            if ($item === '.' || $item === '..') continue;

            $path = rtrim($dir, '/\\') . DIRECTORY_SEPARATOR . $item;
            if (!is_dir($path)) continue;

            if (strtolower(str_replace([ '-', '_' ], '', $item)) === 'uniapp') {
                return $path;
            }

            $found = $this->findUniappDir($path, $depth + 1, $max_depth);
            if ($found !== '') return $found;
        }

        return '';
    }

    /**
     * 列出目录下的条目（用于升级日志定位包结构）
     * @param string $dir
     * @return string
     */
    private function listUpgradeDirs(string $dir): string
    {
        $items = @scandir($dir);
        if (empty($items)) return '（空或不可读）';

        $list = [];
        foreach ($items as $item) {
            if ($item === '.' || $item === '..') continue;

            $path = rtrim($dir, '/\\') . DIRECTORY_SEPARATOR . $item;
            $list[] = $item . (is_dir($path) ? '/' : '');
            if (count($list) >= 20) {
                $list[] = '...';
                break;
            }
        }

        return implode(', ', $list);
    }

    /**
     * 执行升级sql
     * @param string $sql_file
     * @return true
     */
    private function executeSql(string $sql_file)
    {
        $sql_content = file_get_contents($sql_file);

        if (!empty($sql_content)) {
            $prefix = config('database.connections.mysql.prefix');
            $sql_data = array_filter($this->getSqlQuery($sql_content));

            if (!empty($sql_data)) {
                try {
                    $default_collation = Db::query("SHOW VARIABLES LIKE 'collation_database'")[0]['Value'] ?? 'utf8mb4_general_ci';
                } catch (\Exception $e) {
                    $default_collation = 'utf8mb4_general_ci';
                }
                foreach ($sql_data as $sql) {
                    $sql = $prefix ? $this->handleSqlPrefix($sql, $prefix) : $sql;
                    // 处理成默认排序规则
                    $sql = preg_replace_callback(
                        '/\bCOLLATE\s*(=)?\s*[`"\']?([a-zA-Z0-9_]+)[`"\']?/i',
                        function ($matches) use ($default_collation) {
                            return "COLLATE " . $default_collation;
                        },
                        $sql
                    );
                    // 判断是否是新增字段
                    $pattern = '/^ALTER\s+TABLE\s+(`?)(\w+)\1\s+ADD(?:\s+COLUMN)?\s+(`?)(\w+)\3\s+/i';
                    if (preg_match($pattern, $sql, $matches)) {
                        if (!$this->columnExists($matches[2],  $matches[4])) {
                            Db::query($sql);
                        }
                    }else{
                        Db::query($sql);
                    }
                }
            }
        }
        return true;
    }

    /**
     * 判断数据表中某个字段是否存在
     *
     * @param string $table 表名（不带前缀）
     * @param string $column 字段名
     * @param string|null $database 指定数据库名（可选，默认当前连接的数据库）
     * @return bool
     */
    private function columnExists(string $table, string $column, ?string $database = null): bool
    {
        $db = env('database.database', '');

        $count = Db::query(
            "SELECT COUNT(*) AS cnt FROM information_schema.COLUMNS 
         WHERE table_schema = ? AND table_name = ? AND column_name = ?",
            [$db, $table, $column]
        );

        return (int)$count[0]['cnt'] > 0;
    }

    /**
     * 刷新菜单
     * @return array|true
     */
    public function refreshMenu($addon = "")
    {
        if (empty($addon)) $addon = $this->upgrade_task['upgrade_apps'][0];
        $app_index = array_search($addon, $this->upgrade_task['upgrade_apps']);

        if ($addon == AddonDict::FRAMEWORK_KEY) {
            ( new InstallSystemService() )->installMenu();
        } else {
            ( new CoreMenuService() )->refreshAddonMenu($addon);
        }

        $app_index++;
        if (isset($this->upgrade_task['upgrade_apps'][$app_index])) {
            return ['addon' => $this->upgrade_task['upgrade_apps'][$app_index]];
        }
        return true;
    }

    /**
     * 安装计划任务
     * @return true
     */
    public function installSchedule($addon = "")
    {
        if (empty($addon)) $addon = $this->upgrade_task['upgrade_apps'][0];
        $app_index = array_search($addon, $this->upgrade_task['upgrade_apps']);

        if ($addon == AddonDict::FRAMEWORK_KEY) {
            ( new CoreScheduleInstallService() )->installSystemSchedule();
        } else {
            ( new CoreScheduleInstallService() )->installAddonSchedule($addon);
        }

        $app_index++;
        if (isset($this->upgrade_task['upgrade_apps'][$app_index])) {
            return ['addon' => $this->upgrade_task['upgrade_apps'][$app_index]];
        }
        return true;
    }

    /**
     * 云编译
     * @return void
     */
    public function cloudBuild()
    {
        return true;
        try {
            ( new CoreCloudBuildService() )->cloudBuild();
        } catch (CommonException $e) {
            if ($e->getCode() == 601) {
                ( new CoreCloudBuildService() )->cloudBuild(['checkLocal' => false]);
            } else {
                throw new CommonException($e->getMessage(), $e->getCode());
            }
        }
    }

    /**
     * 获取云编译日志
     * @return array|true
     */
    public function gteCloudBuildLog()
    {
        return true;
        $log = ( new CoreCloudBuildService() )->getBuildLog();
        if (empty($log)) return true;

        foreach ($log[ 'data' ][ 0 ] as $item) {
            if ($item[ 'code' ] == 0) {
                $this->upgrade_task[ 'step' ] = 'gteCloudBuildLog';
//                $this->upgrade_task[ 'error' ][] = $item[ 'msg' ];
                $this->upgrade_task[ 'cloud_build_error' ] = $item[ 'msg' ];
                Cache::set($this->cache_key, $this->upgrade_task);
                ( new CoreCloudBuildService() )->clearTask();
                return true;
            }
            if (!in_array($item[ 'action' ], $this->upgrade_task[ 'log' ])) {
                $this->upgrade_task[ 'log' ][] = $item[ 'action' ];
                Cache::set($this->cache_key, $this->upgrade_task);
            }
        }

        sleep(2);
        return [];
    }

    /**
     * 更新完成
     * @return true
     */
    public function upgradeComplete()
    {
        foreach ($this->upgrade_task['upgrade_apps'] as $addon) {
            if ($addon != AddonDict::FRAMEWORK_KEY) {
                $core_addon_service = new CoreAddonService();
                $install_data = $core_addon_service->getAddonConfig($addon);
                $install_data[ 'icon' ] = 'addon/' . $addon . '/icon.png';
                $core_addon_service->set($install_data);
            }
        }
        // 执行完成，更新升级记录状态，备份记录状态
        $this->syncBackupKey();
        ( new UpgradeRecordsService() )->complete($this->upgrade_task[ 'key' ]);
        if (!isset($this->upgrade_task['cloud_build_error'])) {
            $this->upgrade_task['step'] = 'upgradeComplete';
            $this->clearUpgradeTask(2);
        } else {
            $this->upgrade_task['step'] = 'upgradeComplete';
            Cache::set($this->cache_key, $this->upgrade_task);
        }
        return true;
    }

    /**
     * 升级出错之后的处理
     * @return void
     */
    public function upgradeErrorHandle($fail_reason = [])
    {
        $steps = [];
        $steps[ $this->upgrade_task[ 'step' ] ] = [];

        if (isset($this->upgrade_task[ 'is_cover' ])) {
            $steps[ 'restoreCode' ] = [ 'step' => 'restoreCode', 'title' => '恢复源码备份' ];
            $steps[ 'restoreSql' ] = [ 'step' => 'restoreSql', 'title' => '恢复数据库备份' ];
        }
        $steps[ 'restoreComplete' ] = [ 'step' => 'restoreComplete', 'title' => '备份恢复完成' ];
        $this->upgrade_task[ 'steps' ] = $steps;
        $this->upgrade_task[ 'params' ] = [];
        Cache::set($this->cache_key, $this->upgrade_task);

        Log::write('升级出错之后的处理：'.json_encode($fail_reason));
    }

    /**
     * 恢复源码
     * @return true
     */
    public function restoreCode()
    {
        if (!isset($this->upgrade_task['is_need_backup']) || $this->upgrade_task['is_need_backup']) {
            $backup_dir = $this->upgrade_dir . $this->backupKey() . DIRECTORY_SEPARATOR . 'backup' . DIRECTORY_SEPARATOR . 'code' . DIRECTORY_SEPARATOR;
        } else {
            $backup_dir = $this->upgrade_dir . $this->upgrade_task['upgrade_content']['last_backup'][ 'backup_key' ] . DIRECTORY_SEPARATOR . 'backup' . DIRECTORY_SEPARATOR . 'code' . DIRECTORY_SEPARATOR;
        }
        try {
            if (is_dir($backup_dir)) {
                dir_copy($backup_dir, rtrim($this->root_path, DIRECTORY_SEPARATOR));
            }
            return true;
        } catch (\Exception $e) {
            $this->upgrade_task[ 'error' ][] = '源码备份恢复失败稍后请手动恢复，源码备份文件路径：' . $backup_dir . '，失败原因：' . $e->getMessage() . $e->getFile() . $e->getLine();
            Cache::set($this->cache_key, $this->upgrade_task);
            return true;
        }
    }

    /**
     * 恢复数据库
     * @return array|true
     */
    public function restoreSql($index = 0)
    {
        if (!isset($this->upgrade_task['is_need_backup']) || $this->upgrade_task['is_need_backup']) {
            $backup_dir = $this->upgrade_dir . $this->backupKey() . DIRECTORY_SEPARATOR . 'backup' . DIRECTORY_SEPARATOR . 'sql' . DIRECTORY_SEPARATOR;
        } else {
            $backup_dir = $this->upgrade_dir . $this->upgrade_task['upgrade_content']['last_backup'][ 'backup_key' ] . DIRECTORY_SEPARATOR . 'backup' . DIRECTORY_SEPARATOR . 'sql' . DIRECTORY_SEPARATOR;
        }
        try {
            if (is_dir($backup_dir)) {
                $db = new DbBackup($backup_dir, key: $this->upgrade_task[ 'key' ]);
                $result = $db->restoreDatabase();
                if ($result !== true) return ['index' => $result];

                $restore_progress = $db->getRestoreProgress();
                if ($restore_progress % 5 == 0) {
                    $this->upgrade_task[ 'log' ][] = $restore_progress == 0 ? '数据库开始恢复' : '数据库恢复中已恢复'. $restore_progress . '%';
                }
            }

            // 处理admin站点不为0的问题
            $site_model = new Site();
            $site_model->where([
                [ 'site_id', '<>', 0 ],
                [ 'app_type', '=', AppTypeDict::ADMIN ]
            ])->update([ 'site_id' => 0 ]);

            return true;
        } catch (\Exception $e) {
            $this->upgrade_task[ 'error' ][] = '数据库备份恢复失败稍后请手动恢复，数据库备份文件路径：' . $backup_dir . '，失败原因：' . $e->getMessage() . $e->getFile() . $e->getLine();
            Cache::set($this->cache_key, $this->upgrade_task);
            return true;
        }
    }

    public function restoreComplete()
    {
        $error = $this->upgrade_task['error'] ?? [];
        if (isset($this->upgrade_task['cloud_build_error'])) $error[] = $this->upgrade_task['cloud_build_error'];
        // 失败收尾也同步关联备份：回滚用的是本次备份或上次备份，记录要指向同一个标识
        $this->syncBackupKey();
        ( new UpgradeRecordsService() )->failed($this->upgrade_task[ 'key' ], $error);
        $this->upgrade_task['step'] = 'restoreComplete';
        Cache::set($this->cache_key, $this->upgrade_task);
        $this->clearUpgradeTask(2);
        return true;
    }

    /**
     * 获取升级内容
     * @param string $addon
     * @return array
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    public function getUpgradeContent(string $addon = '')
    {
        $content = [
            'content' => [],
            'upgrade_apps' => [],
            // 未上架应用市场（云端无登记）的应用/插件：无法在线升级，单独收集用于前端提示
            'not_support_apps' => []
        ];

        $upgrade = [
            'product_key' => BaseNiucloudClient::PRODUCT,
            'framework_version' => config('version.version')
        ];
        $apps = [];
        if (!$addon) {
            $upgrade[ 'app_key' ] = AddonDict::FRAMEWORK_KEY;
            $upgrade[ 'version' ] = config('version.version');
            array_push($apps, $upgrade);
        } else {
            $addons = array_filter(explode(',', $addon));
            foreach ($addons as $key) {
                if ($key != AddonDict::FRAMEWORK_KEY) {
                    $info = ( new Addon() )->where([ [ 'key', '=', $key ] ])->field('version,type')->find();
                    $upgrade[ 'app_key' ] = $key;
                    $upgrade[ 'version' ] = $info['version'] ?? '';
                    if (($info['type'] ?? '') == 'app') {
                        array_unshift($apps, $upgrade);
                    } else {
                        array_push($apps, $upgrade);
                    }
                }
            }
            if (in_array(AddonDict::FRAMEWORK_KEY, $addons)) {
                $upgrade[ 'app_key' ] = AddonDict::FRAMEWORK_KEY;
                $upgrade[ 'version' ] = config('version.version');
                array_unshift($apps, $upgrade);
            }
        }

        foreach ($apps as $item) {
            $upgrade_content = ( new CoreModuleService() )->getUpgradeContent($item)[ 'data' ] ?? [];
            // 未上架应用市场的应用/插件：云端没有它的登记信息，返回的 data 不含 app 节点。
            // 这类应用无法在线升级，直接跳过并记录，避免取 ['app'] 触发 Undefined array key 异常。
            if (empty($upgrade_content['app']['app_key'])) {
                $app_key = $item['app_key'] ?? '';
                $content['not_support_apps'][] = [
                    'app_key' => $app_key,
                    'app_name' => $app_key ? ( ( new Addon() )->where([ [ 'key', '=', $app_key ] ])->value('title') ?: $app_key ) : ''
                ];
                continue;
            }
            $content['content'][] = $upgrade_content;
            $content['upgrade_apps'][] = $upgrade_content['app']['app_key'];
        }

        if (!empty($content['content'])) {
            // 最近一次备份：统一取 sys_task（sys_backup_records 已废弃）。
            // 用 SysTask 模型而非 Db 查询，才能沿用模型的 timestamp 类型转换，
            // 让 complete_time 与旧结构一样输出格式化时间（前端直接展示）。
            $last = ( new SysTask() )
                ->where([
                    [ 'task_type', '=', TaskDict::TYPE_BACKUP ],
                    [ 'status', '=', TaskDict::STATUS_SUCCESS ]
                ])
                ->order('id desc')
                ->field('id, task_key, title, status, create_time, end_time')
                ->find();

            if (!empty($last)) {
                $last = $last->toArray();

                // 字段对齐旧结构：restoreCode / restoreSql 用 backup_key 定位归档目录，前端展示 complete_time
                $content['last_backup'] = [
                    'id'            => (int) ( $last[ 'id' ] ?? 0 ),
                    'backup_key'    => (string) ( $last[ 'task_key' ] ?? '' ),
                    'complete_time' => (string) ( $last[ 'end_time' ] ?: ( $last[ 'create_time' ] ?? '' ) )
                ];
            }
        }

        return $content;
    }

    /**
     * 获取正在进行的升级任务
     * @return mixed|null
     */
    public function getUpgradeTask()
    {
        return $this->upgrade_task;
    }

    /**
     * 从快照恢复任务状态（统一任务中心续跑：Cache 失效后由 task.json 恢复）
     * @param array $task
     * @return void
     */
    public function restoreTask(array $task)
    {
        if (empty($task)) return;
        $this->upgrade_task = $task;
        Cache::set($this->cache_key, $task);
    }

    /**
     * 清除升级任务
     * @return true
     */
    public function clearUpgradeTask(int $delayed = 0, int $is_active = 0)
    {
        // 主动取消升级
        if ($is_active && $this->upgrade_task && !empty($this->upgrade_task[ 'key' ])) {
            ( new UpgradeRecordsService() )->edit([ [ 'upgrade_key', '=', $this->upgrade_task[ 'key' ] ], ['status', '=', UpgradeDict::STATUS_READY ] ], ['status' => UpgradeDict::STATUS_CANCEL]);
        }

        if ($delayed) {
            Cache::set($this->cache_key, $this->upgrade_task, $delayed);
        } else {
            Cache::set($this->cache_key, null);
        }
        // 清除云编译的任务缓存
        ( new CoreCloudBuildService() )->clearTask();
        return true;
    }

    /**
     * 用户取消/清除升级任务（先记录取消步骤，再清理任务）
     * @param int $delayed
     * @param int $is_active
     * @return true
     */
    public function cancelUpgrade(int $delayed = 0, int $is_active = 1)
    {
        $key = $this->upgrade_task[ 'key' ] ?? '';
        $this->upgradeLogStep($key, 'cancel', self::API_UPGRADE_CLEAR, '用户取消/清除升级任务', [], [], 'cancel', []);
        return $this->clearUpgradeTask($delayed, $is_active);
    }

    /**
     * 获取插件定义的package目录
     * @param string $addon
     * @return string
     */
    public function geAddonPackagePath(string $addon)
    {
        return root_path() . 'addon' . DIRECTORY_SEPARATOR . $addon . DIRECTORY_SEPARATOR . 'package' . DIRECTORY_SEPARATOR;
    }

    /**
     * 用户操作
     * @param $operate
     * @return void
     */
    public function operate($operate)
    {
        if (!$this->upgrade_task) return true;

        switch ($operate) {
            case 'local':
                $this->upgrade_task[ 'step' ] = 'gteCloudBuildLog';
                Cache::set($this->cache_key, $this->upgrade_task);
                break;
            case 'skip':
                // 跳过当前出错步骤：清理错误与分片参数，并把该步骤记入 executed，
                // 下一次 execute() 会据此推进到它的下一步（step 本身保持不变，
                // 若直接把 step 改成下一步，execute() 会再往后推一格，等于多跳过一步）
                $current = (string) ( $this->upgrade_task[ 'step' ] ?? '' );
                $this->upgrade_task[ 'error' ]  = [];
                $this->upgrade_task[ 'params' ] = [];
                if ($current !== '' && !in_array($current, (array) ( $this->upgrade_task[ 'executed' ] ?? [] ), true)) {
                    $this->upgrade_task[ 'executed' ][] = $current;
                }
                $this->upgrade_task[ 'log' ][] = '已跳过出错步骤：' . $current;
                Cache::set($this->cache_key, $this->upgrade_task);
                break;
            case 'rollback':
                $fail_reason = [
                    'Message' => '失败原因：一键云编译队列任务过多',
                    'File' => '',
                    'Line' => '',
                    'Trace' => ''
                ];
                $this->upgradeErrorHandle($fail_reason);
                break;
            case 'cloud_build_error_rollback':
                $fail_reason = [
                    'Message' => '失败原因：云编译失败，错误原因：' . $this->upgrade_task['cloud_build_error'],
                    'File' => '',
                    'Line' => '',
                    'Trace' => ''
                ];
                $this->upgradeErrorHandle($fail_reason);
                break;
        }
    }

}
