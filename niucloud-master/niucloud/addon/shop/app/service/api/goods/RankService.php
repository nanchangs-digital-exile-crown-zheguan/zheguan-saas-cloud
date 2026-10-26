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

namespace addon\shop\app\service\api\goods;

use addon\shop\app\dict\goods\GoodsDict;
use addon\shop\app\dict\goods\RankDict;
use addon\shop\app\model\goods\Goods;
use addon\shop\app\model\goods\GoodsSku;
use addon\shop\app\model\goods\Rank;
use addon\shop\app\model\goods\Stat;
use addon\shop\app\service\core\goods\CoreGoodsActivePriceService;
use addon\shop\app\service\core\goods\CoreGoodsRankConfigService;
use core\base\BaseApiService;
use think\db\Query;
use think\facade\Db;
use think\facade\Cache;

/**
 * 商品榜单服务层
 * Class RankService
 * @package addon\shop\app\service\api\goods
 */
class RankService extends BaseApiService
{
    protected Stat $goodsStatModel;
    protected Goods $goodsModel;
    protected GoodsSku $goodsSkuModel;

    public function __construct()
    {
        parent::__construct();
        $this->model = new Rank();
        $this->goodsStatModel = new Stat();
        $this->goodsModel = new Goods();
        $this->goodsSkuModel = new GoodsSku();
    }

    /**
     * 获取商品排行榜配置
     * @return array
     */
    public function getGoodsRankConfig()
    {
        return ( new CoreGoodsRankConfigService() )->getGoodsRankConfig($this->site_id);
    }

    /**
     * 获取商品榜单列表
     * @param array $where
     * @return array
     */
    public function getPage(array $where = [])
    {
        $field = 'rank_id,name,goods_source';
        $order = 'sort desc,create_time desc';
        $list = $this->model->where([ [ 'site_id', '=', $this->site_id ], [ 'status', '=', RankDict::ON ] ])->withSearch([ "name" ], $where)->field($field)->order($order)->select()->toArray();

        return $list;
    }

    /**
     * 获取商品榜单列表
     * @param array $data
     * @return array
     */
    public function getGoodsPage($data)
    {
        $rank_id = $data[ 'rank_id' ];
        $rank_info = $this->model->field('rank_id,name,rank_type,rule_type,goods_source,goods_json,category_ids,brand_ids,label_ids')->where([ [ 'site_id', '=', $this->site_id ] ])->find($rank_id);
        $list = [];
        if ($rank_info) {
            $rank_info = $this->parseRankInfo($rank_info);
            $list = $this->getGoodsList($rank_info, 0, $data);
        }
        return $list;
    }

    /**
     * 获取商品榜单组件列表
     * @param array $data
     * @return array
     */
    public function getRankComponents($data)
    {
        $rank_id = $data[ 'rank_id' ];  
        $limit = $data[ 'limit' ] ?? 0;
        $where[] = [
            [ 'site_id', '=', $this->site_id ],
            [ 'status', '=', RankDict::ON ]
        ];
        $order = '';
        if ($rank_id > 0) {
            $where[] = [ 'rank_id', '=', $rank_id ];
            $order = 'sort desc,create_time desc';
        }

        $rank_info = $this->model->field('rank_id,name,rank_type,rule_type,goods_source,goods_json,category_ids,brand_ids,label_ids')->where($where)->order($order)->findOrEmpty();
        $data = [];
        if (!empty($rank_info)) {
            $rank_info = $this->parseRankInfo($rank_info);
            $data[ 'rank_id' ] = $rank_info[ 'rank_id' ];
            $data[ 'name' ] = $rank_info[ 'name' ];
            $data[ 'goods_list' ] = $this->getGoodsList($rank_info, $limit);
        }
        return $data;
    }

    /**
     * 解析榜单信息，确保JSON字段正确转换为数组
     * @param mixed $rank_info
     * @return array
     */
    protected function parseRankInfo($rank_info): array
    {
        if (is_object($rank_info)) {
            $rank_info = $rank_info->toArray();
        }
        
        $json_fields = ['goods_json', 'category_ids', 'brand_ids', 'label_ids'];
        foreach ($json_fields as $field) {
            if (isset($rank_info[$field]) && !is_array($rank_info[$field])) {
                $rank_info[$field] = json_decode($rank_info[$field], true) ?: [];
            }
        }
        
        return $rank_info;
    }

