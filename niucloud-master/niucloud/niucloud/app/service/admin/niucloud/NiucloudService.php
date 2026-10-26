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

namespace app\service\admin\niucloud;

use app\dict\sys\ConfigKeyDict;
use app\service\core\niucloud\CoreAuthService;
use app\service\core\niucloud\CoreModuleService;
use app\service\core\sys\CoreConfigService;
use core\base\BaseAdminService;
use core\exception\CommonException;
use think\facade\Cache;

/**
 * 消息管理服务层
 */
class NiucloudService extends BaseAdminService
{
    public $core_config_service;

    public function __construct()
    {
        parent::__construct();
        $this->core_config_service = new CoreConfigService();

    }

    /**
     * 设置 授权信息
     * @param $data
     * @return \app\model\sys\SysConfig|bool|\think\Model
     */
    public function setAuthorize($data){

        $data = [
            'auth_code' => $data['auth_code'],
            'auth_secret' => $data['auth_secret']
        ];
        // 校验前先清缓存，否则更换授权码/密钥时校验会读到旧授权的数据：
        // 1) authinfo 缓存是全局 key（不含授权码），不清会直接命中旧授权的信息，新授权码根本没被官网校验就落库
        // 2) access_token 与授权码绑定，留着旧 token 会让校验请求带上旧授权的令牌
        Cache::delete("authinfo");
        $service = (new CoreAuthService($data['auth_code'], $data['auth_secret']));
        $service->clearAccessToken();
        $auth_info = $service->getAuthInfo()['data'] ?? [];
        if (empty($auth_info)) throw new CommonException('AUTH_NOT_EXISTS');
        return $this->core_config_service->setConfig(0,ConfigKeyDict::NIUCLOUD_CONFIG, $data);
    }

    /**
     * 清除授权信息（取消选用授权）
     *
     * 与 setAuthorize() 对称：删除 NIUCLOUD_CONFIG 配置并清理 authinfo / access_token 缓存，
     * 避免升级、应用下载、云编译等依赖授权的功能仍读到已被取消的授权。
     * 幂等：本就没有授权时同样不报错。
     *
     * @return bool
     */
    public function clearAuthorize()
    {
        // 先取出旧授权，用于清理其 access_token 缓存（旧授权已失效时清理失败不影响取消动作）
        $old = $this->getAuthorize();
        if (!empty($old['auth_code']) && !empty($old['auth_secret'])) {
            try {
                (new CoreAuthService($old['auth_code'], $old['auth_secret']))->clearAccessToken();
            } catch (\Throwable $e) {
                // 忽略：旧授权凭据已失效
            }
        }

        Cache::delete("authinfo");
        $this->core_config_service->clearConfig(0, ConfigKeyDict::NIUCLOUD_CONFIG);

        return true;
    }

    /**
     * 获取授权信息
     * @return mixed|string[]
     */
    public function getAuthorize(){
        $info = $this->core_config_service->getConfig(0, ConfigKeyDict::NIUCLOUD_CONFIG);
        if(empty($info))
        {
            $info = [];
            $info['value'] = [
                'auth_code' => '',
                'auth_secret' => ''
            ];
        }
        return $info['value'];
    }

    /**
     * 获取框架最新版本
     */
    public function getFrameworkLastVersion() {
        return (new CoreModuleService())->getFrameworkLastVersion();
    }

    /**
     * 获取框架版本更新记录
     */
    public function getFrameworkVersionList() {
        return (new CoreModuleService())->getFrameworkVersionList();
    }

    /**
     * 获取应用/插件的版本更新记录
     */
    public function getAppVersionList($app_key) {
        return (new CoreModuleService())->getAppVersionList($app_key);
    }

    /**
     * 设置 本地服务器地址
     * @param $data
     * @return \app\model\sys\SysConfig|bool|\think\Model
     */
    public function setLocalCloudCompileConfig($data){
        $data = [
            'baseUri' => $data['url'],
            'isOpen' => $data['is_open'],
        ];
        return $this->core_config_service->setConfig(0,'LOCAL_CLOUD_COMPILE_CONFIG', $data);
    }

    /**
     * 获取 本地服务器地址
     * @param $data
     * @return \app\model\sys\SysConfig|bool|array|\think\Model
     */
    public function getLocalCloudCompileConfig(){
        $config = $this->core_config_service->getConfig(0,'LOCAL_CLOUD_COMPILE_CONFIG')['value'] ?? [];
        return [
            'baseUri' => $config['baseUri'] ?? '',
            'isOpen' => $config['isOpen'] ?? 0,
        ];

    }


}
