<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的多应用管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace app\service\core\addon;

use app\service\core\niucloud\CoreCloudBaseService;
use app\service\core\niucloud\CoreModuleService;
use core\exception\CommonException;
use core\util\niucloud\BaseNiucloudClient;
use core\util\niucloud\CloudService;
use think\facade\Cache;
use think\facade\Log;

/**
 */
class CoreAddonCloudService extends CoreCloudBaseService
{
    /**
     * 云编译
     * @param string $addon
     * @return void
     */
    public function cloudBuild(string $addon) {
        // 上传任务key
        $task_key = uniqid();
        // 此次上传任务临时目录
        $temp_dir = task_runtime_path() . 'backup' . DIRECTORY_SEPARATOR . 'cloud_build' . DIRECTORY_SEPARATOR . $task_key . DIRECTORY_SEPARATOR;
        $package_dir = $temp_dir . 'package' . DIRECTORY_SEPARATOR;
        dir_mkdir($package_dir);


        $addon_config = (new CoreAddonService())->getAddonConfig($addon);
        $compile = $addon_config['compile'] ?? [];
        $custom_port = $addon_config['port']?? [];

        $need_build = false;
        // 拷贝composer文件
        $composer_file = $this->addonPath($addon) . 'package' .  DIRECTORY_SEPARATOR . 'composer.json';
        if (file_exists($composer_file)) {
            file_put_contents($package_dir . 'composer.json', file_get_contents(root_path() . 'composer.json'));
            $need_build = true;
        }
        // 拷贝手机端文件
        if (!in_array('wap', $compile)) {
            dir_copy($this->root_path . 'uni-app', $package_dir . 'uni-app', exclude_dirs:['node_modules', 'unpackage', 'dist']);
            $need_build = true;
        }
        // 拷贝admin端文件
        if (!in_array('admin', $compile)) {
            dir_copy($this->root_path . 'admin', $package_dir . 'admin', exclude_dirs:['node_modules', 'dist', '.vscode', '.idea']);
            $need_build = true;
        }
        // 拷贝web端文件
        if (!in_array('web', $compile)) {
            dir_copy($this->root_path . 'web', $package_dir . 'web', exclude_dirs:['node_modules', '.output', '.nuxt']);
            $need_build = true;
        }

        // 自定义端口
        if (!empty($custom_port)) {
            $addon_path = $this->addonPath($addon);
            foreach ($custom_port as $port) {
                if (is_dir($addon_path . $port[ 'name' ])) {
                    dir_copy($addon_path . $port[ 'name' ], $package_dir . $port[ 'name' ]);
                    $json_path = $package_dir . $port[ 'name' ] . DIRECTORY_SEPARATOR . 'info.json';
                    file_put_contents($json_path, json_encode($port));
                }
            }
            $need_build = true;
        }

        if ($need_build) {
            // 将临时目录下文件生成压缩包
            $zip_file = $temp_dir . DIRECTORY_SEPARATOR . 'build.zip';
            (new CoreAddonDevelopDownloadService(''))->compressToZip($package_dir, $zip_file);

            $install_task = Cache::get('install_task');
            $query = [
                'authorize_code' => $this->auth_code,
                'timestamp' => $install_task['timestamp']
            ];
            $response = (new CloudService(true))->httpPost('cloud/build?' . http_build_query($query), [
                'multipart' => [
                    [
                        'name'     => 'file',
                        'contents' => fopen($zip_file, 'r'),
                        'filename' => 'build.zip'
                    ]
                ],
                'timeout' => 300.0
            ]);
            if (isset($response['code']) && $response['code'] == 0) throw new CommonException($response['msg']);

            // 删除临时文件
            del_target_dir($temp_dir, true);

            Cache::set('build_success_' . $addon, null);
        } else {
            (new CoreAddonInstallService($addon))->handleAddonInstall();
        }
        return true;
    }

