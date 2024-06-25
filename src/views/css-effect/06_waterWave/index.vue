<template>
  <div>
    <p><b>水纹波浪效果</b></p>
    <div class="page">
      <img class="bgc" src="./1606961604.jpg" />
      <img class="wave-wrap" src="./cbf54f5c8266b1c0b2f661320348edfd.gif" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'hybridDemo'
}
</script>

<style lang="less" scoped>
.page {
  position: relative;
  .bgc {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200px;
  }
  .wave-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200px;
    mix-blend-mode: screen;
  }
}
</style>
