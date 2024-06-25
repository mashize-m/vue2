<template>
  <div>
    <el-button size="mini" type="primary" @click="qrcode">生成二维码</el-button>
  </div>
</template>

<script>
import QRCode from 'qrcode'
export default {
  data () {
    return {
    }
  },
  methods: {
    qrcode () {
      QRCode.toDataURL('I am a pony!')
        .then(url => {
          console.log(url)
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
}
</script>

<style scoped>
</style>
