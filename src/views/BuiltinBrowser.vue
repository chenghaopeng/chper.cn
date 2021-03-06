<template>
  <div :class="[$style.whole, 'fullscreen']">
    <div :class="$style.header">
      <app-icon :src="app.icon" :size="1" :active="false"></app-icon>
      <div :class="$style.name">{{ app.name }}</div>
      <div :class="$style.description" :title="app.description">{{ app.description }}</div>
      <div :class="$style.controls">
        <svg viewBox="0 0 32 32" @click="handleOpenInNew">
          <path d="M8 24 l0 -12 l16 0 l-6 -6 m6 6 l-6 6" stroke-width="2" stroke-linecap="round" stroke="currentColor" fill="none" />
        </svg>
        <svg v-if="app.repository" viewBox="0 0 32 32" @click="handleRepository">
          <path d="M4 16 l6 -6 m-6 6 l6 6" stroke-width="2" stroke-linecap="round" stroke="currentColor" />
          <path d="M28 16 l-6 -6 m6 6 l-6 6" stroke-width="2" stroke-linecap="round" stroke="currentColor" />
          <path d="M16 16 l1 -10 m-1 10 l-1 10" stroke-width="2" stroke-linecap="round" stroke="currentColor" />
        </svg>
        <svg viewBox="0 0 32 32" @click="handleClose">
          <path d="M8 8 L24 24 M8 24 L24 8" stroke-width="2" stroke-linecap="round" stroke="currentColor" />
        </svg>
      </div>
    </div>
    <iframe :src="href" frameborder="0" ref="iframe"></iframe>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { Base64 } from 'js-base64'
import { mapMutations, mapState } from 'vuex'
import openInNewTab from '@/utils/tab'
import AppIcon from '@/components/AppIcon.vue'

export default defineComponent({
  name: 'BuiltinBrowser',
  components: {
    AppIcon
  },
  mounted () {
    if (this.href !== Base64.decode(this.$route.params.href as string)) {
      this.handleClose()
    }
  },
  computed: mapState({
    app: 'currentApp',
    href: 'currentAppHref'
  }),
  methods: {
    ...mapMutations(['setCurrentApp']),
    handleOpenInNew () {
      openInNewTab(this.href)
      this.handleClose()
    },
    handleRepository () {
      openInNewTab(this.app.repository)
    },
    handleClose () {
      this.$router.push('/')
    }
  },
  beforeRouteLeave (to, from, next) {
    (this.$refs.iframe as HTMLElement).remove()
    next()
  }
})
</script>

<style lang="less" module>
.whole {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: white;
  > * {
    width: 100%;
  }
  .header {
    flex: none;
    padding: 8px 16px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    background-color: #333333;
    .name {
      margin-left: 16px;
      flex: none;
      color: white;
      font-size: larger;
    }
    .description {
      flex: 1;
      margin: 0px 16px;
      color: #999999;
      word-break: keep-all;
      white-space: nowrap;
      overflow-x: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    .controls {
      flex: none;
      display: flex;
      svg {
        width: 32px;
        height: 32px;
        color: #666666;
        &:hover {
          color: white;
        }
      }
    }
  }
  iframe {
    flex: 1;
  }
}
</style>
