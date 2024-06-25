<template>
  <div class="div">
    <div>{{ cardObj.name }}</div>
    <div>{{ cardObj.age }}</div>
  </div>
</template>

<script>
export default {
  props: {
    cardObj: {
      type: Object,
      default: () => { }
    }
  }
}
</script>
<style  scoped>
.div {
  width: 100px;
  height: 100px;
  background-color: pink;
}
</style>
