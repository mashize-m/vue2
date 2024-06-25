<template>
  <div class="page">
    <p><b>边框渐变升级版</b></p>
    <div class="card">Magic Card</div>
  </div>
</template>

<script>
export default {
  name: 'gradientDemo'
}
</script>

<style lang="less" scoped>
@property --rotate {
  syntax: '<angle>';
  initial-value: 132deg;
  inherits: false;
}

@keyframes spin {
  0% {
    --rotate: 0deg;
  }
  100% {
    --rotate: 360deg;
  }
}

.card {
  position: relative;
  left: 40%;
  width: 200px;
  height: 300px;
  color: #191c29;
  cursor: pointer;
  text-align: center;
  border-radius: 6px;
  background-color: #191c29;
}

.card::before {
  position: absolute;
  content: '';
  width: 104%;
  height: 102%;
  border-radius: 8px;
  background-image: linear-gradient(var(--rotate), #5ddcff, #3c67e3 43%, #4e00c2);
  z-index: -1;
  top: -1%;
  left: -2%;
  transform: rotate(0deg);
  animation: spin 2.5s linear infinite;
}
.card::after {
  position: absolute;
  content: '';
  top: 50px;
  left: 0;
  right: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  transform: scale(0.8);
  filter: blur(50px);
  background-image: linear-gradient(var(--rotate), #5ddcff, #3c67e3 43%, #4e00c2);
  opacity: 1;
  transition: opacity 0.5s;
  animation: spin 2.5s linear infinite;
}
.card:hover {
  color: rgb(88, 199, 250);
  transition: color 1s;
}
.card:hover:before,
.card:hover:after {
  animation: none;
  opacity: 0;
}
</style>
