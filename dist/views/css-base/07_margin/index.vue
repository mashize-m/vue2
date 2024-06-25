<template>
  <div class="page">
    <p><b>margin父子元素塌陷</b></p>
    <p>内部的子盒子给了margin-top，父元素也会受到影响，同时产生上边距，也就是父子重合（粘连）</p>
    <b>解决方案：</b>
    <el-select v-model="margin" placeholder="请选择">
      <el-option v-for="k in marginOpts" :key="k.value" :label="k.label" :value="k.value"></el-option>
    </el-select>
    <span class="detail">{{ marginInfo }}</span>
    <br />
    <div class="demo">
      <div class="base" :class="margin">
        <div class="child"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'marginCollapse',
  data () {
    return {
      marginOpts: [
        { detail: '', value: 'unset', label: '默认' },
        { detail: 'position: fixed;', value: 'position_style', label: 'position_style' },
        { detail: 'overflow: hidden;', value: 'overflow_style', label: 'overflow_style（常用）' },
        { detail: 'border: 1px solid transparent;', value: 'border_style', label: 'border_style' }
      ],
      margin: 'unset',
      marginInfo: ''
    }
  },
  watch: {
    margin: {
      immediate: true,
      deep: true,
      handler (newValue, oldValue) {
        this.marginOpts.forEach(k => {
          if (k.value === newValue) {
            this.marginInfo = k.detail
          }
        })
      }
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
    height: 500px;
  }
  .base {
    width: 100px;
    height: 100px;
    background: pink;
    .child {
      width: 50px;
      height: 50px;
      background: teal;
      margin-top: 30px;
    }
  }
  .position_style {
    position: fixed;
  }
  .overflow_style {
    overflow: hidden;
  }
  .border_style {
    border: 1px solid transparent;
  }
}
</style>
