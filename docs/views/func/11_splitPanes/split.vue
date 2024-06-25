<template>
  <div>
    <div class="split">
      <div id="id1" class="left"></div>
      <div id="id2" class="main">
        <div id="id4" class="m1"></div>
        <div id="id5" class="m2"></div>
        <div id="id6" class="m3"></div>
      </div>
      <div id="id3" class="right"></div>
    </div>
    <div>https://www.npmjs.com/package/split.js</div>
  </div>
</template>

<script>
import Split from 'split.js'
export default {
  name: 'split',
  data () {
    return {
    }
  },
  methods: {
    init () {
      Split(['#id1', '#id2', '#id3'], {
        // 初始化 三栏布局,每一栏的占比【百分比】
        sizes: [20, 30, 50],
        // 每一栏可以缩小到的最小宽度
        minSize: [50, 50, 400],
        // 间隔条
        gutterSize: 5
      })
      Split(['#id4', '#id5', '#id6'], {
        // 水平分割
        direction: 'vertical',
        // 初始化 三栏布局,每一栏的占比【百分比】
        sizes: [30, 30, 40],
        // 每一栏可以缩小到的最小宽度
        minSize: [50, 50, 50],
        gutterSize: 5
      })
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style scoped>
/* split.js插件所需样式 */
.split {
  height: 500px;
  display: flex;
  box-sizing: border-box;
}

.split >>> .gutter {
  background-color: #eee;
  background-repeat: no-repeat;
  background-position: 50%;
  cursor: col-resize;
}

.gutter.gutter-horizontal {
  cursor: col-resize;
}
.left {
  background-color: pink;
}
.main {
  background-color: lightgreen;
  display: flex;
  flex-direction: column;
}
.main >>> .gutter {
  background-color: #eee;
  background-repeat: no-repeat;
  background-position: 50%;
  cursor: row-resize;
}
.main >>> .gutter.gutter-horizontal {
  cursor: row-resize;
}
.m1 {
  background-color: sandybrown;
}
.m2 {
  background-color: seagreen;
}
.m3 {
  background-color: slateblue;
}
.right {
  background-color: lightseagreen;
}
</style>
