<template>
  <div class="base_layout">
    <el-row v-for="(row, index) in rows" :key="index">
      <el-col
        :span="col.span"
        v-for="(col, colIndex) in row.cols"
        :key="colIndex"
        :style="{ height: col.height }"
        class="base_col border_col"
      >
        <div
          v-if="!col.slotName"
          class="col_name"
          :style="{ textAlign: col.align, fontWeight: col.fontWeight }"
          :class="{ title: col.title }"
        >
          <div>{{ col.name }}</div>
          <div>{{ col.byname }}</div>
          <!-- <template v-if="col.type === 'label'">
            <div>{{ col.name }}</div>
            <div>{{ col.byname }}</div>
          </template>
          <template v-if="col.type === 'input'">
            <el-input v-model="form[col.field]"></el-input>
          </template> -->
          <template v-if="col.description">
            <div v-for="(desc, index) in col.description" :key="index">{{ desc }}</div>
          </template>
        </div>
        <slot :name="col.slotName" :col="col"></slot>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'BaseLayout',
  props: {
    rows: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      form: {}
    }
  }
}
</script>

<style lang="less" scoped>
.base_layout {
  height: 100%;
  font-size: 14px;
}
.base_col {
  height: 40px;
}
.border_col {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    /* 宽度为父容器宽度减边框宽度 */
    width: calc(100% - 1px);
    height: calc(100% - 1px);
    top: 0px;
    left: 0px;
    border: 1px solid #000;
    pointer-events: none; /* 确保伪元素不会阻挡鼠标事件 */
  }
  .col_name {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
  }
  .title {
    background-color: rgb(247, 247, 247);
  }
}
</style>
