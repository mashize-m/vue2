<template>
  <div>
    <div id="divId" style="text-align: center"></div>

    <div class="box">
      <canvas width="165" height="165"></canvas>
      <canvas width="165" height="165"></canvas>
      <p>
        取色色值：
        <input type="color" id="color" />
      </p>
      <p>
        容差范围：
        <input type="number" id="tolerance" min="0" max="255" step="1" value="20" size="4" />
      </p>
      <p><button id="button">执行去色</button></p>
    </div>
  </div>
</template>

<script>
import { parseOfdDocument, renderOfd, renderOfdByScale, setPageScale, getPageScale, digestCheck } from 'ofd-tools'
// parseOfdDocument：解析ofd文件
// renderOfd：将解析后的数据转换为dom
// renderOfdByScale, setPageScale, getPageScale,：获取、设置缩放
// digestCheck 用于验证。

export default {
  name: 'openofdfile',
  data () {
    return {
      sealDivW: null,
      sealDivH: null
    }
  },
  methods: {
    replaceImgToCanvas (imgSrc, sealDiv) {
      // 获取印章div 的宽高
      let sealDivStyle = sealDiv.getAttribute('style')
      let arr = sealDivStyle.split(';')
      arr.map(item => {
        if (item.includes('width: ')) {
          this.sealDivW = Number(item.slice(item.indexOf(':') + 1, -2))
        }
        if (item.includes('height:')) {
          this.sealDivH = Number(item.slice(item.indexOf(':') + 1, -2))
        }
      })
      // 创建canvas
      let canvas = document.createElement('canvas') // 创建canvas元素
      let context = canvas.getContext('2d')
      sealDiv.appendChild(canvas)
      // 结果canvas
      let canvasResult = document.createElement('canvas') // 创建canvas元素
      let contextResult = canvasResult.getContext('2d')
      // 图片数据
      let imgData = null
      let imgDataResult = null
      // 尺寸数据
      let w = this.sealDivW
      let h = this.sealDivH
      // canvas上绘制图片
      let img = new Image()
      img.setAttribute('crossOrigin', 'anonymous')
      img.setAttribute('src', imgSrc)
      img.setAttribute('width', w)
      img.setAttribute('height', h)
      img.onload = function () {
        // console.log(this, '---this')
        // 在canvas画布上绘制图像，drawImage方法的参数数量只能是3，5，9个
        context.drawImage(this, 0, 0, w, h)
        contextResult.drawImage(this, 0, 0, w, h)
        // 获取像素信息数据
        imgData = context.getImageData(0, 0, w, h)
        imgDataResult = contextResult.getImageData(0, 0, w, h)
      }

      // 取色
      let rgbaPicker = '[255,255,255,255]'
      // canvas的点击
      canvas.addEventListener('click', function (event) {
        // 获取点击的dom对象
        let rect = this.getBoundingClientRect()
        let x = (event.clientX - rect.left) < 0 ? 0 : (event.clientX - rect.left)
        let y = (event.clientY - rect.top) < 0 ? 0 : (event.clientY - rect.top)
        // 获取图像数据
        rgbaPicker = context.getImageData(x, y, 1, 1).data
        // 将0反转到255，获取白色的背景色
        for (let k = 0; k < rgbaPicker.length; k += 4) {
          if (rgbaPicker[k] <= 0) {
            rgbaPicker[k] = 255 - rgbaPicker[k]
          }
          if (rgbaPicker[k + 1] <= 0) {
            rgbaPicker[k + 1] = 255 - rgbaPicker[k + 1]
          }
          if (rgbaPicker[k + 2] <= 0) {
            rgbaPicker[k + 2] = 255 - rgbaPicker[k + 2]
          }
          if (rgbaPicker[k + 3] <= 0) {
            rgbaPicker[k + 3] = 255
          }
        }
        console.log(rgbaPicker, '--rgbaPicker')

        // color输入框变化
        let strHex = '#'
        for (let i = 0; i < rgbaPicker.length - 1; i++) {
          var hex = rgbaPicker[i].toString(16)
          if (hex.length < 2) {
            hex = '0' + hex
          }
          strHex += hex
        }
        eleColor.value = strHex
        console.log(eleColor.value, '---eleColor.value')
      })

      // 后面重新写入
      let eleColor = document.getElementById('color')
      let eleTolerance = document.getElementById('tolerance')
      let eleButton = document.getElementById('button')

      if (eleButton && eleTolerance) {
        eleButton.onclick = function () {
          // 像素点色值
          let rgba = rgbaPicker
          // 容差大小
          let tolerance = eleTolerance.value
          // 基于原始图片数据处理
          for (let index = 0; index < imgData.data.length; index += 4) {
            let r = imgData.data[index]
            let g = imgData.data[index + 1]
            let b = imgData.data[index + 2]

            if (Math.sqrt(
              (r - rgba[0]) * (r - rgba[0]) +
              (g - rgba[1]) * (g - rgba[1]) +
              (b - rgba[2]) * (b - rgba[2])) <= tolerance
            ) {
              imgDataResult.data[index] = 0
              imgDataResult.data[index + 1] = 0
              imgDataResult.data[index + 2] = 0
              imgDataResult.data[index + 3] = 0
            } else {
              imgDataResult.data[index] = r
              imgDataResult.data[index + 1] = g
              imgDataResult.data[index + 2] = b
              imgDataResult.data[index + 3] = imgData.data[index + 3]
            }
          }
          // put数据
          context.putImageData(imgDataResult, 0, 0)
        }
      }
      // 动态进行点击，调用上面的方法
      let event = new MouseEvent('click') // 创建一个单击事件
      canvas.dispatchEvent(event) // 触发canvas的单击事件
      // 动态进行点击，调用上面的方法
      setTimeout(() => {
        let event2 = new MouseEvent('click') // 创建一个单击事件
        eleButton.dispatchEvent(event2) // 触发eleButton的单击事件
      }, 10)
    }
  },
  beforeMount () {
    const file = JSON.parse(this.$route.query.ofdFile)
    let that = this
    parseOfdDocument({
      // ofd写入文件地址
      ofd: file,
      secret: '6wsz1zH2NHnRKuvH',
      success (core) {
        console.log(core, '----core')
        // 输出ofd每页的div
        let screenWidth = 800
        const divs = renderOfd(screenWidth, core[0])
        console.log(divs, '----divs')

        let contentDiv = document.getElementById('divId')
        contentDiv.innerHTML = ''
        for (const div of divs) {
          contentDiv.appendChild(div)
        }
        let sealDiv = document.getElementsByName('seal_img_div')[0]

        let sealImg = sealDiv.getElementsByTagName('img')[0]
        let imgSrc = sealImg.getAttribute('src')
        sealImg.setAttribute('style', 'display: none;')
        that.replaceImgToCanvas(imgSrc, sealDiv)
      },
      fail (error) {
        console.log(error)
      }
    })
  }
}
</script>

<style scoped>
/* h4 + canvas {
  cursor: crosshair;
} */
.box {
  display: none;
}
/* canvas {
  background-color: rgb(10, 10, 200);
} */
</style>