    /**
     * 根据榜单设置条件查询对应的商品信息
     * @param $rank_info
     * @param int $limit
     * @param array $data
     * @return array
     * @throws \think\db\exception\DbException
     */
    protected function getGoodsList($rank_info, $limit = 0, $data = [])
    {
        $dayMap = [
            RankDict::DAY => 1,
            RankDict::WEEK => 7,
            RankDict::MONTH => 30,
            RankDict::QUARTER => 90,
        ];
        $day = $dayMap[$rank_info['rank_type']] ?? 1;
        $dateEnd = strtotime(date('Y-m-d 23:59:59'));
        $dateStart = $dateEnd - 86400 * $day + 1;
        $orderRuleCol = 'stat_' . $rank_info['rule_type'] . '_num';

        $maxGoodsCount = 500;

        $baseWhere = [
            ['site_id', '=', $this->site_id],
            ['is_gift', '=', GoodsDict::NOT_IS_GIFT],
            ['status', '=', 1],
        ];

        $isCustomGoods = false;
        $customSortMap = [];

        switch ($rank_info['goods_source']) {
            case RankDict::GOODS:
                $isCustomGoods = true;
                $goodsJson = $rank_info['goods_json'];
                $configGoodsIds = array_column($goodsJson, 'goods_id');
                $customSortMap = array_column($goodsJson, null, 'goods_id');
                $goodsIds = $configGoodsIds;
                break;
            case RankDict::CATEGORY:
                $goodsIds = $this->goodsModel->where($baseWhere)
                    ->withSearch(['goods_category'], ['goods_category' => $rank_info['category_ids']])
                    ->limit($maxGoodsCount)
                    ->column('goods_id');
                break;
            case RankDict::BRAND:
                $goodsIds = $this->goodsModel->where($baseWhere)
                    ->whereIn('brand_id', $rank_info['brand_ids'])
                    ->limit($maxGoodsCount)
                    ->column('goods_id');
                break;
            case RankDict::LABEL:
                $goodsIds = $this->goodsModel->where($baseWhere)
                    ->withSearch(['label_ids'], ['label_ids' => $rank_info['label_ids']])
                    ->limit($maxGoodsCount)
                    ->column('goods_id');
                break;
            default:
                $goodsIds = $this->goodsModel->where($baseWhere)
                    ->limit($maxGoodsCount)
                    ->column('goods_id');
                break;
        }

        if (empty($goodsIds)) {
            $goodsList = [
                'total' => 0,
                'per_page' => 1,
                'current_page' => 1,
                'last_page' => 1,
                'data' => [],
            ];
            return $goodsList;
        }

        $statMap = [];
        if (!empty($goodsIds)) {
            $statList = Db::name('shop_goods_stat')
                ->where([['site_id', '=', $this->site_id], ['goods_id', 'in', $goodsIds]])
                ->whereBetweenTime('date_time', $dateStart, $dateEnd)
                ->field('goods_id, SUM(sale_num) as sum_sale_num, SUM(collect_num) as sum_collect_num, SUM(evaluate_num) as sum_evaluate_num, SUM(access_num) as sum_access_num')
                ->group('goods_id')
                ->select()
                ->toArray();
            foreach ($statList as $stat) {
                $statMap[$stat['goods_id']] = $stat;
            }
        }

        $goodsList = $this->goodsModel->where($baseWhere)->whereIn('goods_id', $goodsIds)
            ->append(['goods_cover_thumb_small', 'goods_cover_thumb_mid'])
            ->select()
            ->toArray();

        foreach ($goodsList as &$item) {
            $stat = $statMap[$item['goods_id']] ?? [];
            $item['stat_sale_num'] = ($stat['sum_sale_num'] ?? 0) + $item['virtual_sale_num'];
            $item['stat_collect_num'] = $stat['sum_collect_num'] ?? 0;
            $item['stat_evaluate_num'] = $stat['sum_evaluate_num'] ?? 0;
            $item['stat_access_num'] = $stat['sum_access_num'] ?? 0;
            if ($isCustomGoods) {
                $item['sort'] = $customSortMap[$item['goods_id']]['sort'] ?? 0;
            }
        }
        unset($item);

        usort($goodsList, function ($a, $b) use ($orderRuleCol, $isCustomGoods) {
            if ($isCustomGoods && (($a['sort'] ?? 0) !== ($b['sort'] ?? 0))) {
                return ($b['sort'] ?? 0) <=> ($a['sort'] ?? 0);
            }
            if ($a[$orderRuleCol] !== $b[$orderRuleCol]) {
                return $b[$orderRuleCol] <=> $a[$orderRuleCol];
            }
            if (($a['sort'] ?? 0) !== ($b['sort'] ?? 0)) {
                return ($b['sort'] ?? 0) <=> ($a['sort'] ?? 0);
            }
            return ($b['create_time'] ?? 0) <=> ($a['create_time'] ?? 0);
        });

        if ($limit > 0) {
            $goodsList = array_slice($goodsList, 0, $limit);
        } else {
            $goodsList = [
                'total' => count($goodsList),
                'per_page' => 1,
                'current_page' => 1,
                'last_page' => 1,
                'data' => $goodsList,
            ];
        }

        // ===================== 7. 批量处理SKU&价格，消除循环N+1查询 =====================
        $priceService = new CoreGoodsActivePriceService();
        $dataArr = $goodsList['data'] ?? $goodsList;
        if (!empty($dataArr)) {
            // 批量获取所有商品sku，一次性查库
            $goodsIds = array_column($dataArr, 'goods_id');
            $skuBatch = $this->batchGetGoodsSku($goodsIds);

            foreach ($dataArr as $key => &$item) {
                $item['rank_num'] = $key + 1;
                $skuInfo = $skuBatch[$item['goods_id']] ?? [];
                $item['goodsSku'] = $skuInfo;
                if (!empty($skuInfo)) {
                    $skuInfo['member_discount'] = $item['member_discount'];
                    $priceInfo = $priceService->getShowPrice($skuInfo, $this->site_id, $this->member_id);
                    $item['goodsSku']['show_price'] = $priceInfo['show_price'];
                    $item['goodsSku']['show_type'] = $priceInfo['show_type'];
                }
            }
            unset($item);

            // 回填分页结构
            if (isset($goodsList['data'])) {
                $goodsList['data'] = $dataArr;
            } else {
                $goodsList = $dataArr;
            }
        }

        return $goodsList;
    }

