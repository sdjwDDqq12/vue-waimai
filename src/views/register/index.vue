<template>
    <div class="login">
        <Header title="注册"/>
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
                <van-button round block type="primary" 
                native-type="submit" 
                color="#ffc400">
                注册
                </van-button>
                <van-button round block type="primary" 
                native-type="submit" 
                color="#ffc400" 
                style="margin-top: 10px;"
                @click="toLogin">
                去登录
                </van-button>
            </div>
        </van-form>
    </div>
</template>
<script>
    import Header from '@/components/Header.vue';
    import { Toast } from 'vant';
    import { reactive, toRefs } from 'vue';
    import { useRouter } from 'vue-router';

    export default {
        components: {
            Header
        },
        setup() {
            const router = useRouter()
            const onSubmit = (value) => {
                if (localStorage.userInfo) {
                    let userInfo = JSON.parse(localStorage.getItem("userInfo"))
                    if (userInfo["user"] === value["user"]) {
                        Toast("该用户已经存在")
                        return
                    }
                } else register(value)
            }
            const register = (value) => {
                localStorage.setItem("userInfo", JSON.stringify(value))
                Toast("注册成功")
                router.push("/login")
            }
            const toLogin = () => {
                router.push("/login")
            }
            const data = reactive({
                username: "",
                password: ""
            })
            return {
                onSubmit,
                register,
                ...toRefs(data),
                toLogin,
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