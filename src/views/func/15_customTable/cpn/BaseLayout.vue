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
          <template v-if="!col.type">
            <div>{{ col.label || col.name }}</div>
            <div>{{ col.byname }}</div>
          </template>
          <template v-if="col.type === 'value'">
            <div>
              {{ form[col.field] ? (col.append ? form[col.field] + '' + col.append : form[col.field]) : '' }}
            </div>
          </template>
          <template v-if="col.type === 'mult'">
            <div>{{ col.label || col.name }}</div>
            <div class="mult_wrap">
              <div v-for="(item, index) in col.mult" :key="index" class="mult">
                <span>{{ item.before }}</span>
                <span v-if="item.type === 'value'">{{ form[item.field] || '____' }}</span>
                <el-input
                  v-if="item.type === 'input'"
                  size="mini"
                  v-model="form[item.field]"
                  :style="{ width: item.width }"
                ></el-input>
                <el-radio-group v-if="item.type === 'radio'" v-model="form[item.field]">
                  <el-radio label="是">是</el-radio>
                  <el-radio label="否">否</el-radio>
                </el-radio-group>
                <span>{{ item.after }}</span>
              </div>
            </div>
          </template>
          <template v-if="col.type === 'input'">
            <el-input size="mini" v-model="form[col.field]">
              <template slot="append" v-if="col.append">{{ col.append }}</template>
            </el-input>
          </template>
          <template v-if="col.type === 'radio'">
            <el-radio-group v-model="form[col.field]">
              <el-radio label="是">是</el-radio>
              <el-radio label="否">否</el-radio>
            </el-radio-group>
          </template>
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
    },
    form: {
      type: Object,
      default: () => { }
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
.base_layout {
  height: 100%;
  font-size: 14px;
  box-sizing: border-box;
}
.base_col {
  height: 60px;
  box-sizing: border-box;
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
    box-sizing: border-box;
    padding: 0 3px;
    :deep(.el-input-group__append) {
      padding: 0 5px;
    }
    .mult_wrap {
      display: flex;
      .mult {
        display: flex;
        align-items: center;
        span {
          padding: 0 5px;
        }
      }
    }
  }
  .title {
    background-color: rgb(247, 247, 247);
  }
}
</style>
