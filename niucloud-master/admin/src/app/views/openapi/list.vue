<template>
    <div ref="pageRef" class="main-container table-fill-page" :style="pageStyle">
        <div class="table-fill-page__card">
            <el-alert v-if="!isOpen" type="warning" :closable="false" show-icon
                      title="开放平台功能已关闭：对外接口已全部停止服务（含已签发的令牌），当前仅可查看账号与调用日志" />

            <div class="table-search-wrap table-search-wrap--panel flex justify-between items-center">
                <el-form :inline="true" :model="searchParam">
                    <el-form-item label="账号名称">
                        <el-input v-model.trim="searchParam.name" class="input-width" placeholder="请输入账号名称"
                                  clearable @keyup.enter="loadList(1)" />
                    </el-form-item>
                    <el-form-item label="状态">
                        <el-select v-model="searchParam.status" class="input-width" placeholder="全部" clearable>
                            <el-option label="启用" :value="1" />
                            <el-option label="禁用" :value="0" />
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="loadList(1)">搜索</el-button>
                        <el-button @click="resetSearch">重置</el-button>
                    </el-form-item>
                </el-form>

                <!-- 开放平台总开关：平台级配置，店铺端只读 -->
                <div class="flex justify-end items-center flex-1">
                    <div class="flex items-center">
                        <!-- 数据加密密钥刷新：仅平台端可见（密钥全平台共用，会影响所有站点的账号） -->
                        <el-tooltip v-if="isAdmin" class="box-item" effect="dark" placement="top-start"
                                    content="重新生成全平台共用的数据加密密钥，并重新加密所有站点（含各店铺）的开放账号 Secret Key；对接方无需改动">
                            <el-button link type="primary" class="mr-[16px]" :loading="secretLoading"
                                       @click="refreshSecretEvent">刷新加密密钥</el-button>
                        </el-tooltip>
                        <el-tooltip class="box-item" effect="dark" :content="configTip" placement="top-start">
                            <span class="text-[14px] mr-[10px] flex items-center">
                                开放平台功能
                                <span class="iconfont iconwenhao text-[#999] !text-[14px]"></span>
                            </span>
                        </el-tooltip>
                        <el-switch v-model="config.is_open" active-value="1" inactive-value="0"
                                   :disabled="!isAdmin" :loading="configLoading" @change="toggleConfig" />
                        <el-tag :type="isOpen ? 'success' : 'danger'" size="small" class="ml-[10px]">
                            {{ isOpen ? '已开启' : '已关闭' }}
                        </el-tag>
                    </div>
                </div>
            </div>

            <div class="table-panel table-fill-page__panel">
                <table-toolbar title="开放账号"
                               :selected-count="selectedCount"
                               :current-page-count="tableData.data.length"
                               :total-count="tableData.total"
                               :selection-loading="selectionLoading"
                               :selection-disabled="!isOpen"
                               :allow-select-all="false"
                               @select-page="selectCurrentPage"
                               @clear-selection="clearSelection">
                    <template #batch-actions>
                        <el-button link type="primary" :disabled="!selectedCount || !isOpen"
                                   @click="batchResetSecretEvent">批量重置密钥</el-button>
                    </template>
                    <template #actions>
                        <el-button type="primary" :disabled="!isOpen" @click="addEvent">创建开放账号</el-button>
                    </template>
                </table-toolbar>

                <div class="table-fill-page__table">
                    <el-table ref="tableRef" height="100%" :data="tableData.data" size="large" v-loading="tableData.loading"
                              row-key="id" @selection-change="handleSelectionChange">
                        <template #empty>
                            <span>{{ !tableData.loading ? '还没有开放账号，点击右上角创建' : '' }}</span>
                        </template>

                        <el-table-column type="selection" width="55" reserve-selection />

                        <el-table-column label="账号名称" min-width="170" show-overflow-tooltip>
                            <template #default="{ row }">
                                <div class="font-medium">{{ row.name }}</div>
                                <div v-if="row.remark" class="text-xs text-gray-400">{{ row.remark }}</div>
                            </template>
                        </el-table-column>

                        <el-table-column label="Access Key" min-width="230">
                            <template #default="{ row }">
                                <div class="flex items-center gap-2">
                                    <span class="font-mono text-xs">{{ row.app_key }}</span>
                                    <el-button link type="primary" @click="copy(row.app_key)">复制</el-button>
                                </div>
                            </template>
                        </el-table-column>

                        <el-table-column label="Secret Key" width="250">
                            <template #default="{ row }">
                                <div class="flex items-center gap-1">
                                    <span class="font-mono text-xs">
                                        {{ secretVisible[row.id] ? secretMap[row.id] : '••••••••' }}
                                    </span>
                                    <el-tooltip :content="secretVisible[row.id] ? '隐藏' : '查看'" placement="top">
                                        <el-button link type="primary" @click="toggleSecret(row)">
                                            <el-icon>
                                                <component :is="secretVisible[row.id] ? Hide : View" />
                                            </el-icon>
                                        </el-button>
                                    </el-tooltip>
                                    <el-button link type="primary" @click="copySecret(row)">复制</el-button>
                                    <el-button link type="danger" :disabled="!isOpen" @click="resetSecretEvent(row)">重置</el-button>
                                </div>
                            </template>
                        </el-table-column>

                        <el-table-column label="状态" width="90" align="center">
                            <template #default="{ row }">
                                <el-switch :model-value="row.status" :active-value="1" :inactive-value="0"
                                           :disabled="!isOpen" @change="(val) => statusEvent(row, val)" />
                            </template>
                        </el-table-column>

                        <el-table-column label="已授权模块" min-width="190">
                            <template #default="{ row }">
                                <template v-if="(row.auth_domains || []).length">
                                    <el-tag v-for="module in row.auth_domains" :key="module" size="small"
                                            class="mr-1 mb-1" type="primary">
                                        {{ domainName(module) }}
                                    </el-tag>
                                </template>
                                <span v-else class="text-gray-400">未授权</span>
                            </template>
                        </el-table-column>

                        <el-table-column label="有效期" width="120" align="center">
                            <template #default="{ row }">
                                {{ row.expire_time ? formatTime(row.expire_time) : '长期有效' }}
                            </template>
                        </el-table-column>

                        <el-table-column label="最近调用" width="160" align="center">
                            <template #default="{ row }">
                                {{ row.last_visit_time ? formatTime(row.last_visit_time) : '从未调用' }}
                            </template>
                        </el-table-column>

                        <el-table-column label="操作" align="right" fixed="right" width="210">
                            <template #default="{ row }">
                                <table-actions :actions="rowActions(row)" />
                            </template>
                        </el-table-column>
                    </el-table>
                </div>

                <table-pagination v-model:current-page="tableData.page" v-model:page-size="tableData.limit"
                                  :total="tableData.total" @size-change="loadList()" @current-change="loadList" />
            </div>

            <app-form-drawer ref="formDrawerRef" @complete="handleFormComplete" />
            <secret-dialog ref="secretDialogRef" />
            <batch-secret-dialog ref="batchSecretDialogRef" />
            <log-drawer ref="logDrawerRef" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, nextTick, reactive, ref } from 'vue'
