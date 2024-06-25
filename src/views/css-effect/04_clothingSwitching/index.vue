<template>
  <div class="page">
    <h1>服装效果切换</h1>
    <div class="content">
      <img class="clothing" src="./t-shirt.png" />
      <div class="clothing-overlay">
        <div :style="{ backgroundImage: `url(${backgroundImage})` }" class="clothing-pattern" />
        <img class="clothing-low-template" src="./t-shirt-overlay-70c.png" />
      </div>
    </div>
    <div class="tool">
      <div @click="handleClick(item)" v-for="(item, index) in templateData" :key="index" class="tool-item">
        <img :src="item.image" />
      </div>
    </div>
  </div>
</template>

<script>
import template1 from './swatch3-preview.png'
import template2 from './swatch5-preview.png'
import template3 from './swatch8-preview.png'
import template4 from './swatch9-preview.png'

export default {
  data () {
    return {
      templateData: [
        { image: template1 },
        { image: template2 },
        { image: template3 },
        { image: template4 }
      ],
      backgroundImage: ''
    }
  },
  methods: {
    handleClick (item) {
      this.backgroundImage = item.image
    }
  }
}
</script>

<style lang="less" scoped>
.page {
  background-color: #404749;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1 {
  text-align: center;
  color: #fff;
}
.content {
  width: 280px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.clothing {
  width: 100%;
  height: 100%;
}
.clothing-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.clothing-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-mask-image: url('./shirt-mask.png');
  mask-image: url('./shirt-mask.png');
  -webkit-mask-size: contain;
  mask-size: contain;
  display: block;
}
.clothing-low-template {
  width: 100%;
  mix-blend-mode: multiply;
  position: relative;
}
.tool {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.tool-item {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #fff;
  overflow: hidden;
  margin: 0 10px;
  cursor: pointer;
}
</style>
