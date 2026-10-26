<template>
    <!--框架补丁管理-->
    <div ref="pageRef" class="main-container table-fill-page" :style="pageStyle">
        <div class="table-fill-page__card">
            <el-card class="box-card !border-none table-search-wrap table-search-wrap--panel table-fill-page__search" shadow="never">
                <el-form :inline="true" :model="searchParam" ref="searchFormRef">
                    <el-form-item :label="t('patchTitle')" prop="title">
                        <el-input v-model.trim="searchParam.title" clearable :placeholder="t('patchTitlePlaceholder')" />
                    </el-form-item>
                    <el-form-item :label="t('resolveStatus')" prop="is_resolved">
                        <el-select v-model="searchParam.is_resolved" clearable :placeholder="t('resolveStatusPlaceholder')">
                            <el-option :label="t('all')" value="" />
                            <el-option :label="t('unresolved')" :value="0" />
                            <el-option :label="t('resolved')" :value="1" />
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="loadList()">{{ t('search') }}</el-button>
                        <el-button @click="resetForm(searchFormRef)">{{ t('reset') }}</el-button>
                    </el-form-item>
                </el-form>
            </el-card>

            <div class="table-panel table-fill-page__panel">
                <table-toolbar :title="pageName" :selectable="false">
                    <template #actions>
                        <el-button type="primary" :loading="syncing" @click="syncPatch">{{ t('syncPatch') }}</el-button>
                    </template>
                </table-toolbar>
                <div class="table-fill-page__table">
                    <el-table height="100%" :data="tableData.data" size="large" v-loading="tableData.loading">
                        <template #empty>
                            <span>{{ !tableData.loading ? t('emptyData') : '' }}</span>
                        </template>

                        <el-table-column :label="t('patchNo')" min-width="120">
                            <template #default="{ row }">
                                <span>{{ row.patch_no || '-' }}</span>
                            </template>
                        </el-table-column>

                        <el-table-column :label="t('appName')" min-width="130">
                            <template #default="{ row }">
                                <span>{{ row.app_key || '-' }}</span>
                            </template>
                        </el-table-column>

                        <el-table-column :label="t('patchTitle')" min-width="200" show-overflow-tooltip>
                            <template #default="{ row }">
                                <span>{{ row.title || '-' }}</span>
                            </template>
                        </el-table-column>

                        <el-table-column :label="t('frameworkVersion')" min-width="120">
                            <template #default="{ row }">
                                <span>{{ row.app_version || row.framework_version_no || '-' }}</span>
                            </template>
                        </el-table-column>

                        <el-table-column :label="t('releaseTime')" min-width="160">
                            <template #default="{ row }">
                                <span>{{ row.release_time || '-' }}</span>
                            </template>
                        </el-table-column>

                        <el-table-column :label="t('resolveStatus')" min-width="110">
                            <template #default="{ row }">
                                <el-tag :type="Number(row.is_resolved) === 1 ? 'success' : 'warning'" size="small" effect="light">
                                    {{ row.resolve_name }}
                                </el-tag>
                            </template>
                        </el-table-column>

                        <el-table-column :label="t('operation')" align="right" fixed="right" width="220">
                            <template #default="{ row }">
                                <table-actions :actions="rowActions(row)" />
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <table-pagination
                    v-model:current-page="tableData.page"
                    v-model:page-size="tableData.limit"
                    :total="tableData.total"
                    @size-change="loadList()"
                    @current-change="loadList"
                />
            </div>
        </div>

        <!-- 补丁详情：头区布局参考应用详情抽屉 -->
        <el-drawer v-model="detailVisible" class="patch-drawer" :with-header="false" size="560px">
            <div v-loading="detailLoading" class="patch-detail">
                <template v-if="patchInfo.id">
                    <div class="patch-detail__head">
                        <div class="patch-detail__head-main">
                            <div class="patch-detail__ident">
                                <h2 class="patch-detail__title" :title="patchInfo.title || '-'">
                                    {{ patchInfo.title || '-' }}
                                </h2>
                                <div class="flex items-center flex-wrap gap-[8px] mt-[8px]">
                                    <el-tag size="small" effect="plain">{{ patchInfo.patch_no || '-' }}</el-tag>
                                    <el-tag size="small" effect="plain">{{ patchInfo.app_key || '-' }}</el-tag>
                                    <el-tag size="small" effect="plain" :type="Number(patchInfo.is_resolved) === 1 ? 'success' : 'warning'">
                                        {{ patchInfo.resolve_name }}
                                    </el-tag>
                                </div>
                            </div>
                        </div>
                        <button type="button" class="patch-detail__close" aria-label="关闭" @click="detailVisible = false">
                            <el-icon><Close /></el-icon>
                        </button>
                    </div>

                    <div class="patch-detail__body">
                        <dl class="patch-detail__meta">
                            <div>
                                <dt>{{ t('appName') }}</dt>
                                <dd>{{ patchInfo.app_key || '-' }}</dd>
                            </div>
                            <div>
                                <dt>{{ t('frameworkVersion') }}</dt>
                                <dd>{{ patchInfo.app_version || patchInfo.framework_version_no || '-' }}</dd>
                            </div>
                            <div>
                                <dt>{{ t('releaseTime') }}</dt>
                                <dd>{{ patchInfo.release_time || '-' }}</dd>
                            </div>
                            <div>
                                <dt>{{ t('syncTime') }}</dt>
                                <dd>{{ patchInfo.create_time || '-' }}</dd>
                            </div>
                            <div>
                                <dt>{{ t('resolveStatus') }}</dt>
                                <dd :class="Number(patchInfo.is_resolved) === 1 ? 'is-resolved' : 'is-unresolved'">
                                    {{ patchInfo.resolve_name }}
                                </dd>
                            </div>
                            <div>
                                <dt>{{ t('resolvedTime') }}</dt>
                                <dd>{{ Number(patchInfo.is_resolved) === 1 ? (patchInfo.resolved_time || '-') : '-' }}</dd>
                            </div>
                        </dl>

                        <div class="patch-detail__desc">
                            <div class="patch-detail__desc-label">{{ t('patchDesc') }}</div>
                            <!-- description 为富文本（补丁说明，含示意图），与补丁消息的内容展示保持一致 -->
                            <div v-if="patchInfo.description" class="patch-content-box">
                                <div v-html="patchInfo.description"></div>
                            </div>
                            <div v-else class="patch-content-box">{{ t('noPatchDesc') }}</div>
                        </div>

                        <div class="patch-detail__actions">
                            <!-- 已解决后不再提供取消标记的操作 -->
                            <el-button v-if="patchInfo.attach_url" type="primary" @click="downloadAttach(patchInfo)">
                                {{ t('downloadPatch') }}
                            </el-button>
                            <el-button v-if="Number(patchInfo.is_resolved) !== 1" @click="toggleResolve(patchInfo)">
                                {{ t('markResolved') }}
                            </el-button>
                        </div>
                    </div>
                </template>

                <el-empty v-else :description="t('emptyData')" />
            </div>
        </el-drawer>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { t } from '@/lang'
