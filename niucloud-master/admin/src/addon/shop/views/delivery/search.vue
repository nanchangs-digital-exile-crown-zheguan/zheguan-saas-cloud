<template>
    <div class="main-container">
        <el-card class="card !border-none" shadow="never">
            <el-page-header :content="pageName" :icon="ArrowLeft" @back="router.push({ path: '/shop/delivery/config' })" />
            <el-table class="mt-[20px]" :data="tableData" v-loading="loading" size="large">
                <el-table-column prop="name" :label="t('interfaceType')" min-width="180" />
                <el-table-column :label="t('isUse')" align="center" min-width="160">
                    <template #default="{ row }">
                        <el-tag :type="row.is_use ? 'success' : 'error'">{{ row.is_use ? t('statusNormal') : t('statusDeactivate') }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column :label="t('operation')" align="right" width="100">
                    <template #default="{ row }">
                        <el-button type="primary" link @click="openConfig(row.type)">{{ t('config') }}</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>

        <el-dialog v-model="dialogVisible" :title="config.name" width="560px" destroy-on-close>
            <el-form v-loading="configLoading" label-width="130px">
                <el-form-item :label="t('isUse')">
                    <el-switch v-model="config.is_use" :active-value="1" :inactive-value="0" />
                </el-form-item>
                <el-form-item v-for="(item, key) in config.params" :key="key" :label="item.name">
                    <div class="w-full">
                        <el-radio-group v-if="item.options?.length" v-model="item.value">
                            <el-radio v-for="option in item.options" :key="option.label" :label="option.label">{{ option.text }}</el-radio>
                        </el-radio-group>
                        <el-input v-else v-model.trim="item.value" clearable />
                        <p v-for="tip in item.tips" :key="tip" class="mt-[8px] text-[12px] leading-[20px] text-[#999]">{{ tip }}</p>
                    </div>
                </el-form-item>
            </el-form>
            <template #footer>
                <el-button @click="dialogVisible = false">{{ t('cancel') }}</el-button>
                <el-button type="primary" :loading="configLoading" @click="save">{{ t('save') }}</el-button>
            </template>
        </el-dialog>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ArrowLeft } from '@element-plus/icons-vue'
import { t } from '@/lang'
import { useRoute, useRouter } from 'vue-router'
import { getDeliverySearch, getDeliverySearchConfig, setDeliverySearch } from '@/addon/shop/api/delivery'

const router = useRouter()
const route = useRoute()
const pageName = route.meta.title
const loading = ref(false)
const configLoading = ref(false)
const dialogVisible = ref(false)
const tableData = ref<any[]>([])
const config = reactive<any>({ type: '', name: '', is_use: 0, params: {} })

const loadList = async () => {
    loading.value = true
    try {
        const { data } = await getDeliverySearch()
        tableData.value = data
    } finally {
        loading.value = false
    }
}

const openConfig = async (type: string) => {
    configLoading.value = true
    dialogVisible.value = true
    try {
        const { data } = await getDeliverySearchConfig(type)
        config.type = data.type
        config.name = data.name
        config.is_use = data.is_use
        config.params = data.params
    } finally {
        configLoading.value = false
    }
}

const save = async () => {
    configLoading.value = true
    try {
        const params: Record<string, any> = { is_use: config.is_use }
        Object.keys(config.params).forEach(key => { params[key] = config.params[key].value })
        await setDeliverySearch(config.type, params)
        dialogVisible.value = false
        await loadList()
    } finally {
        configLoading.value = false
    }
}

loadList()
</script>
