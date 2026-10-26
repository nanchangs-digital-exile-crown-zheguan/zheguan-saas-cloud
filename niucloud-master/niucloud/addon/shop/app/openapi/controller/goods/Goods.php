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

namespace addon\shop\app\openapi\controller\goods;

use addon\shop\app\service\openapi\goods\GoodsService;
use app\openapi\controller\BaseOpenapiController;
use think\Response;

/**
 * 开放平台 - 商品
 * Class Goods
 * @package addon\shop\app\openapi\controller\goods
 */
class Goods extends BaseOpenapiController
{
    /**
     * 商品列表
     * @description 商品列表
     * @return Response
     */
    public function pages(): Response
    {
        $where = $this->request->params([
            [ 'goods_name', '' ],
            [ 'goods_category', '' ],
            [ 'goods_type', '' ],
            [ 'brand_id', '' ],
            [ 'status', '' ],
        ]);

        return success((new GoodsService())->getPage($where));
    }

    /**
     * 商品详情
     * @description 商品详情
     * @param int $id
     * @return Response
     */
    public function info(int $id): Response
    {
        return success((new GoodsService())->getInfo($id));
    }
}
