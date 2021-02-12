<template>
  <div :class="$style.whole">
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
import { defineComponent } from '@vue/runtime-core'
import { Apps, Categories, getApps } from '@/utils/api'
import AppIcon from '@/components/AppIcon.vue'

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
      }
    }
  },
  mounted () {
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
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
</style>
