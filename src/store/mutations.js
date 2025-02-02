import { ADDCART } from "./mutations-type"
export default {
    [ADDCART](state, value) {
        state.cartList = value
    },
    changeDelete(state) {
        state.isDelete = !state.isDelete
    },
    delete(state, value) {
        state.cartList = value
    },
    edit(state, value) {
        if (value) state.edit = true
        else state.edit = !state.edit
    },
    pay(state, value) {
        state.orderList = value
    },
    orderListEnd(state) {
        state.orderListEnd = state.orderListEnd.concat(state.orderList)
    },
    addAddress(state, value) {
        state.userAddress.map(item => {
            if (value.isDefault) 
                item.isDefault = false
            
        })
        state.userAddress.push(value)
    },
    editAddress(state, value) {
        state.userAddress = state.userAddress.map(item => {
            if (value.isDefault) item.isDefault = false
            return item.id === value.id ? value : item
            
        })
    },
    deleteAddress(state, value) {
        console.log(value)
        state.userAddress = state.userAddress.filter(item => {
            return !(item.id === value.id)
        })
        if (value.isDefault) {
            state.userAddress[0].isDefault = true
        }
    },
    editMine(state, value) {
        if (value.name && value.pass) {
            let userInfo = JSON.parse(localStorage.userInfo)
            let newUserInfo = {
                user: value.name || userInfo.name,
                pass: value.pass || userInfo.pass,
                sign: value.name || userInfo.sign
            }
            localStorage.setItem("userInfo", JSON.stringify(newUserInfo))
    }
    }
}