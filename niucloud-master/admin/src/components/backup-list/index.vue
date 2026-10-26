<template>
    <!--
      备份管理弹框：列出 runtime/integrity/backup 下历次「写回官方文件」留下的备份批次，
      每批可展开看文件明细、勾选后恢复（或整批恢复）。

      与 components/file-diff 同一套约定：
        - 弹框是公共组件，可能从任意页面打开；文案直接查全局语言包 common.json，
          不走按路由推断语言文件的那套逻辑（理由见 file-diff/index.vue 里 t 的注释）。
        - 恢复是覆盖本地文件的危险操作：确认文案里讲清后果，且后端恢复前会把
          本地当前内容再备份一次（rollback），任何一步都可逆。
    -->
    <el-dialog v-model="visible" :title="t('backupManageTitle')" width="780px" top="6vh" append-to-body
        :close-on-click-modal="false" @open="loadList">
        <div v-loading="loading" class="min-h-[200px]">
            <div class="mb-[10px] truncate text-[12px] text-[#909399]" :title="root">
                {{ t('backupRootLabel') }}&nbsp;&nbsp;{{ root || '-' }}
            </div>

            <el-alert v-if="!loading && !list.length" type="info" :closable="false" show-icon
                :title="t('backupEmpty')" />

            <el-table v-else :data="list" border row-key="id">
                <el-table-column type="expand">
                    <template #default="{ row }">
                        <div class="backup-files">
                            <div class="mb-[8px] flex items-center justify-between px-[4px]">
                                <el-checkbox :model-value="isAllChecked(row)"
                                    :indeterminate="isIndeterminate(row)" @change="toggleAll(row, $event)">
                                    {{ t('backupSelectAll') }}
                                </el-checkbox>
                                <div class="flex items-center gap-[8px]">
                                    <el-button size="small" type="primary" :disabled="!row.checked.length || restoring"
                                        @click="askRestore(row, false)">
                                        {{ t('backupRestoreSelected') }} ({{ row.checked.length }})
                                    </el-button>
                                    <el-button size="small" type="danger" plain :disabled="!row.checked.length || restoring"
                                        @click="askDelete(row, false)">
                                        {{ t('backupDeleteSelected') }} ({{ row.checked.length }})
                                    </el-button>
                                </div>
                            </div>
                            <div class="max-h-[260px] overflow-y-auto rounded-[6px] bg-[#fafafa] p-[6px]">
                                <div v-for="item in row.files" :key="item.file"
                                    class="flex items-center gap-[8px] rounded-[4px] px-[4px] py-[3px] hover:bg-white">
                                    <el-checkbox :model-value="row.checked.includes(item.file)"
                                        class="!h-[22px] !mr-0" @change="toggleFile(row, item.file, $event)" />
                                    <span class="min-w-0 flex-1 truncate text-[12px] text-[#303133]"
                                        :title="item.file">{{ item.file }}</span>
                                    <span class="shrink-0 text-[12px] text-[#909399]">{{ formatSize(item.size) }}</span>
                                </div>
                            </div>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column :label="t('backupColTime')" prop="time" width="165" />
                <el-table-column :label="t('backupColTarget')" min-width="150">
                    <template #default="{ row }">
                        <div class="flex items-center gap-[6px]">
                            <span class="truncate" :title="row.target_name">{{ row.target_name }}</span>
                            <el-tooltip v-if="!row.restorable" :content="t('backupNotRestorableTip')" placement="top">
                                <el-tag size="small" type="info" effect="light">{{ t('backupNotRestorable') }}</el-tag>
                            </el-tooltip>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column :label="t('backupColCount')" prop="file_count" width="75" align="center" />
                <el-table-column :label="t('backupColSize')" width="90" align="right">
                    <template #default="{ row }">{{ formatSize(row.total_size) }}</template>
                </el-table-column>
                <el-table-column :label="t('backupColAction')" width="130" align="center">
                    <template #default="{ row }">
                        <div class="flex items-center justify-center gap-[8px]">
                            <el-button size="small" :disabled="!row.restorable || !row.file_count || restoring"
                                @click="askRestore(row, true)">
                                {{ t('restoreAction') }}
                            </el-button>
                            <el-button size="small" type="danger" plain :disabled="!row.file_count || restoring"
                                @click="askDelete(row, true)">
                                {{ t('delete') }}
                            </el-button>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <template #footer>
            <el-button @click="visible = false">{{ t('close') }}</el-button>
        </template>
    </el-dialog>

    <!-- 恢复结果弹框：结构与文件差异弹框的「写回结果」保持一致 -->
    <el-dialog v-model="resultVisible" :title="t('backupResultTitle')" width="560px" append-to-body
        :close-on-click-modal="false">
        <div class="restore-result">
            <div class="restore-result__summary" :class="resultFailedCount ? 'is-warning' : 'is-success'">
                <el-icon class="restore-result__summary-icon">
                    <WarningFilled v-if="resultFailedCount" />
                    <CircleCheckFilled v-else />
                </el-icon>
                <span class="restore-result__summary-text">{{ resultSummary }}</span>
            </div>

            <div v-if="restoreResult?.rollback_backup_dir" class="restore-result__backup">
                {{ t('backupRollbackDirLabel') }}&nbsp;&nbsp;{{ restoreResult.rollback_backup_dir }}
            </div>

            <div class="restore-result__refresh">{{ t('restoreRefreshTip') }}</div>

            <div v-if="restoreResult?.failed?.length" class="restore-result__section">
                <div class="restore-result__section-title is-failed">{{ t('restoreFailedList') }}</div>
                <div class="restore-result__list">
                    <div v-for="item in restoreResult.failed" :key="'f' + item.file" class="restore-result__item">
                        <div class="restore-result__file" :title="item.file">{{ item.file }}</div>
                        <div class="restore-result__msg is-failed">{{ item.message }}</div>
                    </div>
                </div>
            </div>

            <div v-if="restoreResult?.skipped?.length" class="restore-result__section">
                <div class="restore-result__section-title">{{ t('restoreSkippedList') }}</div>
                <div class="restore-result__list">
                    <div v-for="item in restoreResult.skipped" :key="'s' + item.file" class="restore-result__item">
                        <div class="restore-result__file" :title="item.file">{{ item.file }}</div>
                        <div class="restore-result__msg">{{ item.message }}</div>
                    </div>
                </div>
            </div>
        </div>

        <template #footer>
            <el-button type="primary" class="!px-[28px]" @click="resultVisible = false">
                {{ t('restoreDoneOk') }}
            </el-button>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { CircleCheckFilled, WarningFilled } from '@element-plus/icons-vue'
