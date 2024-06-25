<template>
  <div class="page">
    <div class="base shadow1">外阴影：三个参数</div>
    <div class="base shadow2">外阴影：四个参数</div>
    <div class="base shadow3">外阴影：五个参数</div>
    <div class="base shadow4">内阴影：三、四、五个参数</div>
    <div class="base shadow5">任意数量阴影，以逗号分割</div>
    <div class="shadow6">白色背景下的浅灰色阴影</div>
  </div>
</template>

<script>
export default {
  name: 'shadow'
}
</script>

<style lang="less" scoped>
.page {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  .base {
    flex: 0 0 calc(80% / 4); // 对剩余空间的（放大、缩小、大小比例）
    margin-right: calc(20% / 4);
    margin-bottom: 40px;
    height: 150px;
    border: 1px solid #000;
  }
  .shadow1 {
    /* x偏移量 | y偏移量 | 阴影颜色 */
    box-shadow: 10px 10px teal;
  }
  .shadow2 {
    /* x偏移量 | y偏移量 | 阴影模糊半径 | 阴影颜色 */
    box-shadow: 10px 10px 10px teal;
  }
  .shadow3 {
    /* x偏移量 | y偏移量 | 阴影模糊半径 | 阴影扩散半径 | 阴影颜色 */
    box-shadow: 10px 10px 10px 10px teal;
  }
  .shadow4 {
    /* x偏移量 | y偏移量 | 阴影模糊半径 | 阴影扩散半径 | 阴影颜色 | 阴影类型 */
    box-shadow: 0px 0px 10px 5px teal inset;
  }
  .shadow5 {
    box-shadow: 0px -10px 0px 0px red, /*上边阴影  红色*/ -10px 0px 0px 0px green,
      /*左边阴影  绿色*/ 10px 0px 0px 0px blue, /*右边阴影  蓝色*/ 0px 10px 0px 0px pink; /*下边阴影  粉色*/
  }
  .shadow6 {
    width: 100px;
    height: 100px;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;
  }
}
</style>
