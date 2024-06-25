<template>
  <div class="page">
    <p><b>background：</b></p>
    <b>background-color：</b>
    <el-select v-model="color" placeholder="请选择">
      <el-option v-for="k in colorOpts" :key="k.value" :label="k.label" :value="k.value"></el-option>
    </el-select>
    <span class="detail">{{ colorInfo }}</span>
    <br />
    <b>background-image：</b>
    <el-select v-model="image" placeholder="请选择">
      <el-option v-for="k in imageOpts" :key="k.value" :label="k.label" :value="k.value"></el-option>
    </el-select>
    <span class="detail">{{ imageInfo }}</span>
    <br />
    <b>background-position：</b>
    <el-select v-model="position" placeholder="请选择">
      <el-option v-for="k in positionOpts" :key="k.value" :label="k.label" :value="k.value"></el-option>
    </el-select>
    <span class="detail">{{ positionInfo }}</span>
    <br />
    <b>background-size：</b>
    <el-select v-model="size" placeholder="请选择">
      <el-option v-for="k in sizeOpts" :key="k.value" :label="k.label" :value="k.value"></el-option>
    </el-select>
    <span class="detail">{{ sizeInfo }}</span>
    <br />
    <b>background-repeat：</b>
    <el-select v-model="repeat" placeholder="请选择">
      <el-option v-for="k in repeatOpts" :key="k.value" :label="k.label" :value="k.value"></el-option>
    </el-select>
    <span class="detail">{{ repeatInfo }}</span>
    <br />
    <b>background-attachment：</b>
    <el-select v-model="attachment" placeholder="请选择">
      <el-option v-for="k in attachmentOpts" :key="k.value" :label="k.label" :value="k.value"></el-option>
    </el-select>
    <span class="detail">{{ attachmentInfo }}</span>
    <br />
    <b>background-origin：</b>
    <el-select v-model="origin" placeholder="请选择">
      <el-option v-for="k in originOpts" :key="k.value" :label="k.label" :value="k.value"></el-option>
    </el-select>
    <span class="detail">{{ originInfo }}</span>
    <br />
    <b>background-clip：</b>
    <el-select v-model="clip" placeholder="请选择">
      <el-option v-for="k in clipOpts" :key="k.value" :label="k.label" :value="k.value"></el-option>
    </el-select>
    <span class="detail">{{ clipInfo }}</span>
    <br />
    <b>background简写：</b>
    <el-select v-model="all" placeholder="请选择">
      <el-option v-for="k in allOpts" :key="k.value" :label="k.label" :value="k.value"></el-option>
    </el-select>
    <span class="detail">{{ allInfo }}</span>
    <br />

    <div class="demo">
      <div class="base" :class="[color, image, position, size, repeat, attachment, origin, clip, all]"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'background',
  data () {
    return {
      colorOpts: [
        { detail: '', value: 'base', label: '初始颜色' },
        { detail: 'background: transparent;', value: 'color', label: '透明色' }
      ],
      color: 'base',
      colorInfo: '',
      imageOpts: [
        { detail: '', value: 'unset', label: '取消设置' },
        { detail: '图片优先级高于颜色', value: 'image', label: '背景图片' }
      ],
      image: 'image',
      imageInfo: '',
      positionOpts: [
        { detail: '', value: 'unset', label: '取消设置' },
        { detail: 'left center;', value: 'position1', label: '方位词' },
        { detail: '50% 50%;', value: 'position2', label: '数值' }
      ],
      position: '',
      positionInfo: '',
      sizeOpts: [
        { detail: '', value: 'unset', label: '取消设置' },
        { detail: '100% 100px', value: 'size1', label: '具体值' },
        { detail: 'cover（保持纵横比，完全覆盖的最小大小）', value: 'size2', label: 'cover' },
        { detail: 'contain（保持纵横比，完全覆盖的最大大小）', value: 'size3', label: 'contain' }
      ],
      size: '',
      sizeInfo: '',
      repeatOpts: [
        { detail: '', value: 'unset', label: '取消设置' },
        { detail: 'repeat', value: 'repeat1', label: 'XY都重复' },
        { detail: 'repeat-x', value: 'repeat2', label: 'X轴重复' },
        { detail: 'repeat-y', value: 'repeat3', label: 'Y轴重复' },
        { detail: 'no-repeat', value: 'repeat4', label: '不重复' }
      ],
      repeat: '',
      repeatInfo: '',
      attachmentOpts: [
        { detail: '', value: 'unset', label: '取消设置' },
        { detail: 'scroll', value: 'attachment1', label: '默认，跟页面滚动' },
        { detail: 'fixed', value: 'attachment2', label: '不滚动' },
        { detail: 'local', value: 'attachment3', label: '跟元素滚动' }
      ],
      attachment: '',
      attachmentInfo: '',
      originOpts: [
        { detail: '', value: 'unset', label: '取消设置' },
        { detail: 'padding-box，景图像相对于内边距框来定位。默认值', value: 'origin1', label: '内边距区' },
        { detail: 'border-box，背景图像相对于边框盒来定位。', value: 'origin2', label: '边框区' },
        { detail: 'content-box，背景图像相对于内容框来定位。', value: 'origin3', label: '内容区' }
      ],
      origin: '',
      originInfo: '',
      clipOpts: [
        { detail: '', value: 'unset', label: '取消设置' },
        { detail: 'padding-box,背景延伸至内边距（padding）外沿。不会绘制到边框处。', value: 'clip1', label: '内边距区' },
        { detail: 'border-box，背景延伸至边框外沿（但是在边框下层）。默认值', value: 'clip2', label: '默认，边框区' },
        { detail: 'content-box，背景被裁剪至内容区（content box）外沿。', value: 'clip3', label: '内容区' }
      ],
      clip: '',
      clipInfo: '',
      allOpts: [
        { detail: '颜色，图片，重复，滚动，位置/大小', value: 'all', label: '简写' }
      ],
      all: '',
      allInfo: ''
    }
  },
  watch: {
    color: {
      immediate: true,
      deep: true,
      handler (newValue, oldValue) {
        this.colorOpts.forEach(k => {
          if (k.value === newValue) {
            this.colorInfo = k.detail
          }
        })
      }
    },
    image: {
      immediate: true,
      deep: true,
      handler (newValue, oldValue) {
        this.imageOpts.forEach(k => {
          if (k.value === newValue) {
            this.imageInfo = k.detail
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
    attachment: {
      immediate: true,
      deep: true,
      handler (newValue, oldValue) {
        this.attachmentOpts.forEach(k => {
          if (k.value === newValue) {
            this.attachmentInfo = k.detail
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
    all: {
      immediate: true,
      deep: true,
      handler (newValue, oldValue) {
        this.allOpts.forEach(k => {
          if (k.value === newValue) {
            this.allInfo = k.detail
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
    width: 300px;
    height: 100px;
    margin: 50px auto 0;
    border: 10px dotted red;
    padding: 20px;
    background: pink;
  }
  .color {
    background: transparent;
  }
  .image {
    background-image: url('./demo.png');
  }
  .position1 {
    background-position: left center;
  }
  .position2 {
    background-position: 50% 50%;
  }
  .size1 {
    background-size: 100% 100px;
  }
  .size2 {
    background-size: cover;
  }
  .size3 {
    background-size: contain;
  }
  .repeat1 {
    background-repeat: repeat;
  }
  .repeat2 {
    background-repeat: repeat-x;
  }
  .repeat3 {
    background-repeat: repeat-y;
  }
  .repeat4 {
    background-repeat: no-repeat;
  }
  .attachment1 {
    background-attachment: scroll;
  }
  .attachment2 {
    background-attachment: fixed;
  }
  .attachment3 {
    background-attachment: local;
  }
  .origin1 {
    background-origin: padding-box;
  }
  .origin2 {
    background-origin: border-box;
  }
  .origin3 {
    background-origin: content-box;
  }
  .clip1 {
    background-clip: padding-box;
  }
  .clip2 {
    background-clip: border-box;
  }
  .clip3 {
    background-clip: content-box;
  }
  .all {
    background: url('./demo.png') no-repeat scroll left center/50px 50px;
  }
}
</style>
