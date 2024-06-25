<template>
  <div class="about">
    <vue-markdown :source="md"></vue-markdown>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
const articleList = require('./README.md')

export default {
  name: 'viewOfd',
  components: {
    VueMarkdown
  },
  data () {
    return {
      md: articleList
    }
  }
}
</script>

<style lang="less" scoped>
</style>
