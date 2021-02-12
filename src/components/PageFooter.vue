<template>
  <footer :class="$style.whole">
    <div>本工地正在持续施工中，注意安全，敬请期待...</div>
    <div>© 2014-2021 鹏鹏 享有并保留本站所有包括但不限于文本、图片、视频等的所有权利</div>
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
  padding-top: 16px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: center;
  div {
    line-height: 28px;
  }
}
</style>
