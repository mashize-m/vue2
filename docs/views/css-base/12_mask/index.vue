<template>
  <div class="page">
    <p><b>mask</b></p>
    <p>
      <b>1、mask-image：支持CSS3各类渐变，以及url()功能符，image()功能符，甚至element()功能符，支持多个</b>
      <b>2、mask-repeat、mask-position、mask-clip、mask-origin、mask-size等都类似于background相关属性</b>
      <b>3、mask-image：支持多个图片混合，多个图片混合的叠加方式，通过mask-composite控制</b>
    </p>
    <b>mask-mode(遮罩模式)：</b>
    <el-select v-model="mode" placeholder="请选择">
      <el-option v-for="k in modeOpts" :key="k.value" :label="k.label" :value="k.value"></el-option>
    </el-select>
    <span class="detail">{{ modeInfo }}</span>
    <br />
    <b>mask-repeat(重复设置)：</b>
    <el-select v-model="repeat" placeholder="请选择">
      <el-option v-for="k in repeatOpts" :key="k.value" :label="k.label" :value="k.value"></el-option>
    </el-select>
    <span class="detail">{{ repeatInfo }}</span>
    <br />
    <b>mask-position(位置设置)：</b>
    <el-select v-model="position" placeholder="请选择">
      <el-option v-for="k in positionOpts" :key="k.value" :label="k.label" :value="k.value"></el-option>
    </el-select>
    <span class="detail">{{ positionInfo }}</span>
    <br />
    <b>mask-clip(绘制区域设置)：</b>
    <el-select v-model="clip" placeholder="请选择">
      <el-option v-for="k in clipOpts" :key="k.value" :label="k.label" :value="k.value"></el-option>
    </el-select>
    <span class="detail">{{ clipInfo }}</span>
    <br />
    <b>mask-origin(绘制区域位置设置)：</b>
    <el-select v-model="origin" placeholder="请选择">
      <el-option v-for="k in originOpts" :key="k.value" :label="k.label" :value="k.value"></el-option>
    </el-select>
    <span class="detail">{{ originInfo }}</span>
    <br />
    <b>mask-size(大小设置)：</b>
    <el-select v-model="size" placeholder="请选择">
      <el-option v-for="k in sizeOpts" :key="k.value" :label="k.label" :value="k.value"></el-option>
    </el-select>
    <span class="detail">{{ sizeInfo }}</span>
    <br />
    <b>mask-type(与mask-mode类似)：</b>
    <el-select v-model="type" placeholder="请选择">
      <el-option v-for="k in typeOpts" :key="k.value" :label="k.label" :value="k.value"></el-option>
    </el-select>
    <span class="detail">{{ typeInfo }}</span>
    <br />
    <b>mask-composite(多图片遮罩时混合方式)：</b>
    <el-select v-model="composite" placeholder="请选择">
      <el-option v-for="k in compositeOpts" :key="k.value" :label="k.label" :value="k.value"></el-option>
    </el-select>
    <span class="detail">{{ compositeInfo }}</span>
    <br />
    <img
      src="./200G0114924-15-1200.jpg"
      class="img"
      :style="{
        maskMode: mode,
        maskRepeat: repeat,
        maskPosition: position,
        maskClip: clip,
        maskOrigin: origin,
        maskSize: size,
        maskType: type,
        maskComposite: composite
      }"
    />

    <p><b>mask的DEMO</b></p>
    <div class="demo loading"></div>
  </div>
</template>

