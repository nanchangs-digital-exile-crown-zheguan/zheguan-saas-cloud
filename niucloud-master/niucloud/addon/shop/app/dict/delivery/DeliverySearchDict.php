<?php

namespace addon\shop\app\dict\delivery;

/**
 * 物流查询服务商定义。
 *
 * 新服务商可通过 DeliverySearchType 事件追加定义，并在插件的
 * config/delivery_search.php 中注册同名 driver。
 */
class DeliverySearchDict
{
    public const KDNIAO = 'kdniao';
    public const KD100 = 'kd100';

    public static function getType(): array
    {
        $system = [
            self::KDNIAO => [
                'name' => '快递鸟',
                'driver' => 'addon\\shop\\app\\service\\core\\delivery\\delivery_search\\KdniaoDeliverySearch',
                'legacy_interface_types' => [1],
                'params' => [
                    'kdniao_id' => 'EBusinessID',
                    'kdniao_app_key' => 'APPKEY',
                    'kdniao_is_pay' => '套餐类型',
                ],
                'encrypt_params' => [ 'kdniao_app_key' ],
                'param_options' => [
                    'kdniao_is_pay' => [
                        [ 'label' => 1, 'text' => '按单付费' ],
                        [ 'label' => 2, 'text' => '按次付费' ],
                    ],
                ],
                'param_tips' => [
                    'kdniao_id' => [
                        '快递鸟电商ID',
                    ],
                    'kdniao_app_key' => [
                        '快递鸟分配的电商加密私钥',
                    ],
                    'kdniao_is_pay' => [
                        '1、按单付费查询，相同单号查询多次计费一次（代码8001）',
                        '2、按次付费查询，相同单号查询多次计费多次（代码8002）',
                    ],
                ],
            ],
            self::KD100 => [
                'name' => '快递100',
                'driver' => 'addon\\shop\\app\\service\\core\\delivery\\delivery_search\\Kd100DeliverySearch',
                'legacy_interface_types' => [2],
                'params' => [
                    'kd100_app_key' => 'APPKEY',
                    'kd100_customer' => 'CUSTOMER',
                ],
                'encrypt_params' => [ 'kd100_app_key' ],
                'param_tips' => [
                    'kd100_app_key' => [
                        '快递100应用密钥',
                    ],
                    'kd100_customer' => [
                        '快递100分配给的公司编号',
                    ],
                ],
            ],
        ];

        $extend = event('DeliverySearchType');
        return empty($extend) ? $system : array_merge($system, ...$extend);
    }
}
