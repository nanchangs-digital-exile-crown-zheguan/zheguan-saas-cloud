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

use app\adminapi\middleware\AdminCheckRole;
use app\adminapi\middleware\AdminCheckToken;
use app\adminapi\middleware\AdminLog;
use think\facade\Route;

/**
 * 开放平台（管理端）
 * 平台端与店铺端共用同一套路由，通过请求头 site-id 区分数据范围
 */
Route::group('openapi', function () {
    /***************************************************** 开放设置 ****************************************************/
    // 获取开放平台设置（总开关）
    Route::get('config', 'openapi.Config/getConfig');
    // 保存开放平台设置（总开关）
    Route::post('config', 'openapi.Config/setConfig');
    // 刷新数据加密密钥（仅平台端）
    Route::post('config/secret', 'openapi.Config/refreshSecret');

    /***************************************************** 开放账号 ****************************************************/
    // 账号列表
    Route::get('app/pages', 'openapi.App/pages');
    // 可授权接口清单
    Route::get('app/api-tree', 'openapi.App/apiTree');
    // 查看密钥明文
    Route::get('app/secret/:id', 'openapi.App/secret');
    // 账号详情
    Route::get('app/:id', 'openapi.App/info');
    // 新增账号
    Route::post('app', 'openapi.App/add');
    // 启用 / 禁用
    Route::put('app/status/:id', 'openapi.App/setStatus');
    // 重置密钥
    Route::put('app/reset-secret/:id', 'openapi.App/resetSecret');
    // 批量重置密钥（三段路径，避免与 PUT app/:id 冲突）
    Route::put('app/batch/reset-secret', 'openapi.App/batchResetSecret');
    // 编辑账号
    Route::put('app/:id', 'openapi.App/edit');
    // 删除账号
    Route::delete('app/:id', 'openapi.App/del');

    /***************************************************** 接口文档 ****************************************************/
    // 接口清单树
    Route::get('doc/tree', 'openapi.Doc/tree');
    // 接口详情
    Route::get('doc/detail', 'openapi.Doc/detail');
    // 调试基础信息
    Route::get('doc/base', 'openapi.Doc/base');
    // 可调试的开放账号列表
    Route::get('doc/apps', 'openapi.Doc/apps');
    // 调试账号密钥
    Route::get('doc/secret/:id', 'openapi.Doc/secret');

    /***************************************************** 调用日志 ****************************************************/
    // 日志列表
    Route::get('log/pages', 'openapi.Log/pages');
})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class,
]);
