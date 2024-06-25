<template>
  <div>
    <el-button @click="onClick(1122)">decorator</el-button>
  </div>
</template>

<script>
import { confirm } from './confim'
export default {
  name: 'decorator',
  data () {
    return {
    }
  },
  methods: {
    // @confirm('删除门店', '请确认是否删除门店？')
    // onClick(id) {
    //   console.log('this:', this)
    //   console.log('id:', id)
    // }
  }
}
</script>

<style lang="less" scoped>
</style>
