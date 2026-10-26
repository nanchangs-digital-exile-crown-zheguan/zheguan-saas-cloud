<template>
    <el-dialog v-model="visible" title="批量重置密钥结果" width="820px" :close-on-click-modal="false" @closed="handleClosed">
        <el-alert type="warning" :closable="false" show-icon class="mb-4"
                  title="以下为新生成的密钥，请立即复制并妥善保存；关闭后仍可在账号列表中逐个点击眼睛查看" />

        <el-table :data="list" size="small" border max-height="380">
            <el-table-column prop="name" label="账号名称" min-width="140" show-overflow-tooltip />
            <el-table-column label="Access Key" min-width="220">
                <template #default="{ row }">
                    <span class="font-mono text-xs break-all">{{ row.app_key }}</span>
                </template>
            </el-table-column>
            <el-table-column label="Secret Key" min-width="240">
                <template #default="{ row }">
                    <span class="font-mono text-xs break-all">{{ row.app_secret }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="90" align="right">
                <template #default="{ row }">
                    <el-button link type="primary" @click="copyRow(row)">复制</el-button>
                </template>
            </el-table-column>
        </el-table>

        <template #footer>
            <el-button :disabled="!list.length" @click="copyAll">复制全部</el-button>
            <el-button type="primary" @click="visible = false">知道了</el-button>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const visible = ref(false)
const list = ref<any[]>([])

/**
 * 打开弹窗展示批量重置结果
 */
const show = (items: any[]) => {
    list.value = items || []
    visible.value = true
}

const copy = (text: string) => {
    if (!text) return
    navigator.clipboard?.writeText(text).then(() => ElMessage.success('已复制到剪贴板'))
}

/**
 * 复制单条密钥（账号名 + AK + SK）
 */
const copyRow = (row: any) => {
    copy(`${ row.name }\nAccess Key: ${ row.app_key }\nSecret Key: ${ row.app_secret }`)
}

/**
 * 复制全部结果，便于一次性分发给多个对接方
 */
const copyAll = () => {
    const text = (list.value || [])
        .map(row => `${ row.name }\nAccess Key: ${ row.app_key }\nSecret Key: ${ row.app_secret }`)
        .join('\n\n')
    copy(text)
}

const handleClosed = () => {
    list.value = []
}

defineExpose({ show })
</script>
