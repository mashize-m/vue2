<template>
  <div class="page">
    <p><b>CSS 渐变色</b></p>
    <p>线性渐变（linear-gradient）：linear-gradient(渐变方向, 颜色1[位置1], 颜色2[位置2], 颜色3[位置3]...)</p>
    <p>径向渐变（radial-gradient）：radial-gradient(shape size at position, start-color, ..., last-color);</p>
    <p>
      参数说明：shape：形状（圆/椭圆）、size：大小（默认farthest-corner）、at
      position：圆心位置（默认center,可以使用像素值或百分比来指定位置）、start-color
      ：开始颜色（必填，覆盖区域大小选填）、last-color ：结束颜色（必填）
    </p>
    <p>
      锥形渐变（conic-gradient）：conic-gradient( [ from 起始角度 at 位置],
      start-color[位置代表到当前位置变成哪个颜色]，last-color )
    </p>

    <b>linear-gradient：</b>
    <el-select v-model="linear" placeholder="请选择">
      <el-option v-for="k in linearOpts" :key="k.value" :label="k.label" :value="k.value"></el-option>
    </el-select>
    <span class="detail">{{ linearInfo }}</span>
    <br />
    <b>radial-gradient：</b>
    <el-select v-model="radial" placeholder="请选择">
      <el-option v-for="k in radialOpts" :key="k.value" :label="k.label" :value="k.value"></el-option>
    </el-select>
    <span class="detail">{{ radialInfo }}</span>
    <br />
    <b>conic-gradient：</b>
    <el-select v-model="conic" placeholder="请选择">
      <el-option v-for="k in conicOpts" :key="k.value" :label="k.label" :value="k.value"></el-option>
    </el-select>
    <span class="detail">{{ conicInfo }}</span>
    <br />

    <div class="demo">
      <div class="base" :class="[linear, radial, conic]">盒子</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gradient',
  data () {
    return {
      linear: '',
      linearOpts: [
        { detail: '', value: '', label: '取消设置' },
        { detail: 'linear-gradient(skyblue, pink)', value: 'linear1', label: '默认属性（从上到下）' },
        { detail: 'linear-gradient(to right,skyblue, pink)', value: 'linear2', label: '设置方向（从左往右）' },
        { detail: 'linear-gradient(to bottom right,skyblue, pink)', value: 'linear3', label: '对角方向（从左上往右下）' },
        { detail: 'linear-gradient(45deg,skyblue, pink)：0度的值相当于“to top”', value: 'linear4', label: '设置角度（从左下往右上）' },
        { detail: 'linear-gradient(skyblue, pink, teal)', value: 'linear5', label: '设置多种颜色' },
        { detail: 'linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))', value: 'linear6', label: '设置带透明度的' },
        { detail: 'linear-gradient(to right, skyblue 50%, pink 50%)：颜色后面跟一个百分比，表示当前颜色的过渡位置，如果前后两个颜色的过渡位置一样，则不会出现平滑渐变效果，而是突然变化', value: 'linear7', label: '设置条纹（无过渡）' },
        { detail: 'linear-gradient(80deg,#87ceeb 20%,pink 20%,pink 0)：条纹+角度+位置变化', value: 'linear72', label: '设置条纹+角度+位置变化' },
        { detail: 'repeating-linear-gradient(to bottom, skyblue 0, skyblue 10%, pink 0, pink 20%)：说明：20%代表重复几次（100/20=5次），10%代表skyblue占比', value: 'linear8', label: '设置条纹重复' },
        { detail: 'repeating-linear-gradient(to bottom, skyblue 0, skyblue 10%, pink 0, pink 20%, teal 0, teal 30%)：说明：最后一个颜色的占比决定了当前重复的次数，前面的占比不能大于后面的占比，否则会盖住后面的颜色', value: 'linear9', label: '设置多种颜色条纹重复' },
        { detail: 'repeating-linear-gradient(to bottom, skyblue 0, pink 15%, teal 30%)：说明：跟条纹的差别就是颜色占比不一致', value: 'linear10', label: '设置多种颜色重复(有过度)' }
      ],
      linearInfo: '',
      radial: '',
      radialOpts: [
        { detail: '', value: '', label: '取消设置' },
        { detail: 'radial-gradient(circle, skyblue, pink, teal)', value: 'radial1', label: '圆形渐变' },
        { detail: 'radial-gradient(ellipse, skyblue, pink, teal)', value: 'radial2', label: '椭圆渐变' },
        { detail: 'radial-gradient(circle at 25% 25%, skyblue, pink)', value: 'radial3', label: '设置渐变尺寸和位置' },
        { detail: 'radial-gradient(circle, skyBlue 50px, pink 50px)', value: 'radial4', label: '条纹渐变' },
        { detail: 'repeating-radial-gradient(skyblue 10%, pink 20%)', value: 'radial5', label: '重复的径向渐变' }
      ],
      radialInfo: '',
      conic: '',
      conicOpts: [
        { detail: '', value: '', label: '取消设置' },
        { detail: 'conic-gradient(from 0deg, skyblue, pink, teal)', value: 'conic1', label: '从默认0deg开始做渐变' },
        { detail: 'conic-gradient(from 45deg at 25% 25%, skyblue, pink, teal)', value: 'conic2', label: '从45deg 中心点在25% 25% 开始做渐变' },
        { detail: 'conic-gradient(skyblue, pink 10%, teal 180deg)', value: 'conic3', label: '设置角渐变断点' },
        { detail: 'conic-gradient(skyblue 40%, pink 0deg 75%, teal 0deg)；border-radius: 50%;', value: 'conic4', label: '设置条纹渐变' }
      ],
      conicInfo: ''

    }
  },
  watch: {
    linear: {
      immediate: true,
      deep: true,
      handler (newValue, oldValue) {
        this.linearOpts.forEach(k => {
          if (k.value === newValue) {
            this.linearInfo = k.detail
          }
        })
      }
    },
    radial: {
      immediate: true,
      deep: true,
      handler (newValue, oldValue) {
        this.radialOpts.forEach(k => {
          if (k.value === newValue) {
            this.radialInfo = k.detail
          }
        })
      }
    },
    conic: {
      immediate: true,
      deep: true,
      handler (newValue, oldValue) {
        this.conicOpts.forEach(k => {
          if (k.value === newValue) {
            this.conicInfo = k.detail
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
    width: 200px;
    height: 200px;
    margin: 50px auto 0;
    background: pink;
  }
  .linear1 {
    background: linear-gradient(skyblue, pink);
  }
  .linear2 {
    background: linear-gradient(to right, skyblue, pink);
  }
  .linear3 {
    background: linear-gradient(to bottom right, skyblue, pink);
  }
  .linear4 {
    background: linear-gradient(45deg, skyblue, pink);
  }
  .linear5 {
    background: linear-gradient(skyblue, pink, teal);
  }
  .linear6 {
    background: linear-gradient(to right, rgba(255, 0, 0, 0), rgba(255, 0, 0, 1));
  }
  .linear7 {
    background: linear-gradient(to right, skyblue 50%, pink 50%);
  }
  .linear72 {
    background: linear-gradient(80deg, #87ceeb 20%, pink 20%, pink 0);
  }
  .linear8 {
    background: repeating-linear-gradient(to bottom, skyblue 0, skyblue 10%, pink 0, pink 20%);
  }
  .linear9 {
    background: repeating-linear-gradient(
      to bottom,
      skyblue 0,
      skyblue 10%,
      pink 0,
      pink 20%,
      teal 0,
      teal 30%
    );
  }
  .linear10 {
    background: repeating-linear-gradient(to bottom, skyblue 0, pink 15%, teal 30%);
  }
  .radial1 {
    background: radial-gradient(circle, skyblue, pink, teal);
  }
  .radial2 {
    width: 300px;
    background: radial-gradient(ellipse, skyblue, pink, teal);
  }
  .radial3 {
    background: radial-gradient(circle at 25% 25%, skyblue, pink);
  }
  .radial4 {
    background: radial-gradient(circle, skyBlue 50px, pink 50px);
  }
  .radial5 {
    background: repeating-radial-gradient(skyblue 10%, pink 20%);
  }
  .conic1 {
    background: conic-gradient(from 0deg, skyblue, pink, teal);
  }
  .conic2 {
    background: conic-gradient(from 45deg at 25% 25%, skyblue, pink, teal);
  }
  .conic3 {
    background: conic-gradient(skyblue, pink 10%, teal 180deg);
  }
  .conic4 {
    border-radius: 50%;
    background: conic-gradient(skyblue 40%, pink 0deg 75%, teal 0deg);
  }
}
</style>