<script>
export default {
  name: 'mask',
  data () {
    return {
      modeOpts: [
        { detail: '（默认值）根据资源的类型自动采用合适的遮罩模式', value: 'match-source', label: 'match-source' },
        { detail: '此关键字指示掩膜层图像的亮度值应用作掩码值', value: 'luminance', label: 'luminance' },
        { detail: '此关键字指示应使用掩码层图像的透明度（阿尔法通道）值作为掩码值。', value: 'alpha', label: 'alpha' }
      ],
      mode: 'match-source',
      modeInfo: '',
      repeatOpts: [
        { detail: 'X轴重复', value: 'repeat-x', label: 'repeat-x' },
        { detail: 'Y轴重复', value: 'repeat-y', label: 'repeat-y' },
        { detail: '（默认值）X轴和Y轴都重复', value: 'repeat', label: 'repeat' },
        { detail: '不重复', value: 'no-repeat', label: 'no-repeat' },
        { detail: '遮罩图片尽可能的平铺同时不发生任何剪裁', value: 'space', label: 'space' },
        { detail: '遮罩图片尽可能靠在一起没有任何间隙，同时不发生任何剪裁，可能会有比例的缩放', value: 'round', label: 'round' },
        { detail: '支持X轴和Y轴分别定义', value: 'no-repeat round', label: 'no-repeat round' }
      ],
      repeat: 'repeat',
      repeatInfo: '',
      positionOpts: [
        { detail: '（默认值）相对左上角定位', value: '0% 0%', label: '0% 0%' },
        { detail: '支持单个关键字（缺省关键字的解析为center）', value: 'top', label: 'top' },
        { detail: '支持垂直和水平方向两个关键字', value: 'right top', label: 'right top' },
        { detail: '支持各类数值', value: '50px 50%', label: '50px 50%' },
        { detail: '支持单独X轴和Y轴方向：-webkit-mask-position-x/y', value: '30px', label: '30px' }

      ],
      position: '0% 0%',
      positionInfo: '',
      clipOpts: [
        { detail: '（默认值）将绘制的内容剪切到border框中', value: 'border-box', label: 'border-box' },
        { detail: '将绘制的内容剪切到content框（跟padding类似）中', value: 'content-box', label: 'content-box' },
        { detail: '将绘制的内容剪切到padding框（跟content类似）中', value: 'padding-box', label: 'padding-box' }

      ],
      clip: 'border-box',
      clipInfo: '',
      originOpts: [
        { detail: '（默认值）位置相对于border框', value: 'border-box', label: 'border-box' },
        { detail: '位置相对于内容框', value: 'content-box', label: 'content-box' },
        { detail: '位置相对于padding框', value: 'padding-box', label: 'padding-box' }

      ],
      origin: 'border-box',
      originInfo: '',
      sizeOpts: [
        { detail: '（默认值）', value: 'auto', label: 'auto' },
        { detail: '保持图像的纵横比并将图像缩放成将完全覆盖背景定位区域的最小大小。', value: 'cover', label: 'cover' },
        { detail: '保持图像的纵横比并将图像缩放成将适合背景定位区域的最大大小。', value: 'contain', label: 'contain' },
        { detail: '支持各类数值（缺省高度会自动计算为auto）', value: '100px', label: '100px' },
        { detail: '支持宽度和高度分别定义', value: '50px 25%', label: '50px 25%' }

      ],
      size: 'auto',
      sizeInfo: '',
      typeOpts: [
        { detail: '（默认值）由于只能作用在SVG元素上，因此默认值表现为SVG元素默认遮罩模式，也就是luminance，亮度遮罩模式', value: 'luminance', label: 'luminance' },
        { detail: '如果需要支持透明度遮罩模式，', value: 'alpha', label: 'alpha' }

      ],
      type: 'luminance',
      typeInfo: '',
      compositeOpts: [
        { detail: '遮罩累加', value: 'add', label: 'add' },
        { detail: '遮罩相减。也就是遮罩图片重合的地方不显示。意味着遮罩图片越多，遮罩区域越小。', value: 'subtract', label: 'subtract' },
        { detail: '遮罩相交。也就是遮罩图片重合的地方才显示遮罩', value: 'intersect', label: 'intersect' },
        { detail: '遮罩排除。也就是后面遮罩图片重合的地方排除，当作透明处理。', value: 'exclude', label: 'exclude' },
        { detail: '清除，不显示任何遮罩', value: 'clear', label: 'clear' },
        { detail: '只显示上方遮罩，不显示下方遮罩', value: 'copy', label: 'copy' },
        { detail: '叠加，两者都显示', value: 'source-over', label: 'source-over' },
        { detail: '只显示重合的地方', value: 'source-in', label: 'source-in' },
        { detail: '只显示上方遮罩，重合的地方不显示', value: 'source-out', label: 'source-out' },
        { detail: '', value: 'source-atop', label: 'source-atop' },
        { detail: '叠加，两者都显示', value: 'destination-over', label: 'destination-over' },
        { detail: '只显示重合的地方', value: 'destination-in', label: 'destination-in' },
        { detail: '只显示下方遮罩，重合的地方不显示', value: 'destination-out', label: 'destination-out' },
        { detail: '', value: 'destination-atop', label: 'destination-atop' },
        { detail: '只显示不重合的地方', value: 'xor', label: 'xor' }
      ],
      composite: '',
      compositeInfo: ''
    }
  },
  watch: {
    mode: {
      immediate: true,
      deep: true,
      handler (newValue, oldValue) {
        this.modeOpts.forEach(k => {
          if (k.value === newValue) {
            this.modeInfo = k.detail
          }
        })
      }
    },
    repeat: {
      immediate: true,
      deep: true,
      handler (newValue, oldValue) {
        this.repeatOpts.forEach(k => {
          if (k.value === newValue) {
            this.repeatInfo = k.detail
          }
        })
      }
    },
    position: {
      immediate: true,
      deep: true,
      handler (newValue, oldValue) {
        this.positionOpts.forEach(k => {
          if (k.value === newValue) {
            this.positionInfo = k.detail
          }
        })
      }
    },
    clip: {
      immediate: true,
      deep: true,
      handler (newValue, oldValue) {
        this.clipOpts.forEach(k => {
          if (k.value === newValue) {
            this.clipInfo = k.detail
          }
        })
      }
    },
    origin: {
      immediate: true,
      deep: true,
      handler (newValue, oldValue) {
        this.originOpts.forEach(k => {
          if (k.value === newValue) {
            this.originInfo = k.detail
          }
        })
      }
    },
    size: {
      immediate: true,
      deep: true,
      handler (newValue, oldValue) {
        this.sizeOpts.forEach(k => {
          if (k.value === newValue) {
            this.sizeInfo = k.detail
          }
        })
      }
    },
    type: {
      immediate: true,
      deep: true,
      handler (newValue, oldValue) {
        this.typeOpts.forEach(k => {
          if (k.value === newValue) {
            this.typeInfo = k.detail
          }
        })
      }
    },
    composite: {
      immediate: true,
      deep: true,
      handler (newValue, oldValue) {
        this.compositeOpts.forEach(k => {
          if (k.value === newValue) {
            this.compositeInfo = k.detail
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
  .img {
    width: 400px;
    height: 180px;
    position: relative;
    border: 30px solid blue;
    margin: 10px;
    padding: 10px;
    mask-image: url('./paths.svg');
  }
  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
  .loading {
    animation: rotate 1s linear infinite;
  }
  .demo {
    width: 200px;
    height: 200px;
    background: royalblue;
    mask: radial-gradient(closest-side circle, royalblue 99%, transparent 100%) center top/25% 25% no-repeat,
      radial-gradient(closest-side circle, transparent 49%, red 50% 99%, transparent 100%),
      conic-gradient(transparent 10%, royalblue 90%);
    mask-composite: source-over, source-in;
  }
}
</style>
