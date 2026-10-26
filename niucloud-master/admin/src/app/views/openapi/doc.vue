<template>
    <div class="main-container doc-page">
        <!-- 顶部：端类型切换 -->
        <div class="doc-tabs">
            <el-tabs v-model="activeTab" @tab-change="onTabChange">
                <el-tab-pane label="平台端(开放)" name="admin" />
                <el-tab-pane label="站点端(开放)" name="site" />
            </el-tabs>
        </div>

        <div class="doc-body">
            <!-- 左侧：接口列表 -->
            <aside class="doc-aside">
                <div class="doc-aside__head">
                    <el-input v-model.trim="keyword" placeholder="搜索接口名称 / 路径" clearable prefix-icon="Search" />
                </div>
                <div class="doc-aside__body">
                    <div v-if="!filteredTree.length" class="doc-empty doc-empty--sm">
                        <el-icon class="doc-empty__icon">
                            <Files />
                        </el-icon>
                        <div class="doc-empty__text">暂无接口</div>
                    </div>
                    <template v-else>
                        <div v-for="group in filteredTree" :key="group.group_key" class="doc-group">
                            <div class="doc-group__title">
                                <span>{{ group.group_name }}</span>
                                <span class="text-xs text-gray-400">{{ group.items.length }}</span>
                            </div>
                            <div v-for="item in group.items" :key="item.api_key"
                                 class="doc-api" :class="{ 'is-active': detail && detail.api_key === item.api_key }"
                                 @click="selectApi(item.api_key)">
                                <el-tag size="small" :type="methodType(item.method)" class="shrink-0">
                                    {{ (item.method || 'get').toUpperCase() }}
                                </el-tag>
                                <span class="doc-api__name">{{ item.name }}</span>
                            </div>
                        </div>
                    </template>
                </div>
            </aside>

            <!-- 右侧：接口详情 + 在线调试 -->
            <section class="doc-main">
                <div v-if="!detail" class="doc-empty">
                    <el-icon class="doc-empty__icon">
                        <Pointer />
                    </el-icon>
                    <div class="doc-empty__text">请选择左侧接口查看详情</div>
                </div>

                <template v-else>
                    <div class="doc-detail__head">
                        <div class="flex items-center justify-between gap-2 flex-wrap">
                            <div class="flex items-center gap-2 flex-wrap">
                                <el-tag :type="methodType(detail.method)">{{ (detail.method || 'get').toUpperCase() }}</el-tag>
                                <span class="text-lg font-medium">{{ detail.name }}</span>
                                <el-tag v-if="!detail.need_auth" size="small" type="warning">免鉴权</el-tag>
                            </div>
                            <el-button type="primary" @click="openDebug">
                                <el-icon class="mr-1">
                                    <VideoPlay />
                                </el-icon>
                                在线调试
                            </el-button>
                        </div>
                        <div class="text-sm text-gray-500 mt-2">{{ detail.desc || '暂无接口说明' }}</div>

                        <div class="doc-path mt-3">
                            <span class="font-mono break-all">{{ detail.path }}</span>
                            <el-button link type="primary" @click="copy(fullPath)">复制地址</el-button>
                        </div>

                        <div class="flex flex-wrap gap-x-6 gap-y-1 mt-3 text-xs text-gray-500">
                            <span>所属模块：{{ detail.group_name }}</span>
                            <span>接口标识：{{ detail.api_key }}</span>
                            <span v-if="detail.addon">所属插件：{{ detail.addon }}</span>
                            <span>端类型：{{ appTypeName(detail.app_type) }}</span>
                        </div>
                    </div>

                    <!-- 请求参数 -->
                    <div class="doc-section">
                        <div class="doc-section__title">请求参数</div>
                        <el-table v-if="paramList.length" :data="paramList" size="small" border>
                            <el-table-column prop="name" label="参数名" min-width="150" />
                            <el-table-column prop="type" label="类型" width="100" />
                            <el-table-column label="必填" width="80" align="center">
                                <template #default="{ row }">
                                    <el-tag v-if="row.required" size="small" type="danger">是</el-tag>
                                    <span v-else class="text-gray-400">否</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="desc" label="说明" min-width="180">
                                <template #default="{ row }">
                                    <span>{{ row.desc || row.name }}</span>
                                </template>
                            </el-table-column>
                        </el-table>
                        <div v-else class="text-sm text-gray-400">该接口无请求参数</div>
                    </div>

                    <!-- 返回示例 -->
                    <div class="doc-section">
                        <div class="doc-section__title">返回示例</div>
                        <pre v-if="hasResponseSample" class="doc-code">{{ responseSample }}</pre>
                        <div v-else class="text-sm text-gray-400">暂无静态返回示例，可点击右上角「在线调试」查看真实响应</div>
                    </div>

                    <!-- 在线调试（右侧抽屉） -->
                    <el-drawer v-model="debugVisible" :title="debugTitle" size="640px">
                        <div class="doc-debug">
                            <!-- 当前正在调试的接口 -->
                            <div class="doc-debug__api">
                                <div class="flex items-center gap-2 flex-wrap">
                                    <el-tag :type="methodType(detail.method)">{{ (detail.method || 'get').toUpperCase() }}</el-tag>
                                    <span class="font-medium">{{ detail.name }}</span>
                                    <el-tag v-if="!detail.need_auth" size="small" type="warning">免鉴权</el-tag>
                                </div>
                                <div class="doc-path mt-2">
                                    <span class="font-mono break-all">{{ detail.path }}</span>
                                    <el-button link type="primary" @click="copy(fullPath)">复制地址</el-button>
                                </div>
                            </div>

                            <div class="text-xs text-gray-400 mb-3">
                                {{ detail.need_auth ? '由浏览器直接请求开放平台接口，需携带访问令牌（AK/SK 换取）' : '该接口免鉴权，无需访问令牌' }}
                            </div>

                            <div class="flex flex-wrap gap-3 items-end mb-3">
                                <div>
                                    <div class="text-xs text-gray-500 mb-1">接口地址前缀</div>
                                    <el-input v-model.trim="debug.base" class="input-base" placeholder="/openapi" />
                                </div>
                                <template v-if="detail.need_auth">
                                    <div>
                                        <div class="text-xs text-gray-500 mb-1">开放账号</div>
                                        <div class="flex items-center gap-2">
                                            <el-select v-model="debug.appId" placeholder="选择开放账号" class="input-app" clearable>
                                                <el-option v-for="app in debugAppList" :key="app.id"
                                                           :label="app.site_id === 0 ? app.name + '（平台）' : app.name + '（站点 ' + app.site_id + '）'"
                                                           :value="app.id" />
                                            </el-select>
                                            <el-button :icon="Refresh" :loading="appsLoading" title="刷新开放账号" @click="loadApps" />
                                        </div>
                                    </div>
                                    <el-button type="primary" :loading="tokenLoading" @click="fetchToken">获取令牌</el-button>
                                </template>
                            </div>

                            <div v-if="detail.need_auth" class="mb-3">
                                <div class="text-xs text-gray-500 mb-1">访问令牌（获得后可手工修改）</div>
                                <el-input v-model.trim="debug.token" placeholder="Bearer Token" clearable>
                                    <template #append>
                                        <el-button @click="copy(debug.token)">复制</el-button>
                                    </template>
                                </el-input>
                            </div>

                            <div v-if="paramList.length" class="mb-3">
                                <div class="text-xs text-gray-500 mb-1">参数值</div>
                                <div class="flex flex-col gap-2">
                                    <div v-for="p in paramList" :key="p.name" class="flex items-center gap-3">
                                        <span class="doc-param-name">
                                            {{ p.name }}<span v-if="p.required" class="text-red-500"> *</span>
                                        </span>
                                        <el-input v-model="debug.params[p.name]" :placeholder="p.desc || p.name" class="flex-1" />
                                    </div>
                                </div>
                            </div>

                            <el-button type="primary" :loading="sending" @click="send">发送请求</el-button>

                            <div v-if="response" class="mt-4">
                                <div class="doc-section__title">
                                    <span>响应结果</span>
                                    <el-tag size="small" :type="response.ok ? 'success' : 'danger'">
                                        HTTP {{ response.status }}
                                    </el-tag>
                                    <span class="text-xs font-normal text-gray-400">{{ response.cost }} ms</span>
                                </div>
                                <pre class="doc-code doc-code--response">{{ response.body }}</pre>
                            </div>
                        </div>
                    </el-drawer>
                </template>
            </section>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, reactive, ref } from 'vue'
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { Files, Pointer, Refresh, VideoPlay } from '@element-plus/icons-vue'
import {
    getOpenapiDocApps,
    getOpenapiDocBase,
    getOpenapiDocDetail,
    getOpenapiDocSecret,
    getOpenapiDocTree
} from '@/app/api/openapi'

