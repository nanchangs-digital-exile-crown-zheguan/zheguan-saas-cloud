/**
 * 获取WebSocket连接信息
 */
export function getShopCustomerWsInfo() {
    return request.get('shop_customer/ws_info')
}

/**
 * 获取/创建会话
 */
export function getShopCustomerSession() {
    return request.get('shop_customer/session')
}

/**
 * 获取会话历史消息
 */
export function getShopCustomerMessages(sessionId: number, params: Record<string, any>) {
    return request.get(`shop_customer/messages/${sessionId}`, params)
}

/**
 * 上传图片
 */
export function uploadShopCustomerImage(sessionId: number, file: File) {
    const formData = new FormData()
    formData.append('file', file)
    return request.post(`shop_customer/upload_image/${sessionId}`, formData)
}

/**
 * 上传文件
 */
export function uploadShopCustomerFile(sessionId: number, file: File) {
    const formData = new FormData()
    formData.append('file', file)
    return request.post(`shop_customer/upload_file/${sessionId}`, formData)
}

/**
 * 生成本系统会员接入票据（登录态）
 * 返回 chat_saas_site_id/ticket/timestamp/sign，拼到聊天页 URL 即可票据直达
 */
export function createShopCustomerTicket() {
    return request.get('shop_customer/ticket')
}

/**
 * 验证接入票据，换取访客令牌与 WebSocket 连接信息（公开接口，无需登录态）
 * 外部系统 iframe 嵌入 / 本系统会员票据 URL 直达聊天页
 */
export function verifyShopCustomerTicket(params: Record<string, any>) {
    return request.get('shop_customer/open/ticket/verify', params)
}

/**
 * 票据模式上传图片（访客令牌鉴权，公开接口）
 */
export function uploadShopCustomerImageOpen(sessionId: number, visitorToken: string, file: File) {
    const formData = new FormData()
    formData.append('file', file)
    return request.post(`shop_customer/open/upload_image/${sessionId}?visitor_token=${encodeURIComponent(visitorToken)}`, formData)
}

/**
 * 票据模式上传文件（访客令牌鉴权，公开接口）
 */
export function uploadShopCustomerFileOpen(sessionId: number, visitorToken: string, file: File) {
    const formData = new FormData()
    formData.append('file', file)
    return request.post(`shop_customer/open/upload_file/${sessionId}?visitor_token=${encodeURIComponent(visitorToken)}`, formData)
}
