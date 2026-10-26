<template>
    <div class="log-list">
        <div class="table-search-wrap table-search-wrap--panel log-list__search">
            <el-form :inline="true" :model="searchParam">
                <el-form-item label="时间范围">
                    <el-date-picker v-model="searchParam.create_time" type="datetimerange"
                                    value-format="YYYY-MM-DD HH:mm:ss" range-separator="至"
                                    start-placeholder="开始时间" end-placeholder="结束时间" />
                </el-form-item>
                <el-form-item label="接口">
                    <el-input v-model.trim="searchParam.api_key" class="input-width" placeholder="接口标识"
                              clearable @keyup.enter="loadList(1)" />
                </el-form-item>
                <el-form-item label="响应码">
                    <el-select v-model="searchParam.code" class="input-width" placeholder="全部" clearable>
                        <el-option label="成功" :value="1" />
                        <el-option label="失败" :value="0" />
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="loadList(1)">搜索</el-button>
                    <el-button @click="resetSearch">重置</el-button>
                </el-form-item>
            </el-form>
        </div>

        <div class="table-panel log-list__panel">
            <div class="log-list__table">
                <el-table height="100%" :data="tableData.data" size="large" v-loading="tableData.loading">
                    <template #empty>
                        <span>{{ !tableData.loading ? '暂无调用记录' : '' }}</span>
                    </template>

                    <el-table-column type="expand">
                        <template #default="{ row }">
                            <div class="px-6 py-2">
                                <div class="text-xs text-gray-400 mb-1">请求参数（已脱敏）</div>
                                <pre class="text-xs bg-gray-50 p-3 rounded overflow-auto">{{ prettyParams(row.params) }}</pre>
                            </div>
                        </template>
                    </el-table-column>

                    <el-table-column label="时间" width="170">
                        <template #default="{ row }">{{ formatTime(row.create_time) }}</template>
                    </el-table-column>

                    <el-table-column label="账号" min-width="160" show-overflow-tooltip>
                        <template #default="{ row }">
                            <span class="font-mono text-xs">{{ row.app_key || '--' }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="接口" min-width="200" show-overflow-tooltip>
                        <template #default="{ row }">{{ row.api_key || row.url }}</template>
                    </el-table-column>

                    <el-table-column label="方法" width="90" align="center">
                        <template #default="{ row }">
                            <el-tag size="small" :type="methodTagType(row.method)">{{ row.method }}</el-tag>
                        </template>
                    </el-table-column>

                    <el-table-column label="耗时(ms)" width="100" align="center">
                        <template #default="{ row }">{{ row.cost_ms }}</template>
                    </el-table-column>

                    <el-table-column label="响应码" width="100" align="center">
                        <template #default="{ row }">
                            <span :class="row.code === 1 ? 'text-green-600' : 'text-red-500'">{{ row.code }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column label="来源 IP" width="140">
                        <template #default="{ row }">{{ row.ip }}</template>
                    </el-table-column>
                </el-table>
            </div>

            <table-pagination v-model:current-page="tableData.page" v-model:page-size="tableData.limit"
                              :total="tableData.total" @size-change="loadList()" @current-change="loadList" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, watch } from 'vue'
import TablePagination from '@/components/table-pagination/index.vue'
import { getOpenapiLogPage } from '@/app/api/openapi'

const props = defineProps<{
    /** 按开放账号过滤（可选） */
    appId?: number | string
    /** 是否挂载后自动加载（置于抽屉中时由外部在打开动画结束后触发） */
    autoLoad?: boolean
}>()

const tableData = reactive({
    page: 1,
    limit: 10,
    total: 0,
    loading: true,
    data: [] as any[]
})

const searchParam = reactive({
    api_key: '',
    code: '' as string | number,
    create_time: [] as string[]
})

/**
 * 时间展示：后端时间字段可能是时间戳（数字）或已格式化的日期字符串，兼容处理
 */
const formatTime = (time: number | string) => {
    if (!time) return '--'

    // 已是「YYYY-MM-DD HH:mm:ss」格式，直接展示
    if (typeof time === 'string') return time.slice(0, 19)

    const date = new Date(time * 1000)
    if (Number.isNaN(date.getTime())) return '--'

    const pad = (num: number) => String(num).padStart(2, '0')
    return `${ date.getFullYear() }-${ pad(date.getMonth() + 1) }-${ pad(date.getDate()) } ${ pad(date.getHours()) }:${ pad(date.getMinutes()) }:${ pad(date.getSeconds()) }`
}

const prettyParams = (params: any) => {
    if (!params || Object.keys(params).length === 0) return '无'
    try {
        return JSON.stringify(params, null, 2)
    } catch (e) {
        console.error(e)
        return String(params)
    }
}

const methodTagType = (method: string) => {
    const map: Record<string, string> = {
        GET: 'success',
        POST: 'primary',
        PUT: 'warning',
        DELETE: 'danger'
    }
    return map[ String(method).toUpperCase() ] || 'info'
}

/**
 * 加载调用日志
 */
const loadList = (page?: number) => {
    if (page) tableData.page = page
    tableData.loading = true

    getOpenapiLogPage({
        page: tableData.page,
        limit: tableData.limit,
        app_id: props.appId || '',
        api_key: searchParam.api_key,
        code: searchParam.code,
        create_time: searchParam.create_time
    }).then((res: any) => {
        tableData.loading = false
        tableData.data = res.data.data || []
        tableData.total = res.data.total || 0
    }).catch(() => {
        tableData.loading = false
    })
}

const resetSearch = () => {
    searchParam.api_key = ''
    searchParam.code = ''
    searchParam.create_time = []
    loadList(1)
}

// 过滤的账号变化时重新加载
watch(() => props.appId, () => loadList(1))

if (props.autoLoad !== false) loadList()

defineExpose({ refresh: () => loadList(1) })
</script>

<style lang="scss" scoped>
.log-list {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 0;
    overflow: hidden;

    &__search {
        flex-shrink: 0;
    }

    &__panel {
        flex: 1;
        display: flex;
        flex-direction: column;
        min-height: 0;
        overflow: hidden;
    }

    &__table {
        flex: 1;
        min-height: 0;
        overflow: hidden;
    }
}
</style>
