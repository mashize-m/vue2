<template>
  <div class="page">
    <div class="box">
      <div class="bear"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'runningbear'
}
</script>

<style lang="less" scoped>
/* 定义小熊奔跑动画 */
@keyframes run {
  0% {
    background-position: 0;
  }
  100% {
    background-position: -1600px 0;
  }
}
/* 定义小熊奔跑到屏幕中央动画 */
@keyframes move {
  0% {
    left: 0;
  }
  100% {
    left: 25%;
    transform: translateX(-50%);
  }
}

/* 定义山向后移动动画 */
@keyframes mountain {
  0% {
    background-position: 0;
  }
  100% {
    background-position: -3840px 0;
  }
}
.page {
  width: 50%;
  height: 99%;
  background-color: #3b3d4b;
}
.box {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 336px;
  overflow: hidden;
  background: url('./3935dc2eb6814b0982b30631c886587f.png') repeat;
  animation: mountain 20s linear infinite;
}
.bear {
  position: absolute;
  width: 200px;
  height: 100px;
  left: 0;
  bottom: 0;
  background: url('./105655b5bc5a48e3accab2f6ea48f3eb.png') no-repeat;
  animation: run 1s steps(8) infinite, move 3s linear 1 forwards;
}
</style>
