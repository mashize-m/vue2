<template>
  <div id="container"></div>
</template>

<script>
export default {
  name: 'textDemo',
  methods: {
    createText () {
      const data = ['清明时节闹坤坤，', '路上行人梳中分；', '借问荔枝何处有，', '苏珊遥指蔡徐村。']
      const arr = []
      // 获取dom元素
      const container = document.querySelector('#container')
      // for/of循环遍历数组
      for (const item of data) {
        // 创建p标签
        const p = document.createElement('p')
        // 遍历item的每一个字
        for (let i = 0; i < item.length; i++) {
          // 创建span
          let span = document.createElement('span')
          // span的内容等于item的每一个字
          span.innerHTML = item[i]
          // 将span插入到p标签中
          p.append(span)
          // 将span也添加到新数组中
          arr.push(span)
        }
        // 将p标签插入到container
        container.append(p)
      }
      // 延时1毫秒等待上方循环渲染完成
      setTimeout(() => {
        // 遍历arr数组的每一个元素
        arr.forEach((item, index) => {
          // 给每一个元素添加过渡延迟属性
          // 让每一个字都比前一个字延时0.2秒的时间
          item.style.transitionDelay = `${index * 0.2}s`
          // 将透明度设置为不透明
          item.style.opacity = 1
        })
      }, 1)
    }
  },
  mounted () {
    this.createText()
  }
}
</script>

<style lang="less" scoped>
#container {
  /* 添加这行样式=>文字纵向从右往左显示 */
  /* 目前先不设置,后面可以取消注释 */
  // writing-mode: vertical-lr;
  :deep(span) {
    /* 这里opacity先设置为1，让其不透明，可以看到每一步的效果 */
    /* 写完js之后到回来改为0 */
    opacity: 0;
    transition: opacity 0.5s;
  }
}
</style>
