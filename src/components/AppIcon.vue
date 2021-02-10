<template>
  <div :class="$style.whole">
    <svg viewBox="0 0 128 128">
      <defs>
        <clipPath :id="id">
          <path d="M48 0 L80 0 Q128 0 128 48 L128 80 Q128 128 80 128 L48 128 Q0 128 0 80 L0 48 Q0 0 48 0 Z" fill="rgba(0, 0, 0, 0.5)"></path>
          <!-- <path d="M32 0 L96 0 Q128 0 128 32 L128 96 Q128 128 96 128 L32 128 Q0 128 0 96 L0 32 Q0 0 32 0 Z" fill="rgba(0, 0, 0, 0.5)"></path> -->
        </clipPath>
      </defs>
      <image x="0" y="0" width="100%" height="100%" :href="src" :clip-path="`url(#${id})`"></image>
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'AppIcon',
  props: {
    src: {
      type: String,
      default: require('@/assets/logo.jpg')
    }
  },
  data () {
    return {
      id: 'app-icon-' + Math.random()
    }
  }
})
</script>

<style lang="less" module>
.whole {
  svg {
    width: 100%;
    height: 100%;
  }
}
</style>
