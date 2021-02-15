<template>
  <div :class="[$style.whole, 'fullscreen']">
    我是 pp 。
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'WhoAmI'
})
</script>

<style lang="less" module>
.whole {}
</style>
