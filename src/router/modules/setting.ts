import { RouteRecordRaw, RouterView } from 'vue-router'

const route: RouteRecordRaw = {
  path: 'setting',
  name: 'setting',
  component: RouterView,
  children: [
    {
      path: 'permission',
      name: 'setting-permission',
      component: RouterView,
      children: [
        {
          path: 'admin',
          name: 'setting-permission-admin',
          component: () => import('@/views/setting/permission/admin/index.vue')
        },
        {
          path: 'role',
          name: 'setting-permission-role',
          component: () => import('@/views/setting/permission/role/index.vue')
        },
        {
          path: 'rule',
          name: 'setting-permission-rule',
          component: () => import('@/views/setting/permission/rule/index.vue')
        }
      ]
    }
  ]
}

export default route
