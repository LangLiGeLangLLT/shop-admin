<template>
  <div id="editor" />
</template>

<script lang="ts" setup>
import { onMounted, watch, ref } from 'vue'
import E from 'wangeditor'

interface EmitsType {
  (e: 'update:model-value', value: string): void
}

const emit = defineEmits<EmitsType>()

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

const editor = ref<InstanceType<typeof E> | null>(null)

const unWatchModelValue = watch(() => props.modelValue, () => {
  editor.value?.txt.html(props.modelValue)
  unWatchModelValue()
})

onMounted(() => {
  initEditor()
})

const initEditor = () => {
  editor.value = new E('#editor')
  editor.value.config.zIndex = 0
  editor.value.config.onchange = function (newHtml: string) {
    emit('update:model-value', newHtml)
  }
  editor.value.create()
}
</script>

<style lang="scss" scoped>

</style>
