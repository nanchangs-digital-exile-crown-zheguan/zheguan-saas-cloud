<template>
    <!-- 客服面板-商品查询：iframe 内全屏渲染（/site/panel-frame?addon=shop&view=customer_panel/goods&member_id=x） -->
    <div class="panel-goods">
        <!-- 关键词搜索：外框描边，按钮内嵌留白（对齐订单面板） -->
        <div class="panel-goods-search">
            <div class="search-box">
                <el-input
                    v-model="keyword"
                    class="search-input"
                    clearable
                    type="text"
                    placeholder="搜索商品名称"
                    @keyup.enter="search"
                    @clear="search"
                />
                <button type="button" class="search-btn" @click="search">搜索</button>
            </div>
        </div>

        <!-- 商品列表 -->
        <div class="panel-goods-list" @scroll="onScroll">
            <div v-for="goods in list" :key="goods.goods_id" class="goods-card">
                <el-image
                    class="goods-img"
                    :src="img(goods.goods_cover_thumb_small || goods.goods_cover)"
                    fit="cover"
                />
                <div class="goods-info">
                    <div class="goods-name">{{ goods.goods_name }}</div>
                    <div class="goods-bottom">
                        <span class="goods-price">￥{{ goods.price ?? goods.goodsSku?.price }}</span>
                        <span class="goods-stock">库存：{{ goods.stock }}</span>
                    </div>
                    <div class="goods-sale">销量：{{ goods.sale_num || 0 }}</div>
                </div>
                <!-- 推送：把商品卡片发到当前聊天（msg_type=goods 协议，见 list.vue sendChatStructured） -->
                <div class="goods-action">
                    <el-button type="primary" link size="small" @click="pushGoods(goods)">推送</el-button>
                </div>
            </div>

            <el-empty v-if="!list.length && !loading" :image="img('static/resource/images/empty_default.png')" description="暂无商品" />
            <div v-if="loading" class="loading-tip">加载中...</div>
            <div v-else-if="noMore && list.length" class="loading-tip">没有更多了</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, inject, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { img } from '@/utils/common'
import { getGoodsPageList } from '@/addon/shop/api/goods'

// 聊天主区（list.vue）provide 的结构化消息发送函数
const chatSender = inject<((msgType: string, content: Record<string, any>) => boolean) | null>('shopCustomerChatSender', null)

/**
 * 面板 → 聊天台结构化消息发送（双通道）：
 * - 嵌入聊天台渲染（inject 可用）：直发
 * - iframe 宿主页独立页运行（inject 不可用）：postMessage 由聊天台 PanelContainer 监听转发
 */
const sendPanelMessage = (msgType: string, content: Record<string, any>) => {
    if (chatSender) return chatSender(msgType, content)
    window.parent?.postMessage({ type: 'shop_customer_send_message', msg_type: msgType, content }, '*')
    return true
}

/**
 * 推送商品卡片到当前聊天：msg_type=goods，content 直接带商品快照（addon/goods_id/name/image/price/page），
 * 服务端零查询按快照存储渲染；商品删除/改价后历史消息仍按推送当时快照展示
 */
const pushGoods = (goods: any) => {
    const ok = sendPanelMessage('goods', {
        addon: 'shop',
        goods_id: goods.goods_id,
        name: goods.goods_name,
        image: goods.goods_cover || goods.goods_cover_thumb_small || '',
        price: String(goods.price ?? goods.goodsSku?.price ?? ''),
        page: `/addon/shop/pages/goods/detail?goods_id=${goods.goods_id}`
    })
    if (ok) ElMessage.success('商品已发送')
}

const list = ref<any[]>([])
const loading = ref(false)
const noMore = ref(false)
const page = ref(1)
const limit = 10
const keyword = ref('')

const loadData = () => {
    if (loading.value || noMore.value) return
    loading.value = true
    getGoodsPageList({
        goods_name: keyword.value,
        page: page.value,
        limit
    }).then((res: any) => {
        const newArr = res.data.data || []
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

const search = () => {
    list.value = []
    page.value = 1
    noMore.value = false
    loadData()
}

// 滚动到底部加载更多
const onScroll = (e: Event) => {
    const el = e.target as HTMLElement
    if (el.scrollHeight - el.scrollTop - el.clientHeight < 30) {
        loadData()
    }
}

onMounted(() => {
    loadData()
})
</script>

<style lang="scss" scoped>
.panel-goods {
    height: 100%;
    min-height: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background: #fff;
}
.panel-goods-search {
    padding: 16px 16px 8px;
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
    :deep(.el-input__wrapper) {
        box-shadow: none;
        padding: 0 !important;
        background: transparent;
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
.panel-goods-list {
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 8px 16px;
    scrollbar-width: thin;
    scrollbar-color: #c8c8c8 transparent;
    &::-webkit-scrollbar { width: 4px; }
    &::-webkit-scrollbar-thumb {
        background: #c8c8c8;
        border-radius: 2px;
    }
    &::-webkit-scrollbar-track { background: transparent; }
}
.goods-card {
    display: flex;
    gap: 8px;
    // background: var(--el-bg-color, #fff);
    border: 1px solid #EDF2FA;
    border-radius: 6px;
    padding: 10px;
    margin-bottom: 16px;
}
.goods-action {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    :deep(.el-button){
        color: #1588FF;
    }
}
.goods-img {
    width: 48px;
    height: 48px;
    border-radius: 4px;
    flex-shrink: 0;
}
.goods-info {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
}
.goods-name {
    font-size: 13px;
    color: var(--el-text-color-primary, #303133);
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.goods-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    font-size: 12px;
}
.goods-price {
    color: #FA0404;
    font-weight: 600;
}
.goods-stock {
    color: var(--el-text-color-secondary, #909399);
}
.goods-sale {
    font-size: 12px;
    color: var(--el-text-color-secondary, #909399);
    margin-top: 2px;
}
.loading-tip {
    text-align: center;
    font-size: 12px;
    color: var(--el-text-color-secondary, #909399);
    padding: 10px 0;
}
</style>