import { ElMessage, ElMessageBox, ElTable } from 'element-plus'
import { useTablePageHeight } from '@/hooks/useTablePageHeight'
import { getAppType } from '@/utils/common'
import TableActions from '@/components/table-actions/index.vue'
import TablePagination from '@/components/table-pagination/index.vue'
import TableToolbar from '@/components/table-toolbar/index.vue'
import { Hide, View } from '@element-plus/icons-vue'
import {
    batchResetOpenapiSecret,
    deleteOpenapiApp,
    getOpenapiAppPage,
    getOpenapiAppSecret,
    getOpenapiConfig,
    refreshOpenapiSecret,
    resetOpenapiAppSecret,
    setOpenapiAppStatus,
    setOpenapiConfig
} from '@/app/api/openapi'
import AppFormDrawer from './components/app-form-drawer.vue'
import BatchSecretDialog from './components/batch-secret-dialog.vue'
import LogDrawer from './components/log-drawer.vue'
import SecretDialog from './components/secret-dialog.vue'

const { pageRef, pageStyle } = useTablePageHeight()

/** 模块中文名映射 */
const DOMAIN_NAMES: Record<string, string> = {
    auth: '授权',
    common: '公共',
    goods: '商品',
    order: '订单',
    member: '会员'
}

const tableData = reactive({
    page: 1,
    limit: 10,
    total: 0,
    loading: true,
    data: [] as any[]
})

const searchParam = reactive({
    name: '',
    status: '' as string | number
})

const formDrawerRef = ref()
const secretDialogRef = ref()
const logDrawerRef = ref()
const batchSecretDialogRef = ref()

/** 表格多选（支持跨页保留） */
const tableRef = ref<InstanceType<typeof ElTable>>()
const selectedIds = ref<number[]>([])
const selectionLoading = ref(false)
const syncingSelection = ref(false)
const selectedCount = computed(() => selectedIds.value.length)

/**
 * 将跨页选择状态同步到当前页复选框
 */
const syncCurrentPageSelection = async () => {
    await nextTick()
    syncingSelection.value = true
    tableRef.value?.clearSelection()
    const selectedIdSet = new Set(selectedIds.value)
    tableData.data.forEach((row: any) => {
        if (selectedIdSet.has(row.id)) tableRef.value?.toggleRowSelection(row, true)
    })
    await nextTick()
    syncingSelection.value = false
}

