<!--
 * @Description:
 * @Autor: mashize
 * @Date: 2023-03-12 11:55:51
 * @LastEditors: mashize
 * @LastEditTime: 2023-03-12 12:35:26
-->
<template>
  <div>
    <el-button @click="test4">promise</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    async test4 () {
      await this.test5()
      await this.test3()
      await this.test5()
      await this.test7()
      await this.test6()
      await this.test5()
    },
    async test3 () {
      await this.test()
      await this.test2()
    },
    async test () {
      return new Promise((resolve, reject) => {
        console.log('---111')
        // setTimeout(() => {
        //   console.log('---test')
        // }, 2000)
        // setTimeout(() => {
        //   console.log('---2222')
        // }, 1000)
        resolve()
      })
    },
    async test2 () {
      console.log('---test2')
    },
    test5 () {
      console.log('---test5')
    },
    async test6 () {
      console.log('---test6')
    },
    async test7 () {
      return new Promise((resolve, reject) => {
        console.log('---test77')
        resolve()
      })
    }
  }
}
</script>

<style scoped>
</style>