import { ElMessage, ElMessageBox, FormInstance } from 'element-plus'
import { Close, Document } from '@element-plus/icons-vue'
import { getFrameworkPatchList, getFrameworkPatchInfo, syncFrameworkPatch, resolveFrameworkPatch } from '@/app/api/upgrade'
import TableActions from '@/components/table-actions/index.vue'
import TablePagination from '@/components/table-pagination/index.vue'
import TableToolbar from '@/components/table-toolbar/index.vue'
import { useRoute } from 'vue-router'
import { useTablePageHeight } from '@/hooks/useTablePageHeight'

const route = useRoute()
const pageName = route.meta.title

// 表格占满页面剩余高度，超出部分在表格内部滚动
const { pageRef, pageStyle } = useTablePageHeight()

const searchFormRef = ref<FormInstance>()

const tableData = reactive({
    page: 1,
    limit: 10,
    total: 0,
    loading: true,
    data: [] as any[]
})

const searchParam = reactive({
    title: '',
    is_resolved: '' as '' | 0 | 1 | null
})

const syncing = ref(false)
const detailVisible = ref(false)
const detailLoading = ref(false)
/** 抽屉中的补丁详情（接口返回，字段比列表全） */
const patchInfo = ref<any>({})

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
    loadList()
}

/** 表格行内操作 */
const rowActions = (row: any) => [
    { label: t('patchDetail'), onClick: () => showDetail(row) },
    // { label: t('download'), show: !!row.attach_url, onClick: () => downloadAttach(row) },
    { label: t('markResolved'), type: 'success' as const, show: Number(row.is_resolved) !== 1, onClick: () => toggleResolve(row) }
]

