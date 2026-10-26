<template>
    <el-dialog v-model="visible" title="开放账号密钥" width="560px" :close-on-click-modal="false" @closed="handleClosed">
        <el-alert type="info" :closable="false" show-icon class="mb-4"
                  title="密钥已生成，可在账号列表中点击眼睛图标随时查看；建议复制后妥善保存" />

        <div class="mb-4">
            <div class="text-sm text-gray-500 mb-2">Access Key</div>
            <div class="flex items-center gap-2 bg-gray-900 text-gray-100 rounded px-3 py-2">
                <span class="flex-1 font-mono text-base break-all">{{ data.app_key }}</span>
                <el-button link type="primary" @click="copy(data.app_key)">复制</el-button>
            </div>
        </div>

        <div class="mb-2">
            <div class="text-sm text-gray-500 mb-2">Secret Key</div>
            <div class="flex items-center gap-2 bg-gray-900 text-gray-100 rounded px-3 py-2">
                <span class="flex-1 font-mono text-base break-all">{{ data.app_secret }}</span>
                <el-button link type="primary" @click="copy(data.app_secret)">复制</el-button>
            </div>
        </div>

        <template #footer>
            <el-button type="primary" @click="visible = false">知道了</el-button>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'

const visible = ref(false)

const data = reactive({
    app_key: '',
    app_secret: ''
})

/**
 * 打开弹窗展示密钥（仅在创建成功与重置密钥后调用）
 */
const show = (app_key: string, app_secret: string) => {
    data.app_key = app_key
    data.app_secret = app_secret
    visible.value = true
}

/**
 * 复制到剪贴板
 */
const copy = (text: string) => {
    navigator.clipboard?.writeText(text).then(() => {
        ElMessage.success('已复制到剪贴板')
    })
}

const handleClosed = () => {
    data.app_key = ''
    data.app_secret = ''
}

defineExpose({ show })
</script>