interface ApiItem {
    api_key: string
    name: string
    desc: string
    method: string
    path: string
    need_auth: boolean
    param_count: number
}

interface ApiGroup {
    group_key: string
    group_name: string
    app_type: string
    domain: string
    addon: string
    items: ApiItem[]
}

/** 端类型显示名（本页当前只覆盖开放平台的端） */
const APP_TYPE_NAMES: Record<string, string> = {
    admin: '平台端(开放)',
    site: '站点端(开放)'
}

const appTypeName = (appType: string) => APP_TYPE_NAMES[appType] || appType || '-'

/** 当前端类型标签：admin 平台端(开放) / site 站点端(开放) */
const activeTab = ref('admin')

const keyword = ref('')
const tree = ref<ApiGroup[]>([])
const detail = ref<any>(null)
const appList = ref<any[]>([])

/** 在线调试抽屉 */
const debugVisible = ref(false)
const debugTitle = computed(() => detail.value ? `${ detail.value.name } - 在线调试` : '在线调试')
const openDebug = () => { debugVisible.value = true }

const debug = reactive({
    base: '',
    appId: '' as string | number,
    token: '',
    params: {} as Record<string, any>
})

const tokenLoading = ref(false)
const appsLoading = ref(false)
const sending = ref(false)
const response = ref<any>(null)

