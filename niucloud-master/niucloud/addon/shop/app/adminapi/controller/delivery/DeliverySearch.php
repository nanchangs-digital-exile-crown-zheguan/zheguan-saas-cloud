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

namespace addon\shop\app\adminapi\controller\delivery;

use core\base\BaseAdminController;
use addon\shop\app\dict\delivery\DeliverySearchDict;
use addon\shop\app\service\admin\delivery\DeliverySearchConfigService;
use core\exception\AdminException;


/**
 * 物流查询接口配置
 * Class DeliverySearch
 * @package addon\shop\app\adminapi\controller\delivery
 */
class DeliverySearch extends BaseAdminController
{
    /**
     * 设置配置
     * @description 设置物流查询配置
     * @return \think\Response
     */
    public function setConfig(string $type)
    {
        $types = DeliverySearchDict::getType();
        if (!isset($types[$type])) throw new AdminException('DELIVERY_SEARCH_TYPE_NOT_EXIST');
        $params = [[ 'is_use', 0 ]];
        foreach ($types[$type]['params'] as $key => $name) $params[] = [$key, ''];
        $data = $this->request->params($params);
        (new DeliverySearchConfigService())->setConfig($type, $data);
        return success('SUCCESS');
    }

    /**
     * 兼容旧管理端的扁平配置提交。
     */
    public function setLegacyConfig()
    {
        $data = $this->request->params([
            [ 'interface_type', 1 ], [ 'kdniao_id', '' ], [ 'kdniao_app_key', '' ],
            [ 'kdniao_is_pay', 1 ], [ 'kd100_app_key', '' ], [ 'kd100_customer', '' ],
        ]);
        $service = new DeliverySearchConfigService();
        $type = (int) $data['interface_type'] === 2 ? 'kd100' : 'kdniao';
        $service->setConfig('kdniao', [
            'is_use' => $type === 'kdniao' ? 1 : 0,
            'kdniao_id' => $data['kdniao_id'],
            'kdniao_app_key' => $data['kdniao_app_key'],
            'kdniao_is_pay' => $data['kdniao_is_pay'],
        ]);
        $service->setConfig('kd100', [
            'is_use' => $type === 'kd100' ? 1 : 0,
            'kd100_app_key' => $data['kd100_app_key'],
            'kd100_customer' => $data['kd100_customer'],
        ]);
        return success('SUCCESS');
    }

    /**
     * 获取配置
     * @description 查看物流查询配置
     * @return \think\Response
     */
    public function getConfig(string $type)
    {
        return success((new DeliverySearchConfigService())->getConfig($type));
    }

    /**
     * 物流查询服务商列表
     */
    public function lists()
    {
        return success((new DeliverySearchConfigService())->getList());
    }
}