import { i18n } from '@/lang'
import { deleteIntegrityBackup, getIntegrityBackupList, restoreIntegrityBackup } from '@/app/api/integrity'

const emit = defineEmits(['update:show'])

/** 文案取法与 components/file-diff 保持一致：查全局语言包 common.json */
const t = (key: string): string => {
    const value = i18n?.global?.t?.(key)

    return value === undefined || value === null ? key : String(value)
}

interface BackupFile {
    file: string
    size: number
    mtime: number
}

interface BackupBatch {
    id: string
    stamp: string
    time: string
    target: string
    target_name: string
    restorable: boolean
    file_count: number
    total_size: number
    files: BackupFile[]
    /** 本行勾选的文件键（恢复选中用；空 = 一个没选） */
    checked: string[]
}

const props = defineProps<{
    /** 是否显示 */
    show: boolean
    /** 只看某个检测目标（framework / addon:shop）；不传 = 看全部目标 */
    target?: string
}>()

const visible = computed({
    get: () => props.show,
    set: (value: boolean) => emit('update:show', value)
})

const loading = ref(false)
const list = ref<BackupBatch[]>([])
const root = ref('')
/** 后端单次写回/恢复的文件数量上限，提示用户分批 */
const maxFiles = ref(0)
const restoring = ref(false)

const restoreResult = ref<any>(null)
const resultVisible = ref(false)
const resultFailedCount = computed(() => restoreResult.value?.failed?.length || 0)
const resultSummary = computed(() => {
    const result = restoreResult.value
    if (!result) return ''

    // 记号用 %x%，理由同 file-diff：{x} 会被 vue-i18n 当插值吃掉
    return t('backupSummary')
        .replace('%ok%', String(result.restored?.length || 0))
        .replace('%skip%', String(result.skipped?.length || 0))
        .replace('%fail%', String(result.failed?.length || 0))
})

/** 打开时拉一次列表（el-dialog @open 触发） */
const loadList = () => {
    loading.value = true
    list.value = []

    getIntegrityBackupList().then((res: any) => {
        const data = res.data || {}
        root.value = data.root || ''
        maxFiles.value = Number(data.max_files || 0)
        let rows: any[] = data.list || []

        // 指定了目标就只展示该目标的批次（入口本身只在「有备份」时出现，这里再兜一道）
        if (props.target) {
            rows = rows.filter((row: any) => row.target === props.target)
        }

        list.value = rows.map((row: any) => ({
            ...row,
            id: `${row.stamp}|${row.target}`,
            files: row.files || [],
            checked: []
        }))
    }).finally(() => {
        loading.value = false
    })
}

