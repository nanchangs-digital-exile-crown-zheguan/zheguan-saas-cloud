import request from '@/utils/request'

/**
 * 开放平台设置 - 获取（总开关）
 */
export function getOpenapiConfig() {
    return request.get('openapi/config')
}

/**
 * 开放平台设置 - 保存（总开关，仅平台端可修改）
 */
export function setOpenapiConfig(data: Record<string, any>) {
    return request.post('openapi/config', data)
}

/**
 * 开放平台设置 - 刷新数据加密密钥（仅平台端）
 */
export function refreshOpenapiSecret() {
    return request.post('openapi/config/secret')
}

/**
 * 开放账号列表
 */
export function getOpenapiAppPage(params: Record<string, any>) {
    return request.get('openapi/app/pages', { params })
}

/**
 * 开放账号详情
 */
export function getOpenapiAppInfo(id: number) {
    return request.get(`openapi/app/${ id }`)
}

/**
 * 查看密钥明文
 */
export function getOpenapiAppSecret(id: number) {
    return request.get(`openapi/app/secret/${ id }`)
}

/**
 * 新增开放账号
 */
export function addOpenapiApp(data: Record<string, any>) {
    return request.post('openapi/app', data)
}

/**
 * 编辑开放账号
 */
export function editOpenapiApp(id: number, data: Record<string, any>) {
    return request.put(`openapi/app/${ id }`, data)
}

/**
 * 启用 / 禁用开放账号
 */
export function setOpenapiAppStatus(id: number, status: number) {
    return request.put(`openapi/app/status/${ id }`, { status })
}

/**
 * 重置密钥
 */
export function resetOpenapiAppSecret(id: number) {
    return request.put(`openapi/app/reset-secret/${ id }`)
}

/**
 * 批量重置密钥
 */
export function batchResetOpenapiSecret(ids: number[]) {
    return request.put('openapi/app/batch/reset-secret', { ids })
}

/**
 * 删除开放账号
 */
export function deleteOpenapiApp(id: number) {
    return request.delete(`openapi/app/${ id }`)
}

/**
 * 可授权接口清单
 */
export function getOpenapiApiTree() {
    return request.get('openapi/app/api-tree')
}

/**
 * 调用日志列表
 */
export function getOpenapiLogPage(params: Record<string, any>) {
    return request.get('openapi/log/pages', { params })
}

/**
 * 接口文档 - 接口清单树（按端过滤：admin 平台端 / site 站点端）
 */
export function getOpenapiDocTree(appType?: string) {
    return request.get('openapi/doc/tree', { params: { app_type: appType || '' } })
}

/**
 * 接口文档 - 接口详情
 */
export function getOpenapiDocDetail(apiKey: string) {
    return request.get('openapi/doc/detail', { params: { api_key: apiKey } })
}

/**
 * 接口文档 - 调试基础信息
 */
export function getOpenapiDocBase() {
    return request.get('openapi/doc/base')
}

/**
 * 接口文档 - 可调试的开放账号列表
 */
export function getOpenapiDocApps() {
    return request.get('openapi/doc/apps')
}

/**
 * 接口文档 - 调试账号密钥
 */
export function getOpenapiDocSecret(id: number) {
    return request.get(`openapi/doc/secret/${ id }`)
}
