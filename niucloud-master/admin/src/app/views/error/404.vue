<template>
    <div class="error">
        <div class="flex items-center">
            <slot name="content">
                <div>
                    <img class="w-[240px]" src="@/app/assets/images/error.png" />
                </div>
            </slot>
            <div class="text-left ml-[100px]">
                <div class="error-text text-[28px] font-bold">404错误！</div>
                <div class="text-[#222] text-[20px] mt-[15px]">哎呀，出错了！您访问的页面不存在...</div>
                <div class="text-[#c4c2c2] text-[12px] mt-[5px]">尝试检查URL的错误，然后点击浏览器刷新按钮。</div>
                <div v-if="showBack" class="mt-[40px]">
                    <el-button class="bottom" @click="goBack">{{ second }} 秒后返回上一页</el-button>
                </div>
            </div>

        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, onUnmounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import useSystemStore from '@/stores/modules/system'
import useTabbarStore from '@/stores/modules/tabbar'

const route = useRoute()
const router = useRouter()
const systemStore = useSystemStore()
const tabbarStore = useTabbarStore()

/**
 * 有标签栏且当前页已在标签中：关标签/切换即可，不展示返回按钮
 * 无标签栏、或真·404（不在标签中）：保留返回上一页
 */
const showBack = computed(() => {
    const name = route.name as string
    const inTab = !!(systemStore.tab && name && tabbarStore.tabs[name])
    return !inTab
})

let timer: ReturnType<typeof setInterval> | null = null
const second = ref(5)

const clearTimer = () => {
    if (timer) {
        clearInterval(timer)
        timer = null
    }
}

const goBack = () => {
    clearTimer()
    router.go(-1)
}

const startTimer = () => {
    clearTimer()
    second.value = 5
    timer = setInterval(() => {
        if (second.value <= 1) {
            goBack()
        } else {
            second.value--
        }
    }, 1000)
}

watch(showBack, (val) => {
    if (val) startTimer()
    else clearTimer()
}, { immediate: true })

onUnmounted(clearTimer)
</script>

<style lang="scss" scoped>
.error {
    text-align: center;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .error-code {
        @apply text-primary;
        font-size: 150px;
    }

    .error-text {
        color: #0e77fd;
    }

    .el-button {
        width: 176px;
        background-color: #0e77fd;
        color: #fff
    }
}
</style>
