<template>
  <footer :class="$style.whole">
    © 2014-2021 鹏鹏 享有并保留本站所有包括但不限于文本、图片、视频等的所有权利
  </footer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'PageFooter'
})
</script>

<style lang="less" module>
.whole {
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 2vmin;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: center;
}
</style>
