<template>
  <div>
    <div id="article" class="article" :class="[status == 1 && 'extended']">
      <p v-for="item in 30" :key="item">我是内容自定义的一串文字.我是内容自定义的一串文字.</p>
    </div>
    <button id="seeMoreBtn" @click="openOrClose">{{ btnTxt }}</button>
  </div>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
      status: 0, // 状态值
      btnTxt: '查看更多' // 按钮文案
    }
  },
  mounted () { },
  methods: {
    // 切换状态、按钮文案
    openOrClose () {
      this.status = this.status === 1 ? 0 : 1
      this.btnTxt = this.status === 1 ? '收起内容' : '查看更多'
    }
  }
}
</script>
<style lang='less' scoped>
.article {
  max-width: 800px;
  max-height: 300px;
  overflow-y: hidden;
  border: 1px solid red;

  /* 增加过渡时间以适应高度 */
  // transition: css属性的名称 过渡需要的事件 过渡效果 过渡的延时时间;
  transition: max-height 0.7s linear;
}

.extended {
  max-height: 1000px !important;
}

button {
  padding: 10px;
}
</style>
