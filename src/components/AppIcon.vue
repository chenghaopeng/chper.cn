<template>
  <div :class="[$style.whole, active ? $style.active : '']" :style="{ '--size': (size | 0) * 32 + 'px', '--name': `'${this.name}'` }">
    <svg viewBox="0 0 128 128" @click="handleClick($event)">
      <defs>
        <clipPath :id="id">
          <path :d="path"></path>
        </clipPath>
      </defs>
      <image x="0" y="0" width="100%" height="100%" :href="src || defaultIcon" :clip-path="`url(#${id})`"></image>
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'AppIcon',
  emits: ['click'],
  props: {
    src: {
      type: String,
      default: ''
    },
    rounder: {
      type: Boolean,
      default: true
    },
    size: {
      type: Number,
      default: 4
    },
    name: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      defaultIcon: 'https://chper-assets.oss-cn-shanghai.aliyuncs.com/chper.cn/img/logo.jpg',
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
    handleClick (e: MouseEvent) {
      this.$emit('click', e)
    }
  }
})
</script>

<style lang="less" module>
.whole {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  &.active {
    filter: drop-shadow(0px 0px 16px fade(black, 8));
    svg {
      cursor: pointer;
      &:active {
        filter: brightness(64%);
      }
    }
  }
  &::after {
    content: var(--name);
    position: absolute;
    bottom: -28px;
    word-break: keep-all;
  }
  svg {
    height: var(--size);
    width: var(--size);
  }
}
</style>
