import { RouteRecordRaw, RouterView } from 'vue-router'

const route: RouteRecordRaw = {
  path: 'permission',
  name: 'permission',
  component: RouterView,
  children: [
    {
      path: 'permission_admin',
      name: 'permission-admin',
      component: () => import('@/views/permission/admin/index.vue')
    },
    {
      path: 'permission_role',
      name: 'permission-role',
      component: () => import('@/views/permission/role/index.vue')
    },
    {
      path: 'permission_rule',
      name: 'permission-rule',
      component: () => import('@/views/permission/rule/index.vue')
    }
  ]
}

export default route
