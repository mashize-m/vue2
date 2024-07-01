<template>
  <div>
    <div class="page">
      <TabsCpn :labels="labels" :labelBtns="labelBtns" @tabClick="tabClick" @btnClick="btnClick">
        <template #first>
          <BaseLayout :rows="rootRows" :form="form">
            <template slot="row1_right">
              <BaseLayout :rows="row1_right" :form="form"></BaseLayout>
            </template>
            <template slot="row2_right">
              <BaseLayout :rows="row2_right" :form="form">
                <template slot="row2_right_3_1">
                  <BaseLayout :rows="row2_right_3_1" :form="form"></BaseLayout>
                </template>
                <template slot="row2_right_3_2">
                  <BaseLayout :rows="row2_right_3_2" :form="form"></BaseLayout>
                </template>
                <template slot="row2_right_3_3">
                  <BaseLayout :rows="row2_right_3_3" :form="form"></BaseLayout>
                </template>
              </BaseLayout>
            </template>
            <template slot="row3_right">
              <BaseLayout :rows="row3_right" :form="form">
                <template slot="row3_right_3_1">
                  <BaseLayout :rows="row3_right_3_1" :form="form"></BaseLayout>
                </template>
                <template slot="row3_right_3_2">
                  <BaseLayout :rows="row3_right_3_2" :form="form"></BaseLayout>
                </template>
                <template slot="row3_right_3_3">
                  <BaseLayout :rows="row3_right_3_3" :form="form"></BaseLayout>
                </template>
              </BaseLayout>
            </template>
            <template slot="row4_right">
              <BaseLayout :rows="row4_right" :form="form"></BaseLayout>
            </template>
          </BaseLayout>
        </template>
      </TabsCpn>
    </div>
  </div>
</template>