/**
 * 表格选中变化：合并其他分页的已选项
 */
const handleSelectionChange = (rows: any[]) => {
    if (syncingSelection.value) return

    const currentPageIds = new Set(tableData.data.map((row: any) => row.id))
    const otherPageIds = selectedIds.value.filter(id => !currentPageIds.has(id))
    selectedIds.value = Array.from(new Set([
        ...otherPageIds,
        ...rows.map(row => row.id)
    ]))
}

/**
 * 选择当前页全部账号
 */
const selectCurrentPage = () => {
    selectedIds.value = tableData.data.map((row: any) => row.id)
    syncCurrentPageSelection()
}

/**
 * 清空全部选择
 */
const clearSelection = () => {
    selectedIds.value = []
    syncingSelection.value = true
    tableRef.value?.clearSelection()
    nextTick(() => {
        syncingSelection.value = false
    })
}

/** 是否为平台端（总开关仅平台端可修改，店铺端只读展示） */
const isAdmin = getAppType() === 'admin'

/** 开放平台总开关（平台级配置，两端读取同一份） */
const config = reactive({ is_open: '1' })
const configLoading = ref(false)
const isOpen = computed(() => config.is_open === '1')

/** 总开关说明文案（平台端可操作，店铺端只读） */
const configTip = computed(() => isAdmin
    ? '关闭后所有开放接口立即停止服务（含已签发的令牌），后台仅可查看'
    : '由平台统一控制，如需调整请联系平台管理员')

/**
 * 读取开放平台总开关
 */
const loadConfig = () => {
    getOpenapiConfig().then((res: any) => {
        config.is_open = String(res.data?.is_open ?? '1')
    }).catch(() => {
        // 读取失败不阻塞页面，按默认开启处理
        config.is_open = '1'
    })
}

/**
 * 保存开放平台总开关
 */
const saveConfig = (is_open: string) => {
    configLoading.value = true
    setOpenapiConfig({ is_open }).then(() => {
        configLoading.value = false
        config.is_open = is_open
        ElMessage.success(is_open === '1' ? '开放平台已开启' : '开放平台已关闭')
    }).catch(() => {
        configLoading.value = false
        // 保存失败时回滚开关状态
        config.is_open = is_open === '1' ? '0' : '1'
    })
}

/**
 * 切换总开关（关闭前二次确认）
 */
const toggleConfig = (val: string | number | boolean) => {
    const next = String(val)
    if (next === '1') {
        saveConfig(next)
        return
    }

    ElMessageBox.confirm('关闭后所有开放接口将立即停止服务（含已签发的令牌），确认关闭吗？', '关闭开放平台', { type: 'warning' })
        .then(() => saveConfig(next))
        .catch(() => { config.is_open = '1' })
}

/** 数据加密密钥刷新中 */
const secretLoading = ref(false)

/**
 * 刷新数据加密密钥（仅平台端）
 */
const refreshSecretEvent = () => {
    ElMessageBox.confirm(
        '数据加密密钥为全平台共用，刷新后会重新加密所有站点（含各店铺）的开放账号 Secret Key，对接方无需改动。请勿中断操作，确认继续？',
        '刷新加密密钥',
        { type: 'warning' }
    ).then(() => {
        secretLoading.value = true
        refreshOpenapiSecret().then((res: any) => {
            secretLoading.value = false
            ElMessage.success(`密钥已刷新，全平台共重新加密 ${ res.data?.app_count ?? 0 } 个开放账号（含平台与各店铺）`)
        }).catch(() => {
            secretLoading.value = false
        })
    }).catch(() => {})
}

/**
 * 批量重置密钥（所选账号的旧密钥与已签发令牌立即失效）
 */
const batchResetSecretEvent = () => {
    if (!selectedIds.value.length) return

    ElMessageBox.confirm(
        `确定要重置所选 ${ selectedIds.value.length } 个账号的密钥吗？重置后原 Secret Key 立即失效，这些账号的全部令牌将作废，需对接方重新配置。`,
        '批量重置密钥',
        { type: 'warning' }
    ).then(() => {
        selectionLoading.value = true
        batchResetOpenapiSecret(selectedIds.value).then((res: any) => {
            selectionLoading.value = false
            const list = res.data || []
            if (list.length) batchSecretDialogRef.value.show(list)
            ElMessage.success(`已重置 ${ list.length } 个账号的密钥`)
            clearSelection()
            loadList()
        }).catch(() => {
            selectionLoading.value = false
        })
    }).catch(() => {})
}

