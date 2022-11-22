// 路由文件
import { createRouter, createWebHistory } from "vue-router";

import Home from '@/views/Home.vue'
import PiniaState from '@/views/PiniaState.vue'
import PiniaActions from '@/views/PiniaActions.vue'

const routes = [
    {
        path: '/',
        name: '/',
        component: Home
    },
    {
        path: '/state',
        name: 'PiniaState',
        component: PiniaState
    },
    {
        path: '/actions',
        name: 'PiniaActions',
        component: PiniaActions
    },
    {
        path: '/router',
        name: 'Router',
        component: () => { return import('@/views/Router.vue')}
    },
    {
        path: '/counter',
        name: 'Counter',
        component: () => { return import('@/views/PiniaCounter.vue')}
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to,from)=>{
   console.log("beforeEach -to", to, from)
})

router.afterEach((to,from)=>{
   console.log("afterEach -to", to, from)
})

export default router;
