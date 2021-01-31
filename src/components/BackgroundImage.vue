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
.whole, .whole::after {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
}
.whole {
  background-image: url(../assets/bg.svg);
  background-size: cover;
  background-position: 50% 50%;
  z-index: -1;
}
.whole::after {
  content: '';
  backdrop-filter: blur(64px);
  opacity: 0;
  animation-name: fadein;
  animation-delay: 2s;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.32, 0, 0.67, 0);
}
@keyframes fadein {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>
