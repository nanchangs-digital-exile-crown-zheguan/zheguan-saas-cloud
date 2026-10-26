<template>
    <div class="kefu-chat-window" v-loading="loading">
        <div class="kefu-header">
            <div class="kefu-header-left">
                <el-avatar :size="36" :src="kefuInfo.avatar">{{ kefuInfo.nickname?.charAt(0) || '客' }}</el-avatar>
                <div class="kefu-header-info">
                    <div class="kefu-header-name">{{ kefuInfo.nickname || '在线客服' }}</div>
                    <div class="kefu-header-status">
                        <span class="status-dot" :class="wsConnected ? 'online' : 'offline'"></span>
                        {{ wsConnected ? '在线' : '连接中...' }}
                    </div>
                </div>
            </div>
        </div>

        <div class="kefu-messages" ref="msgContainer">
            <div v-for="msg in messages" :key="msg.id" class="kefu-msg" :class="msg.sender_type">
                <el-avatar :size="32" :src="msg.sender_type === 'kefu' ? kefuInfo.avatar : memberInfo.avatar">
                    {{ msg.sender_type === 'kefu' ? (kefuInfo.nickname?.charAt(0) || 'K') : 'U' }}
                </el-avatar>
                <div class="kefu-msg-content">
                    <div class="kefu-msg-time" v-if="msg.sender_type !== 'system'">
                        <span v-if="msg.sender_type === 'user'" class="kefu-read-status" :class="{ read: msg.is_read }">{{ msg.is_read ? '已读' : '未读' }}</span>
                        {{ formatTime(msg.create_time) }}
                    </div>
                    <div class="kefu-msg-bubble" :class="msg.sender_type">
                        <template v-if="msg.msg_type === 'text'">{{ msg.msg_content }}</template>
                        <el-image
                            v-else-if="msg.msg_type === 'image'"
                            :src="img(msg.msg_content)"
                            :preview-src-list="[img(msg.msg_content)]"
                            fit="cover"
                            class="kefu-msg-image"
                        />
                        <a v-else-if="msg.msg_type === 'file'" :href="img(msg.msg_content)" target="_blank" class="kefu-file-link">
                            <el-icon><Document /></el-icon>
                            <span>下载文件</span>
                        </a>
                    </div>
                </div>
            </div>
            <div v-if="!messages.length && !loading" class="kefu-empty">
                <el-empty description="暂无消息，开始聊天吧" :image-size="80" />
            </div>
        </div>

        <div class="kefu-input">
            <div class="kefu-input-toolbar">
                <el-upload :show-file-list="false" :before-upload="handleImageUpload" accept="image/*">
                    <el-icon size="22" class="kefu-toolbar-btn"><Picture /></el-icon>
                </el-upload>
                <el-upload :show-file-list="false" :before-upload="handleFileUpload" accept="*/*">
                    <el-icon size="22" class="kefu-toolbar-btn"><FolderOpened /></el-icon>
                </el-upload>
            </div>
            <div class="kefu-input-row">
                <el-input
                    v-model="inputText"
                    type="textarea"
                    :rows="2"
                    resize="none"
                    :placeholder="sessionClosed ? '会话已结束，发送消息重新开始' : '输入消息，Enter发送，Shift+Enter换行'"
                    @keydown.enter.exact.prevent="sendText"
                />
                <el-button type="primary" @click="sendText" :disabled="!inputText.trim()">发送</el-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { ElMessage } from 'element-plus'
import { Picture, FolderOpened, Document } from '@element-plus/icons-vue'
import { getShopCustomerWsInfo, getShopCustomerSession, getShopCustomerMessages, uploadShopCustomerImage, uploadShopCustomerFile, verifyShopCustomerTicket, uploadShopCustomerImageOpen, uploadShopCustomerFileOpen } from '~/addon/shop_customer/api/shop_customer'

