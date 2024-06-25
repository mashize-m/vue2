<template>
  <div class="wrap" id="img">
    <img class="prew" src="./200G0114924-15-1200.jpg" />
  </div>
</template>

<script>
export default {
  name: 'mouseMask',
  data () {
    return {
    }
  },
  methods: {
    name () {

    }
  },
  mounted () {
    img.addEventListener('mousemove', (ev) => {
      img.style.setProperty('--x', ev.offsetX / ev.target.offsetWidth)
      img.style.setProperty('--y', ev.offsetY / ev.target.offsetHeight)
    })
  }
}
</script>

<style lang="less" scoped>
.left {
  text-align: left;
}

body {
  margin: 0;
  height: 100vh;
  display: grid;
  place-content: center;
}
.prew {
  display: block;
  width: 800px;
}
.wrap {
  position: relative;
  overflow: hidden;
}
.wrap::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  -webkit-mask: url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='25' cy='25' r='25' fill='%23C4C4C4'/%3E%3C/svg%3E"),
    linear-gradient(red, red);
  -webkit-mask-size: 100px, 100%;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: calc(var(--x, 0.5) * 100%) calc(var(--y, 0.5) * 100%), 0;
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
}
</style>
