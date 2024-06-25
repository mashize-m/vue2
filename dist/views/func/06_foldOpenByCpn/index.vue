<!--
 * @Description:  <transition-group>标签 + Velocity.js包  实现折叠和展开效果（竖方向）
 * @Autor: mashize
 * @Date: 2023-01-30 21:04:00
 * @LastEditors: mashize
 * @LastEditTime: 2023-01-30 21:23:17
-->
<template>
  <div class="container">
    <div class="card">
      <div id="hide-demo">
        <transition-group
          name="hide-fade"
          v-bind:css="false"
          v-on:before-enter="beforeEnter"
          v-on:enter="enter"
          v-on:leave="leave"
        >
          <template v-if="status == 1">
            <p v-for="item in 30" :key="item">我是内容自定义的一串文字.我是内容自定义的一串文字.</p>
          </template>
          <template v-if="status == 0">
            <p v-for="item in 5" :key="item">我是内容自定义的一串文字.我是内容自定义的一串文字.</p>
          </template>
        </transition-group>
        <button @click="status = status == 1 ? 0 : 1">{{ status == 1 ? '收起说明' : '其他说明' }}</button>
      </div>
    </div>
  </div>
</template>
<script>
import Velocity from 'velocity-animate'

export default {
  name: 'index',
  data () {
    return {
      status: 0
    }
  },
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enter: function (el, done) {
      console.log('enter')
      const { status } = this
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 1, height: status === 1 ? '50px' : '50px' },
          { complete: done }
        )
      }, 0)
    },
    leave: function (el, done) {
      console.log('leave')
      setTimeout(function () {
        Velocity(el, { opacity: 0, height: 0 }, { complete: done })
      }, 0)
    }
  }
}
</script>
<style lang='less' scoped>
.container {
  width: 400px;
}

.card {
  border: 1px solid #ccc !important;
  padding: 5px;
  box-sizing: border-box;
}
</style>
