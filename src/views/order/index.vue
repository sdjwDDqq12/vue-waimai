<template>
    <div class="order">
        <Header title="订单"/>
        <div class="content">
            <van-tabs color="#ffc400">
                <van-tab :title="item" v-for="(item, index) in navData">
                    <div 
                    v-for="(item, index) in store.state.orderListEnd" 
                    v-if="item === '全部' && store.state.orderListEnd.length">
                        <van-card
                            :num="item.num"
                            :price="item.price"
                            :title="item.title"
                            :thumb="item.pic"
                        />
                    </div> 
                    <div v-else>
                        <Empty/>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
        <Footer/>
    </div>
</template>
<script>
    import Header from '@/components/Header.vue';
    import Footer from '../../components/Footer.vue'
    import { reactive, toRefs } from 'vue';
    import { useStore } from 'vuex';
    import Empty from '@/components/Empty.vue';
    export default {
        components: {
            Footer,
            Header,
            Empty
        },
        setup() {
            const store = useStore()
            const data = reactive({
                navData: ["全部","交易完成","待付款","待发货","已发货"]
            })
            return {
                ...toRefs(data),
                store
            }
        }
    }
</script>
<style lang="less" scoped>
    .order {
        display: flex;
        flex-flow: column;
        height: 100%;
        .content {
            flex: 1;
            overflow-y: auto;
        }
    }
</style>