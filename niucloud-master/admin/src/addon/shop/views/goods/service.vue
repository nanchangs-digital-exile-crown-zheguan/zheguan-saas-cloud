<template>
    <div class="main-container">
        <el-card class="box-card !border-none" shadow="never">
            <el-card class="box-card !border-none my-[10px] table-search-wrap" shadow="never">
                <el-form :inline="true" :model="serveTable.searchParam" ref="searchFormRef">
                    <el-form-item :label="t('serviceName')" prop="service_name">
                        <el-input v-model.trim="serveTable.searchParam.service_name" :placeholder="t('serviceNamePlaceholder')" />
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="searchEvent">{{ t('search') }}</el-button>
                        <el-button @click="resetForm(searchFormRef)">{{ t('reset') }}</el-button>
                    </el-form-item>
                </el-form>
            </el-card>

            <div class="table-panel mt-[10px]">
                <table-toolbar
                    :title="t('serviceList')"
                    :selected-count="selectedCount"
                    :current-page-count="serveTable.data.length"
                    :total-count="serveTable.total"
                    :selection-loading="selectionLoading"
                    :selection-disabled="batchLoading"
                    @select-page="selectCurrentPage"
                    @select-all="selectAllResults"
                    @clear-selection="clearSelection"
                >
                    <template #batch-actions>
                        <el-button
                            type="danger"
                            link
                            :disabled="!selectedCount || selectionLoading"
                            :loading="batchLoading"
                            @click="batchDeleteEvent"
                        >
                            {{ t('batchDelete') }}
                        </el-button>
                    </template>
                    <template #actions>
                        <el-button type="primary" @click="addEvent">
                            {{ t('addServe') }}
                        </el-button>
                    </template>
                </table-toolbar>

                <el-table
                    ref="tableRef"
                    :data="serveTable.data"
                    row-key="service_id"
                    size="large"
                    v-loading="serveTable.loading"
                    @selection-change="handleSelectionChange"
                >
                    <template #empty>
                        <span>{{ !serveTable.loading ? t('emptyData') : '' }}</span>
                    </template>
                    <el-table-column type="selection" width="48" reserve-selection />
                    <el-table-column prop="service_name" :label="t('serviceName')" min-width="120" />
<!--					<el-table-column :label="t('image')" min-width="120">-->
<!--						<template #default="{ row }">-->
<!--							<div class="h-[50px]">-->
<!--							    <el-image class="w-[50px] h-[50px] " :src="img(row.image)" fit="contain">-->
<!--							        <template #error>-->
<!--							            <div class="image-slot">-->
<!--							                &lt;!&ndash; <img class="w-[30px] h-[30px]" src="@/addon/shop/assets/category_default.png" /> &ndash;&gt;-->
<!--							            </div>-->
<!--							        </template>-->
<!--							    </el-image>-->
<!--							</div>-->
<!--						</template>-->
<!--					</el-table-column>-->
                    <el-table-column prop="desc" :label="t('desc')" min-width="120" />
                    <el-table-column :label="t('operation')" fixed="right" align="right" min-width="120">
                       <template #default="{ row }">
                           <el-button type="primary" link @click="editEvent(row)">{{ t('edit') }}</el-button>
                           <el-button type="primary" link @click="deleteEvent(row.service_id)">{{ t('delete') }}</el-button>
                       </template>
                    </el-table-column>

                </el-table>
                <table-pagination
                    v-model:current-page="serveTable.page"
                    v-model:page-size="serveTable.limit"
                    :total="serveTable.total"
                    @size-change="handleSizeChange"
                    @current-change="loadServeList"
                />
            </div>

            <service-edit ref="editServeDialog" @complete="handleEditComplete" />
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { computed, nextTick, reactive, ref } from 'vue'
import { t } from '@/lang'
import { getServeList, getServePageList, deleteServe } from '@/addon/shop/api/goods'
import { ElMessage, ElMessageBox, ElTable, FormInstance } from 'element-plus'
import ServiceEdit from '@/addon/shop/views/goods/components/service-edit.vue'
import TablePagination from '@/components/table-pagination/index.vue'
import TableToolbar from '@/components/table-toolbar/index.vue'
import { setTablePageStorage, getTablePageStorage } from '@/utils/common'

interface ServiceItem {
    service_id: number
    service_name: string
    desc: string
}

const serveTable = reactive<{
    page: number
    limit: number
    total: number
    loading: boolean
    data: ServiceItem[]
    searchParam: {
        service_name: string
    }
}>({
    page: 1,
    limit: 10,
    total: 0,
    loading: true,
    data: [],
    searchParam: {
        service_name: ''
    }
})