const loading = ref(true)
const ws = ref<WebSocket | null>(null)
const wsConnected = ref(false)
const sessionClosed = ref(false)
const sessionId = ref(0)
const kefuInfo = reactive({ id: 0, nickname: '', avatar: '' })
const memberInfo = reactive({ member_id: 0, nickname: '', avatar: '' })
const messages = ref<any[]>([])
const inputText = ref('')
const msgContainer = ref<HTMLElement>()
// WebSocket 连接信息缓存（用于会话结束后重新认证、断线后立即重连）
const wsInfoCache = ref<any>(null)
// 待发送队列：会话结束重建、断线重连成功后自动补发
const pendingActions = ref<Array<(sid: number) => void>>([])
// 票据接入模式（外部系统 iframe / 本系统会员票据 URL 直达，无需登录态）
const ticketMode = ref(false)
const route = useRoute()
// 访客令牌缓存键（按接入站点区分；票据一次性消费，刷新页面复用缓存令牌）
const visitorTokenKey = computed(() => `shop_customer_vt_${route.query.chat_saas_site_id || ''}`)

onMounted(async () => {
    try {
        // 票据接入模式：URL 携带 chat_saas_site_id/ticket/timestamp/sign
        if (route.query.ticket && route.query.sign && route.query.timestamp) {
            await initTicketMode()
            return
        }

        const wsRes = await getShopCustomerWsInfo()
        const sessionRes = await getShopCustomerSession()

        // request 返回的是完整响应体 {code, msg, data}，业务数据在 data 字段内
        sessionId.value = sessionRes.data.id
        memberInfo.member_id = wsRes.data.member_id

        if (sessionRes.data.kefu_info) {
            Object.assign(kefuInfo, sessionRes.data.kefu_info)
        }

        const msgRes = await getShopCustomerMessages(sessionRes.data.id, { page: 1, limit: 50 })
        // 后端按id倒序返回最新一页，reverse后按时间正序展示
        messages.value = (msgRes.data.list || []).reverse()
        loading.value = false
        nextTick(() => scrollToBottom())

        wsInfoCache.value = wsRes.data
        connectWs(wsRes.data)
    } catch (e) {
        ElMessage.error('初始化聊天失败')
        loading.value = false
    }
})

onUnmounted(() => {
    if (ws.value) {
        ws.value.close()
        ws.value = null
    }
})

/**
 * 票据接入模式初始化：验证票据换取访客令牌，直接连 WebSocket
 * （会话与历史消息由 WS 认证结果 auth_result 返回）
 */
async function initTicketMode() {
    try {
        const res = await verifyShopCustomerTicket({
            chat_saas_site_id: route.query.chat_saas_site_id,
            ticket: route.query.ticket,
            timestamp: route.query.timestamp,
            sign: route.query.sign
        })
        // 缓存访客令牌与连接信息（票据一次性消费，刷新页面时回退使用）
        localStorage.setItem(visitorTokenKey.value, JSON.stringify({
            visitor_token: res.data.visitor_token,
            ws_url: res.data.ws_url,
            site_id: res.data.site_id
        }))
        applyVisitorToken(res.data)
    } catch (e: any) {
        // 票据一次性消费：刷新页面会报"已被使用"，回退到本地缓存的访客令牌（7天有效）
        const cached = localStorage.getItem(visitorTokenKey.value)
        if (cached) {
            try {
                applyVisitorToken(JSON.parse(cached))
            } catch (parseErr) {
                ElMessage.error('访客凭证解析失败')
                loading.value = false
            }
            return
        }
        ElMessage.error(e?.message || '票据验证失败')
        loading.value = false
    }
}

/**
 * 应用访客令牌并连接 WebSocket
 */
function applyVisitorToken(data: any) {
    if (!data.ws_url || !data.site_id) {
        ElMessage.error('连接信息缺失，请重新从商城进入')
        loading.value = false
        return
    }
    ticketMode.value = true
    memberInfo.nickname = data.member_info?.nickname || ''
    memberInfo.avatar = data.member_info?.avatar || ''

    const wsInfo = {
        ws_url: data.ws_url,
        site_id: data.site_id,
        token: data.visitor_token
    }
    wsInfoCache.value = wsInfo
    loading.value = false
    connectWs(wsInfo)
}

