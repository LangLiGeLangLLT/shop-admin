<template>
  <i
    :class="[
      'Iconicons',
      `ion-${props.name}`
    ]"
    :style="styles"
  />
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#5c6b77'
  },
  size: {
    type: Number,
    default: 16
  }
})

const styles = computed(() => ({
  fontSize: `${props.size}px`,
  color: props.color
}))
</script>

<style lang="scss" scoped>

</style>
