<template>
  <div class="page">
    <p><b>cssProperty</b></p>
    <p>语法：{{ syntax }}</p>
    <p>--name：自定义属性的名称，必须以--开头；</p>
    <p>syntax：（必须）该自定义属性的语法规则（类型），支持的类型挺多；</p>
    <p>inherits：（必须）是否允许继承；</p>
    <p>initial-value：初始值；</p>
    <p>
      css变量和@property的区别：css变量的侧重点是样式的统一，而@property的侧重点是样式的可控，且支持动画。
    </p>
    <div class="demo">
      <div class="base box1" @click="onClick">通过CSS自定义属性：var(--pinkBgc)</div>
      <div class="base box2">通过CSS的Property：var(--skyblueBgc)</div>
      <div class="base box3">通过CSS自定义属性实现渐变动画</div>
      <div class="base box4">通过CSS的Property实现渐变动画</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cssProperty',
  data () {
    return {
      syntax: '@property --name {syntax: <type> | <type> [ <type> ]*;inherits: true | false;initial-value: <value>;}'
    }
  },
  methods: {
    onClick () {
      document.body.style.setProperty('--pinkBgc', 'hotpink')
    }
  }
}
</script>

<style lang="less">
:root {
  --pinkBgc: pink;
  --colorA: #fff;
  --colorB: #000;
}
</style>
<style lang="less" scoped>
@property --skyblueBgc {
  syntax: '<color>';
  inherits: false;
  initial-value: skyblue;
}
@property --houdini-colorA {
  syntax: '<color>';
  inherits: false;
  initial-value: #fff;
}
@property --houdini-colorB {
  syntax: '<color>';
  inherits: false;
  initial-value: #000;
}
.page {
  .demo {
    width: 100%;
    height: 300px;
  }
  .base {
    width: 300px;
    height: 100px;
  }
  .box1 {
    background: var(--pinkBgc);
  }
  .box2 {
    background: var(--skyblueBgc);
  }
  .box3 {
    background: linear-gradient(45deg, var(--colorA), var(--colorB));
    transition: 1s background;
    &:hover {
      --colorA: yellowgreen;
      --colorB: deeppink;
    }
  }

  .box4 {
    background: linear-gradient(45deg, var(--houdini-colorA), var(--houdini-colorB));
    transition: 1s --houdini-colorA, 1s --houdini-colorB;

    &:hover {
      --houdini-colorA: yellowgreen;
      --houdini-colorB: deeppink;
    }
  }
}
</style>