function connectWs(wsInfo: any) {
    const wsUrl = `${wsInfo.ws_url}?token=${encodeURIComponent(wsInfo.token)}&site_id=${wsInfo.site_id}&client_type=user`

    ws.value = new WebSocket(wsUrl)

    ws.value.onopen = () => {
        wsConnected.value = true
        ws.value?.send(JSON.stringify({
            type: 'auth',
            token: wsInfo.token,
            site_id: wsInfo.site_id,
            client_type: 'user',
            source: 'web'
        }))
    }

    ws.value.onmessage = (event) => {
        try {
            const data = JSON.parse(event.data)
            handleWsMessage(data)
        } catch (e) {
            console.error('parse error', e)
        }
    }

    ws.value.onclose = () => {
        wsConnected.value = false
        setTimeout(() => {
            if (!ws.value || ws.value.readyState === WebSocket.CLOSED) {
                connectWs(wsInfo)
            }
        }, 5000)
    }

    ws.value.onerror = () => {
        console.error('WebSocket error')
    }
}

function handleWsMessage(data: any) {
    switch (data.type) {
        case 'auth_result':
            if (data.success) {
                sessionClosed.value = false
                if (data.session) {
                    sessionId.value = data.session.id
                    if (data.session.kefu_info) {
                        Object.assign(kefuInfo, data.session.kefu_info)
                    }
                }
                if (data.member_info) {
                    Object.assign(memberInfo, data.member_info)
                }
                if (data.messages) {
                    // 追加历史消息（按 id 去重），会话结束重建/断线重连时不清空已有聊天记录
                    const existing = new Set(messages.value.map((m: any) => m.id))
                    const incoming = (data.messages || []).filter((m: any) => !existing.has(m.id))
                    if (incoming.length) {
                        messages.value = [...messages.value, ...incoming]
                        nextTick(() => scrollToBottom())
                    }
                }
                // 认证成功后补发排队中的消息（会话重建或断线重连场景）
                if (pendingActions.value.length && sessionId.value) {
                    const actions = pendingActions.value.splice(0)
                    actions.forEach(fn => fn(sessionId.value))
                }
                // 页面打开即视为已读客服消息，admin 端实时显示"用户已读"
                if (sessionId.value) sendReadMarker()
            } else {
                ElMessage.error(data.msg || '认证失败')
            }
            break
        case 'message':
            // WS 推送字段为 content/msg_id，页面渲染用 msg_content/id，需映射
            messages.value.push({
                id: data.msg_id,
                msg_type: data.msg_type,
                msg_content: data.content,
                sender_type: data.sender_type,
                is_read: data.is_read ?? 0,
                create_time: data.create_time
            })
            nextTick(() => scrollToBottom())
            // 页面打开时收到客服消息立即回已读标记
            if (data.sender_type === 'kefu') sendReadMarker()
            break
        case 'message_sent':
            // 发送成功回执，将消息加入本地列表实时展示
            messages.value.push({
                id: data.msg_id,
                msg_type: data.msg_type,
                msg_content: data.content,
                sender_type: data.sender_type,
                is_read: 0,
                create_time: data.create_time
            })
            nextTick(() => scrollToBottom())
            break
        case 'read_receipt':
            // 客服已读我的消息：更新本地已读展示
            if (data.read_by === 'kefu') {
                messages.value.forEach((m: any) => { if (m.sender_type === 'user') m.is_read = 1 })
            }
            break
        case 'session_assigned':
            if (data.kefu_info) {
                Object.assign(kefuInfo, data.kefu_info)
                ElMessage.success(`客服 ${data.kefu_info.nickname} 为您服务`)
            }
            break
        case 'session_closed':
            sessionClosed.value = true
            sessionId.value = 0
            kefuInfo.id = 0
            kefuInfo.nickname = ''
            kefuInfo.avatar = ''
            messages.value.push({
                id: Date.now(),
                msg_type: 'text',
                msg_content: data.closed_by === 'kefu' ? '客服已结束会话，发送消息可重新开始' : '会话已结束，发送消息可重新开始',
                sender_type: 'system',
                create_time: Date.now() / 1000
            })
            nextTick(() => scrollToBottom())
            break
        case 'error':
            // 服务端业务错误提示（如向已结束的会话发消息）
            ElMessage.error(data.msg || '操作失败')
            break
        case 'system_message':
            messages.value.push({
                id: Date.now(),
                msg_type: 'text',
                msg_content: data.content,
                sender_type: 'system',
                create_time: Date.now() / 1000
            })
            nextTick(() => scrollToBottom())
            break
        case 'heartbeat':
            // 回应服务端心跳，避免被 Gateway 判定无响应而踢下线
            ws.value?.send(JSON.stringify({ type: 'heartbeat' }))
            break
    }
}