/** 密钥明文与显示状态（按账号 id 缓存） */
const secretVisible = reactive<Record<number, boolean>>({})
const secretMap = reactive<Record<number, string>>({})

const domainName = (domain: string) => DOMAIN_NAMES[domain] || domain

const formatTime = (time: number) => {
    if (!time) return '--'
    const date = new Date(time * 1000)
    const pad = (num: number) => String(num).padStart(2, '0')
    return `${ date.getFullYear() }-${ pad(date.getMonth() + 1) }-${ pad(date.getDate()) } ${ pad(date.getHours()) }:${ pad(date.getMinutes()) }`
}

const copy = (text: string) => {
    navigator.clipboard?.writeText(text).then(() => ElMessage.success('已复制到剪贴板'))
}

/**
 * 查看 / 隐藏密钥明文（首次查看时按需拉取）
 */
const toggleSecret = (row: any) => {
    if (secretVisible[row.id]) {
        secretVisible[row.id] = false
        return
    }

    if (secretMap[row.id]) {
        secretVisible[row.id] = true
        return
    }

    getOpenapiAppSecret(row.id).then((res: any) => {
        secretMap[row.id] = res.data?.app_secret || ''
        secretVisible[row.id] = true
    })
}

/**
 * 复制密钥（未拉取明文时先拉取）
 */
const copySecret = (row: any) => {
    if (secretMap[row.id]) {
        copy(secretMap[row.id])
        return
    }

    getOpenapiAppSecret(row.id).then((res: any) => {
        secretMap[row.id] = res.data?.app_secret || ''
        if (secretMap[row.id]) copy(secretMap[row.id])
    })
}

/**
 * 清空密钥展示缓存（列表刷新后重置，避免展示过期数据）
 */
const clearSecretCache = () => {
    Object.keys(secretVisible).forEach(key => delete (secretVisible as any)[key])
    Object.keys(secretMap).forEach(key => delete (secretMap as any)[key])
}

/**
 * 加载账号列表
 */
const loadList = (page?: number) => {
    if (page) tableData.page = page
    tableData.loading = true

    getOpenapiAppPage({
        page: tableData.page,
        limit: tableData.limit,
        name: searchParam.name,
        status: searchParam.status
    }).then((res: any) => {
        tableData.loading = false
        tableData.data = res.data.data || []
        tableData.total = res.data.total || 0
        clearSecretCache()
    }).catch(() => {
        tableData.loading = false
    })
}
loadList()
loadConfig()

const resetSearch = () => {
    searchParam.name = ''
    searchParam.status = ''
    loadList(1)
}

const rowActions = (row: any) => [
    { label: '编辑', disabled: !isOpen.value, onClick: () => formDrawerRef.value.show(row) },
    { label: '日志', onClick: () => openLog(row) },
    { label: '删除', type: 'danger', disabled: !isOpen.value, onClick: () => deleteEvent(row) }
]

const addEvent = () => formDrawerRef.value.show()

/**
 * 新增成功后展示一次性密钥
 */
const handleFormComplete = (data: any) => {
    if (data?.app_key && data?.app_secret) {
        secretDialogRef.value.show(data.app_key, data.app_secret)
    }
    loadList()
}

/**
 * 启用 / 禁用
 */
const statusEvent = (row: any, status: number | string | boolean) => {
    const next = Number(status)
    const text = next === 1 ? '启用' : '禁用'
    ElMessageBox.confirm(`确定要${ text }账号「${ row.name }」吗？${ next === 0 ? '禁用后其已签发的令牌将立即失效。' : '' }`, '提示', { type: 'warning' })
        .then(() => {
            setOpenapiAppStatus(row.id, next).then(() => {
                ElMessage.success(`${ text }成功`)
                loadList()
            })
        })
        .catch(() => {})
}

/**
 * 重置密钥
 */
const resetSecretEvent = (row: any) => {
    ElMessageBox.confirm(`重置后原 Secret Key 立即失效，账号「${ row.name }」的全部令牌将作废，需重新获取。`, '重置密钥', { type: 'warning' })
        .then(() => {
            resetOpenapiAppSecret(row.id).then((res: any) => {
                secretDialogRef.value.show(res.data.app_key, res.data.app_secret)
                loadList()
            })
        })
        .catch(() => {})
}

const deleteEvent = (row: any) => {
    ElMessageBox.confirm(`确定要删除账号「${ row.name }」吗？`, '删除账号', { type: 'warning' })
        .then(() => {
            deleteOpenapiApp(row.id).then(() => {
                ElMessage.success('删除成功')
                loadList()
            })
        })
        .catch(() => {})
}

/**
 * 打开该账号的调用日志抽屉（不跳转页面）
 */
const openLog = (row: any) => {
    logDrawerRef.value.show(row.id, row.name)
}
</script>
