<template>
  <div>
    <p>
      UA(UserAgent)是指HTTP请求头中的一部分，用于标识客户端的一些信息，比如用户的设备类型、浏览器型号等等。因此，我们可以通过判断UA中的关键字来确定页面访问者的设备类型。
    </p>
    <p>该方法并不100%准确，因为用户可以使用PC浏览器模拟手机UA，也有可能使用移动端浏览器访问PC网站。</p>
    <el-button type="primary" @click="onClick">判断页面是在手机端还是在PC端打开</el-button>
    <div>{{ ctn }}</div>
  </div>
</template>

<script>
export default {
  name: 'judgePCorMobile',
  data () {
    return {
      ctn: ''
    }
  },
  methods: {
    onClick () {
      // 使用正则表达式匹配navigator.userAgent中是否包含iPhone、iPad、iPod、Android这些关键字，如果匹配成功，则说明当前是在移动端。如果匹配失败，则说明当前是在PC端。
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
      if (isMobile) {
        this.ctn = '当前在手机端'
      } else {
        this.ctn = '当前在PC端'
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>