function sendText() {
    const text = inputText.value.trim()
    if (!text) return
    // 会话已结束：缓存消息并重新认证，后端会创建新会话（重新排队/分配客服）
    if (sessionClosed.value || !sessionId.value) {
        pendingActions.value.push((sid: number) => sendWsMessage(sid, 'text', text))
        inputText.value = ''
        restartSession()
        return
    }
    if (ws.value && ws.value.readyState === WebSocket.OPEN) {
        sendWsMessage(sessionId.value, 'text', text)
        inputText.value = ''
    } else {
        // 断线：缓存消息并立即重连，认证成功后自动补发
        pendingActions.value.push((sid: number) => sendWsMessage(sid, 'text', text))
        inputText.value = ''
        ElMessage.warning('连接已断开，正在重连...')
        reconnectNow()
    }
}

/**
 * 通过 WebSocket 发送聊天消息
 */
function sendWsMessage(sid: number, msgType: string, content: string) {
    if (ws.value && ws.value.readyState === WebSocket.OPEN) {
        ws.value.send(JSON.stringify({
            type: 'message',
            session_id: sid,
            msg_type: msgType,
            content: content
        }))
    }
}

/**
 * 发送已读标记：将客服消息标记为已读（admin 端实时展示"用户已读"）
 */
function sendReadMarker() {
    if (ws.value && ws.value.readyState === WebSocket.OPEN && sessionId.value) {
        ws.value.send(JSON.stringify({ type: 'read', session_id: sessionId.value }))
    }
}

/**
 * 会话结束后重新开始：重新认证以创建新会话（后端无未结束会话时会新建并排队分配）
 */
function restartSession() {
    if (!wsInfoCache.value) return
    if (ws.value && ws.value.readyState === WebSocket.OPEN) {
        ws.value.send(JSON.stringify({
            type: 'auth',
            token: wsInfoCache.value.token,
            site_id: wsInfoCache.value.site_id,
            client_type: 'user',
            source: 'web'
        }))
    } else {
        reconnectNow()
    }
}

/**
 * 立即重连 WebSocket（连接断开时），onopen 会自动重新认证
 */
function reconnectNow() {
    if (!wsInfoCache.value) return
    if (ws.value && ws.value.readyState === WebSocket.OPEN) return
    if (ws.value && ws.value.readyState === WebSocket.CONNECTING) return
    connectWs(wsInfoCache.value)
}

/**
 * 上传图片（票据模式走公开接口访客令牌鉴权，常规模式走登录态接口）
 */
function uploadImageRequest(sid: number, file: File) {
    return ticketMode.value
        ? uploadShopCustomerImageOpen(sid, wsInfoCache.value?.token || '', file)
        : uploadShopCustomerImage(sid, file)
}

/**
 * 上传文件（同上）
 */
function uploadFileRequest(sid: number, file: File) {
    return ticketMode.value
        ? uploadShopCustomerFileOpen(sid, wsInfoCache.value?.token || '', file)
        : uploadShopCustomerFile(sid, file)
}

async function handleImageUpload(file: File): Promise<boolean> {
    // 会话已结束或断线：先重建会话/重连，成功后再上传发送
    if (sessionClosed.value || !sessionId.value) {
        pendingActions.value.push(async (sid: number) => {
            try {
                const res = await uploadImageRequest(sid, file)
                sendWsMessage(sid, 'image', res.data.url)
            } catch (e) {
                ElMessage.error('图片上传失败')
            }
        })
        restartSession()
        return false
    }
    try {
        const res = await uploadImageRequest(sessionId.value, file)
        sendWsMessage(sessionId.value, 'image', res.data.url)
    } catch (e) {
        ElMessage.error('图片上传失败')
    }
    return false
}

