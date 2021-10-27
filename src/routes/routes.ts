import * as VueRouter from 'vue-router'

const routes: VueRouter.RouteRecordRaw[] = [
  { path: '/', component: () => import('@/vue/app/layout/layout.vue') }
]

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})
