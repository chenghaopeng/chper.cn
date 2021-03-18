<template>
  <div :class="[$style.whole, 'fullscreen']" @click="handleClick">
    <transition
      :enter-from-class="$style['hm-enter-from']"
      :enter-active-class="$style['hm-enter-active']"
      :leave-active-class="$style['hm-leave-active']"
      :leave-to-class="$style['hm-leave-to']"
      mode="out-in"
    >
      <div :class="$style.time" :key="time" animate-delay="2s">
        {{ time }}
      </div>
    </transition>
    <transition
      :enter-from-class="$style['vm-enter-from']"
      :enter-active-class="$style['vm-enter-active']"
      :leave-active-class="$style['vm-leave-active']"
      :leave-to-class="$style['vm-leave-to']"
      mode="out-in"
    >
      <div :class="$style.contents" :key="contents">
        <div
          v-for="content in contents"
          :key="content"
          :class="$style.content"
          v-html="content"
        >
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { getHistory, TimeLine } from '@/utils/api'
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'History',
  data (): {
    timelines: TimeLine[];
    curtain?: string;
    curIndex: number;
    playing: boolean;
    time: string;
    contents: string[];
    } {
    return {
      timelines: [],
      curtain: undefined,
      curIndex: -1,
      get playing () {
        return this.curIndex >= 0 && this.curIndex < this.timelines.length
      },
      get time () {
        if (this.playing) {
          return this.timelines[this.curIndex].time
        }
        return ''
      },
      get contents () {
        let res = this.curtain ? [this.curtain] : []
        if (this.playing) {
          if (typeof this.timelines[this.curIndex].content === 'string') {
            res = [this.timelines[this.curIndex].content as string]
          } else {
            res = this.timelines[this.curIndex].content as string[]
          }
        }
        return res.map(content => {
          const urlWithNamePattern = /\[(.*?),(.*?)\]/g
          content = content.replaceAll(urlWithNamePattern, '<a href="$1" target="_blank">$2</a>')
          const urlPattern = /\[(https?:\/\/(.*?))\]/g
          content = content.replaceAll(urlPattern, '<a href="$1" target="_blank">$2</a>')
          return content
        })
      }
    }
  },
  mounted () {
    getHistory().then(data => {
      this.timelines = data.timelines
      this.curtain = data.curtain && `<span>${data.curtain}</span>`
      this.curIndex = 0
    })
  },
  methods: {
    handleClick (event: MouseEvent) {
      if ((event.target as HTMLElement).tagName === 'A') {
        return
      }
      if (this.curIndex < this.timelines.length - 1 || (this.curIndex === this.timelines.length - 1 && this.curtain)) {
        this.curIndex++
      } else {
        this.$router.push('/')
      }
    }
  }
})
</script>

<style lang="less" module>
.whole {
  display: flex;
  flex-flow: column nowrap;
  background-color: black;
  text-align: center;
  user-select: none;
  cursor: default;
  .time {
    padding: 4vmin 0;
    font-size: 4vmin;
    color: #86868b;
  }
  .contents {
    flex: 1;
    padding: 3vmin;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    font-size: 5vmin;
    color: #f5f5f7;
    word-break: break-all;
    .content {
      line-height: 2em;
      span {
        color: orange;
        font-size: 7vmin;
      }
      a, a:active, a:hover, a:visited {
        color: #4997F7;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    }
  }
}
.hm-enter-from {
  transform: translateX(10vw);
  opacity: 0;
}
.hm-enter-active,
.hm-leave-active {
  transition: 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: 1;
}
.hm-leave-to {
  transform: translateX(-10vw);
  opacity: 0;
}
.vm-enter-from {
  transform: translateY(10vh);
  opacity: 0;
}
.vm-enter-active,
.vm-leave-active {
  transition: 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  opacity: 1;
}
.vm-leave-to {
  transform: translateY(-10vh) scale(0);
  filter: blur(4px);
  opacity: 0;
}
</style>
