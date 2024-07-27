    1.项目基于vue3框架和vant UI组件库，从0到1搭建起来的一个 “模仿国内知名企业美团旗下的美团app” 项目。
    2.主要技术栈包括 vue3 vant less vuex swiper mock axios 
    3.功能简要介绍：
        项目考虑四个主要导航标签，分别是首页页面、购物车页面、订单页面以及我的页面。首页页面模块主要设计了十几个模块大类（模块类具体内容暂未实现）、轮播图设计以及几个模块小类。
        其次购物车页面模块设计供用户选购餐品需求，用户完成需求可添加到购物车进行初始结算，之后选择购物车中合适的餐品并选择地址进行完整结算并实现订单页面模块功能。最后是我的页面
        模块实现，主要提供用户登录注册接口，有权限的用户可以进行账号的管理、地址管理，无权限用户设置路由前置守卫的页面限制，最终实现一个小型的外卖点餐项目。
    4.项目所用到包依赖如下：
        4.1. 项目搭建初始化配置 rem适配 yarn add postcss-pxtorem@5.1.1 amfe-flexible -S
           amfe-flexible 配置可伸缩布局方案 用于将1rem设为 viewWidth/10
           postcss-pxtorem 是 postcss插件 用于将像素单元生rem单元
        
        4.2. yarn add less less-loader@7 -S
        
        4.3. npm install vue-router
        
        4.4. yarn add i vant@next -S //全局引入 main.js
        
        4.5. yarn add unplugin-vue-components -D //按需引入vue.config.js
        
        4.6. npm install vue-router
        
        4.7. cnpm install vuex@next -S
        
        4.8. npm i swiper@5
        
        4.9. npm i mock
        
        4.10. npm i axios
