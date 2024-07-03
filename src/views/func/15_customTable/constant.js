const BASE_HEIGHT = 60
// R1
const LABELR1 = [{ label: '附件', span: 1 }]
const LABELR2 = [{ label: '全域土地综合整治所涉永久基本农田布局调整事项审查情况汇总表', title: true, fontWeight: 'bold', span: 26 }]
// c1标题
const LABELC1 = [{ label: '整治项目', byname: '基本信息', title: true, span: 2, height: BASE_HEIGHT * 4 + 'px' }]
const LABELC2 = [{ label: '调出永久', byname: '基本农田信息', title: true, span: 2, height: BASE_HEIGHT * 5 + 'px' }]
const LABELC3 = [{ label: '调入永久', byname: '基本农田信息', title: true, span: 2, height: BASE_HEIGHT * 5 + 'px' }]
const LABELC4 = [{ label: '审查结果', title: true, span: 2, height: BASE_HEIGHT * 6 + 'px' }]
// c2标题
// 基本信息
const LABEL01 = [{ label: '整治项目名称', title: true, span: 12 }, { type: 'value', field: 'todo1', span: 12 }]
const LABEL02 = [{ label: '所含乡镇名称', title: true, span: 12 }, { type: 'value', field: 'todo2', span: 12 }]
const LABEL03 = [{ label: '是否涉及永久基本农田布局调整', title: true, span: 6 }, { type: 'radio', field: 'todo3', span: 3 }, { label: '（如为否，后面表格不必填写）', span: 3 }]
const LABEL04 = [{ label: '是否编制永久基本农田布局调整方案', title: true, span: 6 }, { type: 'radio', field: 'todo4', span: 6 }]
const LABEL05 = [{ label: '整治区域原永久基本农田总面积', title: true, span: 6 }, { type: 'value', field: 'yyjjbntzmj', span: 6 }]
const LABEL06 = [{ label: '计划提升耕地质量等', title: true, span: 6 }, { type: 'input', field: 'todo5', span: 6 }]
// 调出
const LABEL07 = [{ label: '总面积', title: true, span: 2 }, { type: 'value', field: 'dcZmj', span: 4 }]
const LABEL08 = [{ label: '调出面积比例', title: true, span: 2 }, { type: 'value', field: 'dcMjbl', span: 2 }]
const LABEL09 = [{ label: '平均质量等别', title: true, span: 2 }, { type: 'input', field: 'dcPjzldb', span: 2 }]
const LABEL10 = [{ label: '图斑数目', title: true, span: 2 }, { type: 'value', field: 'dcTbsm', span: 2 }]
const LABEL11 = [{ label: '平均单个图斑面积', title: true, span: 3 }, { type: 'value', field: 'dcPjdgtbmj', span: 3 }]
const LABEL12 = [{ label: '现状地类', height: BASE_HEIGHT * 2 + 'px', title: true, span: 2 }]
const LABEL55 = [{ label: '耕地面积', title: true, span: 2 }, { type: 'value', field: 'dcXzGdmj', span: 4 }]
const LABEL13 = [{ label: '其中，水田', title: true, span: 4 }, { type: 'value', field: 'dcXzStmj', span: 2 }]
const LABEL14 = [{ label: '水浇地', title: true, span: 2 }, { type: 'value', field: 'dcXzSjdmj', span: 2 }]
const LABEL15 = [{ label: '旱地', title: true, span: 3 }, { type: 'value', field: 'dcXzHdmj', span: 3 }]
const LABEL16 = [{ label: '非耕地面积', title: true, span: 2 }, { type: 'value', field: 'dcXzFgdmj', span: 4 }]
const LABEL17 = [{ label: '其中，非耕农用地', title: true, span: 4 }, { type: 'value', field: 'dcXzFgnyd', span: 2 }]
const LABEL18 = [{ label: '建设用地', title: true, span: 2 }, { type: 'value', field: 'dcXzJsyd', span: 2 }]
const LABEL19 = [{ label: '未利用地', title: true, span: 3 }, { type: 'value', field: 'dcXzWlyd', span: 3 }]
const LABEL20 = [{ label: '坡度', title: true, span: 4 }, { label: '≤15°', title: true, span: 4 }, { type: 'input', field: 'dcPdLe15Mj', span: 4 }]
const LABEL21 = [{ label: '15°～25°', title: true, span: 4 }, { type: 'input', field: 'dcPdGe15Le25', span: 4 }]
const LABEL22 = [{ label: '25°以上', title: true, span: 4 }]
const LABEL57 = [{ type: 'input', field: 'dcPdGe25', span: 24 }]
const LABEL23 = [{ label: '连片程度', title: true, span: 4 }, { label: '≤5亩°', title: true, span: 4 }, { type: 'value', field: 'dcLpLe5', span: 4 }]
const LABEL24 = [{ label: '5-10亩', title: true, span: 4 }, { type: 'value', field: 'dcLpGe20', span: 4 }]
const LABEL25 = [{ label: '10-20亩', title: true, span: 4 }]
const LABEL58 = [{ type: 'value', field: 'dcLpGe10Le20', span: 8 }]
const LABEL26 = [{ label: '20亩以上', title: true, span: 8 }, { type: 'value', field: 'dcLpGe20', span: 8 }]
const LABEL56 = [{ label: '是否含有已建高标准农田', height: BASE_HEIGHT * 2 + 'px', title: true, span: 12 }]
const LABEL27 = [{ type: 'value', field: 'dcHyGbntMj', append: '亩', span: 12 }]
const LABEL59 = [{ type: 'value', field: 'todo', append: '公顷', span: 12 }]
// 调入
const LABEL28 = [{ label: '现状地类', height: BASE_HEIGHT * 2 + 'px', title: true, span: 2 }]
const LABEL60 = [{ label: '耕地面积', title: true, span: 2 }, { type: 'value', field: 'drXzGdmi', span: 2 }]
const LABEL29 = [{ label: '其中，水田', title: true, span: 2 }, { type: 'value', field: 'drXzStmj', span: 2 }]
const LABEL30 = [{ label: '水浇地', title: true, span: 2 }, { type: 'value', field: 'drXzSjdmj', span: 2 }]
const LABEL31 = [{ label: '旱地', title: true, span: 2 }, { type: 'value', field: 'drXzHdmj', span: 2 }]
const LABEL32 = [{ label: '是否有实施耕地提质改造', title: true, span: 3 }, { type: 'input', field: 'drXzSfssTzgz', append: '公顷', span: 3 }]
const LABEL33 = [{ label: '非耕地面积', title: true, span: 2 }, { type: 'value', field: 'drXzFgdmj', span: 2 }]
const LABEL34 = [{ label: '其中，非耕农用地', title: true, span: 2 }, { type: 'value', field: 'drXzFgnyd', span: 2 }]
const LABEL35 = [{ label: '建设用地', title: true, span: 2 }, { type: 'value', field: 'drXzJsyd', span: 2 }]
const LABEL36 = [{ label: '未利用地', title: true, span: 2 }, { type: 'value', field: 'drXzWlyd', span: 2 }]
const LABEL37 = [{ label: '是否有实施土地综合整治形成新增耕地', title: true, span: 3 }, { type: 'input', field: 'drXzSfXzgd', append: '公顷', span: 3 }]
const LABEL38 = [{ label: '总面积', title: true, span: 2 }, { type: 'value', field: 'drZmj', span: 8 }]
const LABEL39 = [{ label: '平均质量等别', title: true, span: 2 }, { type: 'input', field: 'drPjzldb', span: 2 }]
const LABEL40 = [{ label: '图斑数目', title: true, span: 2 }, { type: 'value', field: 'drTbsm', span: 2 }]
const LABEL41 = [{ label: '平均单个图斑面积', title: true, span: 3 }, { type: 'value', field: 'drPjdgtbmj', span: 3 }]
const LABEL42 = [{ label: '坡度', title: true, span: 4 }, { label: '≤15°', title: true, span: 4 }, { type: 'input', field: 'drPdLe15Mj', span: 4 }]
const LABEL43 = [{ label: '15°～25°', title: true, span: 4 }, { type: 'input', field: 'drPdGe15Le25', span: 4 }]
const LABEL44 = [{ label: '25°以上', title: true, span: 4 }]
const LABEL61 = [{ type: 'input', field: 'drPdGe25', span: 24 }]
const LABEL45 = [{ label: '连片程度', title: true, span: 4 }, { label: '≤5亩°', title: true, span: 4 }, { type: 'value', field: 'drLpLe5', span: 4 }]
const LABEL46 = [{ label: '5-10亩', title: true, span: 4 }, { type: 'value', field: 'drLpGe5Le10', span: 4 }]
const LABEL47 = [{ label: '10-20亩', title: true, span: 4 }]
const LABEL62 = [{ type: 'value', field: 'drLpGe10Le20', span: 8 }]
const LABEL48 = [{ label: '20亩以上', title: true, span: 8 }, { type: 'value', field: 'drLpGe20', span: 8 }]
const LABEL49 = [{ label: '是否含有高标准农田', height: BASE_HEIGHT * 2 + 'px', title: true, span: 12 }]
const LABEL63 = [{ type: 'value', field: 'drHyGbntMj', append: '亩', span: 12 }]
const LABEL64 = [{ type: 'value', field: 'todo', append: '公顷', span: 12 }]
// 审查结果
const LABEL50 = [{ type: 'mult', span: 24, align: 'left', mult: [{ before: '永久基本农田数量有增加：' }, { before: '增加', after: '亩,', type: 'value', field: 'scjg1', width: '100px' }, { before: '增加比例', after: '%', type: 'value', field: 'todo', width: '100px' }] }]
const LABEL51 = [{ type: 'mult', span: 24, align: 'left', mult: [{ before: '永久基本农田质量有提升：' }, { before: '具体平均提升', after: '等别.', type: 'input', field: 'scjg2', width: '100px' }] }]
const LABEL52 = [{ type: 'mult', span: 24, align: 'left', mult: [{ before: '永久基本农田生态有改善：' }, { before: '', after: '', type: 'radio', field: 'scjg3', width: '100px' }] }]
const LABEL53 = [{ type: 'mult', span: 24, align: 'left', mult: [{ before: '永久基本农田布局有优化：' }, { before: '具体平均单个图斑面积增加', after: '亩,', type: 'value', field: 'scjg4', width: '100px' }, { before: '集中连片度提升', after: '%', type: 'value', field: 'todo', width: '100px' }] }]
const LABEL54 = [{ label: '其他审查意见：如材料完整、符合永久基本农田布局调整要求等相关结论性意见。', height: BASE_HEIGHT * 2 + 'px', type: 'mult', span: 24, align: 'left', mult: [{ before: '审查人员：', type: 'input', field: 'scjg5', width: '100px' }] }]

