<template>
  <div class="page">
    <p><b>animation</b></p>
    <p>1、先定义动画：@keyframes 动画名称 {}</p>
    <p>2、再调用定义好的动画：animation: 动画名称 1s</p>
    <p>注：animation是一个简写属性形式。具体的属性如下：</p>
    <p><b>（1）animation-name：指定由 @keyframes 描述的关键帧名称</b></p>
    <p><b>（2）animation-duration：设置动画一个周期的时长</b></p>
    <div class="base box1">动画名称和持续时间</div>
    <p><b>（3）animation-delay：设置动画延时（负值为提前开始）</b></p>
    <div class="demo">
      <div class="base box2">动画延时</div>
      <div class="base box3">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </div>
    <p><b>（3.1）animation-duration 和 animation-delay 构建随机效果</b></p>
    <div class="base box4">
      <div class="point" v-for="k in 10" :key="k"></div>
    </div>
    <p><b>（4）animation-timing-function 缓动函数--两类</b></p>
    <p><b>（4.1）三次贝塞尔曲线缓动函数</b></p>
    <div class="base box5">
      <div class="point" v-for="k in 5" :key="k"></div>
    </div>
    <div class="base box6">
      <div class="point" v-for="k in 10" :key="k"></div>
    </div>
    <p><b>（4.1）三次贝塞尔曲线 案例应用</b></p>
    <img src="./ce3bbac2c34504c5f26ed5850af7f130.gif" alt="" />
    <p><b>（4.2）步骤缓动函数</b></p>
    <div class="box7"></div>
    <p><b>（4.3）三次贝塞尔曲线、步骤缓动函数，都可以作出下列效果</b></p>
    <img src="./5bee6920a2b02c74ccc33674acdbd750.gif" />
    <p><b>（5）animation-play-state：控制动画的状态 -- 运行或者暂停</b></p>
    <el-button class="stop">stop</el-button>
    <div class="box8"></div>
    <p><b>（5.1）小技巧，默认暂停，点击运行</b></p>
    <img src="./b22051aef4b5e46abc08b5b6dfabfe72.gif" />
    <p>
      <b>地址:</b>
      <span>https://codepen.io/mikegolus/pen/jJzRwJ</span>
    </p>
    <p><b>（6）animation-fill-mode: 控制元素在各个阶段的状态（控制元素在动画结束后是否复位）</b></p>
    <div>
      <p>
        <b>animation-fill-mode:none。</b>
        默认值，当动画未执行时，动画将不会将任何样式应用于目标，而是使用赋予给该元素的CSS规则来显示该元素的状态
      </p>
      <p>
        <b>animation-fill-mode: backwards。</b>
        动画将在应用于目标时立即应用第一个关键帧中定义的值，并在 `animation-delay`期间保留此值，
      </p>
      <p>
        <b>animation-fill-mode: forwards。</b>
        目标将保留由执行期间遇到的最后一个关键帧计算值。 最后一个关键帧取决于`animation-direction` 和
        `animation-iteration-count`
      </p>
      <p>
        <b>animation-fill-mode: both。</b>
        动画将遵循`forwards` 和 `backwards` 的规则，从而在两个方向上扩展动画属性
      </p>
    </div>
    <p><b>（7）animation-iteration-count/animation-direction 动画循环次数和方向</b></p>
    <div>
      <p>
        <b>animation-iteration-count</b>
        控制动画运行的次数，可以是数字或者 infinite，注意，数字可以是小数
      </p>
      <p>
        <b>animation-direction</b>
        控制动画的方向，正向、反向、正向交替与反向交替
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'animation'
}
</script>

<style lang="less" scoped>
@keyframes move {
  0% {
    transform: translate(0);
  }
  100% {
    transform: translate(200px);
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes rotate2 {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(180deg);
  }
}

@keyframes move2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, 100px);
  }
}

@keyframes sprite {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -1080px 0;
  }
}

@keyframes move3 {
  100% {
    transform: translate(100px, 0);
  }
}

@keyframes move4 {
  from {
    transform: translateY(-50px);
  }
  to {
    transform: translateY(50px);
  }
}

.page {
  text-align: left;
  .demo {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
  }
  .base {
    width: 100px;
    height: 100px;
    border: 1px solid #000;
  }
  .box1:hover {
    animation: move 3s;
  }
  .box2:hover {
    animation: move 3s;
    animation-delay: 3s;
  }
  .box3 {
    position: relative;
    margin-left: 200px;
    .circle {
      position: absolute;
      top: 20%;
      left: 20%;
      width: 30px;
      height: 30px;
      background-color: #000;
      border-radius: 50%;
      transform-origin: 100% 100%;
    }
    :nth-child(1) {
      animation: rotate 3s infinite linear;
    }
    :nth-child(2) {
      animation: rotate 3s infinite -1s linear;
    }
    :nth-child(3) {
      animation: rotate 3s infinite -2s linear;
    }
  }
  .box4 {
    width: 200px;
    display: flex;
    flex-wrap: nowrap;
    gap: 5px;
    .point {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #000;
      animation: move2 3s infinite 1s linear;
    }
    .for(@n, @i: 1) when (@i =< @n) {
      :nth-child(@{i}) {
        @s: ~`Math.random() `;
        animation-duration: @s*2+2s;
        animation-delay: @s*2+1s;
      }
      .for(@n, (@i + 1));
    }

    .for(10);
  }
  .box5 {
    width: 300px;
    .point {
      width: 10px;
      height: 10px;
      margin: 8px;
      border-radius: 50%;
      background: #000;
      animation: move 3s infinite;
    }
    :nth-child(1) {
      animation-timing-function: ease; // 动画以低速开始，然后加快，在结束前变慢
    }
    :nth-child(2) {
      animation-timing-function: ease-in; // 动画以低速开始
    }
    :nth-child(3) {
      animation-timing-function: ease-out; // 动画以低速结束
    }
    :nth-child(4) {
      animation-timing-function: ease-in-out; // 动画以低速开始和结束
    }
    :nth-child(5) {
      animation-timing-function: linear; // 匀速，动画从头到尾的速度是相同的
    }
  }
  .box6 {
    position: relative;
    width: 200px;
    .point {
      position: absolute;
      bottom: 0%;
      left: 0;
      width: 10px;
      height: 10px;
      background-color: #000;
      border-radius: 50%;
      transform-origin: 90px 0;
      animation: rotate2 10s infinite;
    }
    .for(@n, @i: 1) when (@i =< @n) {
      :nth-child(@{i}) {
        animation-delay: (-@i) * 1s;
        animation-timing-function: cubic-bezier(1, -0.21, 0.85, 1.29);
      }
      .for(@n, (@i + 1));
    }

    .for(10);
  }
  .box7 {
    width: 180px;
    height: 180px;
    background: url('./b9d3f5536871e28828b234a237ef11fb.png');
    // /* Keyword values */
    // animation-timing-function: step-start;
    // animation-timing-function: step-end;

    // /* Function values */
    // animation-timing-function: steps(6, start)
    // animation-timing-function: steps(4, end);

    // steps(6) 的意思就是将设定的 @keyframes 动画分为 6 次（6帧）执行，而整体的动画时间是 0.6s，所以每一帧的停顿时长为 0.1s；
    // animation-duration 动画长短对动画会有影响    0.6s -> 0.2s  跑的会更快
    animation: sprite 0.6s steps(6, end) infinite;
  }
  .box8 {
    width: 100px;
    height: 100px;
    background: deeppink;
    animation: move3 2s linear infinite alternate;
  }
  .stop:hover ~ .box8 {
    animation-play-state: paused;
  }
}
</style>
