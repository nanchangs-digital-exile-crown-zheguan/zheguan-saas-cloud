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

namespace addon\shop\app\service\openapi\goods;

use addon\shop\app\model\goods\Goods;
use addon\shop\app\model\goods\GoodsSku;
use core\base\BaseOpenapiService;
use core\exception\CommonException;

/**
 * 商城 - 开放平台商品服务
 *
 * 说明：开放平台只复用 service/core 的端无关服务，其余按对外契约自行实现。
 * 本服务不走 admin / api 端口的 Service，避免混入后台专属逻辑与对外字段泄漏。
 *
 * Class GoodsService
 * @package addon\shop\app\service\openapi\goods
 */
class GoodsService extends BaseOpenapiService
{
    /**
     * 对外暴露的商品字段
     */
    private const GOODS_FIELD = 'goods_id,site_id,goods_name,goods_type,sub_title,goods_cover,goods_category,brand_id,unit,stock,sale_num,status,sort,create_time,update_time';

    /**
     * 对外暴露的规格字段
     */
    private const SKU_FIELD = 'sku_id,goods_id,sku_name,sku_image,sku_no,price,market_price,sale_price,cost_price,stock,is_default';

    public function __construct()
    {
        parent::__construct();
        $this->model = new Goods();
    }

    /**
     * 商品列表
     * @param array $where
     * @return array
     */
    public function getPage(array $where = []): array
    {
        $query = $this->model->where([ [ 'site_id', '=', $this->site_id ] ])->field(self::GOODS_FIELD);

        if (!empty($where[ 'goods_name' ])) {
            $query->whereLike('goods_name', '%' . $this->model->handelSpecialCharacter($where[ 'goods_name' ]) . '%');
        }
        if (!empty($where[ 'goods_category' ])) {
            $query->where('goods_category', $where[ 'goods_category' ]);
        }
        if (!empty($where[ 'goods_type' ])) {
            $query->where('goods_type', $where[ 'goods_type' ]);
        }
        if (!empty($where[ 'brand_id' ])) {
            $query->where('brand_id', $where[ 'brand_id' ]);
        }
        if (isset($where[ 'status' ]) && $where[ 'status' ] !== '') {
            $query->where('status', (int) $where[ 'status' ]);
        }

        $query->order('goods_id desc');

        $list = $this->pageQuery($query);
        $list[ 'data' ] = $this->attachSku($list[ 'data' ] ?? []);

        return $list;
    }

    /**
     * 商品详情
     * @param int $goods_id
     * @return array
     */
    public function getInfo(int $goods_id): array
    {
        $info = $this->model
            ->where([ [ 'goods_id', '=', $goods_id ], [ 'site_id', '=', $this->site_id ] ])
            ->field(self::GOODS_FIELD)
            ->findOrEmpty()->toArray();

        if (empty($info)) throw new CommonException('商品不存在或不属于当前站点');

        $info[ 'sku_list' ] = (new GoodsSku())
            ->where([ [ 'site_id', '=', $this->site_id ], [ 'goods_id', '=', $goods_id ] ])
            ->field(self::SKU_FIELD)
            ->order('is_default desc, sku_id asc')
            ->select()->toArray();

        return $info;
    }

    /**
     * 批量附加规格列表（一次查询，避免逐条查询）
     * @param array $list
     * @return array
     */
    private function attachSku(array $list): array
    {
        if (empty($list)) return $list;

        $goods_ids = array_column($list, 'goods_id');
        $sku_list = (new GoodsSku())
            ->where([ [ 'site_id', '=', $this->site_id ] ])
            ->whereIn('goods_id', $goods_ids)
            ->field(self::SKU_FIELD)
            ->order('is_default desc, sku_id asc')
            ->select()->toArray();

        $sku_map = [];
        foreach ($sku_list as $sku) {
            $sku_map[ $sku[ 'goods_id' ] ][] = $sku;
        }

        foreach ($list as &$item) {
            $item[ 'sku_list' ] = $sku_map[ $item[ 'goods_id' ] ] ?? [];
        }
        unset($item);

        return $list;
    }
}