    /**
     * 获取编译结果
     * @param string $addon
     * @return void
     */
    public function getBuildLog(string $addon) {
        try {
            $install_task = Cache::get('install_task');
            if (empty($install_task) || !isset($install_task['timestamp'])) return true;

            $query = [
                'authorize_code' => $this->auth_code,
                'timestamp' => $install_task['timestamp']
            ];
            $build_log = (new CloudService(true))->httpGet('cloud/get_build_logs?' . http_build_query($query));

            if (isset($build_log['data']) && isset($build_log['data'][0]) && is_array($build_log['data'][0])) {
                $last = end($build_log['data'][0]);
                if ((int) $last['code'] == 0) {
                    (new CoreAddonInstallService($addon))->installExceptionHandle();
                    $install_task['error'] = 'ADDON_INSTALL_FAIL';
                    Cache::set('install_task', $install_task, 10);
                    return $build_log;
                }
                if ($last['percent'] == 100) {
                    $addon = isset($install_task['addon_list']) ? implode(',', $install_task['addon_list']) : $addon;
                    $build_log['data'][0] = $this->buildSuccess($addon, $build_log['data'][0], $install_task['timestamp']);
                }
            }
            return $build_log;
        } catch (\Exception $e) {
            $install_task = Cache::get('install_task');
            $install_task['error'] = $e->getMessage();
            Cache::set('install_task', $install_task, 10);
            throw new CommonException($e->getMessage());
        }
    }

    /**
     * 云编译成功
     * @param string $addon
     * @param array $log
     * @param $timestamp
     * @return void
     */
    public function buildSuccess(string $addon, array $log, $timestamp) {
        $query = [
            'authorize_code' => $this->auth_code,
            'timestamp' => $timestamp
        ];
        $chunk_size = 1 * 1024 * 1024;

        $cache = Cache::get('build_success_' . $addon);

        if (is_null($cache) || !isset($cache[ 'index' ])) {
            $response = (new CloudService(true))->request('HEAD','cloud/build_download?' . http_build_query($query), [
                'headers' => ['Range' => 'bytes=0-']
            ]);
            $length = $response->getHeader('Content-range');
            $length = (int)explode("/", $length[0])[1];
            $step = (int)ceil($length / $chunk_size);

            // 下载任务key
            $task_key = uniqid();
            // 此次下载任务临时目录
            $temp_dir = task_runtime_path() . 'backup' . DIRECTORY_SEPARATOR . 'cloud_build' . DIRECTORY_SEPARATOR . $task_key . DIRECTORY_SEPARATOR;
            dir_mkdir($temp_dir);

            Cache::set('build_success_' . $addon, ['step' => $step, 'index' => 0, 'length' => $length, 'task_key' => $task_key]);
        } else {
            $temp_dir = task_runtime_path() . 'backup' . DIRECTORY_SEPARATOR . 'cloud_build' . DIRECTORY_SEPARATOR . $cache['task_key'] . DIRECTORY_SEPARATOR;
            $zip_file = $temp_dir . 'build.zip';
            $zip_resource = fopen($zip_file, 'a');

            if (($cache['index'] + 1) <= $cache['step']) {
                $start = $cache['index'] * $chunk_size;
                $end = ($cache['index'] + 1) * $chunk_size;
                $end = min($end, $cache['length']);

                $response = (new CloudService(true))->request('GET','cloud/build_download?' . http_build_query($query), [
                    'headers' => ['Range' => "bytes={$start}-{$end}"]
                ]);
                fwrite($zip_resource, $response->getBody());
                fclose($zip_resource);

                $cache['index'] += 1;
                Cache::set('build_success_' . $addon, $cache);

                $log[] = ['action' => '编译包下载中,已下载' . round($cache['index'] / $cache['step'] * 100) . '%', 'percent' => '100' ];
            } else {
                // 解压文件
                $zip = new \ZipArchive();
                if ($zip->open($zip_file) === true) {
                    dir_mkdir($temp_dir . 'build');
                    $zip->extractTo($temp_dir . 'build');
                    $zip->close();

                    if (is_dir($temp_dir . 'build' . DIRECTORY_SEPARATOR . 'public' . DIRECTORY_SEPARATOR . 'admin')) {
                        del_target_dir(public_path() .'admin', true);
                    }
                    if (is_dir($temp_dir . 'build' . DIRECTORY_SEPARATOR . 'public' . DIRECTORY_SEPARATOR . 'web')) {
                        del_target_dir(public_path() .'web', true);
                    }
                    if (is_dir($temp_dir . 'build' . DIRECTORY_SEPARATOR . 'public' . DIRECTORY_SEPARATOR . 'wap')) {
                        del_target_dir(public_path() .'wap', true);
                    }

                    dir_copy($temp_dir . 'build', root_path());

                    // 安装插件
                    (new CoreAddonInstallService($addon))->handleAddonInstall();

                    // 删除临时文件
                    @del_target_dir($temp_dir, true);

                    Cache::set('build_success_' . $addon, null);
                } else {
                    if (!isset($cache[ 'retry' ])) {
                        unlink($zip_file);
                        $cache['retry'] = 1;
                        unset($cache['index']);
                        Cache::set('build_success_' . $addon, $cache);
                        $log[] = [ 'code' => 1, 'msg' => '编译包解压失败,尝试重新下载', 'action' => '编译包解压失败,尝试重新下载', 'percent' => '100' ];
                    } else {
                        Cache::set('build_success_' . $addon, null);
                        // 调用插件安装异常处理
                        (new CoreAddonInstallService($addon))->installExceptionHandle();
                        throw new CommonException('Zip decompression failed');
                    }
                }
            }
        }
        return $log;
    }

