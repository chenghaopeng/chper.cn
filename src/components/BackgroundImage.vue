<template>
  <teleport to="body">
    <div :class="$style.whole">
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'BackgroundImage'
})
</script>

<style lang="less" module>
.whole {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
}
.whole {
  background-image: url(https://chper-assets.oss-cn-shanghai.aliyuncs.com/chper.cn/img/bg.svg);
  background-size: cover;
  background-position: 50% 50%;
  z-index: -100;
}
</style>
