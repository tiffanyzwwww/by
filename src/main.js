import Vue from 'vue';

// 1.导入 vue-router，并使用
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Index from './pages/Index.vue';
import Home from './pages/Home.vue';
import Diy1 from './pages/Diy1.vue';
import Detail from './pages/Detail.vue';
import Login from './pages/Login.vue';
import Register from './pages/Register.vue';

// 测试数据
import './tData.js';

// 2.定义路由配置
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const routes = [{
    path: '/Home',
    component: Home
},{
    path: '/Diy1',
    component: Diy1
},{
    path: '/Detail/:imgId',
    name: 'Detail',
    component: Detail
},{
    path: '/Login',
    component: Login
}, {
    path: '/Register',
    component: Register
}];

// 3.创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
    routes // (缩写）相当于 routes: routes
});

// 4.创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
	router,
	render: h => h(Index)
}).$mount('#app');

router.push('/Home');