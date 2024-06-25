<template>
  <div class="page">
    <p><b>transition</b></p>
    <p>语法：transition: property duration timing-function delay;</p>
    <p>语法：transition: css属性 持续时间 过渡函数 延迟时间;</p>
    <p>有多个 css 属性的过渡效果时： transition: background 0.8s ease-in 0.3s, color 0.6s ease-out 0.3s;</p>

    <b>transition-property：</b>
    <el-select v-model="property" placeholder="请选择">
      <el-option v-for="k in propertyOpts" :key="k.value" :label="k.label" :value="k.value"></el-option>
    </el-select>
    <span class="detail">{{ propertyInfo }}</span>
    <br />
    <b>transition-duration：</b>
    <el-select v-model="duration" placeholder="请选择">
      <el-option v-for="k in durationOpts" :key="k.value" :label="k.label" :value="k.value"></el-option>
    </el-select>
    <span class="detail">{{ durationInfo }}</span>
    <br />
    <b>transition-timing-function：</b>
    <el-select v-model="timingFunction" placeholder="请选择">
      <el-option v-for="k in timingFunctionOpts" :key="k.value" :label="k.label" :value="k.value"></el-option>
    </el-select>
    <span class="detail">{{ timingFunctionInfo }}</span>
    <br />
    <b>transition-delay：</b>
    <el-select v-model="delay" placeholder="请选择">
      <el-option v-for="k in delayOpts" :key="k.value" :label="k.label" :value="k.value"></el-option>
    </el-select>
    <span class="detail">{{ delayInfo }}</span>
    <br />
    <div class="demo">
      <div
        class="base"
        :style="{
          transitionProperty: property,
          transitionDuration: duration,
          transitionTimingFunction: timingFunction,
          transitionDelay: delay
        }"
      >
        盒子
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'transition',
  data () {
    return {
      propertyOpts: [
        { detail: '（默认值）all', value: 'all', label: '所有' },
        { detail: 'width', value: 'width', label: '一个css属性' },
        { detail: 'width, height, background', value: 'width, height, background', label: '多个css属性' }
      ],
      property: 'all',
      propertyInfo: '',
      durationOpts: [
        { detail: '（默认值）0，必须有时间才可以', value: '0', label: '无效果' },
        { detail: '2s', value: '2s', label: '持续时间（s）' },
        { detail: '200ms', value: '200ms', label: '持续时间（ms）' }
      ],
      duration: '0',
      durationInfo: '',
      timingFunctionOpts: [
        { detail: '以相同速度开始至结束的过渡效果 (等于 cubic-bezier(0,0,1,1))', value: 'linear', label: 'linear' },
        { detail: '（默认值）慢速开始，然后变快，然后慢速结束的过渡效果 (cubic-bezier(0.25.0.1,0.25.1))。', value: 'ease', label: 'ease' },
        { detail: '慢速开始的过渡效果 (等于 cubic-bezier(0.42,0,1,1)).', value: 'ease-in', label: 'ease-in' },
        { detail: '以慢速结束的过渡效果 (等于 cubic-bezier/0.0.0.58.1)).', value: 'ease-out', label: 'ease-out' },
        { detail: '以慢速开始和结束的过渡效果(等于 cubic-bezier(0.42,0,0.58,1))。', value: 'ease-in-out', label: 'ease-in-out' },
        { detail: '在 cubic-bezier 函数中定义自己的值，可能的值是0至1之间的数。n1和n4是起始和终点', value: 'cubic-bezier(0,0.25,0.75,1)', label: 'cubic-bezier(0,0.25,0.75,1)' },
        { detail: '步骤函数：分3步完成属性的转变', value: 'steps(3)', label: 'steps(3)' }
      ],
      timingFunction: 'ease',
      timingFunctionInfo: '',
      delayOpts: [
        { detail: '（默认值）0', value: '0', label: '不延时' },
        { detail: '2s', value: '2s', label: '延时2s' }
      ],
      delay: '0',
      delayInfo: ''
    }
  },
  watch: {
    property: {
      immediate: true,
      deep: true,
      handler (newValue, oldValue) {
        this.propertyOpts.forEach(k => {
          if (k.value === newValue) {
            this.propertyInfo = k.detail
          }
        })
      }
    },
    duration: {
      immediate: true,
      deep: true,
      handler (newValue, oldValue) {
        this.durationOpts.forEach(k => {
          if (k.value === newValue) {
            this.durationInfo = k.detail
          }
        })
      }
    },
    timingFunction: {
      immediate: true,
      deep: true,
      handler (newValue, oldValue) {
        this.timingFunctionOpts.forEach(k => {
          if (k.value === newValue) {
            this.timingFunctionInfo = k.detail
          }
        })
      }
    },
    delay: {
      immediate: true,
      deep: true,
      handler (newValue, oldValue) {
        this.delayOpts.forEach(k => {
          if (k.value === newValue) {
            this.delayInfo = k.detail
          }
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.detail {
  padding: 10px 0;
  span {
    font-weight: bold;
  }
}
.page {
  text-align: left;
  .demo {
    width: 100%;
    height: 500px;
  }
  .base {
    width: 100px;
    height: 100px;
    margin: 50px auto 0;
    background: pink;
  }
  .base:hover {
    width: 200px;
    height: 200px;
    background: blue;
  }
}
</style>
