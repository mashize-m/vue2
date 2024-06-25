<template>
  <div class="wrap">
    <div class="btns">
      <custom-button type="primary" @click="reset">初始化</custom-button>
      <custom-button type="success" @click="onTurnPre" :disabled="turnPage.currentPage == 1">
        上一页
      </custom-button>
      <custom-button
        type="success"
        @click="onTurnNext"
        :disabled="turnPage.currentPage == turnPage.imageList.length"
      >
        下一页
      </custom-button>
      <div>更多官网demo可参考：utils/turnjs4/samples</div>
    </div>
    <div class="container" ref="container">
      <div class="view" :style="{ height: turnPage.height + 'px' }">
        <div
          class="hard"
          :style="{
            width: turnPage.width / 2 + 'px',
            height: turnPage.height + 'px'
          }"
          style="background: #fff"
        >
          <!-- <div>封面</div>
          <div class="item">******************<br /></div>
          <div class="item">******************<br /></div>
          <div class="item">******************<br /></div> -->
        </div>
        <div id="book" class="book" v-if="turnPage.show">
          <div
            class="page"
            :class="{ odd: index % 2 == 0, even: index % 2 == 1 }"
            v-for="(item, index) in turnPage.imageList"
            :key="index"
          >
            <div class="img">
              <img :src="item" />
            </div>
            <!-- <div class="page-num">第{{ index + 1 }}页</div> -->
          </div>
          <div
            style="background: #fff; width: 500px; height: 700px"
            v-if="turnPage.imageList.length % 2 == 0"
          ></div>
        </div>
      </div>
      <div
        class="page-load"
        v-if="turnPage.loading"
        :style="{
          width: turnPage.width / 2 + 'px',
          height: turnPage.height + 'px'
        }"
      >
        <loader-component></loader-component>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import CustomButton from './CustomButton'
import LoaderComponent from './LoaderComponent'
import $ from 'jquery'
import turn from '@/utils/turnjs4/lib/turn.js'
export default {
  name: 'TurnjsComponent',
  components: {
    CustomButton,
    LoaderComponent
  },
  props: {},
  data () {
    return {
      turnPage: {
        width: 0,
        height: 0,
        imageList: [],
        currentPage: 1,
        totalPage: 1,
        loading: false,
        show: true
      }
    }
  },
  watch: {},
  computed: {},
  methods: {
    onTurn () {
      let that = this
      this.$nextTick(() => {
        $('#book').turn({
          // 启用硬件加速,移动端有效
          acceleration: false,
          // 显示：single=单页，double=双页，默认双页
          display: 'double',
          // 翻页撒开鼠标，页面的延迟
          duration: 800,
          // 默认显示第几页
          page: 1,
          // 折叠处的光泽渐变，主要体现翻页的立体感、真实感
          gradients: true,
          // 中心翻取决于有多少页面可见 true or false
          autoCenter: true,
          // 设置可翻页的页角(都试过了，乱写 4个角都能出发卷起)， bl,br   tl,tr   bl,tr
          turnCorners: 'bl,br',
          // 页面高度
          height: this.turnPage.height,
          // 翻书范围宽度，总宽度
          width: this.turnPage.width,
          when: {
            // 监听事件
            turning: function (e, page, view) {
              console.log('翻页前触发')
              console.log(e, page, view)
              // 翻页前触发
              console.log(page)
            },
            turned: function (e, page) {
              console.log('翻页后触发')
              console.log(e, page)
              // 翻页后触发
              console.log(page)
              let length = that.turnPage.imageList.length
              that.turnPage.currentPage = page < length ? page : length
            }
          }
        })
      })
    },
    onTurnPre () {
      $('#book').turn('previous')
    },
    onTurnNext () {
      $('#book').turn('next')
    },
    async reset () {
      this.turnPage.show = false
      this.turnPage.loading = true

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 500)
      })

      this.turnPage.imageList = []
      for (let index = 0; index < 5; index++) {
        let img = require('@/assets/img/blackpink/' + index + '.jpeg')
        this.turnPage.imageList.push(img)
      }
      this.turnPage.totalPage = this.turnPage.imageList.length

      this.turnPage.show = true
      this.turnPage.loading = false

      setTimeout(() => {
        this.$nextTick(() => {
          let width = this.$refs.container.offsetWidth
          let height = this.$refs.container.offsetHeight
          // 设置div容器的宽高
          console.log('wwwwwww')
          console.log(width, height)
          this.turnPage = {
            ...this.turnPage,
            width,
            height
          }
          this.turnPage.totalPage = this.turnPage.imageList.length
          this.onTurn()
        })
      }, 500)
    }
  },
  created () {
    for (let index = 0; index < 14; index++) {
      let img = require('@/assets/img/blackpink/' + index + '.jpeg')
      this.turnPage.imageList.push(img)
    }
  },
  mounted () {
    // 获取div容器的宽高
    let width = this.$refs.container.offsetWidth
    let height = this.$refs.container.offsetHeight
    // 设置div容器的宽高
    console.log('wwwwwww')
    console.log(width, height)
    this.turnPage = {
      ...this.turnPage,
      width,
      height
    }
    this.turnPage.totalPage = this.turnPage.imageList.length
    this.onTurn()
    $(window).bind('keydown', function (e) {
      if (e.target && e.target.tagName.toLowerCase() !== 'input') {
        if (e.keyCode === 37) $('#book').turn('previous')
        else if (e.keyCode === 39) $('#book').turn('next')
      }
    })
  }
}
</script>
<style scoped>
#book {
  width: 800px;
  height: 500px;
}

