<template>
  <div class="page">
    <p><b>transform</b></p>
    <p>transform 可以实现：旋转、缩放、倾斜、移动 这四种类型的变形处理</p>
    <p>transform-origin会影响：旋转、缩放、倾斜、这几种类型</p>
    <b>transform：</b>
    <el-select v-model="transform" placeholder="请选择">
      <el-option v-for="k in transformOpts" :key="k.value" :label="k.label" :value="k.value"></el-option>
    </el-select>
    <span class="detail">{{ transformInfo }}</span>
    <br />
    <b>transform-origin：</b>
    <el-select v-model="transformOrigin" placeholder="请选择">
      <el-option
        v-for="k in transformOriginOpts"
        :key="k.value"
        :label="k.label"
        :value="k.value"
      ></el-option>
    </el-select>
    <span class="detail">{{ transformOriginInfo }}</span>
    <br />
    <div class="demo">
      <div class="base" :style="{ transform: transform, transformOrigin: transformOrigin }">盒子</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'transform',
  data () {
    return {
      transformOpts: [
        { detail: '', value: 'unset', label: '正常' },
        { detail: 'rotate(45deg)：（默认Z轴）', value: 'rotate(45deg)', label: '旋转：2D顺时针旋转45度' },
        { detail: 'rotate3d(x,y,z,angle)：xyz方向，取值0-1，angle是角度；', value: 'rotate3d(1, 1, 1, 45deg)', label: '旋转：3D旋转' },
        { detail: 'rotateZ(45deg)', value: 'rotateZ(45deg)', label: '旋转：单独一个方向旋转' },
        { detail: 'scale(0.7)', value: 'scale(0.7)', label: '缩放：XY设置相同缩放倍数' },
        { detail: 'scale(2, 0.5)', value: 'scale(2, 0.5)', label: '缩放：XY单独设置缩放倍数' },
        { detail: 'scale3d(x, y, z);', value: 'scale3d(0.5, 1.3, 1)', label: '缩放：3D缩放' },
        { detail: 'scaleX(0.5)', value: 'scaleX(0.5)', label: '缩放：单独某一个方向缩放' },
        { detail: 'skew(30deg)', value: 'skew(30deg)', label: '倾斜：倾斜角度' },
        { detail: 'skew(30deg,30deg)', value: 'skew(30deg,30deg)', label: '倾斜：分别设置XY倾斜角度' },
        { detail: 'translate(45px)', value: 'translate(45px)', label: '移动：X轴向右移动' },
        { detail: 'translate(45px, 150px)', value: 'translate(45px, 150px)', label: '移动：XY轴同时移动' },
        { detail: 'translate3d(50px, 50px, 10px)', value: 'translate3d(50px, 50px, 10px)', label: '移动：x，y，z轴上都移动' },
        { detail: 'translateX(100px)', value: 'translateX(100px)', label: '移动：单独一个方向移动' }
      ],
      transform: 'unset',
      transformInfo: '',
      transformOriginOpts: [
        { detail: '50% 50%', value: '50% 50%', label: '默认基准点' },
        { detail: '0 0', value: '0 0', label: '左上' }
      ],
      transformOrigin: '50% 50%',
      transformOriginInfo: ''
    }
  },
  watch: {
    transform: {
      immediate: true,
      deep: true,
      handler (newValue, oldValue) {
        this.transformOpts.forEach(k => {
          if (k.value === newValue) {
            this.transformInfo = k.detail
          }
        })
      }
    },
    transformOrigin: {
      immediate: true,
      deep: true,
      handler (newValue, oldValue) {
        this.transformOriginOpts.forEach(k => {
          if (k.value === newValue) {
            this.transformOriginInfo = k.detail
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
    width: 200px;
    height: 200px;
    margin: 50px auto 0;
    background: pink;
  }
}
</style>
