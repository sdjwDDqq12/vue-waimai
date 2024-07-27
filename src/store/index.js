import { createStore } from "vuex"
import mutations from "./mutations"
//跨组件间的传值
export default createStore({
    state: {
        cartList: [],  //购物车数据
        isDelete: true, //确定Header组件 点击编辑的时候 底部组件的展示
        edit: true, //默认展示编辑状态
        orderList: [],
        userAddress: [
            {
                id: 1001,
                name: 'jason',
                tel: '15874859686',
                province: '广东省',
                city: '深圳市',
                country: '南山区',
                addressDetail: '深圳湾',
                isDefault: true,
                areaCode: '110101',
              },
              {
                id: 1002,
                name: 'allen',
                tel: '15874859685',
                province: '湖北省',
                city: '武汉市',
                country: '武昌区',
                addressDetail: '黄鹤楼',
                isDefault: false,
                areaCode: '110101',
              },
        ],
        orderListEnd: [],
        userData:{
          name: '',
          sign: '我即是天选，也是唯一',
          pass: ''
        }
    },
    mutations,
    // mutations: {
    //     addcart(state, value) {
    //         state.cartList = value
    //     },
    //     changeDelete(state) {
    //         state.isDelete = !state.isDelete
    //     },
    //     delete(state, value) {
    //         state.cartList = value
    //     },
    //     edit(state, value) {
    //         if (value) state.edit = true
    //         else state.edit = !state.edit
    //     },
    //     pay(state, value) {
    //         state.orderList = value
    //     },
    //     orderListEnd(state) {
    //         state.orderListEnd = state.orderListEnd.concat(state.orderList)
    //     },
    //     addAddress(state, value) {
    //         state.userAddress.map(item => {
    //             if (value.isDefault) 
    //                 item.isDefault = false
                
    //         })
    //         state.userAddress.push(value)
    //     },
    //     editAddress(state, value) {
    //         state.userAddress = state.userAddress.map(item => {
    //             if (value.isDefault) item.isDefault = false
    //             return item.id === value.id ? value : item
                
    //         })
    //     },
    //     deleteAddress(state, value) {
    //         state.userAddress = state.userAddress.filter(item => {
    //             return !(item.id === value.id)
    //         })
    //         if (value.isDefault) {
    //             state.userAddress[0].isDefault = true
    //         }
    //     }
    // },
    actions: {}
})