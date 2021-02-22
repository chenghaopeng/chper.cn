<template>
  <div :class="$style.whole">
    <div :class="$style.tabs">
      <div v-for="(tab, index) in categoryNames" :key="tab.name" :class="[$style.tab, index === categoryIndex ? $style.checked : '']" @click="handleCategoryClick(index)">
        <img :src="tab.icon">
        <div :class="$style.name">{{ tab.name }}</div>
      </div>
    </div>
    <div :class="$style.apps">
      <app-icon v-for="app in apps" :key="app.name" :class="$style.app" :name="app.name" :size="3" @click="handleAppClick(app, $event)" :src="app.icon"></app-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { App, Apps, Categories, getApps } from '@/utils/api'
import AppIcon from '@/components/AppIcon.vue'
import openInNewTab from '@/utils/tab'
import { Base64 } from 'js-base64'
import { mapMutations } from 'vuex'
import displayMessage from '@/utils/message'

export default defineComponent({
  name: 'AppPanel',
  components: {
    AppIcon
  },
  data (): {
    categories: Categories;
    categoryNames: {
      name: string;
      icon: string;
    }[];
    categoryIndex: number;
    apps: Apps;
    lastAppName: string;
    } {
    return {
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
      },
      lastAppName: ''
    }
  },
  mounted () {
    getApps().then(data => {
      this.categories = data.categories
      this.categoryNames = [
        { name: '全部', icon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCEtLSBHZW5lcmF0b3I6IEdyYXZpdC5pbyAtLT48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHN0eWxlPSJpc29sYXRpb246aXNvbGF0ZSIgdmlld0JveD0iMCAwIDY0IDY0IiB3aWR0aD0iNjRwdCIgaGVpZ2h0PSI2NHB0Ij48ZGVmcz48Y2xpcFBhdGggaWQ9Il9jbGlwUGF0aF9ISVFxc2RqUDNZdmwwUTJIakVWSVpnT2l4bEhCYjZ4ZiI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ii8+PC9jbGlwUGF0aD48L2RlZnM+PGcgY2xpcC1wYXRoPSJ1cmwoI19jbGlwUGF0aF9ISVFxc2RqUDNZdmwwUTJIakVWSVpnT2l4bEhCYjZ4ZikiPjxnPjxwYXRoIGQ9IiBNIDE5LjU4NiA0Ni40OTUgQyAxNC4xMDYgMzYuODc4IDE0LjExOSAyNy4zNjUgMTkuNTg2IDE3LjkxOCBDIDI5LjMyOCAxMy41MzkgMzcuNzg3IDEzLjU1MiA0NC45MjYgMTcuOTE4IEMgNDkuNzEgMjguMTA1IDQ5LjcyMyAzNy42NDQgNDQuOTI2IDQ2LjQ5NSBDIDM3LjIzMyA1MC4zMSAyOC43OTkgNTAuMzIzIDE5LjU4NiA0Ni40OTUgWiAiIGZpbGw9Im5vbmUiIHZlY3Rvci1lZmZlY3Q9Im5vbi1zY2FsaW5nLXN0cm9rZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9InJnYig1MSw1MSw1MSkiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1taXRlcmxpbWl0PSIzIi8+PHBhdGggZD0iIE0gMTUuNTI5IDM0LjU5OCBDIDI4Ljk0NSAzMS44OTggMzkuOTM4IDMxLjQ3OCA0OC40NzEgMzMuMjk5IiBmaWxsPSJub25lIiB2ZWN0b3ItZWZmZWN0PSJub24tc2NhbGluZy1zdHJva2UiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJyZ2IoNTEsNTEsNTEpIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbWl0ZXJsaW1pdD0iMyIvPjxwYXRoIGQ9IiBNIDMyIDE1LjExMyBDIDMzLjIwOSAyNS4wMyAzMy4yMjEgMzYuMzAxIDMyIDQ4Ljg4NyIgZmlsbD0ibm9uZSIgdmVjdG9yLWVmZmVjdD0ibm9uLXNjYWxpbmctc3Ryb2tlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0icmdiKDUxLDUxLDUxKSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLW1pdGVybGltaXQ9IjMiLz48L2c+PC9nPjwvc3ZnPg==' }
      ].concat(this.categories.map(category => {
        return {
          name: category.name,
          icon: category.icon
        }
      }))
      this.categoryIndex = 1
    })
  },
  methods: {
    ...mapMutations(['setCurrentApp', 'setClickPosition']),
    handleCategoryClick (index: number) {
      this.categoryIndex = index
    },
    handleAppClick (app: App, e: MouseEvent) {
      const x = e.clientX / document.body.clientWidth * 100
      const y = e.clientY / document.body.clientHeight * 100
      this.setClickPosition({ position: `${x}% ${y}%` })
      if (app.builtin) {
        this.$router.push('/' + app.href)
      } else {
        if (app.openInNew) {
          if (app.description) {
            if (this.lastAppName === app.name) {
              openInNewTab(app.href)
              this.lastAppName = ''
              return
            } else {
              displayMessage(app.description + '（再次点按以打开）')
            }
          } else {
            openInNewTab(app.href)
          }
        } else {
          this.setCurrentApp({ app })
          this.$router.push('/browser/' + Base64.encodeURL(app.href))
        }
      }
      this.lastAppName = app.name
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
  .tabs {
    display: flex;
    background-color: fade(#eeeeee, 32);
    backdrop-filter: blur(8px);
    border-radius: 22px;
    user-select: none;
    transition: 0.2s;
    &:hover {
      background-color: fade(#eeeeee, 48);
      .tab{
        &.checked {
          background-color: white;
          animation: react 0.2s ease-in-out 0s 1 forwards;
        }
        &:hover {
          background-color: #eeeeee;
        }
      }
    }
    .tab {
      margin: 4px;
      padding: 2px 16px 2px 12px;
      display: flex;
      align-items: center;
      border-radius: inherit;
      cursor: pointer;
      transition: 0.2s;
      &.checked {
        background-color: #eeeeee;
      }
      img {
        height: 32px;
        width: 32px;
      }
      .name {
        color: #333333;
      }
    }
  }
  .apps {
    margin-top: 16px;
    max-width: 1200px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    .app {
      margin: 24px 16px;
    }
  }
}
@keyframes react {
  0%, 100% { background-color: #eeeeee; }
  50% { background-color: white; }
}
@media screen and (max-width: 512px) {
  .tab {
    padding: 2px 12px !important;
    .name {
      display: none;
    }
  }
}
</style>
