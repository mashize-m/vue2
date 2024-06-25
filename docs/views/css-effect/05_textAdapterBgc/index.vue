<template>
  <div>
    <p><b>文字智能适配背景颜色</b></p>
    <div class="text"></div>
  </div>
</template>

<script>
export default {
  name: 'hybridDemo'
}
</script>

<style lang="less" scoped>
@keyframes move {
  0% {
    transform: translate(-30%, -50%);
  }
  100% {
    transform: translate(-70%, -50%);
  }
}
.text {
  width: 100%;
  height: 400px;
  background: linear-gradient(45deg, #000 0, #000 50%, #fff 50%);
  position: relative;
  &::before {
    content: '测试文本';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 100px;
    white-space: nowrap;
    mix-blend-mode: difference;
    animation: move 3s infinite linear alternate;
  }
}
</style>
