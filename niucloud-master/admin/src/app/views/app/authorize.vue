<template>
    <!--授权信息（页面主体为内嵌官网页面：未登录为登录+选择授权，已登录为官网账号与我的授权模块）-->
    <div class="main-container">
        <!-- 首屏加载 -->
        <el-card v-if="!ready" class="box-card !border-none" shadow="never" v-loading="true"
            :style="{ height: contentHeight + 'px' }"></el-card>

        <el-card v-else class="box-card !border-none" shadow="never">
            <div class="relative overflow-hidden border border-[#EBEEF7]"
                :style="{ minHeight: contentHeight + 'px' }">
                <iframe v-if="embedUrl" ref="embedFrame" :src="embedUrl" class="w-full block"
                    :style="{ height: iframeRenderHeight + 'px', border: '0' }" referrerpolicy="no-referrer"
                    @load="onIframeLoad"></iframe>

                <div v-if="!embedReady"
                    class="absolute inset-0 flex flex-col items-center justify-center bg-[#F5F7FB] text-[#9699B6] text-[13px]">
                    <el-icon class="is-loading text-[22px] mb-[10px]">
                        <Loading />
                    </el-icon>
                    {{ t('loadingEmbed') }}
                </div>
            </div>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from "vue"
import { t } from "@/lang"
import { getEmbedUrl, getAccountInfo, selectAuthorization, cancelAuthorization, saveAccountToken, logoutAccount } from "@/app/api/account"
import { ElMessage, ElMessageBox } from "element-plus"
import { Loading } from "@element-plus/icons-vue"

const ready = ref(false)

/** 是否已选用/绑定授权 */
const bound = ref(false)

/** 当前已选用/绑定的授权码（传给官网账号页，用于标记「当前使用中」） */
const currentAuthCode = ref("")

/** 内嵌官网页面 */
const embedUrl = ref("")
/** iframe 元素（用于向内嵌页主动同步登录态） */
const embedFrame = ref<HTMLIFrameElement | null>(null)
const officialOrigin = ref("")
const embedReady = ref(false)
const iframeHeight = ref(720)

/**
 * 是否已保存官网账号登录态（由服务端读取本地配置给出，令牌本身不下发前端）
 * 用于决定内嵌登录页还是账号页：已登录直接进账号页，避免先闪一下登录页
 */
const hasToken = ref(false)

/** 内容区可视高度：加载阶段也要占满布局剩余空间 */
const contentHeight = ref(720)
/** iframe 实际渲染高度：不低于内容区高度 */
const iframeRenderHeight = computed(() => Math.max(iframeHeight.value, contentHeight.value))

/** 计算内容区高度（视口高度 - 容器距顶部距离） */
const calcContentHeight = () => {
    const el = document.querySelector(".main-container") as HTMLElement | null
    const top = el?.getBoundingClientRect().top || 120
    contentHeight.value = Math.max(480, Math.round(window.innerHeight - top))
}

/**
 * 读取绑定状态（决定内嵌登录页还是账号页）
 */
const loadAccount = async () => {
    try {
        const res: any = await getAccountInfo()
        bound.value = !!res?.data?.bound
        hasToken.value = !!res?.data?.has_token
        currentAuthCode.value = res?.data?.authorization?.auth_code || ""
    } catch (e) {
        bound.value = false
        hasToken.value = false
    }
}

/**
 * 生成官网内嵌页地址（由服务端生成）
 * - 未登录：/embed/login（登录 + 选择授权）
 * - 已登录：/embed/account（官网账号资料 + 我的授权模块）
 * - 官网登录令牌由服务端在地址中注入（前端不经手），此处只附加当前已选用授权
 */
const loadEmbed = async (mode: "login" | "account") => {
    const res: any = await getEmbedUrl({ mode, origin: window.location.origin })
    let url = res?.data?.url || ""
    if (!url) return

    // host 必须是父页面（本页）的实际 origin：
    // 官网内嵌页 postMessage 时以它为 targetOrigin，与真实父窗口不一致时消息会被浏览器静默丢弃
    // （表现为收不到 ready、选中授权后也不回调 select）
    // domain 用本页访问域名（页面传值最准）：后端给的是「接口域名」，与站点真实域名可能不一致
    try {
        const embedUrlObj = new URL(url)
        embedUrlObj.searchParams.set("host", window.location.origin)
        embedUrlObj.searchParams.set("domain", window.location.hostname)
        url = embedUrlObj.toString()
    } catch (e) {
        // 地址异常时保持原样
    }

    try {
        officialOrigin.value = new URL(url).origin
    } catch (e) {
        officialOrigin.value = ""
    }

    // 附加当前已选用授权（登录令牌由服务端注入，避免地址里出现两个 token 参数）
    if (currentAuthCode.value) {
        url += (url.indexOf("?") > -1 ? "&" : "?") + `current_auth=${ encodeURIComponent(currentAuthCode.value) }`
    }

    embedReady.value = false
    embedUrl.value = url

    // 兜底：无论是否收到官网 ready 消息，2 秒后隐藏遮罩
    setTimeout(() => { embedReady.value = true }, 2000)
}

