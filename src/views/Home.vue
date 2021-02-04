<template>
  <div :class="$style.whole">
    <div :class="$style.logo">
      <span v-for="piece in logoPieces" :key="piece" :style="piece"></span>
    </div>
    <div>鹏鹏</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import logo from '@/assets/logo'
import isMobile from '@/utils/mobile'

export default defineComponent({
  name: 'Home',
  data () {
    return {
      logoPieces: [{}]
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
        animation: `${keyframeName} ${Math.pow(Math.random(), Math.random() * 3) * 3 + 2}s ease-in-out ${Math.pow(Math.random(), Math.random() * 3) * 4 + 4}s infinite alternate-reverse`
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
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
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
    }
  }
}
@keyframes fadein {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>
