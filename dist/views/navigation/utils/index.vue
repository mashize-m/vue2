<template>
  <BaseCpn :config="config"></BaseCpn>
</template>

<script>
import BaseCpn from '../cpn/BaseCpn.vue'
import { config } from './config'
export default {
  name: 'utils',
  components: {
    BaseCpn
  },
  data () {
    return {
      config
    }
  }
}
</script>

<style lang="less" scoped>
</style>
