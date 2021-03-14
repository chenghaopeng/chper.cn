<template>
  <div :class="[$style.whole, round ? $style.round : '']">
    <template v-if="dynamic">
      <span v-for="piece in logoPieces" :key="piece" :style="piece"></span>
      <span></span>
    </template>
    <div v-else :class="$style.img"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import isMobile from '@/utils/mobile'

export default defineComponent({
  name: 'DynamicLogo',
  props: {
    dynamic: {
      type: Boolean,
      default: true
    },
    round: {
      type: Boolean,
      default: true
    }
  },
  data (): {
    logoPieces: {
      clipPath: string;
      backgroundColor: string;
      animation: string;
    }[];
    } {
    return {
      logoPieces: []
    }
  },
  mounted () {
    const styleId = 'dynamic-logo'
    const keyframes: string[] = []
    import('@/assets/logo').then(res => {
      this.logoPieces = res.default.map((piece, index) => {
        const keyframeName = 'logoPieceKeyframes' + index
        keyframes.push(`@keyframes ${keyframeName} {
          0% { opacity: 1; }
          100% { opacity: ${1 - Math.pow(Math.random(), Math.random() * 3) / 2.5}; }
        }`)
        return {
          clipPath: `polygon(${piece[0]})`,
          backgroundColor: piece[1],
          animation: `${keyframeName} ${Math.pow(Math.random(), Math.random() * 3) * 3 + 2}s ease-in-out ${Math.pow(Math.random(), Math.random() * 3) * 4 + 4}s 3 alternate-reverse`
        }
      })
      if (!isMobile && this.dynamic && !document.getElementById(styleId)) {
        const style = document.createElement('style')
        style.id = styleId
        style.innerText = keyframes.join('\n')
        document.body.appendChild(style)
      }
    })
  }
})
</script>

<style lang="less" module>
.whole {
  max-width: 256px;
  max-height: 256px;
  width: 75vmin;
  height: 75vmin;
  position: relative;
  box-shadow: 0px 0px 32px 0px fade(black, 16);
  background-color: white;
  border-radius: 8%;
  overflow: hidden;
  &.round {
    border-radius: 50%;
  }
  > * {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    overflow: inherit;
    &:last-child {
      box-shadow: -8px -8px 16px 0px fade(black, 40) inset, 8px 8px 16px 0px fade(white, 80) inset;
    }
  }
  > span {
    position: absolute;
    left: 0;
    top: 0;
  }
  .img {
    background-image: url(https://chper-assets.oss-cn-shanghai.aliyuncs.com/chper.cn/img/logo.jpg);
    background-size: cover;
  }
}
</style>
