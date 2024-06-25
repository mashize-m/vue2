<template>
  <div class="page">
    <p><b>flex基础属性</b></p>
    <b>主轴方向：</b>
    <el-select v-model="direction" placeholder="请选择" @change="directionChange">
      <el-option v-for="k in directionOpts" :key="k.value" :label="k.label" :value="k.value"></el-option>
    </el-select>
    <span class="detail">{{ directionInfo }}</span>
    <br />
    <b>主轴是否换行：</b>
    <el-select v-model="flexWrap" placeholder="请选择" @change="flexWrapChange">
      <el-option v-for="k in flexWrapOpts" :key="k.value" :label="k.label" :value="k.value"></el-option>
    </el-select>
    <span class="detail">{{ flexWrapInfo }}</span>
    <br />
    <b>主轴对齐方式：</b>
    <el-select v-model="justify" placeholder="请选择" @change="justifyChange">
      <el-option v-for="k in justifyOpts" :key="k.value" :label="k.label" :value="k.value"></el-option>
    </el-select>
    <span class="detail">{{ justifyInfo }}</span>
    <br />
    <b>交叉轴对齐方式（用在单行,即不换行情况下）：</b>
    <el-select v-model="alignItems" placeholder="请选择" @change="alignItemsChange">
      <el-option v-for="k in alignItemsOpts" :key="k.value" :label="k.label" :value="k.value"></el-option>
    </el-select>
    <span class="detail">{{ alignItemsInfo }}</span>
    <br />
    <b>交叉轴对齐方式（用在多行）：</b>
    <el-select v-model="alignContent" placeholder="请选择" @change="alignContentChange">
      <el-option v-for="k in alignContentOpts" :key="k.value" :label="k.label" :value="k.value"></el-option>
    </el-select>
    <span class="detail">{{ alignContentInfo }}</span>
    <br />

    <div class="demo" :class="customStyle" id="demo" ref="demo">
      <div class="box" v-for="(item, index) in count" :key="index"></div>
    </div>
    <p></p>
    <b>特殊布局：每行固定N个元素(例如:6)</b>
    <div class="demo1">
      <div class="box1" v-for="(item, index) in count" :key="index"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'left',
  data () {
    return {
      count: 10,
      direction: 'row',
      directionOpts: [
        { value: 'unset', label: '取消设置' },
        { value: 'row', label: '主轴为水平方向（默认）' },
        { value: 'column', label: '主轴为垂直方向' }
      ],
      directionInfo: 'flex-direction: row;',
      flexWrap: '',
      flexWrapOpts: [
        { value: 'unset', label: '取消设置' },
        { value: 'nowrap', label: '溢出不换行' },
        { value: 'wrap', label: '溢出换行' }
      ],
      flexWrapInfo: '',
      justify: '',
      justifyOpts: [
        { value: 'unset', label: '取消设置' },
        { value: 'center', label: '主轴居中' },
        { value: 'flex-start', label: '从主轴行首开始排列' },
        { value: 'flex-end', label: '从主轴行尾开始排列' },
        { value: 'space-between', label: '首尾对齐到边,中间均匀分配' },
        { value: 'space-around', label: '首尾间距一半,中间均匀分配' },
        { value: 'space-evenly', label: '完全均匀分配，包括首尾' }
      ],
      justifyInfo: '',
      alignItems: '',
      alignItemsOpts: [
        { value: 'unset', label: '取消设置' },
        { value: 'center', label: '主轴居中' },
        { value: 'flex-start', label: '从主轴行首开始排列' },
        { value: 'flex-end', label: '从主轴行尾开始排列' }
      ],
      alignItemsInfo: '',
      alignContent: '',
      alignContentOpts: [
        { value: 'unset', label: '取消设置' },
        { value: 'center', label: '主轴居中' },
        { value: 'flex-start', label: '从主轴行首开始排列' },
        { value: 'flex-end', label: '从主轴行尾开始排列' },
        { value: 'space-between', label: '首尾对齐到边,中间均匀分配' },
        { value: 'space-around', label: '首尾间距一半,中间均匀分配' },
        { value: 'space-evenly', label: '完全均匀分配，包括首尾' }
      ],
      alignContentInfo: ''
    }
  },
  methods: {
    countChange (e) {
      this.count = e
    },
    directionChange (e) {
      this.$refs.demo.style.flexDirection = e
      this.directionInfo = `flex-direction: ${e};`
    },
    flexWrapChange (e) {
      this.$refs.demo.style.flexWrap = e
      this.flexWrapInfo = e === 'unset' ? '' : `flex-wrap: ${e};`
    },
    justifyChange (e) {
      this.$refs.demo.style.justifyContent = e
      this.justifyInfo = e === 'unset' ? '' : `justify-content: ${e};`
    },
    alignItemsChange (e) {
      this.$refs.demo.style.alignItems = e
      this.alignItemsInfo = e === 'unset' ? '' : `align-items: ${e};`
    },
    alignContentChange (e) {
      this.$refs.demo.style.alignContent = e
      this.alignContentInfo = e === 'unset' ? '' : `align-content: ${e};`
    }
  }
}
</script>

<style lang="less" scoped>
.page {
  text-align: left;
  .detail {
    padding: 10px 0;
    span {
      font-weight: bold;
    }
  }
  .demo {
    width: 100%;
    height: 300px;
    box-sizing: border-box;
    border: 1px solid #000;
    margin-top: 20px;
    display: flex;
    .box {
      width: 100px;
      height: 100px;
      background: pink;
      border: 1px solid #000;
      box-sizing: border-box;
    }
    :nth-child(even) {
      background: skyblue;
    }
  }
  .demo1 {
    width: 100%;
    height: 300px;
    box-sizing: border-box;
    border: 1px solid #000;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    .box1 {
      background: pink;
      flex: 0 0 calc(90% / 6); // 对剩余空间的（放大、缩小、初始大小比例）
      height: 100px;
      margin-right: calc(10% / 6);
      margin-top: 10px;
      border: 1px solid #000;
      box-sizing: border-box;
    }
    :nth-child(even) {
      background: skyblue;
    }
  }
}
</style>
