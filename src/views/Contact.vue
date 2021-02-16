<template>
  <div :class="[$style.whole, 'fullscreen']" @click="handleBackgroundClick">
    <div :class="$style.contacts">
      <div v-for="contact in contacts" :key="contact.name" :class="$style.contact" @click.stop="handleContactClick(contact.href)">
        {{ contact.name }}
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
          href: 'tencent://Message/?Uin=794780360&websiteName=q-zone.qq.com&Menu=yes'
        },
        {
          name: 'GitHub',
          href: 'https://github.com/chenghaopeng'
        },
        {
          name: '领英',
          href: 'https://www.linkedin.com/in/chenghaopeng'
        },
        {
          name: 'deepin 社区',
          href: 'https://bbs.deepin.org/zh/user/74043'
        },
        {
          name: '知乎',
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
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: fade(black, 64);
  .contacts {
    max-width: 432px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    .contact {
      margin: 8px;
      padding: 12px;
      width: 128px;
      background-image: linear-gradient(135deg, #eeeeee, #bbbbbb);
      text-align: center;
      border-radius: 8px;
      user-select: none;
      cursor: pointer;
      box-shadow: 4px 4px 8px 0px fade(white, 16);
      &:active {
        transform: translate(2px, 2px);
        box-shadow: 2px 2px 4px 0px fade(white, 32);
        background-image: linear-gradient(-45deg, #eeeeee, #bbbbbb);
      }
    }
  }
}
</style>
