<template>
  <div>
    <el-button @click="main">测试</el-button>
  </div>
</template>

<script>
export default {
  name: 'splitArray',
  data () {
    return {
    }
  },
  methods: {
    main () {
      const arr = []
      for (let i = 0; i < 1056; i++) {
        arr.push(i)
      }
      console.log('arr:', arr)
      const length = 100
      const result = []
      for (let j = 0; j < arr.length; j += length) {
        result.push(arr.slice(j, j + length))
      }
      console.log('result:', result)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