    /**
     * 下载插件
     * @param string $addon
     * @param string $version
     * @return void
     */
    public function downloadAddon(string $addon, string $version) {
        $action_token = (new CoreModuleService())->getActionToken('download', ['data' => ['app_key' => $addon, 'framework_version' => config('version.version'), 'version' => $version, 'product_key' => BaseNiucloudClient::PRODUCT ]]);

        $query = [
            'authorize_code' => $this->auth_code,
            'addon_name' => $addon,
            'addon_version' => $version,
            'token' => $action_token['data']['token'] ?? ''
        ];
        // 获取文件大小
        $response = (new CloudService(false, 'http://oss.niucloud.com/'))->request('HEAD','cloud/download?' . http_build_query($query), [
            'headers' => ['Range' => 'bytes=0-']
        ]);
        $length = $response->getHeader('Content-range');
        $length = (int)explode("/", $length[0])[1];

        $temp_dir = task_runtime_path() . 'backup' . DIRECTORY_SEPARATOR . 'addon_download' . DIRECTORY_SEPARATOR . uniqid() . DIRECTORY_SEPARATOR;
        dir_mkdir($temp_dir);

        $zip_file = $temp_dir . $addon . '.zip';
        $zip_resource = fopen($zip_file, 'w');

        $response = (new CloudService(false, 'http://oss.niucloud.com/'))->request('GET','cloud/download?' . http_build_query($query), [
            'headers' => ['Range' => "bytes=0-{$length}"]
        ]);
        fwrite($zip_resource, $response->getBody());
        fclose($zip_resource);

        return $zip_file;
    }

