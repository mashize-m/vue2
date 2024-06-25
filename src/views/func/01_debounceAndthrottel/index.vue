<template>
  <div>
    <!-- 只绑定函数，默认click事件，延时0.5s -->
    <el-button v-debounce="debounceFn">防抖点击{{ decount }}</el-button>
    <!-- 完整写法 -->
    <el-button v-debounce:click="{ fn: debounceFn, delay: '5000' }">防抖点击{{ decount }}</el-button>
    <!-- 只绑定函数，默认click事件，延时0.5s -->
    <el-button v-throttle="throttleFn">节流点击{{ thcount }}</el-button>
    <!-- 完整写法 -->
    <el-button v-throttle:click="{ fn: throttleFn, delay: '5000' }">节流点击{{ thcount }}</el-button>
  </div>
</template>

<script>
export default {
  name: 'throttle',
  data () {
    return {
      thcount: 1,
      decount: 1
    }
  },
  methods: {
    throttleFn () {
      this.thcount = this.thcount + 1
      console.log(this.thcount, '--------节流点击---------')
    },
    debounceFn () {
      this.decount = this.decount + 1
      console.log(this.decount, '--------防抖点击---------')
    }
  }
}
</script>

<style scoped>
</style>
