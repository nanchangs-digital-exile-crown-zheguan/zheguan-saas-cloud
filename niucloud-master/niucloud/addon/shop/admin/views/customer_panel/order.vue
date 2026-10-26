<template>
    <!-- 客服面板-商城订单：由 shop_customer PanelContainer 动态加载，member_id 以 props 传入 -->
    <div class="panel-order">
        <!-- 状态筛选 -->
        <div class="panel-order-tabs">
            <span
                v-for="tab in statusTabs"
                :key="String(tab.value)"
                class="panel-order-tab"
                :class="{ active: activeStatus === tab.value }"
                @click="switchStatus(tab.value)"
            >{{ tab.label }}</span>
        </div>

        <!-- 关键词搜索：外框描边，按钮内嵌留白（对齐设计稿） -->
        <div class="panel-order-search">
            <div class="search-box">
                <el-input
                    v-model="keyword"
                    class="search-input"
                    clearable
                    type="text"
                    placeholder="搜索订单编号"
                    @keyup.enter="search"
                />
                <button type="button" class="search-btn" @click="search">搜索</button>
            </div>
        </div>

        <!-- 订单列表 -->
        <div class="panel-order-list" @scroll="onScroll">
            <div v-for="order in list" :key="order.order_id" class="order-card">
                <!-- 卡片头：单号 + 状态 -->
                <div class="order-card-head">
                    <span class="order-no" :title="order.order_no">{{ order.order_no }}</span>
                    <span class="order-status">{{ statusDisplayName(order.status_name) }}</span>
                </div>

                <!-- 商品列表 -->
                <div
                    v-for="goods in (order.order_goods || [])"
                    :key="goods.order_goods_id"
                    class="order-goods"
                >
                    <el-image
                        class="goods-img"
                        :src="img(goods.goods_image_thumb_small || goods.goods_image)"
                        fit="cover"
                    />
                    <div class="goods-info">
                        <div class="goods-name">{{ goods.goods_name }}</div>
                        <div class="goods-sku" v-if="goods.sku_name">{{ goods.sku_name }}</div>
                        <div class="goods-bottom">
                            <span class="goods-price">¥{{ goods.price }}</span>
                            <span class="goods-num">*{{ goods.num }}</span>
                        </div>
                    </div>
                </div>

                <!-- 灰底信息区：配送/金额/备注 -->
                <div class="order-card-meta">
                    <div class="meta-row">
                        <span class="meta-label">{{ order.delivery_type_name || '配送方式' }}</span>
                        <span class="meta-value">{{ order.create_time }}</span>
                    </div>
                    <div class="meta-row">
                        <span class="meta-label">订单金额</span>
                        <span class="meta-value">
                            ¥{{ order.order_money }}
                            <em class="pay-money">(实付{{ order.pay_money || order.order_money }})</em>
                        </span>
                    </div>
                    <div class="meta-row" v-if="order.shop_remark">
                        <span class="meta-label">备注</span>
                        <span class="meta-value meta-remark" :title="order.shop_remark">{{ order.shop_remark }}</span>
                    </div>
                </div>

                <!-- 操作按钮（按状态条件显示，复用商城后台同一套弹窗） -->
                <div class="order-card-actions">
                    <button
                        v-if="Number(order.status) === 1"
                        type="button"
                        class="order-action-btn"
                        @click="closeOrderFn(order)"
                    >关闭</button>
                    <button
                        v-if="[1,2].includes(Number(order.status)) && order.delivery_type !== 'virtual' && order.delivery_type !== 'store' && order.activity_type !== 'giftcard'"
                        type="button"
                        class="order-action-btn"
                        @click="editAddressFn(order)"
                    >修改地址</button>
                    <button
                        v-if="Number(order.status) === 2 && order.delivery_type !== 'store'"
                        type="button"
                        class="order-action-btn"
                        @click="deliveryFn(order, 'add')"
                    >发货</button>
                    <button
                        v-if="Number(order.status) === 3 && order.delivery_type !== 'store' && order.delivery_type !== 'virtual'"
                        type="button"
                        class="order-action-btn"
                        @click="deliveryFn(order, 'edit')"
                    >修改发货</button>
                    <button
                        v-if="Number(order.status) === 3"
                        type="button"
                        class="order-action-btn"
                        @click="confirmReceiveFn(order)"
                    >确认收货</button>
                    <button
                        v-if="Number(order.status) !== 1 && Number(order.status) !== -1"
                        type="button"
                        class="order-action-btn"
                        @click="activeRefundFn(order)"
                    >退款</button>
                    <button
                        type="button"
                        class="order-action-btn"
                        @click="notesFn(order)"
                    >备注</button>
                </div>
            </div>

            <el-empty v-if="!list.length && !loading" :image="img('static/resource/images/empty_default.png')" description="暂无订单" />
            <div v-if="loading" class="loading-tip">加载中...</div>
            <div v-else-if="noMore && list.length" class="loading-tip">没有更多了</div>
        </div>

        <!-- 商城标准业务弹窗（复用商城后台订单页同一组件，操作成功后刷新本面板列表） -->
        <DeliveryAction ref="deliveryActionDialog" @complete="onActionComplete" />
        <OrderNotes ref="orderNotesDialog" @complete="onActionComplete" />
        <ShopActiveRefund ref="activeRefundDialog" @complete="onActionComplete" />
        <el-dialog v-model="confirmDialog" title="确认收货" width="360px" destroy-on-close>
            <span>确认该订单已收到货？</span>
            <template #footer>
                <el-button @click="confirmDialog = false">取消</el-button>
                <el-button type="primary" @click="confirmReceiveSubmit">确定</el-button>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useRoute } from 'vue-router'
