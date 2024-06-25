<template>
  <codemirror id="right" ref="myCm" class="code" v-model="code" :options="cmOptions"></codemirror>
</template>

<script>
// 全局引入vue-codemirror
import { codemirror } from 'vue-codemirror'
// 引入css文件
import 'codemirror/lib/codemirror.css'
// 引入主题 可以从 codemirror/theme/ 下引入多个
import 'codemirror/theme/dracula.css'
// 引入语言模式 可以从 codemirror/mode/ 下引入多个
import 'codemirror/mode/vue/vue.js'
import 'codemirror/mode/javascript/javascript.js'

export default {
  name: 'CodemirrorCpn',
  components: {
    codemirror
  },
  props: {
    path: {
      type: String,
      default: ''
    }
  },
  watch: {
    path: {
      immediate: true,
      deep: true,
      handler (newValue, oldValue) {
        newValue && this.init(newValue)
      }
    }
  },
  data () {
    return {
      code: '',
      cmOptions: {
        mode: 'vue', // 实现javascript代码高亮
        theme: 'dracula', // 主题样式
        tabSize: 4, // tab的空格个数
        line: true, // 显示函数
        lineNumbers: true, // 是否显示行数
        lineWrapping: true, // 是否自动换行
        readOnly: false // 只读
      }
    }
  },
  methods: {
    init (path) {
      console.log('path:', path)
      fetch(`./#${path}/index.vue`).then(response => {
        response.text().then(r => {
          this.code = r
        })
      })
    }
  },
  mounted () {
    this.init(this.path)
  }
}
</script>

<style lang="less" scoped>
#right {
  flex: 1;
  text-align: left;
  height: 100%;
  :deep(.CodeMirror) {
    height: 100%;
  }
}
</style>
