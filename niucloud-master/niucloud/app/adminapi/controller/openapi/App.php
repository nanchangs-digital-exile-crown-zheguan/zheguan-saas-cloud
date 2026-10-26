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

namespace app\adminapi\controller\openapi;

use app\service\admin\openapi\OpenapiAppService;
use core\base\BaseAdminController;
use think\Response;

/**
 * 开放平台账号
 * Class App
 * @description 开放平台账号
 * @package app\adminapi\controller\openapi
 */
class App extends BaseAdminController
{
    /**
     * 账号列表
     * @description 开放账号列表
     * @return Response
     */
    public function pages(): Response
    {
        $where = $this->request->params([
            [ 'name', '' ],
            [ 'status', '' ],
        ]);
        return success((new OpenapiAppService())->getPage($where));
    }

    /**
     * 账号详情
     * @description 开放账号详情
     * @param int $id
     * @return Response
     */
    public function info(int $id): Response
    {
        return success((new OpenapiAppService())->getInfo($id));
    }

    /**
     * 新增账号
     * @description 开放账号新增
     * @return Response
     */
    public function add(): Response
    {
        $data = $this->request->params([
            [ 'name', '' ],
            [ 'status', 1 ],
            [ 'auth_domains', [] ],
            [ 'ip_white', '' ],
            [ 'expire_time', 0 ],
            [ 'token_expire', 7200 ],
            [ 'remark', '' ],
        ]);
        $this->validate($data, 'app\validate\openapi\OpenapiApp');
        return success('添加成功', (new OpenapiAppService())->add($data));
    }

    /**
     * 编辑账号
     * @description 开放账号编辑
     * @param int $id
     * @return Response
     */
    public function edit(int $id): Response
    {
        $data = $this->request->params([
            [ 'name', '' ],
            [ 'status', 1 ],
            [ 'auth_domains', [] ],
            [ 'ip_white', '' ],
            [ 'expire_time', 0 ],
            [ 'token_expire', 7200 ],
            [ 'remark', '' ],
        ]);
        $this->validate($data, 'app\validate\openapi\OpenapiApp');
        (new OpenapiAppService())->edit($id, $data);
        return success('保存成功');
    }

    /**
     * 启用 / 禁用账号
     * @description 开放账号启停
     * @param int $id
     * @return Response
     */
    public function setStatus(int $id): Response
    {
        $data = $this->request->params([
            [ 'status', 1 ],
        ]);
        (new OpenapiAppService())->setStatus($id, (int) $data[ 'status' ]);
        return success('设置成功');
    }

    /**
     * 重置密钥
     * @description 开放账号重置密钥
     * @param int $id
     * @return Response
     */
    public function resetSecret(int $id): Response
    {
        return success((new OpenapiAppService())->resetSecret($id));
    }

    /**
     * 批量重置密钥
     * @description 开放账号批量重置密钥
     * @return Response
     */
    public function batchResetSecret(): Response
    {
        $data = $this->request->params([
            [ 'ids', [] ],
        ]);
        return success('重置成功', (new OpenapiAppService())->batchResetSecret((array) $data[ 'ids' ]));
    }

    /**
     * 查看密钥明文
     * @description 查看开放账号 Secret Key 明文
     * @param int $id
     * @return Response
     */
    public function secret(int $id): Response
    {
        return success((new OpenapiAppService())->getSecret($id));
    }

    /**
     * 删除账号
     * @description 开放账号删除
     * @param int $id
     * @return Response
     */
    public function del(int $id): Response
    {
        (new OpenapiAppService())->del($id);
        return success('删除成功');
    }

    /**
     * 可授权接口清单
     * @description 开放接口清单
     * @return Response
     */
    public function apiTree(): Response
    {
        return success((new OpenapiAppService())->getApiTree());
    }
}
