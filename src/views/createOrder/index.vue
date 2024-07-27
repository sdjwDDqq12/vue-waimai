<template>
    <div class="create-order">
        <Header title="生成订单"/>
        <van-contact-card type="edit" :tel="tel" :name="name" @click="onEdit" />
        <div class="content">
            <div v-for="(item, index) in store.state.orderList">
                <van-card
                    :num="item.num"
                    :price="item.price"
                    :title="item.title"
                    :thumb="item.pic"
                />
            </div>
        </div>
        <div class="pay-wrap">
            <div class="price">
                <span>商品金额</span>
                <span>{{ totalPrice }}</span>
            </div>
            <van-button 
            type="primary" 
            class="pay-btn" 
            block 
            color="#ffc400"
            @click="handleCreateOrder">生成订单</van-button>
        </div>
    </div>
</template>
<script>
    import Header from '@/components/Header.vue';
    import { onMounted, reactive, toRefs } from 'vue';
    import { useStore } from 'vuex';
    import { Dialog } from 'vant';
    import { useRoute, useRouter } from 'vue-router';
    export default {
        components: {
            Header,
        },
        setup() {
            const data = reactive({
                tel: '1122123121321312',
                name: 'jason',
                totalPrice: 0
            })
            const store = useStore()
            const router = useRouter()
            const route = useRoute()
            const onEdit = () => {
                router.push("/address")
            }
            const initPrice = () => {
                let price = 0
                if (store.state.orderList.length) 
                    store.state.orderList.forEach((item) => {
                        price += item.num * item.price                     
                    })
                data.totalPrice = price
            }
            const initUser = () => {
                store.state.userAddress.forEach(item => {
                    if (item.isDefault){
                        data.name = item.name
                        data.tel = item.tel
                    } 
                }) 
            }
            const handleCreateOrder = () => {
                Dialog({ 
                    title: "提示",
                    message: "生成订单成功",
                }).then(() => {
                    let newList = store.state.cartList.filter((item) => {
                        return !route.query.list.includes(item.id + "")
                    })
                    store.commit('delete', newList)
                    store.commit('orderListEnd')
                    router.push("/order")
                })
            }
            onMounted(() => {
                initPrice()
                initUser()
            })
            return {
                ...toRefs(data),
                onEdit,
                store,
                handleCreateOrder
            }
        }
    }
</script>
<style lang="less" scoped>
.create-order {
  display: flex;
  flex-flow: column;
  height: 100%;
  .content {
    flex: 1;
    overflow-y: auto;
  }
  .pay-wrap {
    padding: 10px 0;
    width: 100%;
    background: #fff;
    border-top: 1px solid #e9e9e9;
    > div {
      display: flex;
      justify-content: space-between;
      padding: 0 5%;
      margin: 10px 0;
      font-size: 14px;
      span:nth-child(2) {
        color: red;
        font-size: 18px;
      }
    }
    .pay-btn {
      width: 90%;
      margin: 0 auto;
    }
  }
}
</style>