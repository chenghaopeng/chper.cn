<template>
  <div :class="[$style.whole, 'fullscreen']" @click="handleBack">
    <div :class="$style.friends" @click.stop="handleClick" ref="friends">
      <div v-for="friend in friends" :key="friend.name" :class="$style.friend" :data-href="friend.href">
        <img :class="$style.icon" :src="friend.icon || defaultIcon">
        <div :class="$style.info">
          <div :class="$style.name">
            {{ friend.name }}
          </div>
          <div :class="$style.href">
            {{ friend.href }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Friends, getFriends } from '@/utils/api'
import openInNewTab from '@/utils/tab'
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'Friends',
  data (): {
    friends: Friends;
    defaultIcon: string;
    } {
    return {
      friends: [],
      defaultIcon: 'https://pic1.zhimg.com/da8e974dc_xll.jpg'
    }
  },
  mounted () {
    getFriends().then(data => {
      this.friends = data.friends
    })
  },
  methods: {
    handleClick (event: MouseEvent) {
      let el = event.target as HTMLElement
      while (el !== this.$refs.friends && el.parentElement) {
        const { href } = el.dataset
        if (href) {
          openInNewTab(href)
          break
        }
        el = el.parentElement
      }
    },
    handleBack () {
      this.$router.push('/')
    }
  }
})
</script>

<style lang="less" module>
.whole {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: #ff479c;
  .friends {
    padding: 16px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    user-select: none;
    .friend {
      padding: 32px;
      width: 100%;
      max-width: 384px;
      display: flex;
      flex-flow: row nowrap;
      background-color: white;
      border-radius: 16px;
      box-shadow: 4px 4px 8px 0px fade(black, 16);
      cursor: pointer;
      transition: 0.2s ease-in-out;
      &:hover {
        transform: scale(1.05);
        box-shadow: 0px 0px 64px 16px fade(black, 8);
        * {
          color: #ff479c !important;
        }
      }
      .icon {
        height: 64px;
        width: 64px;
        border-radius: 8px;
      }
      .info {
        margin-left: 16px;
        flex: 1;
        display: flex;
        flex-flow: column nowrap;
        overflow: hidden;
        .name {
          font-size: large;
        }
        .href {
          margin-top: 8px;
          color: grey;
        }
      }
    }
  }
}
</style>
