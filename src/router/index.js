import { createRouter, createWebHashHistory } from 'vue-router'
import { Toast } from 'vant'
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/home',
            component: () => import('../views/home')
        },
        {
            path: '/order',
            component: () => import('../views/order'),
            meta: {
                isAuth: true
            }
        },
        {
            path: '/mine',
            component: () => import('../views/mine'),
            meta: {
                isAuth: true
            }
        },
        {
            path: '/cart',
            component: () => import('../views/cart'),
            meta: {
                isAuth: true
            }
        },
        {
            path: '/store',
            component: () => import('../views/store')
        },
        {
            path: '/createOrder',
            component: () => import('../views/createOrder'),
            meta: {
                isAuth: true
            }
        },
        {
            path: '/address',
            component: () => import('../views/address'),
            meta: {
                isAuth: true
            }
        },
        {
            path: '/addressEdit',
            component: () => import('../views/addressEdit'),
            meta: {
                isAuth: true
            }
        },
        {
            path: '/userInfoEdit',
            component: () => import('../views/userInfoEdit'),
            meta: {
                isAuth: true
            }
        },
        {
            path: '/register',
            component: () => import('../views/register')
        },
        {
            path: '/login',
            component: () => import('../views/login')
        }
    ]
})
router.beforeEach((to, from, next) => {
    if (to.meta.isAuth) {
        if (localStorage.isLogin === 'login') {
            next()
        } else {
            next('/login')
            Toast("请先登录")
        }
    } else {
        next()
    }
})
export default router