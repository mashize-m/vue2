<template>
  <div>
    <div class="loadEffect">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="tips">
      <span>{{ msg }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LoaderComponent',
  props: {
    msg: {
      type: String,
      default: '加载中...'
    }
  },
  data () {
    return {}
  },
  watch: {},
  computed: {},
  methods: {}
}
</script>

<style>
.loadEffect {
  width: 100px;
  height: 100px;
  position: relative;
  margin: 0 auto;
  transform: scale(0.5);
}
.loadEffect span {
  display: inline-block;
  width: 30px;
  height: 10px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  /* background: lightgreen; */
  background: #666;
  position: absolute;
  animation: load 1.04s ease infinite;
  -webkit-animation: load 1.04s ease infinite;
}
@keyframes load {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
}
.loadEffect span:nth-child(1) {
  left: 0;
  top: 50%;
  margin-top: -5px;
  animation-delay: 0.13s;
  -webkit-animation-delay: 0.13s;
}
.loadEffect span:nth-child(2) {
  left: 10px;
  top: 20px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  animation-delay: 0.26s;
  -webkit-animation-delay: 0.26s;
}
.loadEffect span:nth-child(3) {
  left: 50%;
  top: 10px;
  margin-left: -15px;
  transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  animation-delay: 0.39s;
  -webkit-animation-delay: 0.39s;
}
.loadEffect span:nth-child(4) {
  top: 20px;
  right: 10px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  animation-delay: 0.52s;
  -webkit-animation-delay: 0.52s;
}
.loadEffect span:nth-child(5) {
  right: 0;
  top: 50%;
  margin-top: -5px;
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  animation-delay: 0.65s;
  -webkit-animation-delay: 0.65s;
}
.loadEffect span:nth-child(6) {
  right: 10px;
  bottom: 20px;
  transform: rotate(225deg);
  -webkit-transform: rotate(225deg);
  animation-delay: 0.78s;
  -webkit-animation-delay: 0.78s;
}
.loadEffect span:nth-child(7) {
  bottom: 10px;
  left: 50%;
  margin-left: -15px;
  transform: rotate(270deg);
  -webkit-transform: rotate(270deg);
  animation-delay: 0.91s;
  -webkit-animation-delay: 0.91s;
}
.loadEffect span:nth-child(8) {
  bottom: 20px;
  left: 10px;
  transform: rotate(315deg);
  -webkit-transform: rotate(315deg);
  animation-delay: 1.04s;
  -webkit-animation-delay: 1.04s;
}
</style>
