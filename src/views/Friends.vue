<template>
  <div :class="[$style.whole, 'fullscreen']">
    1 2 3
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'Friends'
})
</script>

<style lang="less" module>
.whole {}
</style>
