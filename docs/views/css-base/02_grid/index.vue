<template>
  <div class="page">
    <p><b>grid基础属性</b></p>
    <b>grid-template-columns：</b>
    <el-select v-model="columns" placeholder="请选择">
      <el-option v-for="k in columnsOpts" :key="k.value" :label="k.label" :value="k.value"></el-option>
    </el-select>
    <span class="detail">{{ columnsInfo }}</span>
    <br />
    <b>grid-template-rows：</b>
    <el-select v-model="rows" placeholder="请选择">
      <el-option v-for="k in rowsOpts" :key="k.value" :label="k.label" :value="k.value"></el-option>
    </el-select>
    <span class="detail">{{ rowsInfo }}</span>
    <br />
    <b>grid-gap：</b>
    <el-select v-model="gridGap" placeholder="请选择">
      <el-option v-for="k in gridGapOpts" :key="k.value" :label="k.label" :value="k.value"></el-option>
    </el-select>
    <span class="detail">{{ gridGapInfo }}</span>
    <br />
    <b>justify-items：</b>
    <el-select v-model="justifyItems" placeholder="请选择">
      <el-option v-for="k in justifyItemsOpts" :key="k.value" :label="k.label" :value="k.value"></el-option>
    </el-select>
    <span class="detail">{{ justifyItemsInfo }}</span>
    <br />
    <b>align-items：</b>
    <el-select v-model="alignItems" placeholder="请选择">
      <el-option v-for="k in alignItemsOpts" :key="k.value" :label="k.label" :value="k.value"></el-option>
    </el-select>
    <span class="detail">{{ alignItemsInfo }}</span>
    <br />
    <b>justify-content（水平）/align-content（垂直）：参数一致</b>
    <el-select v-model="justifyContent" placeholder="请选择">
      <el-option v-for="k in justifyContentOpts" :key="k.value" :label="k.label" :value="k.value"></el-option>
    </el-select>
    <span class="detail">{{ justifyContentInfo }}</span>
    <br />

    <div class="demo" :class="[columns, rows, gridGap, justifyItems, alignItems, justifyContent]">
      <div class="box" v-for="(item, index) in count" :key="index">{{ item }}</div>
    </div>

    <p></p>
    <b>特殊布局：元素的宽度固定，最大填充在行内(例如:元素宽度固定100px)</b>
    <div class="demo1">
      <div class="box1" v-for="(item, index) in count1" :key="index">{{ item }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'grid',
  data () {
    return {
      count: 6,
      count1: 10,
      columns: '',
      columnsOpts: [
        { detail: '', value: 'unset', label: '取消设置' },
        { detail: 'grid-template-columns: 200px 200px 200px;', value: 'column1', label: '固定值-绝对单位' },
        { detail: 'grid-template-columns: 33.33% 33.33% 33.33%;', value: 'column2', label: '固定值-百分比' },
        { detail: 'grid-template-columns: 1fr 2fr 1fr;(fr表示比例关系)', value: 'column3', label: '固定值-fr 关键字' },
        { detail: 'grid-template-columns: repeat(3, 33.33%);(简化写法：repeat(重复的次数, 所要重复的值))', value: 'column4', label: 'repeat简化' },
        { detail: 'grid-template-columns: repeat(auto-fill, 250px);（表示列宽是 250 px，但列的数量是不固定的，只要浏览器能够容纳得下，就可以放置元素，每一行（或每一列）容纳尽可能多的单元格。）', value: 'column5', label: 'auto-fill自动填充' },
        { detail: 'grid-template-columns: 1fr 1fr minmax(100px, 2fr);minmax()函数产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。', value: 'column6', label: 'minmax()' },
        { detail: 'grid-template-columns: 100px auto 100px;（auto关键字表示由浏览器自己决定长度。）', value: 'column7', label: 'auto 关键字' }
      ],
      columnsInfo: '',
      rows: '',
      rowsOpts: [
        { detail: '', value: 'unset', label: '取消设置' },
        { detail: 'grid-template-rows: 100px 100px;', value: 'row1', label: '固定值-绝对单位' },
        { detail: 'grid-template-rows: 33.33% 33.33%;', value: 'row2', label: '固定值-百分比' },
        { detail: 'grid-template-rows: 1fr 2fr;', value: 'row3', label: '固定值-fr 关键字' },
        { detail: 'grid-template-rows: repeat(2, 33.33%);', value: 'row4', label: 'repeat简化' },
        { detail: 'grid-template-rows: repeat(auto-fill, 100px);', value: 'row5', label: 'auto-fill自动填充' },
        { detail: 'grid-template-rows: minmax(100px, 2fr) 1fr;', value: 'row6', label: 'minmax()' },
        { detail: 'grid-template-rows: auto 100px;', value: 'row7', label: 'auto 关键字' }
      ],
      rowsInfo: '',
      gridGap: '',
      gridGapOpts: [
        { detail: '', value: 'unset', label: '取消设置' },
        { detail: 'grid-gap: 20px 20px;', value: 'gridGap1', label: '行间距和列间距' },
        { detail: 'grid-row-gap: 20px;', value: 'gridGap2', label: '行间距' },
        { detail: 'grid-column-gap: 20px;', value: 'gridGap3', label: '列间距' }
      ],
      gridGapInfo: '',
      justifyItems: '',
      justifyItemsOpts: [
        { detail: '', value: 'unset', label: '取消设置' },
        { detail: 'justify-items: start;', value: 'justifyItems1', label: '对齐单元格的起始边缘' },
        { detail: 'justify-items: end;', value: 'justifyItems2', label: '对齐单元格的结束边缘' },
        { detail: 'justify-items: center;', value: 'justifyItems3', label: '单元格内部居中' },
        { detail: 'justify-items: stretch;', value: 'justifyItems4', label: '拉伸，占满单元格的整个宽度（默认值）' }

      ],
      justifyItemsInfo: '',
      alignItems: '',
      alignItemsOpts: [
        { detail: '', value: 'unset', label: '取消设置' },
        { detail: 'align-items: start;', value: 'alignItems1', label: '对齐单元格的起始边缘' },
        { detail: 'align-items: end;', value: 'alignItems2', label: '对齐单元格的结束边缘' },
        { detail: 'align-items: center;', value: 'alignItems3', label: '单元格内部居中' },
        { detail: 'align-items: stretch;', value: 'alignItems4', label: '拉伸，占满单元格的整个宽度（默认值）' }

      ],
      alignItemsInfo: '',
      justifyContent: '',
      justifyContentOpts: [
        { detail: '', value: 'unset', label: '取消设置' },
        { detail: 'justify-content: start;', value: 'justifyContent1', label: '对齐单元格的起始边缘' },
        { detail: 'justify-content: end;', value: 'justifyContent2', label: '对齐单元格的结束边缘' },
        { detail: 'justify-content: center;', value: 'justifyContent3', label: '单元格内部居中' },
        { detail: 'justify-content: stretch;', value: 'justifyContent4', label: '拉伸，占满单元格的整个宽度（默认值）' },
        { detail: 'justify-content: space-between;', value: 'justifyContent5', label: '首尾对齐到边,中间均匀分配' },
        { detail: 'justify-content: space-around;', value: 'justifyContent6', label: '首尾间距一半,中间均匀分配' },
        { detail: 'justify-content: space-evenly;', value: 'justifyContent7', label: '完全均匀分配，包括首尾' }

      ],
      justifyContentInfo: ''
    }
  },
  watch: {
    columns: {
      immediate: true,
      deep: true,
      handler (newValue, oldValue) {
        this.columnsOpts.forEach(k => {
          if (k.value === newValue) {
            this.columnsInfo = k.detail
          }
        })
      }
    },
    rows: {
      immediate: true,
      deep: true,
      handler (newValue, oldValue) {
        this.rowsOpts.forEach(k => {
          if (k.value === newValue) {
            this.rowsInfo = k.detail
          }
        })
      }
    },
    gridGap: {
      immediate: true,
      deep: true,
      handler (newValue, oldValue) {
        this.gridGapOpts.forEach(k => {
          if (k.value === newValue) {
            this.gridGapInfo = k.detail
          }
        })
      }
    },
    justifyItems: {
      immediate: true,
      deep: true,
      handler (newValue, oldValue) {
        this.justifyItemsOpts.forEach(k => {
          if (k.value === newValue) {
            this.justifyItemsInfo = k.detail
          }
        })
      }
    },
    alignItems: {
      immediate: true,
      deep: true,
      handler (newValue, oldValue) {
        this.alignItemsOpts.forEach(k => {
          if (k.value === newValue) {
            this.alignItemsInfo = k.detail
          }
        })
      }
    },
    justifyContent: {
      immediate: true,
      deep: true,
      handler (newValue, oldValue) {
        this.justifyContentOpts.forEach(k => {
          if (k.value === newValue) {
            this.justifyContentInfo = k.detail
          }
        })
      }
    }

  }
}
</script>

