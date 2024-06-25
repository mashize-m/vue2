<template>
  <div class="page">
    <div class="base test1">
      <div class="box1">
        滚动条样式
        <p>
          注意：
          <br />
          ::-webkit-scrollbar 可以在前面加前缀，指定某个dom对象下适用。
          <br />
          其他修改滚动条样式的私有属性需要配合 ::-webkit-scrollbar 属性使用
          <br />
          如果要设置滚动条背景色， ::-webkit-scrollbar 、 ::-webkit-scrollbar-track 、
          ::-webkit-scrollbar-track-piece 三个属性设置一个即可。
        </p>
      </div>
    </div>
    <div class="base test2">
      <div class="box1">默认滚动条样式</div>
    </div>
    <div class="base box">
      <div class="box2">
        拖拽调整元素大小
        <p>
          注意：
          <br />
          单独设置 resize 属性是无效的，resize 属性需要与 overflow 属性结合使用才有效，并且 overflow
          属性的值需要设置为 auto、hidden 或 scroll；
          <br />
          并不是所有的元素都可以设置 resize 属性，比如 img 和 table 属性就没办法使用 resize 属性。
        </p>
      </div>
    </div>
    <div class="base test3">
      <div class="box1">默认滚动条样式</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'scrollbar'
}
</script>

<style lang="less" scoped>
.page {
  display: flex;
  flex-wrap: wrap;
  .base {
    width: 300px;
    height: 400px;
    background-color: #eee;
    overflow: scroll;
    text-align: left;
    .box1 {
      width: 400px;
      height: 700px;
    }
  }
  .box {
    /* 设置不溢出，其他滚动条样式设置会失效 */
    overflow: hidden;
    /* 父元素设置可拖拽属性 */
    resize: horizontal; // both:宽+高、horizontal：宽度、vertical：高度
    border: 1px solid red;
    .box2 {
      width: 400px;
      height: 700px;
    }
  }
}
// 整个滚动条
.test1::-webkit-scrollbar {
  /* 对应纵向滚动条的宽度 */
  width: 10px;
  /* 对应横向滚动条的宽度 */
  height: 10px;
  /* 设置滚动条背景色 */
  background: blue;
}
// 滚动条上的按钮（上下箭头）
::-webkit-scrollbar-button {
  /* 滚动条上下箭头的颜色 */
  background: yellow;
}
//滚动条上的滚动滑块
::-webkit-scrollbar-thumb {
  /* 滚动条滑块圆角 */
  border-radius: 8px;
  /* 滚动条滑块背景色 */
  background: skyblue;
}
// 滚动条轨道
::-webkit-scrollbar-track {
  /* 滚动条轨道背景色 */
  background: orange;
  /* 滚动条轨道圆角 */
  border-radius: 10px;
}
// 滚动条没有滑块的轨道部分
::-webkit-scrollbar-track-piece {
  /* 滚动条轨道背景色 */
  /* 覆盖在轨道上方，黑色半透明与橙色叠加 */
  background: teal;
}
//当同时有垂直滚动条和水平滚动条时交汇的部分。通常是浏览器窗口的右下角
::-webkit-scrollbar-corner {
  /* 横向、纵向滚动条的交汇背景色 */
  background: red;
}
// 出现在某些元素底角的可拖动调整大小的滑块
::-webkit-resizer {
  /* 设置右下角可拖拽部分的背景色 */
  background: green;
}
.test3::-webkit-scrollbar {
  width: 0px; // 隐藏垂直滚动条
  height: 0px; // 隐藏水平滚动条
  display: none; // 隐藏所有滚动条
}
</style>
