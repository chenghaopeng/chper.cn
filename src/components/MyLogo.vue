<template>
  <div :class="$style.whole">
    <dynamic-logo :dynamic="false"></dynamic-logo>
    <div :class="$style.pp">鹏鹏</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import DynamicLogo from '@/components/DynamicLogo.vue'

export default defineComponent({
  name: 'MyLogo',
  components: {
    DynamicLogo
  }
})
</script>

<style lang="less" module>
.whole {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  .pp {
    margin-top: 16px;
    background-image: radial-gradient(#6fb0ff, #005fd3);
    background-clip: text;
    color: transparent;
    font-size: 40px;
    font-weight: 200;
  }
}
</style>
