<template>
  <div>
    <label class="container">
      <textarea v-model="content" @input="handleInput" @keydown.tab.prevent="handleTabKeydown"></textarea>
      <div class="ghost-content" v-html="ghostHTML"></div>
    </label>
    <div>建议列表：['你好啊', '怎么学编程']</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      content: '', // 输入框内容
      ghostContent: '', // 建议内容
      ghostHTML: '', // 建议内容HTML
      suggestions: ['你好啊', '怎么学编程'] // 建议列表
    }
  },
  methods: {
    handleInput () {
      this.ghostContent = '' // 内容变化时，清空建议
      this.ghostHTML = ''
      // 如果为空或者建议内容改变，则不进行后续匹配
      if (this.content === '') {
        // fromSuggestion && (fromSuggestion = false)
        return
      }
      const suggestion = this.suggestions.find((item) => item.startsWith(this.content))
      console.log('suggestion:', suggestion)
      if (suggestion) {
        this.ghostContent = suggestion
        this.ghostHTML = suggestion.replace(this.content, `<span>${this.content}</span>`) + ' →' // 显示内容替换
      }
    },
    handleTabKeydown () {
      // 监听tab键按下，将输入框内容设置为建议内容，同时清空建议内容
      this.content = this.ghostContent
      this.ghostContent = ''
      this.ghostHTML = ''
    }

  }
}
</script>

<style lang="less" scoped>
.container {
  position: relative;
  display: block;
  width: 300px;
  height: 200px;
  font-size: 14px;
  line-height: 21px;
}
.container textarea {
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
  font: inherit;
  color: #212121;
  background-color: #fff;
  outline: none;
  border: 1px solid #000;
}
.ghost-content {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  color: #212121;
  opacity: 0.3;
}
</style>
