<template>
  <div>
    <div>children1</div>
    <Children2>
      <slot name="one" slot="two"></slot>
    </Children2>
  </div>
</template>

<script>
import Children2 from './children2.vue'
export default {
  components: {
    Children2
  }
}
</script>

<style  scoped>
</style>
