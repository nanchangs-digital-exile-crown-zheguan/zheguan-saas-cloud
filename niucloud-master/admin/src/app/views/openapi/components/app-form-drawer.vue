<template>
    <el-drawer v-model="visible" :title="form.id ? '编辑开放账号' : '创建开放账号'" size="520px"
               @closed="reset">
        <el-form ref="formRef" :model="form" :rules="rules" label-position="top">
            <div class="mb-5">
                <div class="font-medium text-gray-800 mb-3 pb-2 border-b border-gray-100">基础信息</div>
                <el-form-item label="账号名称" prop="name">
                    <el-input v-model.trim="form.name" placeholder="例如：ERP对接-上海店" maxlength="100" show-word-limit />
                </el-form-item>
                <el-form-item label="有效期">
                    <el-switch v-model="hasExpire" active-text="设置过期时间" />
                    <el-date-picker v-if="hasExpire" v-model="form.expire_time" type="datetime" value-format="X"
                                    placeholder="选择过期时间" class="w-full mt-2" />
                </el-form-item>
                <el-form-item label="备注">
                    <el-input v-model="form.remark" type="textarea" :rows="2" maxlength="255"
                              placeholder="用途说明，便于后续排查问题" />
                </el-form-item>
            </div>

            <div class="mb-5">
                <div class="font-medium text-gray-800 mb-3 pb-2 border-b border-gray-100">安全策略</div>
                <el-form-item label="IP 白名单">
                    <el-input v-model="form.ip_white" type="textarea" :rows="2"
                              placeholder="每行一个或逗号分隔，留空表示不限制来源 IP" />
                </el-form-item>
                <el-form-item label="令牌有效期（秒）">
                    <el-input-number v-model="form.token_expire" :min="0" :step="600" class="w-full" />
                </el-form-item>
                <el-form-item label="状态">
                    <el-switch v-model="form.status" :active-value="1" :inactive-value="0"
                               active-text="启用" inactive-text="禁用" />
                </el-form-item>
            </div>

            <div>
                <div class="font-medium text-gray-800 mb-3 pb-2 border-b border-gray-100">能力授权</div>
                <domain-auth ref="domainAuthRef" v-model="form.auth_domains" />
            </div>
        </el-form>

        <template #footer>
            <el-button @click="visible = false">取消</el-button>
            <el-button type="primary" :loading="loading" @click="submit">保存</el-button>
        </template>
    </el-drawer>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { addOpenapiApp, editOpenapiApp, getOpenapiApiTree } from '@/app/api/openapi'
import DomainAuth from './domain-auth.vue'

const emit = defineEmits<{
    (e: 'complete', data: any): void
}>()

const visible = ref(false)
const loading = ref(false)
const hasExpire = ref(false)
const formRef = ref()
const domainAuthRef = ref()

const form = reactive({
    id: 0,
    name: '',
    status: 1,
    auth_domains: [] as string[],
    ip_white: '',
    expire_time: 0,
    token_expire: 7200,
    remark: ''
})

const rules = {
    name: [{ required: true, message: '请输入开放账号名称', trigger: 'blur' }]
}

/**
 * 拉取可授权接口清单
 */
const loadApiTree = () => {
    getOpenapiApiTree().then((res: any) => {
        domainAuthRef.value?.setTree(res.data || [])
    })
}

/**
 * 打开抽屉，传入 row 为编辑，不传为新增
 */
const show = (row?: any) => {
    visible.value = true
    loadApiTree()

    if (row) {
        hasExpire.value = !!row.expire_time
        Object.assign(form, {
            id: row.id,
            name: row.name,
            status: row.status,
            auth_domains: [ ...(row.auth_domains || []) ],
            ip_white: row.ip_white,
            expire_time: row.expire_time,
            token_expire: row.token_expire,
            remark: row.remark
        })
    }
}

/**
 * 提交表单
 */
const submit = () => {
    formRef.value?.validate((valid: boolean) => {
        if (!valid) return

        loading.value = true
        const data = { ...form, auth_domains: [ ...form.auth_domains ], expire_time: hasExpire.value ? form.expire_time : 0 }

        const request = form.id ? editOpenapiApp(form.id, data) : addOpenapiApp(data)
        request.then((res: any) => {
            loading.value = false
            visible.value = false
            emit('complete', res.data)
        }).catch(() => {
            loading.value = false
        })
    })
}

const reset = () => {
    formRef.value?.resetFields()
    Object.assign(form, {
        id: 0,
        name: '',
        status: 1,
        auth_domains: [],
        ip_white: '',
        expire_time: 0,
        token_expire: 7200,
        remark: ''
    })
    hasExpire.value = false
}

defineExpose({ show })
</script>