import { img } from '@/utils/common'
import { getCustomerPanelOrderList } from '@/addon/shop/api/customer_panel'
import { getOrderDetail, orderClose, orderFinish, shopActiveRefund } from '@/addon/shop/api/order'
import DeliveryAction from '@/addon/shop/views/order/components/delivery-action.vue'
import OrderNotes from '@/addon/shop/views/order/components/order-notes.vue'
import ShopActiveRefund from '@/addon/shop/views/order/components/shop-active-refund.vue'

// member_id 由客服面板容器以 props 传入
const props = defineProps({
    memberId: { type: [Number, String], default: 0 }
})
const route = useRoute()
const memberId = Number(props.memberId || route.query.member_id || 0)

// 支付类型 name 映射（后端没 append pay_type_name，前端简单映射）
const payTypeNameMap: Record<number, string> = {
    1: '余额支付', 2: '微信支付', 3: '支付宝支付',
    4: '银联支付', 5: '货到付款', 6: '无需支付',
}

// 订单状态
const statusTabs = [
    { label: '全部', value: '' },
    { label: '待付款', value: 1 },
    { label: '待发货', value: 2 },
    { label: '待收货', value: 3 },
    { label: '已完成', value: 5 },
    { label: '已关闭', value: -1 }
]

const list = ref<any[]>([])
const loading = ref(false)
const noMore = ref(false)
const page = ref(1)
const limit = 10
const activeStatus = ref<number | ''>('')
const keyword = ref('')

// 确认收货弹窗状态
const confirmDialog = ref(false)
const finishingOrder = ref<any>(null)

const statusDisplayName = (sn: any): string => {
    if (typeof sn === 'string') return sn
    if (sn && typeof sn.name === 'string') return sn.name
    return ''
}

