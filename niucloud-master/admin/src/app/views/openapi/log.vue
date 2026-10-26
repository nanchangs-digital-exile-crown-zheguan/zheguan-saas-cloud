<template>
    <div ref="pageRef" class="main-container table-fill-page" :style="pageStyle">
        <div class="table-fill-page__card">
            <div class="flex-1 min-h-0">
                <log-list :app-id="appId" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useTablePageHeight } from '@/hooks/useTablePageHeight'
import LogList from './components/log-list.vue'

const { pageRef, pageStyle } = useTablePageHeight()
const route = useRoute()

// 支持通过 URL 带入账号 id（兼容从其他位置直接跳转的场景）
const appId = computed(() => (route.query.app_id as string) || '')
</script>
