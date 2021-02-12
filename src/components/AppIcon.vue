<template>
  <div :class="$style.whole" :style="{ '--size': (size | 0) * 64 + 'px' }" @click="handleClick">
    <svg viewBox="0 0 128 128">
      <defs>
        <clipPath :id="id">
          <path :d="path"></path>
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
    },
    rounder: {
      type: Boolean,
      default: true
    },
    size: {
      type: Number,
      default: 2
    }
  },
  data () {
    return {
      id: 'app-icon-' + Math.random()
    }
  },
  computed: {
    path () {
      if (this.rounder) return 'M48 0 L80 0 Q128 0 128 48 L128 80 Q128 128 80 128 L48 128 Q0 128 0 80 L0 48 Q0 0 48 0 Z'
      return 'M32 0 L96 0 Q128 0 128 32 L128 96 Q128 128 96 128 L32 128 Q0 128 0 96 L0 32 Q0 0 32 0 Z'
    }
  },
  methods: {
    handleClick () {
      return null
    }
  }
})
</script>

<style lang="less" module>
.whole {
  height: var(--size);
  width: var(--size);
  svg {
    width: 100%;
    height: 100%;
  }
}
</style>
