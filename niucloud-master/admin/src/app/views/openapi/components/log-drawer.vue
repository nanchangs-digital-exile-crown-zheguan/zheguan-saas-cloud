<template>
    <el-drawer v-model="visible" :title="title" size="960px" destroy-on-close @opened="onOpened">
        <div class="log-drawer__body">
            <log-list ref="logListRef" :app-id="appId" :auto-load="false" />
        </div>
    </el-drawer>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import LogList from './log-list.vue'

const visible = ref(false)
const appId = ref<number | string>('')
const appName = ref('')
const logListRef = ref()

const title = computed(() => appName.value ? `调用日志 - ${ appName.value }` : '调用日志')

/**
 * 打开日志抽屉
 * @param id 开放账号 id（可选，不传则查看全部）
 * @param name 开放账号名称（可选，用于标题展示）
 */
const show = (id?: number | string, name?: string) => {
    appId.value = id ?? ''
    appName.value = name ?? ''
    visible.value = true
}

// 抽屉动画结束后再加载，保证表格拿到正确高度
const onOpened = () => {
    logListRef.value?.refresh()
}

defineExpose({ show })
</script>

<style lang="scss" scoped>
.log-drawer__body {
    height: 100%;
}

:deep(.el-drawer__body) {
    overflow: hidden;
}
</style>
