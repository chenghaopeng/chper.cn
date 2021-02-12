<template>
  <div :class="$style.whole">
    <div :class="$style.logo">
      <span v-for="piece in logoPieces" :key="piece" :style="piece"></span>
      <span></span>
    </div>
    <div :class="$style.pp">鹏鹏</div>
    <div :class="$style.tabs">
      <div v-for="(tab, index) in categoryNames" :key="tab.name" :class="$style.tab" @click="handleCategoryClick(index)">
        {{ tab.name }}
      </div>
    </div>
    <div :class="$style.apps">
      <app-icon v-for="app in apps" :key="app.name"></app-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import logo from '@/assets/logo'
import isMobile from '@/utils/mobile'
import AppIcon from '@/components/AppIcon.vue'
import { Apps, Categories, getApps } from '@/utils/api'

export default defineComponent({
  name: 'Home',
  components: {
    AppIcon
  },
  data (): {
    logoPieces: {
      clipPath: string;
      backgroundColor: string;
      animation: string;
    }[];
    categories: Categories;
    categoryNames: {
      name: string;
      icon: string;
    }[];
    categoryIndex: number;
    apps: Apps;
    } {
    return {
      logoPieces: [],
      categories: [],
      categoryNames: [],
      categoryIndex: 0,
      get apps () {
        if (this.categories.length === 0) return []
        if (this.categoryIndex === 0) {
          let apps: Apps = []
          for (let i = 0; i < this.categories.length; ++i) {
            apps = apps.concat(this.categories[i].apps)
          }
          return apps
        }
        return this.categories[this.categoryIndex - 1].apps
      }
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
    getApps().then(data => {
      this.categories = data.categories
      this.categoryNames = [{ name: '全部', icon: '' }].concat(this.categories.map(category => {
        return {
          name: category.name,
          icon: category.icon
        }
      }))
      this.categoryIndex = 1
    })
  },
  methods: {
    handleCategoryClick (index: number) {
      this.categoryIndex = index
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
@keyframes fadein {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>
