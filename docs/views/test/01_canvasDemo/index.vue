<template>
  <div id="parent">
    <div>
      <span class="box" @click="line">线条</span>
      <span class="box" @click="rectangle">画矩形</span>
      <span class="box" @click="arc">画圆形</span>
      <span class="box" @click="quadraticCurveTo">画二次贝塞尔曲线</span>
      <span class="box" @click="quadraticCurveTo3">画三次贝塞尔曲线</span>
      <span class="box" @click="linedash">虚线</span>
      <span class="box" @click="text">文本</span>
      <span class="box" @click="linearGradient">线性渐变色</span>
      <span class="box" @click="radialGradient">径向渐变</span>
      <span class="box" @click="pattern">添加指定元素</span>
      <span class="box" @click="drawImage1">绘制图片-原图</span>
      <span class="box" @click="drawImage2">绘制图片-指定宽高</span>
      <span class="box" @click="drawImage3">绘制图片-全参</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'baseCanvas',
  methods: {
    base () {
      let parent = document.getElementById('parent')
      let canvas = document.createElement('canvas') // 创建canvas元素
      canvas.setAttribute('width', '400')
      canvas.setAttribute('height', '300')
      canvas.setAttribute('style', 'box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);')
      parent.appendChild(canvas) // 追加到parent元素下

      const ctx = canvas.getContext('2d') // 获取上下文
      return ctx
    },
    line () {
      const ctx = this.base()
      ctx.beginPath() // 开启一条新路径，生成之后，图形绘制命令会被指向到新路径上；
      ctx.moveTo(10, 100) // 定义画线的起始点；
      ctx.lineTo(100, 100) // 定义画线的折点；
      ctx.lineTo(100, 50)
      ctx.lineTo(150, 50)
      ctx.lineTo(150, 100)
      ctx.lineTo(200, 100)
      ctx.strokeStyle = `rgb(${this.randomInt(0, 255)},${this.randomInt(0, 255)},${this.randomInt(0, 255)})` // 设置线的颜色；
      ctx.lineCap = 'round'// 设置线帽为圆型/默认/方形；'round/butt/square'
      ctx.lineJoin = 'bevel'// 设置线段连接处为默认 / 圆形 / 平直形式；'miter/round/bevel'
      ctx.lineWidth = 10 // 设置线宽为10像素
      ctx.globalAlpha = 0.8// 设置图案的透明度。  0.0 （完全透明）到 1.0（完全不透明），默认是 1.0。
      ctx.stroke() // 通过线条来绘制图形轮廓
      ctx.closePath() // 关闭上一条路径的绘制

      // 绘制第二条：
      ctx.beginPath()
      ctx.moveTo(50, 150)
      ctx.lineTo(200, 150)
      ctx.strokeStyle = 'red'
      ctx.lineWidth = 10
      ctx.stroke()
      ctx.closePath()
    },
    rectangle () {
      const ctx = this.base()

      ctx.beginPath()
      // 绘制线的矩形
      ctx.strokeRect(10, 10, 200, 100) // 起点为(10, 10)，宽200像素，高100像素
      ctx.closePath()

      ctx.beginPath()
      ctx.fillStyle = 'skyblue' // 填充颜色一定要写在生成矩形（fillRect()）之前，否则颜色不生效
      // 绘制带有填充色的矩形
      ctx.fillRect(10, 120, 200, 100)
      // 清除指定矩形
      ctx.clearRect(20, 130, 50, 25)
      ctx.closePath()

      ctx.beginPath()
      // 把 strokeRect()/fillRect() 方法拆成了stroke()和rect()方法
      // rect()暂时生成了矩形，但是必须调用stroke()方法才会绘制出来
      ctx.rect(250, 10, 80, 200)
      setTimeout(() => {
        // ctx.stroke()
        ctx.fill()
      }, 2000)
    },
    arc () {
      const ctx = this.base()
      ctx.beginPath()
      // arc(x, y, radius, startAngle, endAngle, anticlockwise)
      // (圆心坐标x，圆心坐标y，半径，初始角度，结束角度，顺时针或逆时针)
      ctx.arc(200, 150, 100, 0, [(Math.PI) / 180] * 360) // 不写anticlockwise项的话默认为顺时针
      ctx.stroke() // 如果此处改为使用fill()方法，那么将会绘制出填充的圆
    },
    quadraticCurveTo () {
      this.$notify({
        title: '【在线调试二次贝塞尔曲线的小工具】',
        duration: 0, // 不会自动关闭
        dangerouslyUseHTMLString: true, // 支持html语法
        message: `
        http://blogs.sitepointstatic.com/examples/tech/canvas-curves/quadratic-curve.html
      `
      })
      const ctx = this.base()
      ctx.beginPath()
      // quadraticCurveTo(cp1x, cp1y, x, y)
      // (控制点x，控制点y，结束点x，结束点y)
      ctx.lineWidth = 6
      ctx.strokeStyle = '#333'
      ctx.beginPath()
      ctx.moveTo(100, 250)
      ctx.quadraticCurveTo(245, 106, 400, 250)
      ctx.stroke()
    },
    quadraticCurveTo3 () {
      this.$notify({
        title: '【在线调试三次贝塞尔曲线的小工具】',
        duration: 0, // 不会自动关闭
        dangerouslyUseHTMLString: true, // 支持html语法
        message: `
        http://blogs.sitepointstatic.com/examples/tech/canvas-curves/bezier-curve.html
      `
      })
      const ctx = this.base()
      ctx.beginPath()
      // quadraticCurveTo(cp1x, cp1y,cp2x, cp2y, x, y)
      // (第一个控制点x，第一个控制点y，第二个控制点x，第二个控制点y，结束点x，结束点y)
      ctx.lineWidth = 6
      ctx.strokeStyle = '#333'
      ctx.beginPath()
      ctx.moveTo(100, 250)
      ctx.bezierCurveTo(213, 100, 260, 371, 400, 250)
      ctx.stroke()
    },
    linedash () {
      const ctx = this.base()
      ctx.beginPath()
      ctx.lineWidth = 10
      ctx.strokeStyle = 'skyblue'
      ctx.moveTo(50, 50)
      ctx.lineTo(350, 50)
      ctx.setLineDash([10])
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(50, 100)
      ctx.lineTo(350, 100)
      ctx.setLineDash([10, 30])
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(50, 150)
      ctx.lineTo(350, 150)
      ctx.setLineDash([10, 30, 5])
      ctx.stroke()
    },
    text () {
      const ctx = this.base()
      ctx.font = '50px Verdana' // 设置文本大小和字体
      // 对齐方式（水平/垂直）都是以文本对strokeText()方法中坐标参数为参考的水平/垂直方向对齐方式。
      ctx.textAlign = 'left' // 设置文本的对齐方式，可选left/right/center/start/end
      ctx.textBaseline = 'middle' // 决定了文本在垂直方向的对齐方式，可选alphabetic/top/hanging/middle/ideographic/bottom.
      ctx.direction = 'ltr' // 设置文本的绘制方向，可选ltr(left to right)和rtl(right to left)
      // strokeText(text, x, y, maxWidth)
      // (显示文本, 左下角起始坐标x, 左下角起始坐标y, 文本最大宽度)
      ctx.strokeText('Hello Canvas!', 10, 50, 300) // 使用fillStroke()方法绘制填充文本
      const width = ctx.measureText('Hello Canvas!').width // 获取文本的宽度
      // 这里不是必须显示出文本来才能计算文本的长度，
      // 测量结果也不受文本的最大宽度等外界因素的影响，
      // 文本长度的测量结果只和文本的font参数相关。
      console.log('文本的宽度为：', width)
    },
    linearGradient () {
      const ctx = this.base()
      // 创建线性渐变色
      // createLinearGradient(渐变色起点坐标x，渐变色起点坐标y，终点坐标x，终点坐标y)
      var gradient = ctx.createLinearGradient(0, 0, 700, 0)
      // addColorStop(偏移值，渐变色)
      gradient.addColorStop(0, 'skyblue') // 第一个偏移值为0
      gradient.addColorStop(1, '#fffc96') // 第一个偏移值为1
      ctx.beginPath()
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, 700, 600)
      ctx.fill()
    },
    radialGradient () {
      const ctx = this.base()
      // createRadialGradient（开始圆的圆心坐标x和y，开始圆的半径，结束圆的圆心坐标x和y，结束圆的半径）
      var gradient1 = ctx.createRadialGradient(175, 150, 0, 175, 150, 150)
      gradient1.addColorStop(0, 'skyblue')
      gradient1.addColorStop(1, '#fffc96')
      ctx.beginPath()
      ctx.fillStyle = gradient1
      ctx.fillRect(0, 0, 350, 300)
      ctx.strokeRect(0, 0, 350, 300)
    },
    pattern () {
      const ctx = this.base()
      // 创建一个 image对象:
      var img = new Image()
      // 绑定图片的src:
      img.src = 'http://panpan.dapanna.cn//image-20221006120003257.png'
      // 当图片加载完之后运行：
      img.onload = function () {
        // 创建图案:
        // createPattern(pattern, type)
        // pattern可以是 图片，视频，canvas对象；
        // type可以选择repeat/no-repeat/repeat-x(沿x轴平铺)/repeat-y(沿y轴平铺)
        var ptrn = ctx.createPattern(img, 'no-repeat')
        ctx.fillStyle = ptrn
        ctx.fillRect(0, 0, 400, 300)
      }
    },
    drawImage1 () {
      // drawImage(image, x, y)
      // drawImage(图片, 图片放在画布的位置x, y)
      // 把整个图像复制到画布，将其放置到指定点的左上角，并且将每个图像像素映射成画布坐标系统的一个单元。
      let parent = document.getElementById('parent')
      let canvas = document.createElement('canvas') // 创建canvas元素
      canvas.setAttribute('width', '700')
      canvas.setAttribute('height', '600')
      canvas.setAttribute('style', 'box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);')
      parent.appendChild(canvas) // 追加到parent元素下

      const ctx = canvas.getContext('2d') // 获取上下文
      // 创建一个图片对象：
      var img = new Image()
      img.src = 'http://panpan.dapanna.cn//image-20221009113426344.png'
      // 图片加载完成之后绘制图片：
      img.onload = function () {
        ctx.drawImage(img, 0, 0) // 在(0,0)处绘制原图
      }
    },
    drawImage2 () {
      // drawImage(image, x, y, width, height)
      // drawImage(图片, 图片放在画布的位置x, y，拉伸宽度，拉伸高度)
      // 把整个图像复制到画布，将其放置到指定点的左上角，允许您用画布单位来指定想要的图像的宽度和高度。
      let parent = document.getElementById('parent')
      let canvas = document.createElement('canvas') // 创建canvas元素
      canvas.setAttribute('width', '700')
      canvas.setAttribute('height', '600')
      canvas.setAttribute('style', 'box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);')
      parent.appendChild(canvas) // 追加到parent元素下

      const ctx = canvas.getContext('2d') // 获取上下文
      // 创建一个图片对象：
      var img = new Image()
      img.src = 'http://panpan.dapanna.cn//image-20221009113426344.png'
      // 图片加载完成之后绘制图片：
      img.onload = function () {
        ctx.drawImage(img, 0, 0, 500, 500) // 在(0,0)处绘制被拉成500×500像素的图片
      }
    },
    drawImage3 () {
      // drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight)
      // drawImage(图片, 开始裁切位置x, y，要裁切的宽，要裁切的高，图片起始坐标x，y，要绘制拉伸图像的宽，高)
      // 是完全通用的，它允许您指定图像的任何矩形区域并复制它，对画布中的任何位置都可进行任何的缩放
      let parent = document.getElementById('parent')
      let canvas = document.createElement('canvas') // 创建canvas元素
      canvas.setAttribute('width', '700')
      canvas.setAttribute('height', '600')
      canvas.setAttribute('style', 'box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);')
      parent.appendChild(canvas) // 追加到parent元素下

      const ctx = canvas.getContext('2d') // 获取上下文
      // 创建一个图片对象：
      var img = new Image()
      img.src = 'http://panpan.dapanna.cn//image-20221009113426344.png'
      // 图片加载完成之后绘制图片：
      img.onload = function () {
        ctx.drawImage(img, 100, 100, 300, 300, 0, 0, 500, 500) // 在(100,100)处向右下方裁剪300×300像素的被拉成500×500像素的图片
      }
    },
    // 返回随机的 [from, to] 之间的整数(包括from，也包括to)
    randomInt (from, to) {
      return parseInt(Math.random() * (to - from + 1) + from)
    }
  }
}
</script>

<style scoped>
.box {
  width: 50px;
  height: 20px;
  border: 1px solid blue;
  margin: 0 auto;
  margin-left: 20px;
}
</style>