async function handleFileUpload(file: File): Promise<boolean> {
    if (sessionClosed.value || !sessionId.value) {
        pendingActions.value.push(async (sid: number) => {
            try {
                const res = await uploadFileRequest(sid, file)
                sendWsMessage(sid, 'file', res.data.url)
            } catch (e) {
                ElMessage.error('文件上传失败')
            }
        })
        restartSession()
        return false
    }
    try {
        const res = await uploadFileRequest(sessionId.value, file)
        sendWsMessage(sessionId.value, 'file', res.data.url)
    } catch (e) {
        ElMessage.error('文件上传失败')
    }
    return false
}

function scrollToBottom() {
    if (msgContainer.value) {
        msgContainer.value.scrollTop = msgContainer.value.scrollHeight
    }
}

function formatTime(timestamp: number): string {
    if (!timestamp) return ''
    const d = new Date(timestamp * 1000)
    const now = new Date()
    if (d.toDateString() === now.toDateString()) {
        return d.toTimeString().slice(0, 5)
    }
    return `${d.getMonth() + 1}/${d.getDate()} ${d.toTimeString().slice(0, 5)}`
}
</script>

<style scoped>
.kefu-chat-window {
    width: 100%;
    max-width: 420px;
    height: 600px;
    margin: 40px auto;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.kefu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 20px;
    background: linear-gradient(135deg, #409eff, #36a3f7);
    color: #fff;
}

.kefu-header-left {
    display: flex;
    align-items: center;
    gap: 10px;
}

.kefu-header-info {
    display: flex;
    flex-direction: column;
}

.kefu-header-name {
    font-weight: 600;
    font-size: 15px;
}

.kefu-header-status {
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 4px;
    opacity: 0.9;
}

.status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    display: inline-block;
}

.status-dot.online {
    background: #67c23a;
}

.status-dot.offline {
    background: #ddd;
}

.kefu-messages {
    flex: 1;
    overflow-y: auto;
    padding: 16px 20px;
    background: #f5f5f5;
}

.kefu-msg {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
    align-items: flex-start;
}

.kefu-msg.user {
    flex-direction: row-reverse;
}

.kefu-msg.system {
    justify-content: center;
}

.kefu-msg-content {
    max-width: 70%;
}

.kefu-msg.user .kefu-msg-content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.kefu-msg-time {
    font-size: 11px;
    color: #999;
    margin-bottom: 2px;
}

/* 已读/未读状态（我发的消息，客服是否已读） */
.kefu-read-status {
    margin-right: 6px;
    color: #aaa;
}

.kefu-read-status.read {
    color: var(--primary-color, #409eff);
}

.kefu-msg-bubble {
    padding: 8px 12px;
    border-radius: 8px;
    font-size: 14px;
    line-height: 1.5;
    word-break: break-word;
}

.kefu-msg-bubble.kefu {
    background: #fff;
}

.kefu-msg-bubble.user {
    background: #409eff;
    color: #fff;
}

.kefu-msg-bubble.system {
    background: #fff6e6;
    color: #e6a23c;
    font-size: 12px;
}

.kefu-msg-image {
    max-width: 180px;
    max-height: 180px;
    border-radius: 4px;
}

.kefu-file-link {
    display: flex;
    align-items: center;
    gap: 4px;
    color: #409eff;
    text-decoration: none;
}

.kefu-empty {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.kefu-input {
    border-top: 1px solid #e4e7ed;
    background: #fff;
}

.kefu-input-toolbar {
    display: flex;
    gap: 12px;
    padding: 6px 16px;
    border-bottom: 1px solid #f0f0f0;
}

.kefu-toolbar-btn {
    cursor: pointer;
    color: #909399;
    transition: color 0.2s;
}

.kefu-toolbar-btn:hover {
    color: #409eff;
}

.kefu-input-row {
    display: flex;
    gap: 8px;
    padding: 8px 16px 12px;
}

.kefu-input-row .el-input {
    flex: 1;
}
</style>
