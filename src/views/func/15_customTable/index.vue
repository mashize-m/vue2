<template>
  <div>
    <div class="page">
      <BaseLayout :rows="rootRows">
        <template slot="row1_right">
          <BaseLayout :rows="row1_right"></BaseLayout>
        </template>
        <template slot="row2_right">
          <BaseLayout :rows="row2_right">
            <template slot="row2_right_3_1">
              <BaseLayout :rows="row2_right_3_1"></BaseLayout>
            </template>
            <template slot="row2_right_3_2">
              <BaseLayout :rows="row2_right_3_2"></BaseLayout>
            </template>
            <template slot="row2_right_3_3">
              <BaseLayout :rows="row2_right_3_3"></BaseLayout>
            </template>
          </BaseLayout>
        </template>
        <template slot="row3_right">
          <BaseLayout :rows="row3_right">
            <template slot="row3_right_3_1">
              <BaseLayout :rows="row3_right_3_1"></BaseLayout>
            </template>
            <template slot="row3_right_3_2">
              <BaseLayout :rows="row3_right_3_2"></BaseLayout>
            </template>
            <template slot="row3_right_3_3">
              <BaseLayout :rows="row3_right_3_3"></BaseLayout>
            </template>
          </BaseLayout>
        </template>
        <template slot="row4_right">
          <BaseLayout :rows="row4_right"></BaseLayout>
        </template>
      </BaseLayout>
    </div>
  </div>
</template>

