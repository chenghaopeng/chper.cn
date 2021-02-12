<template>
  <div :class="$style.whole">
    <my-logo></my-logo>
    <app-panel></app-panel>
    <page-footer></page-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyLogo from '@/components/MyLogo.vue'
import AppPanel from '@/components/AppPanel.vue'
import PageFooter from '@/components/PageFooter.vue'

export default defineComponent({
  name: 'Home',
  components: {
    MyLogo,
    AppPanel,
    PageFooter
  }
})
</script>

<style lang="less" module>
.whole {
  min-height: 100vh;
  padding: 8vmin;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto) 1fr;
  gap: 32px;
  align-content: start;
  &, &::before {
    animation-name: fadein;
    animation-delay: 2s;
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.32, 0, 0.67, 0);
  }
  &::before {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    content: '';
    backdrop-filter: blur(64px);
    z-index: -1;
  }
}
@keyframes fadein {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>
