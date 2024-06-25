<template>
  <div class="page">
    <div class="base box">文本两端对齐</div>
    <div class="base">文本超出默认的展示：aaabbbccc1</div>
    <div class="base box1">文本换行第一种方式：aaabbbccc1</div>
    <div class="base box2">文本换行第二种方式：aaabbbccc1</div>
    <div class="base box3">文本换行第三种方式：aaabbbccc1</div>
    <div class="base box4">文本换行第四种方式：aaabbbccc1</div>
    <div class="base box5">文本超出不换行方式：aaabbbccc111222</div>
    <div class="base box6">文本超出改为省略号：aaabbbccc111222</div>
    <div class="base box7">指定div内容显示 几行 然后超出部分进行省略号处理。aaabbbccc111222</div>
    <div class="base box8">
      <div class="item">flex：1的子项，文本超出改为省略号</div>
    </div>
    <div class="base box9">文本阴影的实现方式</div>
    <div class="base box10">文本多重阴影的实现方式</div>
    <div class="base box11">通过文字阴影，实现文字描边</div>
    <div class="base box12">
      <img src="https://gitee.com/static/images/logo-black.svg?t=158106664" alt="" class="img" />
      文本和图片对齐
    </div>
  </div>
</template>

<script>
export default {
  name: 'text'
}
</script>

<style lang="less" scoped>
.page {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  .base {
    flex: 0 0 calc(90% / 3);
    margin-right: calc(10% / 3);
    margin-bottom: 30px;
    border: 1px solid #333;
    box-sizing: border-box;
  }
  .box {
    text-align: justify;
    text-align-last: justify;
  }
  .box1 {
    word-wrap: break-word; // 只对英文起作用，以单词作为换行依据
  }
  .box2 {
    white-space: pre-wrap; // 只对中文起作用，强制换行
  }
  .box3 {
    overflow-wrap: break-word; // 如果行内没有多余的地方容纳该单词到结尾，则那些正常的不能被分割的单词会被强制分割换行
  }
  .box4 {
    word-break: break-all; // 只对英文起作用，以字母作为换行依据
  }
  .box5 {
    white-space: nowrap; //强制不换行，都起作用
  }
  .box6 {
    white-space: nowrap; // 不换行
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .box7 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; //（行数）
    -webkit-box-orient: vertical;
  }
  .box8 {
    display: flex;
    width: 0;
    .item {
      flex: 1;
      white-space: nowrap; // 不换行
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .box9 {
    // color: #fff;
    text-shadow: 1px 1px 0px orange; //text-shadow:水平偏移  垂直偏移  模糊程度 颜色
  }
  .box10 {
    text-shadow: 0px 10px 2px #f00, 0px 20px 2px blue; // 多个阴影以 ， 分割
  }
  .box11 {
    color: #fff;
    text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000;
  }
  .box12 {
    height: 100px;
    .img {
      width: 50px;
      height: 50px;
      border: 1px solid #000;
      vertical-align: middle;
    }
  }
}
</style>
