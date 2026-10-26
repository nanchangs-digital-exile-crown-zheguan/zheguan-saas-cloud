<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
import { launchInterceptor } from '@/utils/interceptor'
import { initSplitBuildRuntime, isSplitBuildEnabled, resolveAddonBridgeUrl } from '@/utils/addon-loader'
import { setActiveAddonPageRoute } from '@/utils/addon-page-route'
import { getToken, isWeixinBrowser, getSiteId, currRoute, deepClone, setThemeColor } from '@/utils/common'
import useMemberStore from '@/stores/member'
import useConfigStore from '@/stores/config'
import useSystemStore from '@/stores/system'
import { useLogin } from '@/hooks/useLogin'
import { useShare } from '@/hooks/useShare'
import { useLocation } from '@/hooks/useLocation'
import { ensureDiyDecorateBridge } from '@/utils/diy-decorate-bridge'
import envConfig from '@/utils/config'

const locationVal = useLocation(true);

// #ifdef MP
// 是否已有更新相关弹窗正在展示，避免重复弹窗
let mpUpdateModalShowing = false
// 本次启动是否已提示过更新，避免 onLaunch 与 onShow 重复提示
let mpUpdateNotified = false

/**
 * 检查小程序新版本：冷启动（onLaunch）与每次进入（onShow）都调用
 * 注意：微信客户端自身只在冷启动时真正发起版本检查，此处重复调用是兜底，
 * 确保已下载的新版本包能被及时提示，不会因为错过 onLaunch 时机而漏掉
 */
const checkMpUpdate = () => {
    // 部分小程序平台（如支付宝）不支持该 API，做兼容判断
    if (typeof uni.getUpdateManager !== 'function') return

    const updateManager = uni.getUpdateManager()

    updateManager.onCheckForUpdate((res: any) => {
        // hasUpdate 为 true 时，后续会在 onUpdateReady / onUpdateFailed 中回调
        console.log('[mp-update] hasUpdate:', res?.hasUpdate)
    })

    updateManager.onUpdateReady(() => {
        if (mpUpdateModalShowing || mpUpdateNotified) return
        mpUpdateModalShowing = true
        mpUpdateNotified = true
        uni.showModal({
            title: '更新提示',
            content: '新版本已经准备好，是否重启应用？',
            success: (res: any) => {
                mpUpdateModalShowing = false
                if (res.confirm) {
                    // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                    updateManager.applyUpdate()
                }
            },
            fail: () => {
                mpUpdateModalShowing = false
            }
        })
    })

    updateManager.onUpdateFailed(() => {
        if (mpUpdateModalShowing || mpUpdateNotified) return
        mpUpdateModalShowing = true
        mpUpdateNotified = true
        // 新版本包下载失败（弱网、存储不足等），给出提示，用户重新进入小程序后会再次检查
        uni.showModal({
            title: '更新提示',
            content: '新版本下载失败，请检查网络后重新进入小程序',
            showCancel: false,
            complete: () => {
                mpUpdateModalShowing = false
            }
        })
    })
}
// #endif

