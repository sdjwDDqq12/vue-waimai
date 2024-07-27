<template>
    <Header title="账号管理"/>
    <div>
        <van-field v-model="name" label="昵称" placeholder="请输入昵称"/>
        <van-field v-model="sign" label="个性签名" placeholder="个性签名"/>
        <van-field v-model="pass" label="密码" placeholder="密码"/>
    </div>
    <van-button 
    type="primary" 
    color="#ffc400" 
    round block 
    class="save-btn" 
    @click="onSave">保存</van-button>
    <van-button 
    type="primary" 
    color="#ffc400" 
    round block 
    class="save-btn" 
    @click="loginOut">退出登录</van-button>
</template>
<script>
    import Header from '@/components/Header.vue';
    import { Toast } from 'vant';
    import { reactive, toRefs } from 'vue';
    import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';
    export default {
        components: {
          Header,
        },
        setup() {
            const store = useStore()
            const router = useRouter()
            const data = reactive({
                name: store.state.userData.name,
                sign: store.state.userData.sign,
                pass: store.state.userData.pass
            //   name: '',
            //   sign: '我即是天选也，也是唯一',
            //   pass: ''
            })
            // const save = () => {
            //     if (data.name && data.pass) {
            //         let userInfo = JSON.parse(localStorage.userInfo)
            //         let newUserInfo = {
            //             user: data.name || userInfo.name,
            //             pass: data.pass || userInfo.pass,
            //             sign: data.name || userInfo.sign
            //         }
            //         localStorage.setItem("userInfo", JSON.stringify(newUserInfo))
            //         Toast("修改成功")
            //         router.push("/mine")
            //     } else Toast("请输入内容")
            // }
            const onSave = () => {
                if (data.name && data.pass) {
                    store.commit("editMine", data)
                    Toast("修改成功")
                    router.push("/mine")
                } else Toast()
            }
            const loginOut = () => {
                localStorage.removeItem('isLogin')
                Toast("退出成功")
                router.push("/login")
            }
            return {
              ...toRefs(data),
            //   save,
              loginOut,
              onSave,
            }
        }
      }
</script>
<style lang="less" scoped>
    /deep/ .van-button--danger {
        background-color: #ffc400;
        border-color: #ffc400;
    }
    .save-btn {
        width: 80%;
        margin: 20px auto;
    }
</style>