/** 当前端可用的调试账号（平台端接口用平台级账号，站点端接口用店铺账号） */
const debugAppList = computed(() => (appList.value || []).filter(app => app.app_type === activeTab.value))

/** 关键词过滤后的接口树 */
const filteredTree = computed(() => {
    const kw = keyword.value.toLowerCase()
    if (!kw) return tree.value

    return tree.value
        .map(group => {
            const items = (group.items || []).filter(item =>
                (item.name || '').toLowerCase().includes(kw) ||
                (item.path || '').toLowerCase().includes(kw) ||
                (item.api_key || '').toLowerCase().includes(kw)
            )
            return { ...group, items }
        })
        .filter(group => group.items.length > 0)
})

/** 参数列表（清单 params 为 { 参数名: { name, type, required } } 结构） */
const paramList = computed(() => {
    const params = detail.value?.params || {}
    return Object.keys(params).map(key => {
        const item = params[key] || {}
        return {
            name: key,
            type: item.type || 'string',
            required: !!item.required,
            desc: item.name && item.name !== key ? item.name : ''
        }
    })
})

const hasResponseSample = computed(() => {
    const r = detail.value?.response
    if (!r) return false
    if (Array.isArray(r)) return r.length > 0
    return Object.keys(r).length > 0
})

const responseSample = computed(() => {
    try {
        return JSON.stringify(detail.value?.response ?? {}, null, 2)
    } catch (e) {
        return ''
    }
})

/** 完整请求地址 */
const fullPath = computed(() => {
    if (!detail.value) return ''
    return `${ normalizeBase(debug.base) }/${ detail.value.path }`
})

const normalizeBase = (base: string) => (base || '/openapi').replace(/\/+$/, '')

const methodType = (method: string) => {
    const m = (method || 'get').toLowerCase()
    if (m === 'get') return 'success'
    if (m === 'post') return 'primary'
    if (m === 'put') return 'warning'
    if (m === 'delete') return 'danger'
    return 'info'
}

