// import { createRouter, createWebHashHistory } from 'vue-router'
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
    routes: [
        {
            path: '/', component: () => import('@/views/main/mainPage.vue'), alias: '/main',
            redirect: '/main/Algo/List', //重定向
            children: [
                { path: '/main/Algo/List', name: 'AlgorithmList', meta: { title: '算法列表' }, component: () => import('@/views/mainViews/algorithm/AlgorithmList.vue') },
                { path: '/main/Algo/Register', name: 'Register', meta: { title: '注册' }, component: () => import('@/views/mainViews/algorithm/chilrenViews/RegisterMsg.vue') },
                { path: '/main/Algo/Paging', name: 'Paging', meta: { title: '分页' }, component: () => import('@/views/mainViews/algorithm/chilrenViews/PagingMsg.vue') },
                { path: '/main/Algo/Approval', name: 'Approval', meta: { title: '申请会员' }, component: () => import('@/views/mainViews/algorithm/chilrenViews/ApprovalMsg.vue') },
                { path: '/main/ServiceMarket', name: 'ServiceMarket', meta: { title: '服务市场' }, component: () => import('@/views/mainViews/service/ServiceMarket.vue') },
                { path: '/main/SubscribeMgt', name: 'SubscribeMgt', meta: { title: '订阅管理' }, component: () => import('@/views/mainViews/subscribe/SubscribeMgt.vue') },
                { path: '/main/Supplier', name: 'SupplierMgt', meta: { title: '供应商管理' }, component: () => import('@/views/mainViews/supplier/SupplierMgt.vue') },
                { path: '/main/Supplier/List', name: 'Supplier', meta: { title: '供应商详情' }, component: () => import('@/views/mainViews/supplier/chilrenViews/SupplierMsg.vue') },
                { path: '/main/Supplier/Rate', name: 'Rate', meta: { title: '评分' }, component: () => import('@/views/mainViews/supplier/chilrenViews/RateMsg.vue') },
            ]
        }
    ],
    mode: "history"
})
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next()
})
// const routes = [
// ]
// const router = createRouter({
//     // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
//     history: createWebHashHistory(), 
//     routes, // `routes: routes` 的缩写
//     // return {
//     //     router:
//     //     route:
//     //     a
//     // }
// })
// this.$a
export default router