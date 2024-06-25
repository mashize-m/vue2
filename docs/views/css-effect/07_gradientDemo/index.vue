<template>
  <div>
    <p><b>进度条动画 progress</b></p>
    <div class="progress"></div>
    <p><b>网格</b></p>
    <div class="grid"></div>
    <p><b>复杂网格</b></p>
    <div class="grids"></div>
    <p><b>边框渐变</b></p>
    <div class="border"></div>
    <p><b>单侧边框渐变</b></p>
    <div class="oneBorder"></div>
    <p><b>3D球效果</b></p>
    <div class="ball"></div>
  </div>
</template>

<script>
export default {
  name: 'gradientDemo'
}
</script>

<style lang="less" scoped>
@keyframes roll {
  from {
    background-position-x: 0;
  }
  to {
    background-position-x: 30px;
  }
}
.progress {
  height: 20px;
  background: repeating-linear-gradient(
    45deg,
    #30e8bf 25%,
    #ff8235 0,
    #ff8235 50%,
    #30e8bf 0,
    #30e8bf 75%,
    #ff8235 0
  );
  background-size: 30px 30px;
  animation: roll 1s linear infinite;
}
.grid {
  width: 100%;
  height: 100px;
  background-color: teal;
  background-image: linear-gradient(white 1px, transparent 0),
    linear-gradient(90deg, white 1px, transparent 0);
  background-size: 30px 30px;
}
.grids {
  width: 100%;
  height: 100px;
  background-color: teal;
  background-image: linear-gradient(white 2px, transparent 0),
    linear-gradient(90deg, white 2px, transparent 0),
    linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 0),
    linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 0);
  background-size: 75px 75px, 75px 75px, 15px 15px, 15px 15px;
}
.border {
  width: 100px;
  height: 100px;
  //边框的颜色为什么不重要，会被下面覆盖的
  border: 10px solid;
  //最后面跟的 5 表示内向偏移量，写成和边框设置的宽度一样即可
  border-image: linear-gradient(to bottom right, yellow, green) 5;
}
.oneBorder {
  /*首先我们设置边框只显示底部，宽度为5px的实线。*/
  border-bottom: 10px solid;
  /*设置线性渐变*/
  border-image: linear-gradient(90deg, rgba(0, 216, 247, 0) 0%, #00afed 100%) 5 5 5 5;
}
.ball {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(200px circle at 25% 25%, rgba(0, 191, 255, 0.1), rgba(0, 191, 255, 0.9));
  box-shadow: 2px 2px 5px 1px deepskyblue;
}
</style>
