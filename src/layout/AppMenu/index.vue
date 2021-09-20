<template>
  <el-menu
    :unique-opened="true"
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="isCollapse"
    router
  >
    <el-menu-item index="/">
      <i class="el-icon-s-home" />
      <template #title>
        首页
      </template>
    </el-menu-item>

    <el-sub-menu index="/product">
      <template #title>
        <i class="el-icon-s-shop" />
        <span>商品</span>
      </template>
      <el-menu-item index="/product/product_list">
        商品列表
      </el-menu-item>
      <el-menu-item index="/product/product_classify">
        商品分类
      </el-menu-item>
      <el-menu-item index="/product/product_attr">
        商品规格
      </el-menu-item>
      <el-menu-item index="/product/product_reply">
        商品评论
      </el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="/order">
      <template #title>
        <i class="el-icon-s-order" />
        <span>订单</span>
      </template>
      <el-menu-item index="/order/order_list">
        订单列表
      </el-menu-item>
      <el-menu-item index="/order/order_offline">
        订单线下
      </el-menu-item>
    </el-sub-menu>

    <el-menu-item index="/media">
      <i class="el-icon-picture" />
      <template #title>
        媒体
      </template>
    </el-menu-item>

    <el-sub-menu index="/permission">
      <template #title>
        <i class="el-icon-s-custom" />
        <span>权限</span>
      </template>
      <el-menu-item index="/permission/permission_admin">
        管理员
      </el-menu-item>
      <el-menu-item index="/permission/permission_role">
        角色
      </el-menu-item>
      <el-menu-item index="/permission/permission_rule">
        规则
      </el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="/setting">
      <template #title>
        <i class="el-icon-setting" />
        <span>设置</span>
      </template>
      <el-sub-menu index="/setting/permission">
        <template #title>
          <i class="el-icon-location" />
          <span>权限管理</span>
        </template>
        <el-menu-item index="/setting/permission/admin">
          <i class="el-icon-menu" />
          <template #title>
            管理员
          </template>
        </el-menu-item>
        <el-menu-item index="/setting/permission/role">
          <i class="el-icon-menu" />
          <template #title>
            角色
          </template>
        </el-menu-item>
        <el-menu-item index="/setting/permission/rule">
          <i class="el-icon-menu" />
          <template #title>
            规则
          </template>
        </el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { useStore } from '@/store'
import { computed } from 'vue'

const store = useStore()

const isCollapse = computed(() => {
  return store.state.isCollapse
})

function handleOpen() {
}

function handleClose() {
}
</script>

<style lang="scss" scoped>
.el-menu {
    height: 100%;
    border-right: none;
}

.el-menu:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>
