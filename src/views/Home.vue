<template>
  <div :class="[$style.whole, disable ? $style.disable : '']">
    <my-logo></my-logo>
    <app-panel></app-panel>
    <page-footer></page-footer>
    <teleport to="body">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" :style="{ transformOrigin: clickPosition }" />
        </transition>
      </router-view>
    </teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyLogo from '@/components/MyLogo.vue'
import AppPanel from '@/components/AppPanel.vue'
import PageFooter from '@/components/PageFooter.vue'
import { mapState } from 'vuex'

export default defineComponent({
  name: 'Home',
  components: {
    MyLogo,
    AppPanel,
    PageFooter
  },
  computed: {
    ...mapState(['clickPosition']),
    disable () {
      return this.$route.path !== '/'
    }
  }
})
</script>

<style lang="less" module>
.whole {
  min-height: 100vh;
  padding: 8vmin 2vmin;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto) 1fr;
  gap: 32px;
  align-content: start;
  &, &::before {
    animation-name: fadein;
    animation-duration: 1s;
    animation-fill-mode: backwards;
    animation-timing-function: ease-in-out;
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
  &.disable {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    pointer-events: none;
  }
}
@keyframes fadein {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>