const loadList = (page: number = 1) => {
    tableData.loading = true
    if (page) tableData.page = page

    const resolved = searchParam.is_resolved

    getFrameworkPatchList({
        page: tableData.page,
        limit: tableData.limit,
        title: searchParam.title,
        is_resolved: resolved === 0 || resolved === 1 ? resolved : ''
    }).then((res: any) => {
        tableData.data = res.data.data
        tableData.total = res.data.total
        tableData.loading = false
    }).catch(() => {
        tableData.loading = false
    })
}

/** 立即同步云端补丁 */
const syncPatch = () => {
    if (syncing.value) return
    syncing.value = true

    syncFrameworkPatch().then((res: any) => {
        const data = res?.data ?? {}
        ElMessage({
            message: Number(data.new) > 0
                ? `${ t('syncPatchTip') }：新增 ${ data.new } 条（共 ${ data.total ?? 0 } 条）`
                : t('syncPatchNone'),
            type: 'success'
        })
        loadList()
    }).catch((err: any) => {
        ElMessage({ message: err?.msg || err?.message || t('syncPatchFail'), type: 'error' })
    }).finally(() => {
        syncing.value = false
    })
}

/**
 * 标记已解决
 *
 * 只提供「标记」这一个方向：标记后不可取消（记录的是「已处理过」这一事实）
 */
const toggleResolve = (row: any) => {
    if (Number(row.is_resolved) === 1) return

    ElMessageBox.confirm(t('markResolvedTips'), t('warning'), {
        confirmButtonText: t('confirm'),
        cancelButtonText: t('cancel'),
        type: 'warning'
    }).then(() => {
        resolveFrameworkPatch(Number(row.id), 1).then(() => {
            loadList()
            // 抽屉内标记时同步刷新详情（保持「处理状态」与按钮一致）
            if (detailVisible.value && patchInfo.value.id === Number(row.id)) {
                loadDetail(Number(row.id))
            }
        }).catch((err: any) => {
            ElMessage({ message: err?.msg || err?.message || t('resolveFail'), type: 'error' })
        })
    }).catch(() => {
    })
}

/** 加载补丁详情（抽屉用） */
const loadDetail = (id: number) => {
    detailLoading.value = true

    getFrameworkPatchInfo(id).then((res: any) => {
        patchInfo.value = res?.data ?? {}
        detailLoading.value = false
    }).catch(() => {
        patchInfo.value = {}
        detailLoading.value = false
    })
}

const showDetail = (row: any) => {
    patchInfo.value = {}
    detailVisible.value = true
    loadDetail(Number(row.id))
}

/** 下载补丁附件 */
const downloadAttach = (row: any) => {
    if (!row.attach_url) return
    window.open(row.attach_url, '_blank')
}

loadList()
</script>

