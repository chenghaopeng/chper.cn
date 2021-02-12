<template>
  <div :class="$style.whole">
    <div :class="$style.logo">
      <span v-for="piece in logoPieces" :key="piece" :style="piece"></span>
      <span></span>
    </div>
    <div :class="$style.pp">鹏鹏</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import logo from '@/assets/logo'
import isMobile from '@/utils/mobile'

export default defineComponent({
  name: 'MyLogo',
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
    const keyframes: string[] = []
    this.logoPieces = logo.map((piece, index) => {
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
    if (!isMobile) {
      const style = document.createElement('style')
      style.innerText = keyframes.join('\n')
      const body = document.querySelector('body') as HTMLBodyElement
      body.appendChild(style)
    }
  }
})
</script>

<style lang="less" module>
.whole {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  .logo {
    max-width: 256px;
    max-height: 256px;
    width: 75vmin;
    height: 75vmin;
    position: relative;
    box-shadow: 0px 0px 32px 0px fade(black, 16);
    border-radius: 50%;
    overflow: hidden;
    > span {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      overflow: inherit;
      &:last-child {
        box-shadow: -8px -8px 16px 0px fade(black, 40) inset, 8px 8px 16px 0px fade(white, 80) inset;
      }
    }
  }
  .pp {
    margin-top: 16px;
    background-image: radial-gradient(#6fb0ff, #005fd3);
    background-clip: text;
    color: transparent;
    font-size: 40px;
    font-weight: 200;
  }
}
</style>
