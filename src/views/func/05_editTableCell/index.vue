<template>
  <div class="content-wrapper">
    <div class="card-body">
      <el-table height="600px" :data="tableData" border stripe style="width: 100%">
        <el-table-column
          :show-overflow-tooltip="true"
          align="center"
          prop="enddate"
          label="第一列"
          width="250"
        >
          <template slot-scope="scope">
            <div
              @dblclick="changeEnddate(scope.$index, 'tag1', scope.row)"
              style="height: 40px; line-height: 40px"
            >
              <span v-show="!scope.row.is_show_tag1">{{ scope.row.tag1 }}</span>
              <el-input
                :ref="'enddateinput' + 'tag1' + '&' + scope.$index"
                @blur="switchShow(scope.$index, 'tag1')"
                clearable
                @keyup.enter.native="$event.target.blur"
                v-show="scope.row.is_show_tag1"
                size="mini"
                v-model="scope.row.tag1"
              ></el-input>
            </div>
          </template>
        </el-table-column>

        <el-table-column
          :show-overflow-tooltip="true"
          align="center"
          prop="enddate"
          label="第二列"
          width="250"
        >
          <template slot-scope="scope">
            <div
              @dblclick="changeEnddate(scope.$index, 'tag2', scope.row)"
              style="height: 40px; line-height: 40px"
            >
              <span v-show="!scope.row.is_show_tag2">{{ scope.row.tag2 }}</span>
              <el-input
                :ref="'enddateinput' + 'tag2' + '&' + scope.$index"
                @blur="switchShow(scope.$index, 'tag2')"
                clearable
                @keyup.enter.native="$event.target.blur"
                v-show="scope.row.is_show_tag2"
                size="mini"
                v-model="scope.row.tag2"
              ></el-input>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'editTable',
  data () {
    return {
      tableData: [{ tag1: '可修改的标签1', tag2: '可修改的标签2', is_show_tag1: false }, { tag1: '可修改的标签3', tag2: '可修改的标签4', is_show_tag1: false }]
    }
  },

  methods: {
    // 切换input框的显示状态
    switchShow (index, tag, tmp_this = this) {
      console.log(index, tag, '---index, tag, tmp_this = this')
      // 因为涉及到调用不同名称的变量, 不清楚怎么写, 只能先用switch case解决
      switch (tag) {
        case 'tag1':
          tmp_this.tableData[index].is_show_tag1 = !tmp_this.tableData[index].is_show_tag1
          break
        case 'tag2':
          tmp_this.tableData[index].is_show_tag2 = !tmp_this.tableData[index].is_show_tag2
          break
        // ...
      }
      tmp_this.tableData = [...tmp_this.tableData]// 因为我table绑定的表格数据是后接过来赋值的，所以需要这步操作，如果没有1、2步骤这个可以不加。后面也一样
    },

    // 显示input框, 使光标焦点当前input框
    changeEnddate (index, tag, rowdata) {
      console.log(index, tag, rowdata, '--index, tag, rowdata')
      this.switchShow(index, tag, this)
      // console.log('enddateinput' + index, typeof 'enddateinput' + index);
      // console.log(rowdata, typeof rowdata);
      setTimeout(() => { // 定时器是为了避免没有获取到dom的情况报错，所以象征性的给1毫秒让他缓冲
        this.$refs['enddateinput' + tag + '&' + index].focus()
        // el-input的autofocus失效，所以用这个方法。对应在template里的refs绑定值
      }, 1)
    }

  },
  destroyed () {
    console.log('关闭前操作-----------------')
  }
}
</script>
