<template>
  <div id="box">
    <div>原始数据</div>
    <el-table :data="tableData" style="width: 100%" :height="height" ref="lessonTableImg">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
    <div>
      <el-button size="mini" type="danger" @click="download">下载图片（html2canvas不支持滚动）</el-button>
      <el-button size="mini" type="danger" @click="view">生成图片（html2canvas不支持滚动）</el-button>
      <el-button size="mini" type="danger" @click="downloadFromDom">
        下载图片（domtoimage不支持滚动）
      </el-button>
    </div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'
// npm 安装的包，需要修改源码，在最后一行加：export default Canvas2Image;
import Canvas2Image from 'canvas2image/canvas2image'
import domtoimage from 'dom-to-image'

export default {
  name: 'canvasPackage',
  data () {
    return {
      tableData: [
        { date: '2016-05-02', name: '王小虎【1】', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-04', name: '王小虎【2】', address: '上海市普陀区金沙江路 1517 弄' },
        { date: '2016-05-01', name: '王小虎【3】', address: '上海市普陀区金沙江路 1519 弄' },
        { date: '2016-05-03', name: '王小虎【4】', address: '上海市普陀区金沙江路 1516 弄' }
      ],
      height: '250'
    }
  },
  methods: {
    download () {
      this.height = '350'
      this.$nextTick(() => {
        // 获取dom
        let downloadContent = this.$refs.lessonTableImg.$el

        // html2canvas参数
        var opts = {
          useCORS: true, // 【重要】开启跨域配置
          allowTaint: false, // 这个属性和useCORS不能同时为true哦
          logging: false, // 日志开关，便于查看html2canvas的内部执行流程
          letterRendering: true
        }
        html2canvas(downloadContent, opts).then((canvas) => {
          let context = canvas.getContext('2d')
          // 【重要】关闭抗锯齿
          context.mozImageSmoothingEnabled = false
          context.webkitImageSmoothingEnabled = false
          context.msImageSmoothingEnabled = false
          context.imageSmoothingEnabled = false

          // Canvas2Image是将canvas转换成图片
          // 获取img的element元素，带src：base64
          let img = Canvas2Image.convertToImage(canvas, canvas.width, canvas.height)
          // 下载图片
          let a = document.createElement('a')
          document.body.appendChild(a)
          a.href = img.src
          // 设置下载标题
          a.download = 'demo.jpg'
          a.click()
        })
      })
    },
    view () {
      // 获取dom
      var downloadContent = this.$refs.lessonTableImg.$el
      // html2canvas参数
      var opts = {
        useCORS: true, // 【重要】开启跨域配置
        allowTaint: false, // 这个属性和useCORS不能同时为true哦
        logging: false, // 日志开关，便于查看html2canvas的内部执行流程
        letterRendering: true
      }
      html2canvas(downloadContent, opts).then((canvas) => {
        let context = canvas.getContext('2d')
        // 【重要】关闭抗锯齿
        context.mozImageSmoothingEnabled = false
        context.webkitImageSmoothingEnabled = false
        context.msImageSmoothingEnabled = false
        context.imageSmoothingEnabled = false

        // Canvas2Image是将canvas转换成图片
        // 获取img的element元素，带src：base64
        // 也可以直接获取base64数据再处理。const src64 = canvas.toDataURL()
        let img = Canvas2Image.convertToImage(canvas, canvas.width, canvas.height)
        console.log(img, '---img')

        // // 展示
        img.style.width = '100%'
        img.style.height = '100%'
        document.getElementById('box').appendChild(img)
      })
    },
    downloadFromDom () {
      // 获取dom
      var downloadContent = this.$refs.lessonTableImg.$el

      domtoimage.toPng(downloadContent, { bgcolor: '#fff' }).then(dataUrl => {
        console.log(dataUrl, '---dataUrl')
        var mA = document.createElement('a')
        mA.href = dataUrl
        mA.setAttribute('download', '图片canvas.png')
        mA.click()
      }).catch(error => {
        console.error('oops, something went wrong!', error)
      })
    }
  }
}
</script>

<style scoped>
</style>