const loadData = () => {
    if (loading.value || noMore.value) return
    loading.value = true
    getCustomerPanelOrderList({
        member_id: memberId,
        status: activeStatus.value,
        order_no: keyword.value,
        page: page.value,
        limit
    }).then((res: any) => {
        const newArr = res.data.data || []
        // 补 pay_type_name（后端没 append，前端映射）
        newArr.forEach((o: any) => {
            if (!o.pay_type_name && o.pay_type) o.pay_type_name = payTypeNameMap[Number(o.pay_type)] || ''
        })
        list.value = list.value.concat(newArr)
        if (page.value >= (res.data.last_page || 1) || newArr.length < limit) {
            noMore.value = true
        } else {
            page.value++
        }
    }).finally(() => {
        loading.value = false
    })
}

const switchStatus = (status: number | '') => {
    if (activeStatus.value === status) return
    activeStatus.value = status
    list.value = []
    page.value = 1
    noMore.value = false
    loadData()
}

/** 搜索：回车 / 点击按钮 / 清除都会触发 */
const search = () => {
    list.value = []
    page.value = 1
    noMore.value = false
    loadData()
}

const onScroll = (e: Event) => {
    const el = e.target as HTMLElement
    if (el.scrollHeight - el.scrollTop - el.clientHeight < 30) {
        loadData()
    }
}

/** 操作弹窗组件 */
const deliveryActionDialog: Record<string, any> | null = ref(null)
const orderNotesDialog: Record<string, any> | null = ref(null)
const activeRefundDialog: Record<string, any> | null = ref(null)

// 发货 / 修改发货
const deliveryFn = async (order: any, type: 'add' | 'edit') => {
    const res: any = await getOrderDetail(order.order_id)
    deliveryActionDialog.value?.setFormData(res.data, type)
    deliveryActionDialog.value.showDialog = true
}
// 修改地址（弹窗和发货共用同一个 DeliveryAction，edit 模式只是 title 不同，但商城后台是独立组件，这里复用同一个）
const editAddressFn = async (order: any) => {
    // 修改地址和发货共用 DeliveryAction 的 edit 模式
    const res: any = await getOrderDetail(order.order_id)
    deliveryActionDialog.value?.setFormData(res.data, 'edit')
    deliveryActionDialog.value.showDialog = true
}
// 备注
const notesFn = async (order: any) => {
    const res: any = await getOrderDetail(order.order_id)
    orderNotesDialog.value?.setFormData(res.data)
    orderNotesDialog.value.showDialog = true
}
// 关闭订单
const closeOrderFn = (order: any) => {
    ElMessageBox.confirm('确定关闭此订单？', '提示', { type: 'warning' }).then(async () => {
        await orderClose(order.order_id)
        ElMessage.success('订单已关闭')
        onActionComplete()
    })
}
// 确认收货
const confirmReceiveFn = (order: any) => {
    finishingOrder.value = order
    confirmDialog.value = true
}
const confirmReceiveSubmit = async () => {
    if (!finishingOrder.value) return
    await orderFinish(finishingOrder.value.order_id)
    ElMessage.success('收货成功')
    confirmDialog.value = false
    finishingOrder.value = null
    onActionComplete()
}
// 主动退款
const activeRefundFn = async (order: any) => {
    const res: any = await getOrderDetail(order.order_id)
    activeRefundDialog.value?.setFormData(res.data)
    activeRefundDialog.value.showDialog = true
}
// 弹窗操作完成刷新
const onActionComplete = () => {
    list.value = []
    page.value = 1
    noMore.value = false
    loadData()
}

onMounted(() => {
    loadData()
})
</script>