    /**
     * 批量获取商品SKU（新增批量方法，替换循环单条查询）
     */
    protected function batchGetGoodsSku(array $goodsIds): array
    {
        if (empty($goodsIds)) return [];
        $skuList = $this->goodsSkuModel
            ->field('sku_id,sku_name,sku_image,goods_id,price,sku_spec_format,sale_price,stock,member_price')
            ->where([['site_id', '=', $this->site_id], ['goods_id', 'in', $goodsIds]])
            ->select()
            ->toArray();
        $batchData = [];
        foreach ($skuList as $sku) {
            $batchData[$sku['goods_id']] = $sku;
        }
        return $batchData;
    }

    /**
     * 根据排行周期查询商品统计数据
     */
    protected function getGoodsIds($data)
    {
        $rank_type = $data[ 'rank_type' ];
        $date_end = strtotime(date('Y-m-d 23:59:59'));
        switch ($rank_type) {
            case RankDict::DAY:
                $day = 1;
                break;
            case RankDict::WEEK:
                $day = 7;
                break;
            case RankDict::MONTH:
                $day = 30;
                break;
            case RankDict::QUARTER:
                $day = 90;
                break;
        }
        $date_start = $date_end - 86400 * $day + 1;
        $goods_ids = $this->goodsStatModel->where([ [ 'site_id', '=', $this->site_id ] ])->whereBetweenTime('date_time', $date_start, $date_end)->column('goods_id');
        return $goods_ids;
    }

    /**
     * 获取商品SKU
     * @param $data
     * @return mixed
     */
    protected function getGoodsSku($data)
    {
        $goods_sku_info = ( new GoodsSku() )->field('sku_id,sku_name,sku_image,goods_id,price,sku_spec_format,sale_price,stock,member_price')
            ->where([
                [ 'site_id', '=', $this->site_id ],
                [ 'goods_id', '=', $data[ 'goods_id' ] ]
            ])
            ->find();
        return $goods_sku_info;
    }

}