/** 字节数转可读文本（口径与 file-diff 一致） */
const formatSize = (size: number) => {
    if (!size) return '0 B'
    if (size < 1024) return `${size} B`
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`
    return `${(size / 1024 / 1024).toFixed(1)} MB`
}

const isAllChecked = (row: BackupBatch) => row.files.length > 0 && row.checked.length === row.files.length
const isIndeterminate = (row: BackupBatch) => row.checked.length > 0 && row.checked.length < row.files.length

const toggleAll = (row: BackupBatch, checked: boolean) => {
    row.checked = checked ? row.files.map(item => item.file) : []
}

const toggleFile = (row: BackupBatch, file: string, checked: boolean) => {
    const next = new Set(row.checked)
    if (checked) {
        next.add(file)
    } else {
        next.delete(file)
    }
    row.checked = [...next]
}

/**
 * 恢复入口（all=true 整批；false 恢复勾选）
 * 先弹确认（讲清覆盖后果与可回退），确认后调接口，成功后刷新列表并展示结果
 */
const askRestore = (row: BackupBatch, all: boolean) => {
    const files = all ? [] : [...row.checked]

    if (!all && !files.length) {
        ElMessage.warning(t('backupSelectTip'))
        return
    }

    if (maxFiles.value > 0 && (all ? row.file_count : files.length) > maxFiles.value) {
        ElMessage.warning(
            t('backupMaxFilesTip')
                .replace('%max%', String(maxFiles.value))
                .replace('%count%', String(all ? row.file_count : files.length))
        )
        return
    }

    ElMessageBox.confirm(t('backupConfirmText'), t('backupConfirmTitle'), {
        type: 'warning',
        confirmButtonText: t('backupConfirmOk'),
        cancelButtonText: t('cancel')
    }).then(() => {
        doRestore(row, files)
    }).catch(() => {})
}

const doRestore = (row: BackupBatch, files: string[]) => {
    restoring.value = true

    restoreIntegrityBackup({
        stamp: row.stamp,
        target: row.target,
        files
    }).then((res: any) => {
        restoreResult.value = res.data || null
        resultVisible.value = true

        // 恢复后不自动重跑检测：结果弹框负责提醒，最新状态由用户点「重新校验」
        loadList()
    }).finally(() => {
        restoring.value = false
    })
}

/**
 * 删除入口（all=true 整批；false 删除勾选）
 * 备份是「最后的退路」，删了就没了，确认文案必须把后果讲死；确认后调接口、刷新列表
 */
const askDelete = (row: BackupBatch, all: boolean) => {
    const files = all ? [] : [...row.checked]

    if (!all && !files.length) {
        ElMessage.warning(t('backupSelectTip'))
        return
    }

    ElMessageBox.confirm(
        all
            ? t('backupDeleteConfirmAll').replace('%count%', String(row.file_count))
            : t('backupDeleteConfirmSelected').replace('%count%', String(files.length)),
        t('backupDeleteConfirmTitle'),
        {
            type: 'warning',
            confirmButtonText: t('backupDeleteOk'),
            cancelButtonText: t('cancel')
        }
    ).then(() => {
        restoring.value = true

        deleteIntegrityBackup({
            stamp: row.stamp,
            target: row.target,
            files
        }).then((res: any) => {
            const deleted = Number(res.data?.deleted || 0)
            ElMessage.success(all ? t('backupDeletedBatch') : t('backupDeleted').replace('%count%', String(deleted)))
            loadList()
        }).finally(() => {
            restoring.value = false
        })
    }).catch(() => {})
}
</script>

<style lang="scss" scoped>
/*
 恢复结果弹框的样式与 components/file-diff 的 .restore-result 同一套视觉：
 那边是 scoped，公共组件之间不共享，所以这里按同样的类名再写一份。
*/
.restore-result {
    &__summary {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px 14px;
        border-radius: 8px;

        &-icon {
            font-size: 22px;
            flex-shrink: 0;
        }

        &-text {
            font-size: 14px;
            font-weight: 600;
        }

        &.is-success {
            background: var(--el-color-success-light-9);
            color: var(--el-color-success);
        }

        &.is-warning {
            background: var(--el-color-warning-light-9);
            color: var(--el-color-warning);
        }
    }

    &__backup {
        margin-top: 12px;
        padding: 8px 12px;
        border-radius: 6px;
        background: #f5f7fa;
        color: #606266;
        font-size: 12px;
        word-break: break-all;
    }

    // 恢复后不自动重跑检测，这里提醒用户去哪里看最新状态
    &__refresh {
        margin-top: 10px;
        font-size: 12px;
        line-height: 18px;
        color: #909399;
    }

    &__section {
        margin-top: 14px;

        &-title {
            margin-bottom: 6px;
            font-size: 13px;
            font-weight: 600;
            color: #909399;

            &.is-failed {
                color: var(--el-color-danger);
            }
        }
    }

    &__list {
        max-height: 180px;
        overflow-y: auto;
        border: 1px solid #ebeef5;
        border-radius: 6px;
    }

    &__item {
        display: flex;
        align-items: baseline;
        gap: 10px;
        padding: 6px 10px;

        &+.restore-result__item {
            border-top: 1px solid #f2f3f5;
        }
    }

    &__file {
        flex-shrink: 0;
        width: 46%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        direction: rtl;
        text-align: left;
        font-size: 12px;
        color: #303133;
    }

    &__msg {
        flex: 1;
        min-width: 0;
        font-size: 12px;
        color: #909399;

        &.is-failed {
            color: var(--el-color-danger);
        }
    }
}
</style>