<style lang="scss" scoped>
.panel-order {
    height: 100%;
    min-height: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background: #fff;
}
.panel-order-tabs {
    display: flex;
    flex-wrap: nowrap;
    gap: 2px;
    padding: 6px 16px;
    background: #fff;
    overflow-x: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar { display: none; }
    margin-top: 10px;
}
.panel-order-tab {
    flex-shrink: 0;
    font-size: 14px;
    padding: 3px 11px;
    border-radius: 20px;
    color: #999999;
    cursor: pointer;
    white-space: nowrap;
    transition: all .15s;
    &.active {
        background: #F3F9FF;
        color: #111111;
    }
}
.panel-order-search {
    padding: 10px 16px 6px;
    background: #fff;
}
.search-box {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 36px;
    padding: 3px 3px 3px 12px;
    background: #fff;
    border: 1px solid #EDF2FA;
    border-radius: 4px;
    box-sizing: border-box;
}
.search-input {
    flex: 1;
    min-width: 0;
    height: 100%;
    border: none;
    outline: none;
    background: transparent;
    font-size: 13px;
    color: #333;
    line-height: 1;
    &::placeholder {
        color: #bfbfbf;
    }
    :deep(.el-input__wrapper){
        box-shadow: none;
        padding: 0 !important;
    }
}
.search-btn {
    flex-shrink: 0;
    height: 28px;
    padding: 0 14px;
    border: none;
    border-radius: 4px;
    background: #1588ff;
    color: #fff;
    font-size: 13px;
    line-height: 28px;
    cursor: pointer;
    white-space: nowrap;
    transition: background .15s;
    &:hover { background: #3a9aff; }
    &:active { background: #0f6fd0; }
}
.panel-order-list {
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 10px 16px;
    background: #fff;
    scrollbar-width: thin;
    scrollbar-color: #c8c8c8 transparent;
    &::-webkit-scrollbar {
        width: 4px;
    }
    &::-webkit-scrollbar-thumb {
        background: #c8c8c8;
        border-radius: 2px;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
    }
}
.order-card {
    background: #fff;
    border: 1px solid #EDF2FA;
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 16px;
}
.order-card-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    gap: 8px;
}
.order-no {
    font-size: 14px;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
    flex: 1;
}
.order-status {
    flex-shrink: 0;
    font-size: 14px;
    color: #1588FF;
    font-weight: 400;
}
.order-goods {
    display: flex;
    gap: 10px;
    padding: 2px 0 8px;
}
.goods-img {
    width: 48px;
    height: 48px;
    border-radius: 4px;
    flex-shrink: 0;
    background: #f5f5f5;
}
.goods-info {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.goods-name {
    font-size: 16px;
    color: #111111;
    line-height: 1.4;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.goods-sku {
    font-size: 12px;
    color: #999;
    margin-top: 2px;
}
.goods-bottom {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 4px;
}
.goods-price {
    font-size: 18px;
    font-weight: 600;
    color: #FA0404;
}
.goods-num {
    font-size: 14px;
    color: #999;
}

/* 灰底信息区 */
.order-card-meta {
    margin-top: 4px;
    padding: 8px 10px;
    background: #f7f8fa;
    border-radius: 4px;
}
.meta-row {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    font-size: 14px;
    line-height: 1.6;
    & + .meta-row { margin-top: 2px; }
}
.meta-label {
    flex-shrink: 0;
    color: #999;
    min-width: 52px;
}
.meta-value {
    flex: 1;
    min-width: 0;
    color: #111;
    word-break: break-all;
}
.meta-remark {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.pay-money {
    font-style: normal;
    color: #ff4d4f;
    margin-left: 2px;
}

/* 操作按钮：浅蓝底蓝字，同一行均分不换行 */
.order-card-actions {
    display: flex;
    flex-wrap: nowrap;
    gap: 6px;
    margin-top: 10px;
}
.order-action-btn {
    flex: 1 1 0;
    min-width: 0;
    height: 28px;
    padding: 0 4px;
    border: none;
    border-radius: 4px;
    background: #E4F0FD;
    color: #1588ff;
    font-size: 12px;
    line-height: 28px;
    cursor: pointer;
    // white-space: nowrap;
    // overflow: hidden;
    // text-overflow: ellipsis;
    transition: all .15s;
    &:hover { background: #bae0ff; }
    &:active { background: #91caff; }
}

.loading-tip {
    text-align: center;
    font-size: 12px;
    color: #999;
    padding: 10px 0;
}
</style>
