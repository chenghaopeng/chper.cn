<template>
  <div :class="[$style.whole, 'fullscreen']" @click="handleBackgroundClick">
    <div :class="$style.contacts" @click.stop>
      <div :class="$style.contact">鹏鹏的联系方式与社交平台</div>
      <div v-for="contact in contacts" :key="contact.name" :class="$style.contact">
        <div :class="$style.name">{{ contact.name }}</div>
        <div :class="$style.title" @click="handleContactClick(contact.href)">{{ contact.title }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import openInNewTab from '@/utils/tab'

export default defineComponent({
  name: 'Contact',
  data () {
    return {
      contacts: [
        {
          name: 'QQ',
          title: '794780360',
          href: 'tencent://Message/?Uin=794780360&websiteName=q-zone.qq.com&Menu=yes'
        },
        {
          name: 'GitHub',
          title: 'chenghaopeng',
          href: 'https://github.com/chenghaopeng'
        },
        {
          name: '领英',
          title: 'chenghaopeng',
          href: 'https://www.linkedin.com/in/chenghaopeng'
        },
        {
          name: 'deepin 社区',
          title: 'chenghaopeng',
          href: 'https://bbs.deepin.org/zh/user/74043'
        },
        {
          name: '知乎',
          title: '鹏鹏',
          href: 'https://www.zhihu.com/people/cheng-hao-peng-70'
        }
      ]
    }
  },
  methods: {
    handleContactClick (href: string) {
      openInNewTab(href)
    },
    handleBackgroundClick () {
      this.$router.push('/')
    }
  }
})
</script>

<style lang="less" module>
.whole {
  background-color: fade(black, 48);
  backdrop-filter: blur(64px);
  .contacts {
    position: fixed;
    top: 15vh;
    left: 50%;
    height: 100vh;
    padding: 32px;
    transform: translateX(-50%);
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
    align-content: start;
    background-image: linear-gradient(135deg, #fcf1a1, #c4b45e);
    box-shadow: 0px 0px 10vw 0px fade(black, 32);
    border-radius: 32px 64px 0px 0px;
    animation: flyin 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s both;
    .contact {
      position: relative;
      width: 75vw;
      max-width: 384px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      line-height: 1.7em;
      &:hover {
        .title {
          transform: translateX(-8px);
        }
      }
      &::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #dbc773;
      }
      .name {
        color: #807343;
      }
      .title {
        color: #333333;
        cursor: pointer;
        transition: 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
    }
  }
}
@keyframes flyin {
  0% { transform: translate(-50%, 100vh); }
  100% { transform: translate(-50%, 0); }
}
@keyframes flyout {
  0% { transform: translate(-50%, 0); }
  100% { transform: translate(-50%, 100vh); }
}
</style>
