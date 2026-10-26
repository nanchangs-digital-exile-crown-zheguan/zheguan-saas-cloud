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

namespace addon\shop\app\service\core\delivery\delivery_search;

use addon\shop\app\service\core\delivery\CoreConfigService;
use addon\shop\app\dict\delivery\DeliverySearchDict;
use core\exception\AdminException;
use core\loader\Loader;

/**
 * @see DeliverySearchLoader
 * @package think\facade
 * @mixin BaseDeliverySearch
 * @method  string|null search(array $data) 物流跟踪查询
 */
class DeliverySearchLoader extends Loader
{
    public function __construct($site_id)
    {
        $config = ( new CoreConfigService() )->getDeliverySearchConfig($site_id);
        $type = $config['default'] ?? '';
        $types = DeliverySearchDict::getType();
        if (empty($type) || !isset($types[$type])) {
            throw new AdminException('NOT_CONFIGURED_DELIVERY_TYPE');
        }
        // 插件配置文件的 driver 允许覆盖；未被运行时加载时使用服务商注册的驱动类。
        $driver = config('delivery_search.drivers.' . $type . '.driver') ?: ($types[$type]['driver'] ?? $type);
        parent::__construct($driver, $config[$type] ?? []);
    }
    /**
     * 空间名
     * @var string
     */
    protected $config_name = 'delivery_search';

    /**
     * 默认驱动
     * @return mixed
     */
    protected function getDefault()
    {
        return config('delivery_search.default');
    }
}
