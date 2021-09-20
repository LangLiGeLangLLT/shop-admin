<template>
  <div ref="draggableContainer">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import Sortable, { Options } from 'sortablejs'
import { onMounted, ref, PropType } from 'vue'

interface EmitsType {
  (e: 'update:model-value', value: any[]): void
}

const draggableContainer = ref<HTMLDivElement | null>(null)
const props = defineProps({
  modelValue: {
    type: Array as PropType<any[]>,
    default: () => []
  },
  options: {
    type: Object as PropType<Options>,
    default: () => {}
  }
})
const emit = defineEmits<EmitsType>()

onMounted(() => {
  initDraggable()
})

const initDraggable = () => {
  if (!draggableContainer.value) return
  Sortable.create(draggableContainer.value, {
    animation: 300,
    onUpdate(e) {
      if (e.oldIndex !== undefined && e.newIndex !== undefined) {
        const list = props.modelValue.slice(0)
        ;[list[e.oldIndex], list[e.newIndex]] = [list[e.newIndex], list[e.oldIndex]]
        emit('update:model-value', list)
      }
    },
    ...props.options
  })
}
</script>

<style lang="scss" scoped>
:deep(.el-tag) {
  margin: 0 4px;
}
</style>
