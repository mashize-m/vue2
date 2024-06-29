<template>
  <div>
    <div class="page">
      <el-row v-for="(row1, index) in rows1" :key="index">
        <el-col
          :span="col1.span"
          v-for="(col1, col1Index) in row1.cols1"
          :key="col1Index"
          :style="{ height: col1.height }"
          class="base_col border_col"
        >
          <el-row v-for="(row2, row2Index) in col1.rows2" :key="row2Index">
            <el-col
              :span="col2.span"
              v-for="(col2, col2Index) in row2.cols2"
              :key="col2Index"
              :style="{ height: col2.height }"
              class="base_col border_col"
            >
              <!-- 这是基础的组件 -->
              <!-- 边框只在最后一层的col上添加 -->
              <el-row v-for="(row3, row3Index) in col2.rows3" :key="row3Index">
                <el-col
                  :span="col3.span"
                  v-for="(col3, col3Index) in row3.cols3"
                  :key="col3Index"
                  :style="{ height: col3.height }"
                  class="base_col border_col"
                ></el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
const BASE_HEIGHT = 40
export default {
  name: 'customTable',
  data () {
    return {
      rows1: [
        {
          name: '1',
          cols1: [
            {
              name: '1-1',
              span: 4,
              height: BASE_HEIGHT * 3 + 'px'// 合并单元格，这里的高度是 40 * 3
              // -------------------最底层必须是col就可以
              // rows2: [
              //   {
              //     name: '1-1-1',
              //     cols2: [
              //       {
              //         name: '1-1-1-1',
              //         span: 24,
              //         height: BASE_HEIGHT * 3 + 'px' // 合并单元格，这里的高度是 40 * 3
              //       }
              //     ]
              //   }
              // ]
            },
            {
              name: '1-2',
              span: 20,
              height: BASE_HEIGHT * 3 + 'px',
              rows2: [
                {
                  name: '1-2-1',
                  cols2: [
                    { name: '1-2-1-1', span: 12 },
                    { name: '1-2-1-2', span: 12 }
                  ]
                },
                {
                  name: '1-2-2',
                  cols2: [
                    { name: '1-2-2-1', span: 12 },
                    { name: '1-2-2-2', span: 12 }
                  ]
                },
                {
                  name: '1-2-3',
                  cols2: [
                    {
                      name: '1-2-3-1',
                      span: 12,
                      rows3: [
                        {
                          name: '1-2-3-1-1',
                          span: 24,
                          cols3: [
                            {
                              name: '1-2-3-1-1',
                              span: 12
                            },
                            {
                              name: '1-2-3-1-2',
                              span: 12
                            }
                          ]
                        }
                      ]

                    },
                    { name: '1-2-3-2', span: 12 }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.page {
  width: 800px;
  height: 100%;
  box-sizing: border-box;
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
}
</style>
