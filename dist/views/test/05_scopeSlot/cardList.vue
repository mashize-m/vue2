<template>
  <div>
    <div v-for="(item, index) in cardData" :key="index">
      <slot :row="item"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardData: {
      type: Array
    }
  }
}
</script>
<style  scoped>
</style>
