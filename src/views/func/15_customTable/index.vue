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
import { exportExcelByAOA, createAOA } from './utils/exportExcel'
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
        todo1: 123
      },
      rootRows: [
        {
          cols: [{
            label: '全域土地综合整治所涉永久基本农田布局调整事项审查情况汇总表',
            title: true,
            fontWeight: 'bold',
            span: 24
          }]
        },
        {
          cols: [
            ...CONSTANT.LABELC1,
            {
              span: 22,
              height: CONSTANT.BASE_HEIGHT * 4 + 'px',
              slotName: 'row1_right'
            }
          ]
        },
        {
          cols: [
            ...CONSTANT.LABELC2,
            {
              span: 22,
              height: CONSTANT.BASE_HEIGHT * 5 + 'px',
              slotName: 'row2_right'
            }
          ]
        },
        {
          cols: [
            ...CONSTANT.LABELC3,
            {
              span: 22,
              height: CONSTANT.BASE_HEIGHT * 5 + 'px',
              slotName: 'row3_right'
            }
          ]
        },
        {
          cols: [
            ...CONSTANT.LABELC4,
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
        { cols: [...CONSTANT.LABEL01] },
        { cols: [...CONSTANT.LABEL02] },
        { cols: [...CONSTANT.LABEL03, ...CONSTANT.LABEL04] },
        { cols: [...CONSTANT.LABEL05, ...CONSTANT.LABEL06] }
      ],
      row2_right: [
        { cols: [...CONSTANT.LABEL07, ...CONSTANT.LABEL08, ...CONSTANT.LABEL09, ...CONSTANT.LABEL10, ...CONSTANT.LABEL11] },
        { cols: [...CONSTANT.LABEL12, ...CONSTANT.LABEL55, ...CONSTANT.LABEL13, ...CONSTANT.LABEL14, ...CONSTANT.LABEL15, ...CONSTANT.LABEL16, ...CONSTANT.LABEL17, ...CONSTANT.LABEL18, ...CONSTANT.LABEL19] },
        {
          cols: [
            { span: 12, height: CONSTANT.BASE_HEIGHT * 2 + 'px', slotName: 'row2_right_3_1' },
            { span: 6, height: CONSTANT.BASE_HEIGHT * 2 + 'px', slotName: 'row2_right_3_2' },
            { span: 6, height: CONSTANT.BASE_HEIGHT * 2 + 'px', slotName: 'row2_right_3_3' }
          ]
        }
      ],
      row2_right_3_1: [
        { cols: [...CONSTANT.LABEL20, ...CONSTANT.LABEL21, ...CONSTANT.LABEL22, ...CONSTANT.LABEL23, ...CONSTANT.LABEL24, ...CONSTANT.LABEL25] }
      ],
      row2_right_3_2: [
        { cols: [...CONSTANT.LABEL57, ...CONSTANT.LABEL58, ...CONSTANT.LABEL26] }
      ],
      row2_right_3_3: [
        { cols: [...CONSTANT.LABEL56, ...CONSTANT.LABEL27, ...CONSTANT.LABEL59] }
      ],
      row3_right: [
        {
          cols: [...CONSTANT.LABEL28, ...CONSTANT.LABEL60, ...CONSTANT.LABEL29, ...CONSTANT.LABEL30, ...CONSTANT.LABEL31, ...CONSTANT.LABEL32, ...CONSTANT.LABEL33, ...CONSTANT.LABEL34, ...CONSTANT.LABEL35, ...CONSTANT.LABEL36, ...CONSTANT.LABEL37]
        },
        { cols: [...CONSTANT.LABEL38, ...CONSTANT.LABEL39, ...CONSTANT.LABEL40, ...CONSTANT.LABEL41] },
        {
          cols: [{ span: 12, height: CONSTANT.BASE_HEIGHT * 2 + 'px', slotName: 'row3_right_3_1' }, { span: 6, height: CONSTANT.BASE_HEIGHT * 2 + 'px', slotName: 'row3_right_3_2' }, { span: 6, height: CONSTANT.BASE_HEIGHT * 2 + 'px', slotName: 'row3_right_3_3' }
          ]
        }
      ],
      row3_right_3_1: [
        { cols: [...CONSTANT.LABEL42, ...CONSTANT.LABEL43, ...CONSTANT.LABEL44, ...CONSTANT.LABEL45, ...CONSTANT.LABEL46, ...CONSTANT.LABEL47] }
      ],
      row3_right_3_2: [
        { cols: [...CONSTANT.LABEL61, ...CONSTANT.LABEL62, ...CONSTANT.LABEL48] }
      ],
      row3_right_3_3: [
        { cols: [...CONSTANT.LABEL49, ...CONSTANT.LABEL63, ...CONSTANT.LABEL64] }
      ],
      row4_right: [
        { cols: [...CONSTANT.LABEL50, ...CONSTANT.LABEL51, ...CONSTANT.LABEL52, ...CONSTANT.LABEL53, ...CONSTANT.LABEL54] }
      ]
    }
  },
  methods: {
    tabClick (item) {
      if (item.value === 'first') {
        this.init()
      }
    },
    async exportExcel () {
      await this.init()
      const aoa = []
      const marge = []
      const data = [
        ['R1'],
        ['R2'],
        ['C1', '01'],
        ['C1', '02'],
        ['C1', '03', '04'],
        ['C1', '05', '06'],
        ['C2', '07', '08', '09', '10', '11'],
        ['C2', '12', '55', '13', '14', '15'],
        ['C2', '12', '16', '17', '18', '19'],
        ['C2', '20', '21', '22', '57', '56', '27'],
        ['C2', '23', '24', '25', '58', '26', '56', '59'],
        ['C3', '28', '60', '29', '30', '31', '32'],
        ['C3', '28', '33', '34', '35', '36', '37'],
        ['C3', '38', '39', '40', '41'],
        ['C3', '42', '43', '44', '61', '49', '63'],
        ['C3', '45', '46', '47', '62', '48', '49', '64'],
        ['C4', '50'],
        ['C4', '51'],
        ['C4', '52'],
        ['C4', '53'],
        ['C4', '54']
      ]
      const t2 = ['20', '21', '22', '23', '24', '25', '42', '43', '44', '45', '46', '47']
      const t4 = ['27', '59', '56', '57', '58', '26', '63', '49', '64', '61', '62', '48']
      const countObj = {}
      data.map((arrItem, index) => {
        const tempAOA = []
        arrItem.map(key => {
          countObj[key] ? countObj[key]++ : countObj[key] = 1
          CONSTANT['LABEL' + key].map(item => {
            let count = item.span
            if (t2.indexOf(key) !== -1) {
              count = count / 2
            } else if (t4.indexOf(key) !== -1) {
              count = count / 4
            }
            for (let num = 0; num < count; num++) {
              if (num === 0 && countObj[key] === 1) {
                let str = ''
                if (item.mult) {
                  item.label && (str += item.label)
                  item.label && (str += '\n ')
                  item.mult.map(multItem => {
                    multItem.before && (str += multItem.before)
                    this.form[multItem.field] && (str += this.form[multItem.field])
                    multItem.after && (str += multItem.after)
                  })
                  tempAOA.push(str)
                } else {
                  tempAOA.push(item.byname ? item.label + item.byname : item.label || this.form[item.field])
                }
                if (item.height) {
                  const colMarge = Math.floor(Number(item.height.slice(0, -2)) / (CONSTANT.BASE_HEIGHT)) - 1
                  marge.push({ s: { r: index, c: tempAOA.length - 1 }, e: { r: index + colMarge, c: tempAOA.length - 1 + count - 1 } })
                } else {
                  marge.push({ s: { r: index, c: tempAOA.length - 1 }, e: { r: index, c: tempAOA.length - 1 + count - 1 } })
                }
              } else {
                tempAOA.push(null)
              }
            }
          })
        })
        aoa.push(tempAOA)
      })
      const footer = [
        [null],
        ['说明'],
        ['1.涉及的面积单位均为公顷，现状地类栏、坡度栏、连片程度栏均是指具体对应面积。'],
        ['2.调出永久基本农田面积比例为调出永久基本农田面积/整治区域原永久基本农田面积，新增永久基本农田面积比例为（调入永久基本农田面积-调出永久基本农田面积）/调出永久基本农田面积。'],
        ['3.平均单个图斑面积为总面积/图斑数目，集中连片度为（调入永久基本农田单个图斑面积-调出永久基本农田单个图斑面积）/调出永久基本农田单个图斑面积。'],
        ['4. “坡度”栏中涉及的15°-25°不包含15°、包含25°，“连片程度”栏中涉及的5-10亩不包含5亩、包含10亩，10-20亩不包含10亩、包含20亩。'],
        ['5.调出地块平均质量等别为永久基本农田数据库中对应地块质量等别加权平均值，调入地块平均质量等别为整治之后的整个调入地块对应质量等别加权平均值。']
      ]
      footer.map(k => {
        aoa.push(k)
        marge.push({ s: { r: aoa.length, c: 0 }, e: { r: aoa.length, c: 25 } })
      })
      console.log('aoa:', aoa)
      console.log('marge:', marge)
      const cols = this.getCols()
      // 无样式，无列宽，无文件名称设置
      exportExcelByAOA(aoa, marge, true, cols)
    },
    getCols () {
      let list = []
      // 每列的列宽
      for (let i = 0; i < 26; i++) {
        list.push({
          wpx: 60
        })
      }
      return list
    },
    btnClick (item) {
      this[item.fun]()
    },
    async save () {
      const res = await saveData(this.form)
      if (res.status === 200) {
        this.$message.success('保存成功')
        this.init()
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
      const jsscBjId = await getParamByUrl('jsscBjId').catch(e => console.error(e))
      await this.getData(jsscBjId)
    }
  },
  mounted () {
    this.init()
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
