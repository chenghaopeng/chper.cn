<template>
  <div :class="[$style.whole, 'fullscreen']">
    <div :class="[$style.background, 'fullscreen']">
      <span v-for="(color, index) in backgroundColors" :key="color" :class="[hiding ? $style.out : '']" :style="{ backgroundColor: color, animationDelay: 0.5 + index * 0.1 + 's' }"></span>
    </div>
    <div v-if="!hiding" :class="$style.back" @click="handleBack">回去</div>
    <div :class="[$style.intro, hiding ? $style.out : '']">
      <dynamic-logo :round="false"></dynamic-logo>
      <div :class="$style.text">
        <p>我是鹏鹏</p>
        <p>从小喜欢编程，大学也就选择了软件专业</p>
        <p>现在大三，保研没啥希望，即将迎来程序员生活</p>
        <p>喜欢桌游、麻将、游泳</p>
        <p>平日不修边幅，不喜欢美食更不爱运动</p>
        <p>空有大理想，鲜有真行动</p>
        <p>愿为人民 007 ，不为资本 996</p>
        <p>不会再放过任何一个机会</p>
        <p>如果你对我有兴趣，请继续参看我的网站与简历</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import DynamicLogo from '@/components/DynamicLogo.vue'

export default defineComponent({
  name: 'WhoAmI',
  components: {
    DynamicLogo
  },
  data (): {
    backgroundColors: string[];
    hiding: boolean;
    } {
    return {
      backgroundColors: ['#a8216b', '#f1184c', '#f36943', '#f7dc66', '#2e9599'],
      hiding: false
    }
  },
  methods: {
    handleBack () {
      this.hiding = true
      setTimeout(() => this.$router.push('/'), 1200)
    }
  },
  beforeRouteLeave (to, from, next) {
    this.hiding ? next() : this.handleBack()
  }
})
</script>

<style lang="less" module>
.whole {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-y: scroll;
  color: white;
  &::-webkit-scrollbar {
    display: none;
  }
  .background {
    display: flex;
    overflow: hidden;
    z-index: -1;
    span {
      flex: 1;
      animation-name: movein;
      animation-duration: 0.5s;
      animation-fill-mode: both;
      animation-timing-function: ease-in-out;
      box-shadow: -1vmin -1vmin 2vmin 0px fade(black, 32) inset, 1vmin 1vmin 2vmin 0px fade(white, 64) inset;
      &.out {
        animation-name: moveout;
      }
    }
  }
  .back {
    position: fixed;
    top: 4vmin;
    right: 4vmin;
    user-select: none;
    cursor: pointer;
    z-index: 100;
  }
  .intro {
    padding: 8vmin;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    animation: fadein 1s cubic-bezier(0.34, 1.56, 0.64, 1) 1.2s both;
    &.out {
      animation: fadeout 1s ease-in-out 0s both;
    }
    .text {
      text-shadow: 1px 1px 4px fade(black, 32);
      font-size: large;
      font-weight: 300;
      p:first-child {
        font-size: xx-large;
      }
      p:last-child {
        font-size: medium;
      }
    }
  }
}
@keyframes movein {
  0% { transform: translateY(108%); }
  100% { transform: translateY(0); }
}
@keyframes fadein {
  0% { opacity: 0; transform: translateX(-8%); }
  100% { opacity: 1; transform: translateX(0); }
}
@keyframes moveout {
  0% { transform: translateY(0); }
  100% { transform: translateY(-108%); }
}
@keyframes fadeout {
  0% { opacity: 1; transform: translateX(0); }
  100% { opacity: 0; transform: translateX(8%); }
}
</style>