<style lang="scss" scoped>
.patch-detail {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 0;
    flex: 1;
    background: #fff;

    /* 头区：与应用详情 am-detail__head 一致 */
    &__head {
        display: flex;
        flex: none;
        gap: 12px;
        align-items: flex-start;
        justify-content: space-between;
        padding: 18px 20px 14px;
        border-bottom: 1px solid #f1f2f4;
    }

    &__head-main {
        display: flex;
        align-items: center;
        min-width: 0;
    }

    &__tile {
        display: flex;
        flex: none;
        align-items: center;
        justify-content: center;
        width: 54px;
        height: 54px;
        margin-right: 12px;
        overflow: hidden;
        color: var(--el-color-primary);
        background: var(--el-color-primary-light-9, #ecf5ff);
        border-radius: 8px;
    }

    &__ident {
        min-width: 0;
    }

    &__title {
        margin: 0;
        overflow: hidden;
        color: #1d1f3a;
        font-size: 16px;
        font-weight: 600;
        line-height: 22px;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    &__close {
        display: flex;
        flex: none;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        color: #9699b6;
        background: transparent;
        border: 0;
        border-radius: 6px;
        cursor: pointer;
        transition: background 0.14s ease, color 0.14s ease;

        &:hover {
            color: #1d1f3a;
            background: #f4f5f7;
        }
    }

    &__body {
        flex: 1;
        min-height: 0;
        padding: 18px 20px 20px;
        overflow-y: auto;
    }

    /* 与应用详情「应用信息」kv 表一致：左标签右值、行分隔线 */
    &__meta {
        display: flex;
        flex-direction: column;
        margin: 0 0 20px;
        overflow: hidden;
        background: #fafbfc;
        border: 1px solid #ebeef5;
        border-radius: 8px;

        > div {
            display: flex;
            gap: 14px;
            align-items: center;
            justify-content: space-between;
            padding: 10px 12px;
            border-bottom: 1px solid #ebeef5;
            font-size: 13px;
            line-height: 20px;

            &:last-child {
                border-bottom: 0;
            }
        }

        dt {
            flex: none;
            color: #9699b6;
        }

        dd {
            margin: 0;
            min-width: 0;
            overflow: hidden;
            color: #1d1f3a;
            text-align: right;
            text-overflow: ellipsis;
            white-space: nowrap;

            &.is-unresolved {
                color: #f56c6c;
            }

            &.is-resolved {
                color: #67c23a;
            }
        }
    }

    &__desc {
        margin-bottom: 20px;
    }

    &__desc-label {
        margin-bottom: 8px;
        font-size: 13px;
        line-height: 20px;
        color: #909399;
    }

    &__actions {
        display: flex;
        gap: 8px;
        align-items: center;
        justify-content: flex-end;
    }
}

.patch-pill {
    display: inline-flex;
    gap: 4px;
    align-items: center;
    height: 20px;
    padding: 0 8px;
    border-radius: 999px;
    font-size: 11.5px;
    line-height: 1;
    white-space: nowrap;

    &--muted {
        color: #9699b6;
        background: #f4f5f7;
    }

    &--ok {
        color: #03c92e;
        background: rgba(3, 201, 46, 0.1);
    }

    &--danger {
        color: #f3321d;
        background: rgba(243, 50, 29, 0.1);
    }

    &__dot {
        flex: none;
        width: 5px;
        height: 5px;
        background: currentColor;
        border-radius: 999px;
    }
}

/* 补丁说明：与消息详情里的内容区块保持一致（浅灰底、圆角、富文本） */
.patch-content-box {
    padding: 12px 14px;
    min-height: 80px;
    font-size: 13px;
    line-height: 22px;
    color: #303133;
    background-color: var(--sys-color-fill-lighter);
    border-radius: 6px;
    white-space: pre-wrap;
    word-break: break-all;
}
</style>

<style lang="scss">
.patch-drawer {
    max-width: 100vw;

    .el-drawer__body {
        display: flex;
        flex-direction: column;
        padding: 0;
        overflow: hidden;
    }
}
</style>