    /**
     * 插件升级
     * @param $data
     * @return void
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    public function upgradeAddon(array $data = []) {
        $action_token = (new CoreModuleService())->getActionToken('upgrade', ['data' => $data ]);

        $query = [
            'authorize_code' => $this->auth_code,
            'token' => $action_token['data']['token'] ?? ''
        ];
        // 获取文件大小
        $response = (new CloudService(false, 'http://oss.niucloud.com/'))->httpGet('cloud/upgrade?' . http_build_query($query));
        $response['token'] = $query['token'];
        return $response;
    }

    /**
     * 下载升级文件（分片下载 + 解压）
     *
     * 分片必须按「已落盘字节数」推进，且 Range 结束下标要多取 1 字节：
     * 服务端可能是闭区间（bytes=start-end 返回 end-start+1 字节），也可能是左闭右开，
     * 若按 index * chunk_size 固定推进，会在每片边界重复或丢失字节，拼出的 zip 损坏
     * （旧实现解压失败仍返回 true，表现为升级成功但代码没换）。
     *
     * @param string $app_key
     * @param string $token
     * @param string $dir
     * @param int $index 上一次调用返回的已完成分片数（仅用于进度，实际偏移以文件大小为准）
     * @param int $step
     * @param int $length
     * @return array|true
     */
    public function downloadUpgradeFile(string $app_key, string $token, string $dir = '', int $index = -1, $step = 0, $length = 0) {
        $query = [
            'authorize_code' => $this->auth_code,
            'token' => $token
        ];
        $chunk_size = 1 * 1024 * 1024;

        if ($index == -1) {
            $response = $this->upgradeDownloadRequest('HEAD', $query, [
                'headers' => ['Range' => 'bytes=0-']
            ]);
            $status = $response->getStatusCode();
            $length = $this->parseRemoteLength($response);
            if ($length <= 0) {
                throw new CommonException('获取升级包大小失败（HTTP ' . $status . '），请稍后重试');
            }
            $step = (int)ceil($length / $chunk_size);

            // 下一次调用带上 index=0 进入下载分支（实际偏移以已落盘文件大小为准）
            $index = 0;
            return compact('app_key', 'token', 'dir', 'index', 'step', 'length');
        }

        if ($length <= 0) {
            throw new CommonException('升级包信息缺失（未获取到文件大小），请重新发起升级');
        }

        $zip_file = $dir . 'upgrade.zip';
        // 以实际落盘字节数为偏移：重试/重复执行同一步时天然幂等，不会重复追加分片
        clearstatcache(true, $zip_file);
        $offset = file_exists($zip_file) ? (int)filesize($zip_file) : 0;

        // 落盘文件比云端总大小还大，说明是旧版本按固定片长推进时重复追加的脏包，清掉重下
        if ($offset > $length) {
            @unlink($zip_file);
            $offset = 0;
        }

        if ($offset < $length) {
            $prev   = $offset;
            $offset = $this->downloadUpgradeChunk($query, $zip_file, $offset, $length, $chunk_size);
            $index  = min((int)ceil($offset / $chunk_size), $step ?: PHP_INT_MAX);

            // 未下载完，保存进度，等下一次 run 继续；
            // 若本片没有推进（如服务端返回 416），不再返回进度，走下面的完整性校验，避免死循环
            if ($offset < $length && $offset > $prev) {
                return compact('app_key', 'token', 'dir', 'index', 'step', 'length');
            }
        }

        // 下载完成后校验大小：不完整说明服务端提前中断，清包并明确报错（绝不把半包交给解压）
        clearstatcache(true, $zip_file);
        $size = file_exists($zip_file) ? (int)filesize($zip_file) : 0;
        if ($size <= 0) {
            throw new CommonException('升级包下载失败：文件为空，请重新发起升级');
        }
        if ($size < $length) {
            @unlink($zip_file);
            throw new CommonException('升级包下载不完整（已下载 ' . $size . ' 字节 / 共 ' . $length . ' 字节），请重新发起升级');
        }

        // 下载完成，解压并校验
        $this->extractUpgradeZip($zip_file, $dir . 'code' . DIRECTORY_SEPARATOR);

        return true;
    }

    /**
     * 升级包下载请求（统一超时与二进制落盘配置）
     *
     * @param string $method
     * @param array $query
     * @param array $options
     * @return mixed
     */
    private function upgradeDownloadRequest(string $method, array $query, array $options = [])
    {
        $options = array_merge([
            // 二进制原样返回：云端若带 Content-Encoding: gzip，Guzzle 默认会自动解压，
            // 导致实际写入字节数与 Range 偏移对不上
            'decode_content'  => false,
            // 不因 4xx/5xx 抛 Guzzle 异常：需要拿到 416 状态码判断是否已到文件末尾，
            // 其余错误码由调用方带 status 报出来，便于线上定位
            'http_errors'     => false,
            'connect_timeout' => 10,
            'timeout'         => 300,
        ], $options);

        return (new CloudService(false, 'http://oss.niucloud.com/'))
            ->request($method, 'cloud/upgrade/download?' . http_build_query($query), $options);
    }