#book .turn-page {
  background-color: white;
}

#book .cover {
  background: #333;
}

#book .cover h1 {
  color: white;
  text-align: center;
  font-size: 50px;
  line-height: 500px;
  margin: 0px;
}

#book .loader {
  /* background-image: url(loader.gif); */
  width: 24px;
  height: 24px;
  display: block;
  position: absolute;
  top: 238px;
  left: 188px;
}

#book .data {
  text-align: center;
  font-size: 40px;
  color: #999;
  line-height: 500px;
}

#controls {
  width: 800px;
  text-align: center;
  margin: 20px 0px;
  font: 30px arial;
}

#controls input,
#controls label {
  font: 30px arial;
}

#book .odd {
  /* background-image: -webkit-linear-gradient(left, #fff 95%, #ddd 100%);
  background-image: -moz-linear-gradient(left, #fff 95%, #ddd 100%);
  background-image: -o-linear-gradient(left, #fff 95%, #ddd 100%);
  background-image: -ms-linear-gradient(left, #fff 95%, #ddd 100%); */
  background-image: linear-gradient(270deg, #fff 95%, #ddd 100%);
}

#book .even {
  background-image: linear-gradient(90deg, #fff 95%, #ddd 100%);

  /* background-image: -webkit-linear-gradient(right, #fff 95%, #ddd 100%);
  background-image: -moz-linear-gradient(right, #fff 95%, #ddd 100%);
  background-image: -o-linear-gradient(right, #fff 95%, #ddd 100%);
  background-image: -ms-linear-gradient(right, #fff 95%, #ddd 100%); */
}

.wrap {
  width: 100%;
  height: 100vh;
  background: #fff;
}

.btns {
  margin-bottom: 24px;
}

.container {
  width: 80%;
  height: 70vh;
  background: #fff;
  position: relative;
  margin: 0 auto;
}

.view {
  position: relative;
  /* width: 1000px; */
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
}

.hard {
  /* width: 50%;
  height: 700px; */
  position: absolute;
  top: 0;
  left: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.page-load {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.page {
  background: #fff;
}

.page .img {
  position: relative;
  /* height: calc(100% - 50px); */
  height: 100%;
}

.page .img img {
  max-width: 100%;
  max-height: 100%;
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 24px;
}

.page .page-num {
  height: 50px;
  position: relative;
}
</style>