const copy = (text: string) => {
    if (!text) return
    navigator.clipboard?.writeText(text).then(() => ElMessage.success('已复制到剪贴板'))
}

/**
 * 加载接口清单树
 */
const loadTree = () => {
    getOpenapiDocTree(activeTab.value).then((res: any) => {
        tree.value = res.data || []
        // 默认选中第一个接口
        autoSelectFirst()
    })
}

/**
 * 默认选中第一个接口
 */
const autoSelectFirst = () => {
    const first = tree.value[0]?.items?.[0]
    if (first) {
        selectApi(first.api_key)
    } else {
        detail.value = null
        response.value = null
    }
}

/**
 * 切换端类型，按端重新加载接口清单
 */
const onTabChange = () => {
    detail.value = null
    response.value = null
    // 端已切换，重置调试身份（账号与令牌）
    debug.appId = ''
    debug.token = ''
    loadTree()
}

/**
 * 加载开放账号列表（用于换取令牌）
 */
const loadApps = () => {
    // 调试账号列表：平台端登录时返回全部账号（含禁用），店铺端登录仅返回本店铺账号
    appsLoading.value = true
    getOpenapiDocApps().then((res: any) => {
        appList.value = res.data || []
        // 已选账号若已不存在，重置选择避免使用失效账号换取令牌
        if (debug.appId && !appList.value.some(app => app.id === debug.appId)) {
            debug.appId = ''
            debug.token = ''
        }
    }).finally(() => {
        appsLoading.value = false
    })
}

/**
 * 加载调试基础地址
 */
const loadBase = () => {
    getOpenapiDocBase().then((res: any) => {
        debug.base = res.data?.openapi_base || '/openapi'
    })
}

/**
 * 选中接口，加载详情并重置调试参数
 */
const selectApi = (apiKey: string) => {
    getOpenapiDocDetail(apiKey).then((res: any) => {
        detail.value = res.data || null
        response.value = null
        debug.params = {}
    })
}

/**
 * 选择开放账号后自动换取令牌
 */
const fetchToken = () => {
    if (!debug.appId) {
        ElMessage.warning('请先选择开放账号')
        return
    }

    tokenLoading.value = true
    getOpenapiDocSecret(debug.appId as number).then((res: any) => {
        const { app_key, app_secret } = res.data || {}
        return axios.post(
            `${ normalizeBase(debug.base) }/v1/auth/token`,
            { app_key, app_secret },
            { timeout: 30000, validateStatus: () => true }
        ).then((tokenRes: any) => {
            tokenLoading.value = false
            const body = tokenRes.data || {}
            if (body.code === 1 && body.data?.access_token) {
                debug.token = body.data.access_token
                ElMessage.success('获取令牌成功')
            } else {
                ElMessage.error(body.msg || '获取令牌失败')
            }
        })
    }).catch((err: any) => {
        tokenLoading.value = false
        ElMessage.error(err?.msg || '获取令牌失败')
    })
}

/**
 * 发送调试请求
 */
const send = () => {
    if (!detail.value) return

    sending.value = true
    response.value = null
    const start = Date.now()

    // 动态路径参数（如 v1/shop/goods/:id）
    const usedKeys: Record<string, boolean> = {}
    const path = (detail.value.path || '').replace(/:([a-zA-Z_][a-zA-Z0-9_]*)/g, (_: string, key: string) => {
        usedKeys[key] = true
        return encodeURIComponent(debug.params[key] ?? '')
    })

    // 剩余参数按请求方式放入 query 或 body
    const rest: Record<string, any> = {}
    Object.keys(debug.params).forEach(key => {
        const value = debug.params[key]
        if (!usedKeys[key] && value !== '' && value !== undefined && value !== null) rest[key] = value
    })

    const method = (detail.value.method || 'get').toLowerCase()
    const config: any = {
        url: `${ normalizeBase(debug.base) }/${ path }`,
        method,
        timeout: 30000,
        validateStatus: () => true,
        headers: {}
    }
    // 免鉴权接口不携带令牌；同时带自定义头，兼容 Apache 等会丢弃 Authorization 的服务器
    if (detail.value.need_auth && debug.token) {
        config.headers[ 'Authorization' ] = `Bearer ${ debug.token }`
        config.headers[ 'X-Openapi-Key' ] = debug.token
    }
    if (method === 'get') config.params = rest
    else config.data = rest

    axios.request(config).then((res: any) => {
        sending.value = false
        response.value = {
            ok: res.status >= 200 && res.status < 300,
            status: res.status,
            cost: Date.now() - start,
            body: JSON.stringify(res.data, null, 2)
        }
    }).catch((err: any) => {
        sending.value = false
        response.value = {
            ok: false,
            status: 0,
            cost: Date.now() - start,
            body: err?.message || '请求失败，请检查接口地址前缀是否正确'
        }
    })
}

