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

use app\dict\sys\AppTypeDict;

/**
 * 开放平台 - 商城插件接口清单
 *
 * 插件接入开放平台只需三步：
 *  1. 在 addon/{key}/app/dict/openapi/ 下新增清单文件（本文件）
 *  2. 在 addon/{key}/app/openapi/controller/ 下实现控制器方法
 *  3. 如需业务编排，在 addon/{key}/app/service/openapi/ 下新增服务（只可复用 service/core 的端无关服务）
 */
return [
    'goods' => [
        'group_name' => '商品',
        'app_type' => AppTypeDict::SITE,
        'domain' => 'goods',
        'addon' => 'shop',
        'items' => [
            'goods.list' => [
                'name' => '商品列表',
                'desc' => '分页查询本店铺商品，可按名称、分类、类型、品牌、上下架状态筛选',
                'method' => 'get',
                'path' => 'v1/shop/goods',
                'handler' => '\addon\shop\app\openapi\controller\goods\Goods@pages',
                'addon' => 'shop',
                'params' => [
                    'goods_name' => [ 'name' => '商品名称', 'type' => 'string', 'required' => false ],
                    'goods_category' => [ 'name' => '商品分类', 'type' => 'int', 'required' => false ],
                    'goods_type' => [ 'name' => '商品类型', 'type' => 'string', 'required' => false ],
                    'brand_id' => [ 'name' => '品牌id', 'type' => 'int', 'required' => false ],
                    'status' => [ 'name' => '上下架状态 1正常 0下架', 'type' => 'int', 'required' => false ],
                    'page' => [ 'name' => '页码', 'type' => 'int', 'required' => false ],
                    'limit' => [ 'name' => '每页条数', 'type' => 'int', 'required' => false ],
                ],
            ],
            'goods.detail' => [
                'name' => '商品详情',
                'desc' => '查询单个商品的详细信息与规格列表',
                'method' => 'get',
                'path' => 'v1/shop/goods/:id',
                'handler' => '\addon\shop\app\openapi\controller\goods\Goods@info',
                'addon' => 'shop',
                'params' => [
                    'id' => [ 'name' => '商品id', 'type' => 'int', 'required' => true ],
                ],
            ],
        ],
    ],
];
