<template>
  <div>
    <div class="btn1">测试按钮</div>
  </div>
</template>

<script>
export default {
  name: 'ButtonHover'
}
</script>

<style lang="less" scoped>
.btn1 {
  width: 100px;
  height: 40px;
  background-color: #409eff;
  color: #fff;
  font-size: 14px;
  border-radius: 4px;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  &:hover {
    filter: brightness(110%) contrast(105%);
  }
  &:active {
    filter: brightness(90%) contrast(105%);
  }
}
</style>
