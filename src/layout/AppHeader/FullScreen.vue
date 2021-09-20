<template>
  <i
    :class="fullScreenIcon"
    @click="toggleFullScreen"
  />
</template>

<script lang="ts" setup>
import { useStore } from '@/store'
import { computed } from 'vue'

const store = useStore()

const fullScreenIcon = computed(() => {
  return store.state.isFullScreen ? 'el-icon-crop' : 'el-icon-full-screen'
})

const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
    store.commit('setIsFullScreen', true)
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
      store.commit('setIsFullScreen', false)
    }
  }
}
</script>

<style lang="scss" scoped>
i {
    margin-left: 16px;
}
</style>