<script>
import BaseLayout from './cpn/BaseLayout.vue'
const BASE_HEIGHT = 40
export default {
  name: 'customTable',
  components: {
    BaseLayout
  },
  data () {
    return {
      // rows1: [
      //   {
      //     name: '1',
      //     cols1: [
      //       {
      //         name: '1-1',
      //         span: 4,
      //         height: BASE_HEIGHT * 3 + 'px'// 合并单元格，这里的高度是 40 * 3
      //       },
      //       {
      //         name: '1-2',
      //         span: 20,
      //         height: BASE_HEIGHT * 3 + 'px',
      //         rows2: [
      //           {
      //             name: '1-2-1',
      //             cols2: [
      //               { name: '1-2-1-1', span: 12 },
      //               { name: '1-2-1-2', span: 12 }
      //             ]
      //           },
      //           {
      //             name: '1-2-2',
      //             cols2: [
      //               { name: '1-2-2-1', span: 12 },
      //               { name: '1-2-2-2', span: 12 }
      //             ]
      //           },
      //           {
      //             name: '1-2-3',
      //             cols2: [
      //               {
      //                 name: '1-2-3-1',
      //                 span: 12,
      //                 rows3: [
      //                   {
      //                     name: '1-2-3-1-1',
      //                     span: 24,
      //                     cols3: [
      //                       {
      //                         name: '1-2-3-1-1',
      //                         span: 12
      //                       },
      //                       {
      //                         name: '1-2-3-1-2',
      //                         span: 12
      //                       }
      //                     ]
      //                   }
      //                 ]

      //               },
      //               { name: '1-2-3-2', span: 12 }
      //             ]
      //           }
      //         ]
      //       }
      //     ]
      //   }
      // ],
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
              span: 4,
              height: BASE_HEIGHT * 4 + 'px'// 合并单元格，这里的高度是 40 * 3
            },
            {
              span: 20,
              height: BASE_HEIGHT * 4 + 'px',
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
              span: 4,
              height: BASE_HEIGHT * 5 + 'px'// 合并单元格，这里的高度是 40 * 3
            },
            {
              span: 20,
              height: BASE_HEIGHT * 5 + 'px',
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
              span: 4,
              height: BASE_HEIGHT * 5 + 'px'// 合并单元格，这里的高度是 40 * 3
            },
            {
              span: 20,
              height: BASE_HEIGHT * 5 + 'px',
              slotName: 'row3_right'
            }
          ]
        },
        {
          cols: [
            {
              name: '审查结果',
              title: true,
              span: 4,
              height: BASE_HEIGHT * 8 + 'px'// 合并单元格，这里的高度是 40 * 3
            },
            {
              span: 20,
              height: BASE_HEIGHT * 8 + 'px',
              slotName: 'row4_right'
            }
          ]
        },
        {
          cols: [
            {
              span: 24,
              height: BASE_HEIGHT * 5 + 'px',
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
        {
          cols: [
            { name: '整治项目名称', title: true, span: 12 },
            { name: 'value-1', span: 12 }
          ]
        },
        {
          cols: [
            { name: '所含乡镇名称', title: true, span: 12 },
            { name: 'value-2', span: 12 }
          ]
        },
        {
          cols: [
            {
              name: '是否涉及永久基本农田布局调整',
              title: true,
              span: 6
            },
            {
              name: 'value-3',
              span: 3
            },
            {
              name: '（如为否，后面表格不必填写）',
              span: 3
            },
            {
              name: '是否编制永久基本农田布局调整方案',
              title: true,
              span: 6
            },
            {
              name: 'value-4',
              span: 6
            }
          ]
        },
        {
          cols: [
            {
              name: '整治区域原永久基本农田总面积',
              title: true,
              span: 6
            },
            {
              name: 'value-5',
              span: 6
            },
            {
              name: '计划提升耕地质量等',
              title: true,
              span: 6
            },
            {
              name: 'value-6',
              span: 6
            }
          ]
        }
      ],
      row2_right: [
        {
          cols: [
            {
              name: '总面积',
              title: true,
              span: 2
            },
            {
              name: 'value-7',
              span: 4
            },
            {
              name: '调出面积比例',
              title: true,
              span: 2
            },
            {
              name: 'value-8',
              span: 2
            },
            {
              name: '平均质量等别',
              title: true,
              span: 2
            },
            {
              name: 'value-9',
              span: 2
            },
            {
              name: '图斑数目',
              title: true,
              span: 2
            },
            {
              name: 'value-10',
              span: 2
            },
            {
              name: '平均单个图斑面积',
              title: true,
              span: 4
            },
            {
              name: 'value-11',
              span: 2
            }
          ]
        },
        {
          cols: [
            {
              name: '现状地类',
              height: BASE_HEIGHT * 2 + 'px',
              title: true,
              span: 2
            },
            {
              name: '耕地面积',
              title: true,
              span: 2
            },
            {
              name: 'value-12',
              span: 4
            },
            {
              name: '其中，水田',
              title: true,
              span: 4
            },
            {
              name: 'value-13',
              span: 2
            },
            {
              name: '水浇地',
              title: true,
              span: 2
            },
            {
              name: 'value-14',
              span: 2
            },
            {
              name: '旱地',
              title: true,
              span: 4
            },
            {
              name: 'value-15',
              span: 2
            },
            {
              name: '非耕地面积',
              title: true,
              span: 2
            },
            {
              name: 'value-16',
              span: 4
            },
            {
              name: '其中，非耕农用地',
              title: true,
              span: 4
            },
            {
              name: 'value-17',
              span: 2
            },
            {
              name: '建设用地',
              title: true,
              span: 2
            },
            {
              name: 'value-18',
              span: 2
            },
            {
              name: '未利用地',
              title: true,
              span: 4
            },
            {
              name: 'value-19',
              span: 2
            }
          ]
        },
        {
          cols: [
            {
              span: 12,
              height: BASE_HEIGHT * 2 + 'px',
              slotName: 'row2_right_3_1'
            },
            {
              span: 6,
              height: BASE_HEIGHT * 2 + 'px',
              slotName: 'row2_right_3_2'
            },
            {
              name: '≤15°',
              span: 6,
              height: BASE_HEIGHT * 2 + 'px',
              slotName: 'row2_right_3_3'
            }

          ]
        }
      ],
      row2_right_3_1: [
        {
          cols: [
            {
              name: '坡度',
              title: true,
              span: 4
            },
            {
              name: '≤15°',
              title: true,
              span: 4
            },
            {
              name: 'value-20',
              span: 4
            },
            {
              name: '15°～25°',
              title: true,
              span: 4
            },
            {
              name: 'value-21',
              span: 4
            },
            {
              name: '25°以上',
              title: true,
              span: 4
            },
            {
              name: '连片程度',
              title: true,
              span: 4
            },
            {
              name: '≤5亩°',
              title: true,
              span: 4
            },
            {
              name: 'value-22',
              span: 4
            },
            {
              name: '5-10亩',
              title: true,
              span: 4
            },
            {
              name: 'value-23',
              span: 4
            },
            {
              name: '10-20亩',
              title: true,
              span: 4
            }
          ]
        }
      ],
      row2_right_3_2: [
        {
          cols: [
            {
              name: 'value-24',
              span: 24
            },
            {
              name: 'value-25',
              span: 8
            },
            {
              name: '20亩以上',
              title: true,
              span: 8
            },
            {
              name: 'value-26',
              span: 8
            }
          ]
        }
      ],
      row2_right_3_3: [
        {
          cols: [
            {
              name: '是否含有已建高标准农田',
              height: BASE_HEIGHT * 2 + 'px',
              title: true,
              span: 16
            },
            {
              name: 'value-27',
              span: 8
            },
            {
              name: 'value-28',
              span: 8
            }
          ]
        }
      ],
      row3_right: [
        {
          cols: [
            {
              name: '现状地类',
              height: BASE_HEIGHT * 2 + 'px',
              title: true,
              span: 2
            },
            {
              name: '耕地面积',
              title: true,
              span: 2
            },
            {
              name: 'value-29',
              span: 2
            },
            {
              name: '其中，水田',
              title: true,
              span: 2
            },
            {
              name: 'value-30',
              span: 2
            },
            {
              name: '水浇地',
              title: true,
              span: 2
            },
            {
              name: 'value-31',
              span: 2
            },
            {
              name: '旱地',
              title: true,
              span: 2
            },
            {
              name: 'value-32',
              span: 2
            },
            {
              name: '是否有实施耕地提质改造',
              title: true,
              span: 4
            },
            {
              name: 'value-33',
              span: 2
            },
            {
              name: '非耕地面积',
              title: true,
              span: 2
            },
            {
              name: 'value-34',
              span: 2
            },
            {
              name: '其中，非耕农用地',
              title: true,
              span: 2
            },
            {
              name: 'value-35',
              span: 2
            },
            {
              name: '建设用地',
              title: true,
              span: 2
            },
            {
              name: 'value-36',
              span: 2
            },
            {
              name: '未利用地',
              title: true,
              span: 2
            },
            {
              name: 'value-37',
              span: 2
            },
            {
              name: '是否有实施土地综合整治形成新增耕地',
              title: true,
              span: 4
            },
            {
              name: 'value-38',
              span: 2
            }
          ]
        },
        {
          cols: [
            {
              name: '总面积',
              title: true,
              span: 2
            },
            {
              name: 'value-39',
              span: 8
            },
            {
              name: '平均质量等别',
              title: true,
              span: 2
            },
            {
              name: 'value-40',
              span: 2
            },
            {
              name: '图斑数目',
              title: true,
              span: 2
            },
            {
              name: 'value-41',
              span: 2
            },
            {
              name: '平均单个图斑面积',
              title: true,
              span: 4
            },
            {
              name: 'value-42',
              span: 2
            }
          ]
        },
        {
          cols: [
            {
              span: 12,
              height: BASE_HEIGHT * 2 + 'px',
              slotName: 'row3_right_3_1'
            },
            {
              span: 6,
              height: BASE_HEIGHT * 2 + 'px',
              slotName: 'row3_right_3_2'
            },
            {
              name: '≤15°',
              span: 6,
              height: BASE_HEIGHT * 2 + 'px',
              slotName: 'row3_right_3_3'
            }

          ]
        }
      ],
      row3_right_3_1: [
        {
          cols: [
            {
              name: '坡度',
              title: true,
              span: 4
            },
            {
              name: '≤15°',
              title: true,
              span: 4
            },
            {
              name: 'value-20',
              span: 4
            },
            {
              name: '15°～25°',
              title: true,
              span: 4
            },
            {
              name: 'value-21',
              span: 4
            },
            {
              name: '25°以上',
              title: true,
              span: 4
            },
            {
              name: '连片程度',
              title: true,
              span: 4
            },
            {
              name: '≤5亩°',
              title: true,
              span: 4
            },
            {
              name: 'value-22',
              span: 4
            },
            {
              name: '5-10亩',
              title: true,
              span: 4
            },
            {
              name: 'value-23',
              span: 4
            },
            {
              name: '10-20亩',
              title: true,
              span: 4
            }
          ]
        }
      ],
      row3_right_3_2: [
        {
          cols: [
            {
              name: 'value-24',
              span: 24
            },
            {
              name: 'value-25',
              span: 8
            },
            {
              name: '20亩以上',
              title: true,
              span: 8
            },
            {
              name: 'value-26',
              span: 8
            }
          ]
        }
      ],
      row3_right_3_3: [
        {
          cols: [
            {
              name: '是否含有高标准农田',
              height: BASE_HEIGHT * 2 + 'px',
              title: true,
              span: 16
            },
            {
              name: 'value-27',
              span: 8
            },
            {
              name: 'value-28',
              span: 8
            }
          ]
        }
      ],
      row4_right: [
        {
          cols: [
            { name: '永久基本农田数量有增加：否/是，具体增加27.789亩（增加比例5.01%）。', span: 24, align: 'left' },
            { name: '永久基本农田质量有提升：否/是，具体平均提升      等别。', span: 24, align: 'left' },
            { name: '永久基本农田生态有改善：否/是。', span: 24, align: 'left' },
            { name: '永久基本农田布局有优化：否/是，具体平均单个图斑面积增加2.322亩，集中连片度提升1311.86%。', span: 24, align: 'left' },
            { name: '其他审查意见：如材料完整、符合永久基本农田布局调整要求等相关结论性意见。', byname: '审查人员：', span: 24, height: BASE_HEIGHT * 4 + 'px', align: 'left' }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.page {
  width: 1000px;
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