onMounted(() => {
    loadTree()
    loadApps()
    loadBase()
})
</script>

<style lang="scss" scoped>
// el-drawer 的 header 自带 32px 下边距，会让标题与内容之间空出一大截，收紧为 0（项目内统一做法）
:deep(.el-drawer__header) {
    margin-bottom: 0 !important;
}

.doc-page {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    background: #fff;
    border-radius: 8px;
}

.doc-tabs {
    flex-shrink: 0;
    padding: 0 16px;
    border-bottom: 1px solid var(--el-border-color-lighter);

    :deep(.el-tabs__header) {
        margin: 0;
    }

    :deep(.el-tabs__nav-wrap::after) {
        display: none;
    }
}

.doc-body {
    flex: 1;
    display: flex;
    overflow: hidden;
}

.doc-aside {
    width: 300px;
    flex-shrink: 0;
    border-right: 1px solid var(--el-border-color-lighter);
    display: flex;
    flex-direction: column;
    overflow: hidden;

    &__head {
        padding: 12px;
        border-bottom: 1px solid var(--el-border-color-lighter);
    }

    &__body {
        flex: 1;
        overflow-y: auto;
        padding: 8px;
    }
}

.doc-group {
    margin-bottom: 12px;

    &__title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 12px;
        color: #909399;
        padding: 6px 8px;
    }
}

.doc-api {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 7px 8px;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background: var(--el-fill-color-light);
    }

    &.is-active {
        background: var(--el-color-primary-light-9);
    }

    &__name {
        font-size: 13px;
        color: #303133;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}

.doc-main {
    flex: 1;
    overflow-y: auto;
    padding: 16px 20px;
}

.doc-detail__head {
    padding-bottom: 16px;
    border-bottom: 1px solid var(--el-border-color-lighter);
}

.doc-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    min-height: 320px;
    color: #c0c4cc;

    &__icon {
        font-size: 46px;
    }

    &__text {
        font-size: 13px;
    }

    &--sm {
        min-height: 160px;

        .doc-empty__icon {
            font-size: 32px;
        }
    }
}

.doc-path {
    display: flex;
    align-items: center;
    gap: 12px;
    background: var(--el-fill-color-light);
    border-radius: 6px;
    padding: 8px 12px;
    font-size: 13px;
}

.doc-section {
    margin-top: 20px;

    &__title {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        font-weight: 500;
        color: #303133;
        margin-bottom: 10px;
    }
}

.doc-param-name {
    width: 150px;
    flex-shrink: 0;
    font-size: 13px;
    color: #606266;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.doc-debug {
    padding-bottom: 20px;

    // 当前调试的接口信息：与详情页页头一致，用下分隔线区分
    &__api {
        padding-bottom: 12px;
        margin-bottom: 12px;
        border-bottom: 1px solid var(--el-border-color-lighter);
    }
}

.input-base {
    width: 320px;
}

.input-app {
    width: 220px;
}

.doc-code {
    background: #1e1e1e;
    color: #d4d4d4;
    border-radius: 6px;
    padding: 12px 14px;
    font-size: 12px;
    line-height: 1.7;
    font-family: Consolas, Monaco, monospace;
    max-height: 420px;
    overflow: auto;
    white-space: pre-wrap;
    word-break: break-all;
    margin: 0;

    &--response {
        min-height: 80px;
    }
}
</style>
