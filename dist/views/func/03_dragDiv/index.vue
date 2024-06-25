<template>
  <div>
    <div>:parentBox是限制拖拽的边界。默认最大就是浏览器的长宽</div>
    <div>.x和.y是限制拖拽x轴或y轴。默认不限制</div>
    <div id="parentBox" style="width: 500px; height: 500px; border: 1px solid red; margin: 50px 0 0 300px">
      <div v-drag:parentBox style="width: 100px; height: 100px; background: red" class="box">默认</div>
      <div v-drag:parentBox.x style="width: 100px; height: 100px; background: red" class="box">x</div>
      <div v-drag:parentBox.y style="width: 100px; height: 100px; background: red" class="box">y</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dragdiv'
}
</script>

<style scoped>
.box {
  position: absolute;
}
</style>
