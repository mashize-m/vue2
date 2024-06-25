<template>
  <div>
    <Splitpanes class="splitpanes_style" style="height: 400px">
      <Pane min-size="20" max-size="50" class="pane_style_1">1</Pane>
      <Pane>
        <Splitpanes horizontal class="splitpanes_style_2">
          <Pane min-size="20" max-size="50" class="pane_style_2">2</Pane>
          <Pane class="pane_style_3">3</Pane>
          <Pane min-size="20" max-size="50" class="pane_style_4">4</Pane>
        </Splitpanes>
      </Pane>
      <Pane min-size="20" max-size="50" class="pane_style_5">5</Pane>
    </Splitpanes>
    <div>https://antoniandre.github.io/splitpanes/</div>
  </div>
</template>

<script>
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

export default {
  name: 'splitpanes',
  components: {
    Splitpanes, Pane
  }
}
</script>

<style scoped>
.splitpanes_style >>> .splitpanes__splitter {
  border-right: 1px solid rgb(207, 207, 207);
  border-left: 1px solid rgb(207, 207, 207);
  min-width: 3px;
}
.splitpanes_style_2 >>> .splitpanes__splitter {
  border-top: 1px solid rgb(207, 207, 207);
  border-bottom: 1px solid rgb(207, 207, 207);
  min-height: 3px;
}
.pane_style_1 {
  background-color: pink;
  border: 1px solid;
}
.pane_style_2 {
  background-color: sandybrown;
  border: 1px solid;
}
.pane_style_3 {
  background-color: seagreen;
  border: 1px solid;
}
.pane_style_4 {
  background-color: slateblue;
  border: 1px solid;
}
.pane_style_5 {
  background-color: lightseagreen;
  border: 1px solid;
}
</style>