<style lang="less" scoped>
.demo1 {
  width: 100%;
  height: 200px;
  box-sizing: border-box;
  border: 1px solid #000;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 10px 20px;
  grid-auto-rows: 50px; // 隐士网格的行高。多余的网络，超出demo1盒子高度了
  .box1 {
    background: pink;
    border: 1px solid #000;
    box-sizing: border-box;
    font-size: 50px;
    font-weight: bold;
  }
  :nth-child(even) {
    background: skyblue;
  }
}
.demo {
  width: 100%;
  height: 400px;
  box-sizing: border-box;
  border: 1px solid #000;
  margin-top: 20px;
  display: grid;
  .box {
    background: pink;
    border: 1px solid #000;
    box-sizing: border-box;
    font-size: 50px;
    font-weight: bold;
  }
  :nth-child(even) {
    background: skyblue;
  }
}
.column1 {
  grid-template-columns: 200px 200px 200px;
}
.column2 {
  grid-template-columns: 33.33% 33.33% 33.33%;
}
.column3 {
  grid-template-columns: 1fr 2fr 1fr;
}
.column4 {
  grid-template-columns: repeat(3, 33.33%);
}
.column5 {
  grid-template-columns: repeat(auto-fill, 250px);
}
.column6 {
  grid-template-columns: 1fr 1fr minmax(100px, 2fr);
}
.column7 {
  grid-template-columns: 100px auto 100px;
}
.row1 {
  grid-template-rows: 100px 100px;
}
.row2 {
  grid-template-rows: 33.33% 33.33%;
}
.row3 {
  grid-template-rows: 1fr 2fr;
}
.row4 {
  grid-template-rows: repeat(2, 33.33%);
}
.row5 {
  grid-template-rows: repeat(auto-fill, 100px);
}
.row6 {
  grid-template-rows: minmax(100px, 2fr) 1fr;
}
.row7 {
  grid-template-rows: auto 100px;
}
.gridGap1 {
  grid-gap: 20px 20px;
}
.gridGap2 {
  grid-row-gap: 20px;
}
.gridGap3 {
  grid-column-gap: 20px;
}
.justifyItems1 {
  justify-items: start;
}
.justifyItems2 {
  justify-items: end;
}
.justifyItems3 {
  justify-items: center;
}
.justifyItems4 {
  justify-items: stretch;
}
.alignItems1 {
  align-items: start;
}
.alignItems2 {
  align-items: end;
}
.alignItems3 {
  align-items: center;
}
.alignItems4 {
  align-items: stretch;
}
.justifyContent1 {
  justify-content: start;
}
.justifyContent2 {
  justify-content: end;
}
.justifyContent3 {
  justify-content: center;
}
.justifyContent4 {
  justify-content: stretch;
}
.justifyContent5 {
  justify-content: space-between;
}
.justifyContent6 {
  justify-content: space-around;
}
.justifyContent7 {
  justify-content: space-evenly;
}
</style>
