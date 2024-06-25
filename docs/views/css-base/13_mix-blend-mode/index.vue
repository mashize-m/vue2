<template>
  <div>
    mix-blend-mode是CSS中的一项非继承性属性，用于定义一个元素的内容（包括文本、图片、矢量图形等）与其所在上下文（即背景或兄弟元素内容）之间颜色的混合模式。
    <p>mix-blend-mode的16种模式：</p>

    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>
    <div class="detail">
      <span>{{ value }}</span>
      :{{ detailInfo }}
    </div>
    <div class="box">
      <div class="text" :style="{ mixBlendMode: value }">
        CSS
        <br />
        <span>mix-blend-mode</span>
      </div>
      <img src="./1606961604.jpg" alt="" />
    </div>
    <div class="detail">
      background-blend-mode与mix-blend-mode类似，只是background-blend-mode是混合背景色和背景图的
    </div>
  </div>
</template>

<script>
export default {
  name: 'hybrid',
  data () {
    return {
      options: [
        { detail: '', value: 'normal', label: '正常模式' },
        { detail: '选择源与背景色的暗色，得出结果色。', value: 'darken', label: '降暗--变暗模式' },
        { detail: '源(图片)与背景叠在一起，结果色将会以背景为主。', value: 'multiply', label: '降暗--正片叠底模式' },
        { detail: '与color-dodge混合模式相反，通过加暗背景颜色，以突出源颜色。此模式与白色绘画配合不会产生任何效果。', value: 'color-burn', label: '降暗--颜色加深模式' },
        { detail: '背景色将作为源的补差色混合在一起。', value: 'screen', label: '加亮--滤色模式' },
        { detail: '与darken混合模式相反。结果色将选择源与背景色亮色部分。', value: 'lighten', label: '加亮--变亮模式' },
        { detail: '加亮背景颜色，以突出源颜色。此模式与黑色绘画（源）配合不会产生任何效果。', value: 'color-dodge', label: '加亮--颜色减淡模式' },
        { detail: '具有multiply和screen颜色效果，最终取决于背景颜色是亮色还是暗色。', value: 'overlay', label: '融合--叠加模式' },
        { detail: '在较暗的颜色上使用darken模式，而在较亮的颜色上使用lighten，这主要取决于源色彩值。', value: 'soft-light', label: '融合--柔光模式' },
        { detail: '在较浅的像素上使用multiply模式，而在较深的像素上使用screen模式,主要取决于源色彩值。', value: 'hard-light', label: '融合/变异--强光模式' },
        { detail: '从亮度值中减去两个混合色中暗度值，得出的混合效果。', value: 'difference', label: '变异--差值模式' },
        { detail: '与difference混合模式类似，但产生更柔和的结果色。', value: 'exclusion', label: '变异--排除模式' },
        { detail: '混合色”颜色的色相值进行着色，而使饱和度和亮度值保持不变。', value: 'hue', label: '色彩叠加--色相模式' },
        { detail: '与hue模式类似，“混合色”颜色的饱和度值进行着色，而使色相值和亮度值保持不变。', value: 'saturation', label: '色彩叠加--饱和度模式' },
        { detail: '将源颜色的色相和饱和度与背景颜色亮度一起计算得出一个新的颜色。并且保留背景灰度值，给单色图像上色或彩色图像着色很有用。', value: 'color', label: '色彩叠加--颜色模式' },
        { detail: '通过源颜色的亮色和背景颜色的色相、饱和度创建一个新的结果色。', value: 'luminosity', label: '色彩叠加--亮度模式' }
      ], detail: '',
      value: 'normal',
      detailInfo: ''
    }
  },
  watch: {
    value: {
      immediate: true,
      deep: true,
      handler (newValue, oldValue) {
        this.options.forEach(k => {
          if (k.value === newValue) {
            this.detailInfo = k.detail
          }
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.left {
  text-align: left;
}
.detail {
  padding: 10px 0;
  span {
    font-weight: bold;
  }
}
.box {
  width: 800px;
  height: 600px;
  position: relative;
  .text {
    position: absolute;
    top: 50px;
    left: 50px;
    bottom: 50px;
    right: 50px;
    background: rgb(108, 124, 15);
    font: bolder 100px 'Alfa Slab One';
    color: #fff;
    text-align: center;
    padding-top: 10px;
    span {
      color: #000;
    }
  }
  img {
    width: 800px;
    height: 600px;
  }
}
</style>