export default {
  BASE_HEIGHT,
  LABEL01,
  LABEL02,
  LABEL03,
  LABEL04,
  LABEL05,
  LABEL06,
  LABEL07,
  LABEL08,
  LABEL09,
  LABEL10,
  LABEL11,
  LABEL12,
  LABEL13,
  LABEL14,
  LABEL15,
  LABEL16,
  LABEL17,
  LABEL18,
  LABEL19,
  LABEL20,
  LABEL21,
  LABEL22,
  LABEL23,
  LABEL24,
  LABEL25,
  LABEL26,
  LABEL27,
  LABEL28,
  LABEL29,
  LABEL30,
  LABEL31,
  LABEL32,
  LABEL33,
  LABEL34,
  LABEL35,
  LABEL36,
  LABEL37,
  LABEL38,
  LABEL39,
  LABEL40,
  LABEL41,
  LABEL42,
  LABEL43,
  LABEL44,
  LABEL45,
  LABEL46,
  LABEL47,
  LABEL48,
  LABEL49,
  LABEL50,
  LABEL51,
  LABEL52,
  LABEL53,
  LABEL54,
  LABEL55,
  LABEL56,
  LABEL57,
  LABEL58,
  LABEL59,
  LABEL60,
  LABEL61,
  LABEL62,
  LABEL63,
  LABEL64,
  LABELC1,
  LABELC2,
  LABELC3,
  LABELC4,
  LABELR1,
  LABELR2
}
