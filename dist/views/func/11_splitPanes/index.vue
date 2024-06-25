<template>
  <div class="box">
    <SplitCss></SplitCss>
    <SplitPanes></SplitPanes>
  </div>
</template>

<script>
import SplitCss from './split'
import SplitPanes from './splitpanes'
export default {
  name: 'splitPanes',
  components: {
    SplitCss, SplitPanes
  }
}
</script>

<style lang="less" scoped>
.box {
  display: flex;
  flex-direction: column;
}
</style>
