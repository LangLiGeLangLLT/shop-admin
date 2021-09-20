import { RouteRecordRaw, RouterView } from 'vue-router'

const route: RouteRecordRaw = {
  path: 'order',
  name: 'order',
  component: RouterView,
  children: [
    {
      path: 'order_list',
      name: 'order-list',
      component: () => import('@/views/order/list/index.vue')
    },
    {
      path: 'order_offline',
      name: 'order-offline',
      component: () => import('@/views/order/offline/index.vue')
    }
  ]
}

export default route