    /**
     * 下载一个分片并追加到升级包文件，返回已落盘字节数
     *
     * Range 结束下标取 offset + chunk_size（多要 1 字节）：闭区间服务端返回 chunk_size+1
     * 字节，左闭右开服务端返回 chunk_size 字节，两种语义下都按实际写入字节推进 offset，
     * 拼出的文件连续、不重复、不丢字节。
     *
     * @param array $query
     * @param string $zip_file
     * @param int $offset 当前已落盘字节数
     * @param int $length 云端文件总大小
     * @param int $chunk_size
     * @return int
     * @throws CommonException
     */
    private function downloadUpgradeChunk(array $query, string $zip_file, int $offset, int $length, int $chunk_size): int
    {
        $last_error = '';

        for ($attempt = 1; $attempt <= 3; $attempt++) {
            $end = $offset + $chunk_size;

            $response = $this->upgradeDownloadRequest('GET', $query, [
                'headers' => ['Range' => "bytes={$offset}-{$end}"]
            ]);
            $status = $response->getStatusCode();
            $body   = (string)$response->getBody();

            // 起点已到文件末尾：按下载完成处理（由调用方校验大小）
            if ($status === 416) {
                return $offset;
            }

            if ($status >= 400) {
                $last_error = '升级包下载请求失败（HTTP ' . $status . '，offset=' . $offset . '，length=' . $length . '）';
                if ($attempt < 3) {
                    usleep(500000);
                    continue;
                }
                throw new CommonException('升级包下载失败：' . $last_error);
            }

            if ($body === '') {
                $last_error = '分片内容为空（HTTP ' . $status . '，offset=' . $offset . '，length=' . $length . '）';

                // 首片就为空：服务端可能不支持 Range，回退为一次性整包下载
                if ($offset === 0) {
                    return $this->downloadWholeUpgradeFile($query, $zip_file);
                }

                if ($attempt < 3) {
                    usleep(500000);
                    continue;
                }

                throw new CommonException('升级包下载失败：' . $last_error);
            }

            // 服务端忽略 Range 直接返回整包：覆盖写入并结束
            $whole_file = strlen($body) > $chunk_size + 1;
            $write_mode = ($offset === 0 || $whole_file) ? 0 : FILE_APPEND;
            if (file_put_contents($zip_file, $body, $write_mode) === false) {
                throw new CommonException('升级包写入失败，请检查 upgrade 目录权限或磁盘空间');
            }

            clearstatcache(true, $zip_file);
            $new_offset = (int)filesize($zip_file);

            if ($new_offset <= $offset && !$whole_file) {
                $last_error = '分片写入后文件大小未增长（offset=' . $offset . '，写入 ' . strlen($body) . ' 字节）';
                if ($attempt < 3) {
                    usleep(500000);
                    continue;
                }
                throw new CommonException('升级包下载失败：' . $last_error);
            }

            return $new_offset;
        }

        throw new CommonException('升级包下载失败：' . $last_error);
    }

    /**
     * 不带 Range 一次性下载整包（服务端不支持分片下载时兜底）
     *
     * @param array $query
     * @param string $zip_file
     * @return int 已落盘字节数
     * @throws CommonException
     */
    private function downloadWholeUpgradeFile(array $query, string $zip_file): int
    {
        $response = $this->upgradeDownloadRequest('GET', $query, []);
        $status   = $response->getStatusCode();
        $body     = (string)$response->getBody();

        if ($status !== 200 || $body === '') {
            throw new CommonException('升级包下载失败：整包下载未返回内容（HTTP ' . $status . '）');
        }

        if (file_put_contents($zip_file, $body, 0) === false) {
            throw new CommonException('升级包写入失败，请检查 upgrade 目录权限或磁盘空间');
        }

        clearstatcache(true, $zip_file);
        return (int)filesize($zip_file);
    }

    /**
     * 解析云端返回的文件总大小（优先 Content-Range，回退 Content-Length）
     * @param mixed $response
     * @return int
     */
    private function parseRemoteLength($response): int
    {
        if (!$response || !method_exists($response, 'getHeader')) return 0;

        $range = $response->getHeader('Content-range');
        if (!empty($range[ 0 ]) && strpos($range[ 0 ], '/') !== false) {
            return (int)trim(explode('/', $range[ 0 ])[ 1 ]);
        }

        $content_length = $response->getHeader('Content-length');
        if (!empty($content_length[ 0 ])) return (int)$content_length[ 0 ];

        return 0;
    }

    /**
     * 解压升级包并校验结果
     *
     * 旧实现 open()/extractTo() 的失败全部忽略并 return true，zip 损坏时会静默解出
     * 半包，后续覆盖代码看到目录不存在又静默跳过，最终「升级成功但代码没换」。
     *
     * @param string $zip_file
     * @param string $code_dir
     * @return void
     * @throws CommonException
     */
    private function extractUpgradeZip(string $zip_file, string $code_dir): void
    {
        if (!file_exists($zip_file)) {
            throw new CommonException('升级包不存在，请重新发起升级');
        }

        $zip = new \ZipArchive();
        if ($zip->open($zip_file) !== true) {
            throw new CommonException('升级包解压失败：压缩包已损坏，请重新发起升级');
        }

        dir_mkdir($code_dir);
        $extracted = $zip->extractTo($code_dir);
        $zip->close();

        if ($extracted !== true) {
            throw new CommonException('升级包解压失败：文件写入不完整，请检查 upgrade 目录权限或磁盘空间');
        }

        // 解压结果校验：code 目录必须至少有一个条目
        $entries = @scandir($code_dir);
        if (empty($entries) || count($entries) <= 2) {
            throw new CommonException('升级包内容为空，请重新发起升级');
        }
    }
}
