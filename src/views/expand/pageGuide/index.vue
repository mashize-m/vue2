<template>
  <div>
    <p>《I LOVE YOU TOO》。漫画作者 CHOW HON LAM，马来西亚漫画家、插画家。</p>
    <div>
      <button id="story1" @click="onClick">故事1</button>
    </div>
    <div id="tour1" class="tour">
      <img width="500" height="auto" src="./5efaea2.jpg" class="img" />
      <div class="crocodile1"></div>
      <div class="koala1"></div>
    </div>
  </div>
</template>

<script>
import { driver } from 'driver.js'
import 'driver.js/dist/driver.css'
export default {
  name: 'pageGuide',
  methods: {
    onClick () {
      const driverObj = driver({
        showProgress: true,
        steps: [
          { element: '#story1', popover: { title: '第一步', description: '开始引导.', side: 'left', align: 'start' } },
          { element: '.tour', popover: { title: '第二步', description: '引导的第二个画面', side: 'bottom', align: 'start' } },
          { element: '.tour :nth-child(1)', popover: { title: '第三步', description: '引导的第三个画面', side: 'bottom', align: 'start' } },
          { element: '.crocodile1', popover: { title: '第四步', description: '引导的第四个画面', side: 'left', align: 'start' } },
          { element: '.koala1', popover: { title: '第五步', description: '引导的第五个画面', side: 'top', align: 'start' } },
          { popover: { title: '最后', description: '结束引导.' } }
        ]
      })
      driverObj.drive()
    }
  }
}
</script>

<style lang="less" scoped>
#tour1 {
  position: relative;
  margin-top: 32px;
}

.crocodile1 {
  position: absolute;
  left: 245px;
  top: 35px;
  width: 140px;
  height: 130px;
}

.koala1 {
  position: absolute;
  left: 145px;
  top: 130px;
  width: 100px;
  height: 30px;
}
</style>
