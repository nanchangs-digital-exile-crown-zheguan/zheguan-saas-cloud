import { defineStore } from 'pinia'
import { getToken, setToken, removeToken, getAppType } from '@/utils/common'
import { login, logout, getAuthMenus, getSiteInfo } from '@/app/api/auth'
import storage from '@/utils/storage'
import router from '@/router'
import { formatRouters, findFirstValidRoute, findRules } from '@/router/routers'
import useTabbarStore from './tabbar'
import Test from '@/utils/test'

interface User {
    token: string,
    userInfo: object,
    siteInfo: null | Record<string, any>,
    routers: any[],
    rules: any[],
    addonIndexRoute: Record<string, symbol>
}

const userStore = defineStore('user', {
    state: (): User => {
        return {
            token: getToken() || '',
            userInfo: storage.get('userinfo') || {},
            siteInfo: null,
            routers: [],
            rules: [],
            addonIndexRoute: {}
        }
    },
    actions: {
        async getSiteInfo() {
            await getSiteInfo().then(({ data }) => {
                this.siteInfo = data
                storage.set({ key: 'siteId', data: data.site_id || 0 })
                storage.set({ key: 'siteInfo', data: data })
                storage.set({ key: 'comparisonSiteIdStorage', data: data.site_id || 0 })
            }).catch(() => {

            })
        },
        login(form: object, app_type: any) {
            return new Promise((resolve, reject) => {
                login(form, app_type).then(async (res) => {
                    if (app_type == 'admin' && Test.empty(res.data.userrole)) {
                        storage.setPrefix('site')
                    }
                    this.token = res.data.token
                    this.userInfo = res.data.userinfo
                    this.siteInfo = res.data.site_info || {}
                    setToken(res.data.token)
                    storage.set({ key: 'userinfo', data: res.data.userinfo })
                    storage.set({ key: 'siteId', data: res.data.site_id || 0 })
                    storage.set({ key: 'siteInfo', data: res.data.site_info || {} })
                    storage.set({ key: 'comparisonSiteIdStorage', data: res.data.site_id || 0 })
                    storage.set({ key: 'comparisonTokenStorage', data: res.data.token })
                    resolve(res)
                }).catch((error) => {
                    reject(error)
                })
            })
        },
        clearRouters() {
            this.routers = []
        },
        /**
         * 退出登录（清理本地会话并整页跳转登录页）
         * @param tip 登录页提示标识，如 no_permission（无可用菜单权限）、menu_error（菜单加载失败）
         */
        logout(tip: string = '') {
            if (!this.token) return
            this.token = ''
            this.userInfo = {}
            this.siteInfo = {}
            removeToken()
            window.localStorage.removeItem('admin.token')
            window.localStorage.removeItem('admin.userinfo')
            window.localStorage.removeItem('admin.siteInfo')
            window.localStorage.removeItem('site.token')
            window.localStorage.removeItem('site.userinfo')
            window.localStorage.removeItem('site.siteInfo')
            storage.remove(['userinfo', 'siteInfo', 'darksideMarketingKeys', 'defaultMarketingKeys'])
            this.routers = []
            this.rules = []
            logout()
            // 清除tabbar
            useTabbarStore().clearTab()
            const login = getAppType() == 'admin' ? '/admin/login' : '/site/login'
            // router.push(login)
            // 提示标识通过 query 传递，整页跳转后由登录页读取并展示，避免提示随页面卸载丢失
            location.href = `${location.origin}${login}${tip ? `?tip=${tip}` : ''}`
        },
        getAuthMenusFn() {
            return new Promise((resolve, reject) => {
                getAuthMenus({}).then((res) => {
                    this.routers = formatRouters(res.data || [])
                    // 无任何可用菜单：当前账号没有可访问的后台菜单权限
                    // 此处直接抛出标记错误，交由路由守卫统一提示并跳转登录页，
                    // 避免 routers 始终为空导致守卫反复重入（表现为卡在"登录中"/白屏）
                    if (!this.routers.length) {
                        this.rules = []
                        const error: any = new Error('NO_MENU_PERMISSION')
                        error.code = 'NO_MENU_PERMISSION'
                        reject(error)
                        return
                    }
                    // 获取插件的首个菜单
                    this.routers.forEach((item, index) => {
                        if (item.meta.addon !== '') {
                            if (item.children && item.children.length) {
                                this.addonIndexRoute[item.meta.addon] = findFirstValidRoute(item.children)
                            } else {
                                this.addonIndexRoute[item.meta.addon] = item.name
                            }
                        }
                    })
                    this.rules = findRules(res.data)
                    resolve(res)
                }).catch((error) => {
                    reject(error)
                })
            })
        },
        setUserInfo(data: any) {
            this.userInfo = data
            storage.set({ key: 'userinfo', data: data })
        }
    }
})

export default userStore