const onIframeLoad = () => {
    // iframe 加载完成即隐藏遮罩
    setTimeout(() => { embedReady.value = true }, 800)
}

/**
 * 站点标识：host（含端口）+ 去掉 www 前缀
 * 用于忽略「协议 http/https」「裸域 / www」的差异
 */
const siteKeyOf = (value: string) => {
    try {
        return new URL(value).host.replace(/^www\./i, "").toLowerCase()
    } catch (e) {
        return ""
    }
}

/**
 * 消息来源校验
 * 先严格相等；不相等时再比对站点标识，
 * 因为官网可能出现 http -> https、裸域 -> www 跳转，跳转后的文档 origin 与后端下发的地址并不一致
 */
const isTrustedOrigin = (origin: string) => {
    if (!origin) return false
    if (officialOrigin.value && origin === officialOrigin.value) return true

    const expected = siteKeyOf(officialOrigin.value)
    return !!expected && siteKeyOf(origin) === expected
}

/**
 * 接收官网内嵌页消息
 */
const onMessage = async (e: MessageEvent) => {
    if (!isTrustedOrigin(e.origin)) return
    const data = e.data || {}
    if (data.source !== "niucloud-embed") return

    switch (data.type) {
        case "niucloud:ready":
            embedReady.value = true
            // 内嵌页已有登录态但本地没保存：主动索要并保存（消息丢失时自愈）
            syncTokenFromEmbed(data.payload)
            break
        case "niucloud:resize":
            if (data.payload?.height) {
                iframeHeight.value = Math.max(600, Math.min(1400, Number(data.payload.height)))
            }
            break
        case "niucloud:token":
            // 官网登录页回传登录态：保存到本地，重进页面即可免登录
            await saveEmbedToken(data.payload)
            break
        case "niucloud:selected":
            await selectFromEmbed(data.payload)
            break
        case "niucloud:cancel_selected":
            await cancelFromEmbed(data.payload)
            break
        case "niucloud:logout":
            await onEmbedLogout()
            break
    }
}

/**
 * 内嵌页已有登录态而本地未保存时，向它索要令牌并保存
 * 场景：登录时的 postMessage 丢失、或当时后端未就绪，导致无法免登录
 */
const syncTokenFromEmbed = (payload: any) => {
    if (!payload?.hasToken || hasToken.value) return

    const frame = embedFrame.value
    if (!frame?.contentWindow || !officialOrigin.value) return

    frame.contentWindow.postMessage(
        { source: "niucloud-parent", type: "niucloud:need_token", payload: {} },
        officialOrigin.value
    )
}

/**
 * 保存官网登录态（内嵌页登录后回传）
 * 令牌只落到服务端配置，前端不再持有，避免每次进入都要重新登录
 */
const saveEmbedToken = async (payload: any) => {
    // 优先保存长期刷新令牌（access token 过期后由服务端续期）；官网旧版本只回传 token 时也能兼容
    if (!payload?.token && !payload?.refresh_token) return

    try {
        await saveAccountToken({
            token: payload.token || "",
            expires_time: Number(payload.expires_time || 0),
            refresh_token: payload.refresh_token || "",
            refresh_expires_time: Number(payload.refresh_expires_time || 0)
        })
        hasToken.value = true
    } catch (e) {
        // 保存失败不影响本次会话，仅影响下次免登录
        console.error("[embed] 保存官网登录态失败（下次进入需重新登录）：", e)
    }
}

/**
 * 授权码脱敏：保留前后各若干位，中间用 * 代替
 * 星号数量与实际被隐藏的字符数一一对应（与官网内嵌页 maskedCode 规则保持一致）
 */
const maskAuthCode = (code: string) => {
    const value = String(code || "")
    if (!value) return ""

    const len = value.length
    if (len > 10) return `${ value.slice(0, 6) }${ "*".repeat(len - 10) }${ value.slice(-4) }`
    if (len > 4) return `${ value.slice(0, 2) }${ "*".repeat(len - 4) }${ value.slice(-2) }`
    return "*".repeat(len)
}

