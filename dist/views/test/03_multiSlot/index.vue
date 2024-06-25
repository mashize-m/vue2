<template>
  <div>
    根节点信息
    <Children1>
      <template v-slot:one>
        <div>信息由parent传给 children1,再传给children2</div>
      </template>
    </Children1>
  </div>
</template>

<script>
import Children1 from './children1.vue'
export default {
  components: {
    Children1
  },
  data () {
    return {
      msg: 'parent组件的消息。。。'
    }
  }
}
</script>

<style scoped>
</style>
