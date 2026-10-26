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

namespace addon\shop\app\service\admin\delivery;

use addon\shop\app\service\core\delivery\CoreConfigService;
use addon\shop\app\dict\delivery\DeliverySearchDict;
use app\dict\common\CommonDict;
use core\base\BaseAdminService;
use core\exception\AdminException;

/**
 * 物流查询接口配置服务层
 * Class DeliverySearchConfigService
 * @package addon\shop\app\service\admin\delivery
 */
class DeliverySearchConfigService extends BaseAdminService
{
    /**
     * 获取物流查询服务商列表
     */
    public function getList(): array
    {
        $types = DeliverySearchDict::getType();
        $config = (new CoreConfigService())->getDeliverySearchConfig($this->site_id);
        $list = [];
        foreach ($types as $type => $definition) {
            $list[] = [
                'type' => $type,
                'name' => $definition['name'],
                'is_use' => ($config['default'] ?? '') === $type ? 1 : 0,
                'component' => $definition['component'] ?? '',
            ];
        }
        return $list;
    }

    /** 获取某服务商的配置（敏感字段脱敏） */
    public function getConfig(string $type): array
    {
        $types = DeliverySearchDict::getType();
        if (!isset($types[$type])) throw new AdminException('DELIVERY_SEARCH_TYPE_NOT_EXIST');

        $config = (new CoreConfigService())->getDeliverySearchConfig($this->site_id);
        $definition = $types[$type];
        $params = [];
        foreach ($definition['params'] as $key => $name) {
            $value = $config[$type][$key] ?? '';
            $options = $definition['param_options'][$key] ?? [];
            if (!empty($options) && isset($options[0]['label']) && is_int($options[0]['label'])) $value = (int)$value;
            if ($value !== '' && in_array($key, $definition['encrypt_params'] ?? [])) $value = CommonDict::ENCRYPT_STR;
            $params[$key] = [
                'name' => $name,
                'value' => $value,
                'is_secret' => in_array($key, $definition['encrypt_params'] ?? []),
                'options' => $options,
                'tips' => $definition['param_tips'][$key] ?? [],
            ];
        }

        return [
            'type' => $type,
            'name' => $definition['name'],
            'is_use' => ($config['default'] ?? '') === $type ? 1 : 0,
            'params' => $params,
        ];
    }

    /** 保存某服务商配置，并按 is_use 切换默认服务商 */
    public function setConfig(string $type, array $data)
    {
        $types = DeliverySearchDict::getType();
        if (!isset($types[$type])) throw new AdminException('DELIVERY_SEARCH_TYPE_NOT_EXIST');

        $config = (new CoreConfigService())->getDeliverySearchConfig($this->site_id);
        $definition = $types[$type];
        foreach ($definition['params'] as $key => $name) {
            $value = $data[$key] ?? '';
            if ($value === CommonDict::ENCRYPT_STR) $value = $config[$type][$key] ?? '';
            $config[$type][$key] = $value;
        }
        if (!empty($data['is_use'])) {
            $config['default'] = $type;
        } elseif (($config['default'] ?? '') === $type) {
            $config['default'] = '';
        }
        return (new CoreConfigService())->setDeliverySearchConfig($this->site_id, $config);
    }
}