/**
 * 覆盖确认：系统已有授权、且与新选的授权不是同一条时，先让用户确认
 * @returns 是否允许继续（true = 可写入生效配置）
 */
const confirmReplaceAuth = async (nextAuthCode: string) => {
    if (!bound.value || !currentAuthCode.value) return true
    if (String(currentAuthCode.value) === String(nextAuthCode)) return true

    try {
        await ElMessageBox.confirm(
            `${ t("currentAuthCode") }${ maskAuthCode(currentAuthCode.value) }；${ t("replaceAuthTip") }`,
            t("replaceAuthTitle"),
            {
                type: "warning",
                confirmButtonText: t("confirm"),
                cancelButtonText: t("cancel")
            }
        )
        return true
    } catch (e) {
        // 用户取消：不写入、不切页
        return false
    }
}

/**
 * 官网内嵌页回传所选授权 -> 写入系统授权配置（NIUCLOUD_CONFIG）并生效
 */
const selectFromEmbed = async (payload: any) => {
    if (!payload?.auth_code || !payload?.auth_secret) return

    // 系统已有授权且与新选的不是同一条：覆盖前二次确认
    if (!(await confirmReplaceAuth(payload.auth_code))) return

    try {
        await selectAuthorization({
            auth_code: payload.auth_code,
            auth_secret: payload.auth_secret,
            site_address: payload.site_address || "",
            company_name: payload.company_name || "",
            product_key_name: payload.product_key_name || ""
        })
        bound.value = true
        currentAuthCode.value = payload.auth_code || ""
        ElMessage.success(t("selectSuccess"))
        // 选用后切换为官网账号页
        await loadEmbed("account")
    } catch (e) {
        // 错误提示由请求层统一处理
    }
}

/**
 * 向官网内嵌页发消息（targetOrigin 用官网 origin）
 */
const postToEmbed = (type: string, payload: any) => {
    const frame = embedFrame.value
    if (!frame?.contentWindow || !officialOrigin.value) return

    frame.contentWindow.postMessage(
        { source: "niucloud-parent", type, payload },
        officialOrigin.value
    )
}

/**
 * 官网内嵌页请求取消选用 -> 清空系统已选授权（NIUCLOUD_CONFIG）
 *
 * 说明：
 * - 不重载 iframe：内嵌页已做乐观更新，这里只回执结果，避免整页重新请求造成闪烁与多余请求
 * - 失败时回执 success:false，内嵌页据此回滚到取消前的选中状态（错误提示由请求层统一给出）
 */
const cancelFromEmbed = async (payload: any) => {
    try {
        await cancelAuthorization({
            auth_code: payload?.auth_code || "",
            site_address: payload?.site_address || "",
            company_name: payload?.company_name || "",
            product_key_name: payload?.product_key_name || ""
        })
        bound.value = false
        currentAuthCode.value = ""
        ElMessage.success(t("cancelAuthSuccess"))
        postToEmbed("niucloud:cancel_result", { success: true })
    } catch (e) {
        console.error("[embed] 取消选用授权失败：", e)
        postToEmbed("niucloud:cancel_result", { success: false })
    }
}

/**
 * 官网内嵌页主动退出：清除本地账号信息（已绑定的授权保留），并切回登录页
 */
const onEmbedLogout = async () => {
    try {
        await logoutAccount()
    } catch (e) {
        // 忽略：本地请求异常不影响退出体验
    }

    hasToken.value = false
    bound.value = false
    currentAuthCode.value = ""
    await loadEmbed("login")
}

onMounted(async () => {
    window.addEventListener("message", onMessage)
    window.addEventListener("resize", calcContentHeight)
    calcContentHeight()

    await loadAccount()
    ready.value = true

    // 已保存官网登录态 / 已选用授权 -> 直接进账号页，避免先闪一下登录页
    await loadEmbed(hasToken.value || bound.value ? "account" : "login")
})

onUnmounted(() => {
    window.removeEventListener("message", onMessage)
    window.removeEventListener("resize", calcContentHeight)
})
</script>

<style lang="scss" scoped>
:deep(.el-button) {
    border-radius: 4px !important;
}

/* 内嵌页铺满卡片，去掉 el-card 默认内边距 */
:deep(.el-card__body) {
    padding: 0;
}

/* 本页特殊：卡片与内嵌容器不要圆角 */
:deep(.el-card) {
    border-radius: 0;
}

/**
 * 本页特殊：去掉布局内容区的留白（--cmp-layout-content-padding，默认 15px），
 * 让 iframe 区域铺满内容区；页面留白改由官网内嵌页自己控制
 */
.main-container {
    margin: calc(0px - var(--cmp-layout-content-padding, 15px));
}
</style>