<script>
import BaseLayout from './cpn/BaseLayout.vue'
import TabsCpn from './cpn/TabsCpn.vue'
import { queryData, saveData } from './api'
import CONSTANT from './constant.js'
import { getParamByUrl } from './utils'
export default {
  name: 'customTable',
  components: {
    BaseLayout,
    TabsCpn
  },
  data () {
    return {
      labels: [
        { label: '审查结果', value: 'first' },
        { label: '图斑位置', value: 'second' }
      ],
      labelBtns: [
        { btn: '保存', fun: 'save' },
        { btn: '导出表格', fun: 'exportExcel' }
      ],
      form: {
      },
      rootRows: [
        {
          cols: [
            {
              name: '全域土地综合整治所涉永久基本农田布局调整事项审查情况汇总表',
              title: true,
              fontWeight: 'bold',
              span: 24
            }
          ]
        },
        {
          cols: [
            {
              name: '整治项目',
              byname: '基本信息',
              title: true,
              span: 2,
              height: CONSTANT.BASE_HEIGHT * 4 + 'px'// 合并单元格，这里的高度是 40 * 3
            },
            {
              span: 22,
              height: CONSTANT.BASE_HEIGHT * 4 + 'px',
              slotName: 'row1_right'
            }
          ]
        },
        {
          cols: [
            {
              name: '调出永久',
              byname: '基本农田信息',
              title: true,
              span: 2,
              height: CONSTANT.BASE_HEIGHT * 5 + 'px'// 合并单元格，这里的高度是 40 * 3
            },
            {
              span: 22,
              height: CONSTANT.BASE_HEIGHT * 5 + 'px',
              slotName: 'row2_right'
            }
          ]
        },
        {
          cols: [
            {
              name: '调入永久',
              byname: '基本农田信息',
              title: true,
              span: 2,
              height: CONSTANT.BASE_HEIGHT * 5 + 'px'// 合并单元格，这里的高度是 40 * 3
            },
            {
              span: 22,
              height: CONSTANT.BASE_HEIGHT * 5 + 'px',
              slotName: 'row3_right'
            }
          ]
        },
        {
          cols: [
            {
              name: '审查结果',
              title: true,
              span: 2,
              height: CONSTANT.BASE_HEIGHT * 6 + 'px'// 合并单元格，这里的高度是 40 * 3
            },
            {
              span: 22,
              height: CONSTANT.BASE_HEIGHT * 6 + 'px',
              slotName: 'row4_right'
            }
          ]
        },
        {
          cols: [
            {
              span: 24,
              height: CONSTANT.BASE_HEIGHT * 4 + 'px',
              align: 'left',
              description: [
                '说明:',
                '1.涉及的面积单位均为公顷，现状地类栏、坡度栏、连片程度栏均是指具体对应面积。',
                '2.调出永久基本农田面积比例为调出永久基本农田面积/整治区域原永久基本农田面积，新增永久基本农田面积比例为（调入永久基本农田面积-调出永久基本农田面积）/调出永久',
                '基本农田面积。',
                '3.平均单个图斑面积为总面积/图斑数目，集中连片度为（调入永久基本农田单个图斑面积-调出永久基本农田单个图斑面积）/调出永久基本农田单个图斑面积。',
                '4. “坡度”栏中涉及的15°-25°不包含15°、包含25°，“连片程度”栏中涉及的5-10亩不包含5亩、包含10亩，10-20亩不包含10亩、包含20亩。',
                '5.调出地块平均质量等别为永久基本农田数据库中对应地块质量等别加权平均值，调入地块平均质量等别为整治之后的整个调入地块对应质量等别加权平均值。'
              ]
            }
          ]
        }
      ],
      row1_right: [
        { cols: [...CONSTANT.LABEL1] },
        { cols: [...CONSTANT.LABEL2] },
        { cols: [...CONSTANT.LABEL3, ...CONSTANT.LABEL4] },
        { cols: [...CONSTANT.LABEL5, ...CONSTANT.LABEL6] }
      ],
      row2_right: [
        { cols: [...CONSTANT.LABEL7, ...CONSTANT.LABEL8, ...CONSTANT.LABEL9, ...CONSTANT.LABEL10, ...CONSTANT.LABEL11] },
        { cols: [...CONSTANT.LABEL12, ...CONSTANT.LABEL13, ...CONSTANT.LABEL14, ...CONSTANT.LABEL15, ...CONSTANT.LABEL16, ...CONSTANT.LABEL17, ...CONSTANT.LABEL18, ...CONSTANT.LABEL19] },
        {
          cols: [
            { span: 12, height: CONSTANT.BASE_HEIGHT * 2 + 'px', slotName: 'row2_right_3_1' },
            { span: 6, height: CONSTANT.BASE_HEIGHT * 2 + 'px', slotName: 'row2_right_3_2' },
            { name: '≤15°', span: 6, height: CONSTANT.BASE_HEIGHT * 2 + 'px', slotName: 'row2_right_3_3' }
          ]
        }
      ],
      row2_right_3_1: [
        { cols: [...CONSTANT.LABEL20, ...CONSTANT.LABEL21, CONSTANT.LABEL22[0], ...CONSTANT.LABEL23, ...CONSTANT.LABEL24, CONSTANT.LABEL25[0]] }
      ],
      row2_right_3_2: [
        { cols: [CONSTANT.LABEL22[1], CONSTANT.LABEL25[1], ...CONSTANT.LABEL26] }
      ],
      row2_right_3_3: [
        { cols: [...CONSTANT.LABEL27] }
      ],
      row3_right: [
        {
          cols: [...CONSTANT.LABEL28, ...CONSTANT.LABEL29, ...CONSTANT.LABEL30, ...CONSTANT.LABEL31, ...CONSTANT.LABEL32, ...CONSTANT.LABEL33, ...CONSTANT.LABEL34, ...CONSTANT.LABEL35, ...CONSTANT.LABEL36, ...CONSTANT.LABEL37]
        },
        { cols: [...CONSTANT.LABEL38, ...CONSTANT.LABEL39, ...CONSTANT.LABEL40, ...CONSTANT.LABEL41] },
        {
          cols: [{ span: 12, height: CONSTANT.BASE_HEIGHT * 2 + 'px', slotName: 'row3_right_3_1' }, { span: 6, height: CONSTANT.BASE_HEIGHT * 2 + 'px', slotName: 'row3_right_3_2' }, { name: '≤15°', span: 6, height: CONSTANT.BASE_HEIGHT * 2 + 'px', slotName: 'row3_right_3_3' }
          ]
        }
      ],
      row3_right_3_1: [
        { cols: [...CONSTANT.LABEL42, ...CONSTANT.LABEL43, CONSTANT.LABEL44[0], ...CONSTANT.LABEL45, ...CONSTANT.LABEL46, CONSTANT.LABEL47[0]] }
      ],
      row3_right_3_2: [
        { cols: [CONSTANT.LABEL44[1], CONSTANT.LABEL47[1], ...CONSTANT.LABEL48] }
      ],
      row3_right_3_3: [
        { cols: [...CONSTANT.LABEL49] }
      ],
      row4_right: [
        { cols: [...CONSTANT.LABEL50, ...CONSTANT.LABEL51, ...CONSTANT.LABEL52, ...CONSTANT.LABEL53, ...CONSTANT.LABEL54] }
      ]
    }
  },
  methods: {
    tabClick (item) {
      console.log('item:', item)
      if (item.value === 'first') {
        this.init().catch(e => console.error(e))
      }
    },
    exportExcel () {

    },
    btnClick (item) {
      console.log('item:', item)
      this[item.fun]()
    },
    async save () {
      const res = await saveData(this.form)
      console.log('res:', res)
      if (res.status === 200) {
        res && this.$message.success('保存成功')
        this.init().catch(e => console.error(e))
      } else {
        this.$message.error('保存失败')
      }
    },
    setData (sourceData, targetData) {
      for (const key in sourceData) {
        if (Object.hasOwnProperty.call(sourceData, key)) {
          this.$set(targetData, key, sourceData[key])
        }
      }
    },
    async getData (jsscBjId) {
      const res = await queryData({ jsscBjId })
      this.setData(res.data, this.form)
      console.log(' this.form:', this.form)
    },

    async init () {
      const jsscBjId = await getParamByUrl('jsscBjId', false).catch(e => console.error(e))
      await this.getData(jsscBjId)
    }
  },
  mounted () {
    this.init().catch(e => console.error(e))
  }
}
</script>

<style lang="less" scoped>
.page {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 10px;
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
