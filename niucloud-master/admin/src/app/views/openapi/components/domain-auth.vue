<template>
    <div>
        <div class="flex items-center justify-between mb-3">
            <span class="text-sm text-gray-500">
                已授权 <b class="text-primary">{{ checkedCount }}</b> / {{ tree.length }} 个模块
            </span>
            <div>
                <el-button link type="primary" @click="setAll">全选</el-button>
                <el-button link type="danger" @click="clearAll">清空</el-button>
            </div>
        </div>

        <div v-if="!tree.length" class="auth-empty">
            <el-icon class="auth-empty__icon">
                <Files />
            </el-icon>
            <span>暂无可授权的开放接口</span>
        </div>

        <div v-else class="flex flex-col gap-3">
            <div v-for="group in tree" :key="group.group_key"
                 class="border rounded-lg p-3 transition-colors"
                 :class="isChecked(group.domain) ? 'border-primary bg-primary/5' : 'border-gray-200'">
                <div class="flex items-center justify-between">
                    <el-checkbox :model-value="isChecked(group.domain)"
                                 @change="(val) => toggle(group.domain, val)">
                        <span class="font-medium">{{ group.group_name }}</span>
                    </el-checkbox>
                    <span class="text-xs text-gray-400">含 {{ group.items.length }} 个接口</span>
                </div>

                <div class="mt-2 pl-6 flex flex-col gap-1.5">
                    <div v-for="item in group.items" :key="item.api_key"
                         class="flex items-center gap-2 text-xs">
                        <el-tag size="small" :type="methodType(item.method)" class="shrink-0">
                            {{ (item.method || 'get').toUpperCase() }}
                        </el-tag>
                        <span class="text-gray-700 shrink-0">{{ item.name }}</span>
                        <span class="font-mono text-gray-400 truncate">{{ item.path }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { Files } from '@element-plus/icons-vue'

interface ApiItem {
    api_key: string
    name: string
    desc: string
    method: string
    path: string
}

interface ApiGroup {
    group_key: string
    group_name: string
    domain: string
    items: ApiItem[]
}

const props = defineProps<{
    modelValue: string[]
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: string[]): void
}>()

const tree = ref<ApiGroup[]>([])

/**
 * 设置可授权模块树
 */
const setTree = (list: ApiGroup[]) => {
    tree.value = list || []
}

const checkedModules = computed(() => props.modelValue || [])

const checkedCount = computed(() => checkedModules.value.length)

const isChecked = (module: string) => checkedModules.value.includes(module)

/**
 * 勾选 / 取消某个模块（勾选即拥有该模块下全部接口权限）
 */
const toggle = (module: string, checked: boolean) => {
    const current = new Set(props.modelValue || [])

    if (checked) current.add(module)
    else current.delete(module)

    emit('update:modelValue', Array.from(current))
}

const setAll = () => emit('update:modelValue', tree.value.map(group => group.domain))

const clearAll = () => emit('update:modelValue', [])

const methodType = (method: string) => {
    const m = (method || 'get').toLowerCase()
    if (m === 'get') return 'success'
    if (m === 'post') return 'primary'
    if (m === 'put') return 'warning'
    if (m === 'delete') return 'danger'
    return 'info'
}

defineExpose({ setTree })
</script>

<style lang="scss" scoped>
.auth-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 28px 0;
    color: #c0c4cc;
    font-size: 13px;

    &__icon {
        font-size: 32px;
    }
}
</style>
