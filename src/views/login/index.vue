<template>
    <div class="login">
        <Header title="登录"/>
        <div class="img">买团</div>
        <van-form @submit="onSubmit">
            <van-cell-group inset>
                <van-field
                v-model="username"
                name="user"
                label="用户名"
                placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"
                />
                <van-field
                v-model="password"
                type="password"
                name="pass"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
                />
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button round block type="primary" native-type="submit">
                提交
                </van-button>
            </div>
        </van-form>
    </div>
</template>
<script>
    import Header from '@/components/Header.vue';
    import { reactive, toRefs } from 'vue';
    import { useRouter } from 'vue-router';
    import { useStore } from 'vuex';
    import { Toast } from 'vant';
    export default {
        components: {
            Header
        },
        setup() {
            const store = useStore()
            const router = useRouter()
            const onSubmit = (value) => {
                if (!localStorage.userInfo) {
                    Toast("账号未注册")
                    return
                } else {
                    let userInfo = JSON.parse(localStorage.userInfo)
                    if (userInfo["user"] === value["user"]) {
                        if (userInfo['pass'] === value['pass']) {
                            Toast('登录成功')
                            localStorage.setItem("isLogin", "login")
                            router.push('/mine')
                        } else Toast("密码错误")
                    } else Toast("账号不存在")
                }
            }
            const toRegister = () => {
                router.push("/register")
            }
            const data = reactive({
                username: "",
                password: ""
            })
            return {
                onSubmit,
                toRegister,
                ...toRefs(data),
                store
            }
        }
    }
</script>
<style lang="less" scoped>
.login {
  .img {
    width: 200px;
    height: 200px;
    background-color: #ffc400;
    font-size: 80px;
    line-height: 200px;
    text-align: center;
    border-radius: 40px;
    margin: 20px auto;
  }
  .register {
    margin-top: 20px;
  }
}
</style>