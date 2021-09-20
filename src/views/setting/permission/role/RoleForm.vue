<template>
  <app-dialog-form
    :title="props.roleId ? '编辑角色' : '添加角色'"
    :confirm="handleSubmit"
    @closed="handleDialogClosed"
    @open="handleDialogOpen"
  >
    <el-form
      ref="form"
      :model="formData"
      :rules="formRules"
      label-width="100px"
      v-loading="formLoading"
    >
      <el-form-item
        label="角色名称"
        prop="role_name"
      >
        <el-input
          v-model="formData.role_name"
          placeholder="请输入角色名称"
        />
      </el-form-item>
      <el-form-item label="是否启用">
        <el-radio-group v-model="formData.status">
          <el-radio
            :label="1"
          >
            开启
          </el-radio>
          <el-radio
            :label="0"
          >
            关闭
          </el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="角色权限">
        <el-tree
          ref="tree"
          node-key="id"
          show-checkbox
          :data="menus"
          :props="{
            label: 'title'
          }"
        />
      </el-form-item>
    </el-form>
  </app-dialog-form>
</template>

<script lang="ts" setup>
import { getMenus, getRole, saveRole } from '@/api/role'
import { Menu, RolePostData } from '@/api/types/role'
import { IElForm, IElTree, IFormRule } from '@/types/element-plus'
import { ElMessage } from 'element-plus/es'
import { nextTick, PropType, ref } from 'vue'

interface EmitsType {
  (e: 'update:role-id', value: number | null): void
  (e: 'success'): void
}

const props = defineProps({
  roleId: {
    type: Number as PropType<number | null>,
    default: null
  }
})
const emit = defineEmits<EmitsType>()
const form = ref<IElForm | null>(null)
const formLoading = ref(false)
const formData = ref<RolePostData>({
  role_name: '',
  status: 0,
  checked_menus: []
})
const formRules: IFormRule = {
  role_name: [
    { required: true, message: '请输入角色名称', trigger: 'blur' }
  ]
}
const menus = ref<Menu[]>([])
const tree = ref<IElTree | null>(null)

const handleDialogOpen = async () => {
  formLoading.value = true
  props.roleId
    ? await loadRole().finally(() => { formLoading.value = false })
    : await loadMenus().finally(() => { formLoading.value = false })
}

const handleDialogClosed = () => {
  emit('update:role-id', null)
  form.value?.clearValidate()
  form.value?.resetFields()
}

const loadMenus = async () => {
  const data = await getMenus()
  menus.value = data.menus
}

const loadRole = async () => {
  if (!props.roleId) return
  const { menus: menusData, role } = await getRole(props.roleId)
  menus.value = menusData
  await nextTick()
  formData.value.role_name = role.role_name
  formData.value.status = role.status
  setCheckedMenus(role.rules.split(',').map(v => +v))
}

const setCheckedMenus = (menus: number[]) => {
  menus.forEach(menuId => {
    const node = tree.value?.getNode(menuId)
    if (node && node.isLeaf) {
      tree.value?.setChecked(menuId, true, false)
    }
  })
}

const handleSubmit = async () => {
  const valid = await form.value?.validate().catch(() => {})
  if (!valid) {
    return
  }
  formData.value.checked_menus = [
    ...tree.value?.getCheckedKeys(true) || [],
    ...tree.value?.getHalfCheckedKeys() || []
  ] as number[]
  await saveRole(props.roleId || 0, formData.value)
  emit('success')
  ElMessage.success('保存成功')
}
</script>

<style lang="scss" scoped></style>
