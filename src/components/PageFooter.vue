<template>
  <footer :class="$style.whole">
    <div>感谢所有助力我成长的人</div>
    <div>© 2013-2021 鹏鹏 享有并保留本站所有原创内容的权利</div>
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