const searchFormRef = ref<FormInstance>()
const tableRef = ref<InstanceType<typeof ElTable>>()
const selectedIds = ref<number[]>([])
const selectionLoading = ref(false)
const batchLoading = ref(false)
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
    serveTable.data.forEach(row => {
        if (selectedIdSet.has(row.service_id)) tableRef.value?.toggleRowSelection(row, true)
    })
    await nextTick()
    syncingSelection.value = false
}

/**
 * 获取商品服务列表
 */
const loadServeList = (page: number = 1) => {
    serveTable.loading = true
    serveTable.page = page

    return getServePageList({
        page: serveTable.page,
        limit: serveTable.limit,
        ...serveTable.searchParam
    }).then(async res => {
        serveTable.data = res.data.data
        serveTable.total = res.data.total
        setTablePageStorage(serveTable.page, serveTable.limit, serveTable.searchParam)
        await syncCurrentPageSelection()
    }).finally(() => {
        serveTable.loading = false
    })
}
loadServeList(getTablePageStorage(serveTable.searchParam).page)

/**
 * 合并当前页勾选结果，并保留其他分页已经勾选的数据
 */
const handleSelectionChange = (rows: ServiceItem[]) => {
    if (syncingSelection.value) return
    const currentPageIds = new Set(serveTable.data.map(row => row.service_id))
    const otherPageIds = selectedIds.value.filter(id => !currentPageIds.has(id))
    selectedIds.value = Array.from(new Set([
        ...otherPageIds,
        ...rows.map(row => row.service_id)
    ]))
}

/**
 * 重新选择当前页数据
 */
const selectCurrentPage = () => {
    selectedIds.value = serveTable.data.map(row => row.service_id)
    syncCurrentPageSelection()
}

/**
 * 重新选择当前筛选条件下的全部数据
 */
const selectAllResults = async () => {
    selectionLoading.value = true
    try {
        const res = await getServeList({ ...serveTable.searchParam })
        const rows: ServiceItem[] = Array.isArray(res.data) ? res.data : []
        selectedIds.value = rows.map(row => row.service_id)
        await syncCurrentPageSelection()
    } finally {
        selectionLoading.value = false
    }
}

/**
 * 清空全部分页选择
 */
const clearSelection = () => {
    selectedIds.value = []
    syncingSelection.value = true
    tableRef.value?.clearSelection()
    nextTick(() => {
        syncingSelection.value = false
    })
}

const searchEvent = () => {
    clearSelection()
    loadServeList()
}

const handleSizeChange = () => {
    loadServeList()
}

const handleEditComplete = () => {
    clearSelection()
    loadServeList(getTablePageStorage(serveTable.searchParam).page)
}

const editServeDialog: Record<string, any> | null = ref(null)

/**
 * 添加商品服务
 */
const addEvent = () => {
    editServeDialog.value.setFormData()
    editServeDialog.value.showDialog = true
}

/**
 * 编辑商品服务
 * @param data
 */
const editEvent = (data: any) => {
    editServeDialog.value.setFormData(data)
    editServeDialog.value.showDialog = true
}

/**
 * 删除商品服务
 */
const deleteEvent = (id: number) => {
    ElMessageBox.confirm(t('serveDeleteTips'), t('warning'),
        {
            confirmButtonText: t('confirm'),
            cancelButtonText: t('cancel'),
            type: 'warning'
        }
    ).then(() => {
        deleteServe(id).then(() => {
            selectedIds.value = selectedIds.value.filter(item => item != id)
            loadServeList(getTablePageStorage(serveTable.searchParam).page)
        }).catch(() => {
        })
    })
}

/**
 * 批量删除已选择的商品服务
 */
const batchDeleteEvent = () => {
    const ids = [...selectedIds.value]
    if (!ids.length) return

    ElMessageBox.confirm(t('batchDeleteTips').replace('{count}', String(ids.length)), t('warning'), {
        confirmButtonText: t('confirm'),
        cancelButtonText: t('cancel'),
        type: 'warning'
    }).then(async () => {
        batchLoading.value = true
        try {
            await Promise.all(ids.map(id => deleteServe(id, false)))
            ElMessage.success(t('batchDeleteSuccess'))
            clearSelection()
            const lastPage = Math.max(1, Math.ceil((serveTable.total - ids.length) / serveTable.limit))
            await loadServeList(Math.min(serveTable.page, lastPage))
        } finally {
            batchLoading.value = false
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
    searchEvent()
}
</script>

<style lang="scss" scoped>
</style>
