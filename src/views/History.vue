<template>
  <div :class="[$style.whole, 'fullscreen']">
    2014-2021
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'History'
})
</script>

<style lang="less" module>
.whole {}
</style>
