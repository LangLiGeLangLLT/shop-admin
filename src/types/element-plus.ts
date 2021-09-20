import { ElDialog, ElForm, ElTree } from 'element-plus/es'
import { FormItemRule } from 'element-plus/es/components/form/src/form.type'

export type IFormRule = Record<string, FormItemRule[]>

export type IElForm = InstanceType<typeof ElForm>
export type IElDialog = InstanceType<typeof ElDialog>
export type IElTree = InstanceType<typeof ElTree>
