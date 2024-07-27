<template>
    <div class="cart">
        <Header title="购物车" :edit="true"/>
        <cartDetail v-if="isShow" :changeShow="changeShow"/>
        <Empty v-else/>
        <Footer/>
    </div>
</template>
<script>
    import Footer from '../../components/Footer.vue'
    import Empty from '@/components/Empty.vue'
    import Header from '@/components/Header.vue'
    import cartDetail from './components/cartDetail.vue'
    import { useStore } from 'vuex'
    import { onMounted, ref } from 'vue'
    export default {
        components: {
            Footer,
            Empty,
            Header,
            cartDetail
        },
        setup() {
            const isShow = ref(true)
            const store = useStore()
            const init = () => {
                if (store.state.cartList.length === 0) {
                    isShow.value = false
                }
            }
            onMounted(() => {
                init()
            })
            const changeShow = () => {
                isShow.value = false
            }
            return {
                isShow,
                changeShow
            }
        }
    }
</script>
<style lang="less" scoped>
    .cart {
        display: flex;
        flex-flow: column;
        height: 100%;
        .content {
            flex: 1;
            overflow-y: auto;
        }
    }
</style>