onLaunch(async (data: any) => {
    // 初始化全局数据：必须同步执行，且放在首个 await 之前。
    // 否则 onLaunch 在 await initSplitBuildRuntime() 让出微任务期间，
    // 页面组件（如 top-tabbar）的 setup 已执行，此时 systemStore.systemInfo 仍为 null
    // 会抛出 “Cannot read properties of null (reading 'platform')”。
    const systemStore = useSystemStore()
    const initGlobalData = () => {
        systemStore.systemInfo = uni.getSystemInfoSync();
        systemStore.getMenuButtonInfoFn()
    }
    initGlobalData()

    // 添加初始化拦截器
    launchInterceptor()

    // #ifdef H5
    if (isSplitBuildEnabled()) {
        // 处理未知插件直接 URL 访问：动态判定是否需要桥接（基于 router.resolve，不写死插件名）
        const launchPath = data.path || ''
        const addonMatch = launchPath.match(/^\/?addon\/([^/]+)\/(?:[^/]+\/)?pages\/(.+)/)
        if (addonMatch) {
            // 预登记当前插件路由，使 initSplitBuildRuntime 首屏只预热该插件，而非全量插件
            setActiveAddonPageRoute(launchPath)

            const bridgeUrl = resolveAddonBridgeUrl(launchPath)
            if (bridgeUrl) {
                // 先把浏览器 URL 同步改成桥接页路径，消除闪烁
                const newPathname = location.pathname.replace(
                    /\/addon\/([^/]+)\/(?:[^/]+\/)?pages\/(.+)$/,
                    `/app/pages/addon-universal/index`
                )
                history.replaceState(null, '', newPathname)

                uni.reLaunch({ url: bridgeUrl })
                // 不 return，让后续的 getInitFn 等初始化逻辑正常执行
            }
        }

        // 必须 await：确保运行期安装清单（assets/addons/index.json）加载完成，
        // 否则 onLaunch 阶段无法可靠区分“内置插件（不桥接）”与“外部部署插件（桥接）”
        await initSplitBuildRuntime()
    }
    // #endif

    // #ifdef H5
    ensureDiyDecorateBridge()
    // #endif

    // #ifdef H5
    systemStore.systemInfo.platform == 'ios' && (uni.setStorageSync('initUrl', location.href))

    // 传输给后台数据
    window.parent.postMessage(JSON.stringify({
        type: 'appOnLaunch',
        message: '初始化加载完成'
    }), '*');

    // 监听父页面发来的消息
    window.addEventListener('message', event => {
        try {
            let data = {
                type: ''
            };
            if (typeof event.data == 'string') {
                data = JSON.parse(event.data)
            } else if (typeof event.data == 'object') {
                data = event.data
            }
            if (data.type && data.type == 'appOnReady') {
                window.parent.postMessage(JSON.stringify({
                    type: 'appOnReady',
                    message: '加载完成'
                }), '*');
                // 更新全局数据
                initGlobalData()
            }
        } catch (e) {
            console.log('uni-app App.vue 接受数据错误', e)
        }
    }, false);

    // 缺少站点id，拦截
    if (process.env.NODE_ENV == 'development' && (getSiteId(uni.getStorageSync('wap_site_id') || envConfig.VITE_SITE_ID) === '')) return;

    try {
        uni.hideTabBar() // 隐藏tabbar
    } catch (e) {

    }

    const { wechatInit } = useShare()
    wechatInit()
    // #endif

    // #ifdef MP
    checkMpUpdate()
    // #endif

    // 获取初始化数据信息
    useSystemStore().getInitFn(async () => {
        const configStore = useConfigStore()

        let loginConfig = uni.getStorageSync('login_config')
        if (!loginConfig) {
            loginConfig = deepClone(configStore.login)
        }

        let url: any = currRoute()
        // 设置主色调
        setThemeColor(url)

        // 判断账号锁定后在登录注册页面不进行请求三方登录注册,防止在页面出不去 member_lock 为账号锁定标识
        if (uni.getStorageSync('member_lock') && (['app/pages/auth/index', 'app/pages/auth/login', 'app/pages/auth/register', 'app/pages/auth/resetpwd'].indexOf(url) != -1) && (loginConfig.is_username || loginConfig.is_mobile || loginConfig.is_bind_mobile)) {
            return false
        }

        // 判断是否已登录
        if (getToken()) {
            const memberStore: any = useMemberStore()

            await memberStore.setToken(getToken(), () => {
                if (!uni.getStorageSync('openid')) {
                    const memberInfo = useMemberStore().info
                    const login = useLogin()

                    // #ifdef MP-WEIXIN
                    if (memberInfo.mobile) uni.setStorageSync('wap_member_mobile', memberInfo.mobile) // 存储会员手机号，防止重复请求微信获取手机号接口
                    if (memberInfo && memberInfo.weapp_openid) {
                        uni.setStorageSync('openid', memberInfo.weapp_openid) // 授权登录后存储openid
                    } else {
                        login.getAuthCode({ updateFlag: true }) // 更新openid
                    }
                    // #endif

                    // #ifdef H5
                    if (isWeixinBrowser()) {
                        if (memberInfo && memberInfo.wx_openid) {
                            uni.setStorageSync('openid', memberInfo.wx_openid)
                        } else {
                            if (data.query.code) {
                                // 检测身份是否合法（当前登录的账号是不是我的），openid有效后才能更新登录
                                login.updateOpenid(data.query.code, () => {
                                    login.authLogin({ code: data.query.code })
                                })
                            } else if (loginConfig.is_auth_register && loginConfig.is_force_access_user_info) {
                                // 强制获取用户信息
                                login.getAuthCode({ scopes: 'snsapi_userinfo' })
                            } else {
                                // 静默获取
                                login.getAuthCode({ scopes: 'snsapi_base' })
                            }
                        }
                    }
                    // #endif

                }

                // todo 已注册的会员不受影响
                // 开启强制绑定手机号
                if (uni.getStorageSync('isBindMobile')) {
                    uni.removeStorageSync('isBindMobile');
                }
                //
                // if (loginConfig.is_bind_mobile && !memberStore.info.mobile) {
                //     // 强制绑定手机号
                //     uni.setStorageSync('isBindMobile', true)
                // }
            })

        }

        if (!getToken()) {

            // #ifdef MP
            // 小程序 会员退出后不会自动登录
            if (uni.getStorageSync('autoLoginLock')) return;
            // #endif

            const login = useLogin()

            // #ifdef MP
            // 第三方平台自动注册登录
            login.getAuthCode()
            // #endif

            // #ifdef H5
            if (isWeixinBrowser()) {
                if (uni.getStorageSync('autoLoginLock') && !uni.getStorageSync('wechat_login_back')) return;
                if (uni.getStorageSync('wechat_login_back')) {
                    uni.removeStorageSync('wechat_login_back') // 删除微信公众号手动授权登录回调标识
                    if (data.query.code) {
                        login.authLogin({ code: data.query.code })
                    }
                } else if (loginConfig.is_auth_register && loginConfig.is_force_access_user_info) {
                    // 开启自动注册会员，并且强制获取用户信息
                    // 检测是否已授权获取用户信息
                    // let nickname = uni.getStorageSync('nickname');
                    // let avatar = uni.getStorageSync('avatar');
                    // let openid = uni.getStorageSync('openid');
                    // if (!nickname || !avatar || !openid) {}
                    login.getAuthCode({ scopes: 'snsapi_userinfo' })
                } else {
                    // 检测是否已授权获取用户信息
                    // let openid = uni.getStorageSync('openid');
                    // if (!openid) {}
                    login.getAuthCode({ scopes: 'snsapi_base' }) // 静默获取
                }
            }
            // #endif
        }
    })

    // 控制弹窗展示
    uni.setStorageSync('isOnLoad', true); // 存储是页面是否加载完成的状态

    // #ifdef APP-PLUS
    systemStore.getVersionInfoFn()
    // #endif
})

onShow(() => {
    // #ifdef MP
    // 每次进入小程序（含后台切回的热启动）都重新检查一次版本
    checkMpUpdate()
    // #endif
})

onHide(() => {
})
</script>

<style>
uni-page-head {
    display: none !important;
}
</style>
