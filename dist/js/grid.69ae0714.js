(window.webpackJsonp=window.webpackJsonp||[]).push([["grid"],{1706:function(e,t,l){l("59a7")},"59a7":function(e,t,l){},aae9:function(e,t,l){l.r(t);var a={name:"grid",data:()=>({count:6,count1:10,columns:"",columnsOpts:[{detail:"",value:"unset",label:"取消设置"},{detail:"grid-template-columns: 200px 200px 200px;",value:"column1",label:"固定值-绝对单位"},{detail:"grid-template-columns: 33.33% 33.33% 33.33%;",value:"column2",label:"固定值-百分比"},{detail:"grid-template-columns: 1fr 2fr 1fr;(fr表示比例关系)",value:"column3",label:"固定值-fr 关键字"},{detail:"grid-template-columns: repeat(3, 33.33%);(简化写法：repeat(重复的次数, 所要重复的值))",value:"column4",label:"repeat简化"},{detail:"grid-template-columns: repeat(auto-fill, 250px);（表示列宽是 250 px，但列的数量是不固定的，只要浏览器能够容纳得下，就可以放置元素，每一行（或每一列）容纳尽可能多的单元格。）",value:"column5",label:"auto-fill自动填充"},{detail:"grid-template-columns: 1fr 1fr minmax(100px, 2fr);minmax()函数产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。",value:"column6",label:"minmax()"},{detail:"grid-template-columns: 100px auto 100px;（auto关键字表示由浏览器自己决定长度。）",value:"column7",label:"auto 关键字"}],columnsInfo:"",rows:"",rowsOpts:[{detail:"",value:"unset",label:"取消设置"},{detail:"grid-template-rows: 100px 100px;",value:"row1",label:"固定值-绝对单位"},{detail:"grid-template-rows: 33.33% 33.33%;",value:"row2",label:"固定值-百分比"},{detail:"grid-template-rows: 1fr 2fr;",value:"row3",label:"固定值-fr 关键字"},{detail:"grid-template-rows: repeat(2, 33.33%);",value:"row4",label:"repeat简化"},{detail:"grid-template-rows: repeat(auto-fill, 100px);",value:"row5",label:"auto-fill自动填充"},{detail:"grid-template-rows: minmax(100px, 2fr) 1fr;",value:"row6",label:"minmax()"},{detail:"grid-template-rows: auto 100px;",value:"row7",label:"auto 关键字"}],rowsInfo:"",gridGap:"",gridGapOpts:[{detail:"",value:"unset",label:"取消设置"},{detail:"grid-gap: 20px 20px;",value:"gridGap1",label:"行间距和列间距"},{detail:"grid-row-gap: 20px;",value:"gridGap2",label:"行间距"},{detail:"grid-column-gap: 20px;",value:"gridGap3",label:"列间距"}],gridGapInfo:"",justifyItems:"",justifyItemsOpts:[{detail:"",value:"unset",label:"取消设置"},{detail:"justify-items: start;",value:"justifyItems1",label:"对齐单元格的起始边缘"},{detail:"justify-items: end;",value:"justifyItems2",label:"对齐单元格的结束边缘"},{detail:"justify-items: center;",value:"justifyItems3",label:"单元格内部居中"},{detail:"justify-items: stretch;",value:"justifyItems4",label:"拉伸，占满单元格的整个宽度（默认值）"}],justifyItemsInfo:"",alignItems:"",alignItemsOpts:[{detail:"",value:"unset",label:"取消设置"},{detail:"align-items: start;",value:"alignItems1",label:"对齐单元格的起始边缘"},{detail:"align-items: end;",value:"alignItems2",label:"对齐单元格的结束边缘"},{detail:"align-items: center;",value:"alignItems3",label:"单元格内部居中"},{detail:"align-items: stretch;",value:"alignItems4",label:"拉伸，占满单元格的整个宽度（默认值）"}],alignItemsInfo:"",justifyContent:"",justifyContentOpts:[{detail:"",value:"unset",label:"取消设置"},{detail:"justify-content: start;",value:"justifyContent1",label:"对齐单元格的起始边缘"},{detail:"justify-content: end;",value:"justifyContent2",label:"对齐单元格的结束边缘"},{detail:"justify-content: center;",value:"justifyContent3",label:"单元格内部居中"},{detail:"justify-content: stretch;",value:"justifyContent4",label:"拉伸，占满单元格的整个宽度（默认值）"},{detail:"justify-content: space-between;",value:"justifyContent5",label:"首尾对齐到边,中间均匀分配"},{detail:"justify-content: space-around;",value:"justifyContent6",label:"首尾间距一半,中间均匀分配"},{detail:"justify-content: space-evenly;",value:"justifyContent7",label:"完全均匀分配，包括首尾"}],justifyContentInfo:""}),watch:{columns:{immediate:!0,deep:!0,handler(e,t){this.columnsOpts.forEach(t=>{t.value===e&&(this.columnsInfo=t.detail)})}},rows:{immediate:!0,deep:!0,handler(e,t){this.rowsOpts.forEach(t=>{t.value===e&&(this.rowsInfo=t.detail)})}},gridGap:{immediate:!0,deep:!0,handler(e,t){this.gridGapOpts.forEach(t=>{t.value===e&&(this.gridGapInfo=t.detail)})}},justifyItems:{immediate:!0,deep:!0,handler(e,t){this.justifyItemsOpts.forEach(t=>{t.value===e&&(this.justifyItemsInfo=t.detail)})}},alignItems:{immediate:!0,deep:!0,handler(e,t){this.alignItemsOpts.forEach(t=>{t.value===e&&(this.alignItemsInfo=t.detail)})}},justifyContent:{immediate:!0,deep:!0,handler(e,t){this.justifyContentOpts.forEach(t=>{t.value===e&&(this.justifyContentInfo=t.detail)})}}}};l("1706"),l=l("2877"),l=Object(l.a)(a,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"page"},[e._m(0),t("b",[e._v("grid-template-columns：")]),t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.columns,callback:function(t){e.columns=t},expression:"columns"}},e._l(e.columnsOpts,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),t("span",{staticClass:"detail"},[e._v(e._s(e.columnsInfo))]),t("br"),t("b",[e._v("grid-template-rows：")]),t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.rows,callback:function(t){e.rows=t},expression:"rows"}},e._l(e.rowsOpts,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),t("span",{staticClass:"detail"},[e._v(e._s(e.rowsInfo))]),t("br"),t("b",[e._v("grid-gap：")]),t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.gridGap,callback:function(t){e.gridGap=t},expression:"gridGap"}},e._l(e.gridGapOpts,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),t("span",{staticClass:"detail"},[e._v(e._s(e.gridGapInfo))]),t("br"),t("b",[e._v("justify-items：")]),t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.justifyItems,callback:function(t){e.justifyItems=t},expression:"justifyItems"}},e._l(e.justifyItemsOpts,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),t("span",{staticClass:"detail"},[e._v(e._s(e.justifyItemsInfo))]),t("br"),t("b",[e._v("align-items：")]),t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.alignItems,callback:function(t){e.alignItems=t},expression:"alignItems"}},e._l(e.alignItemsOpts,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),t("span",{staticClass:"detail"},[e._v(e._s(e.alignItemsInfo))]),t("br"),t("b",[e._v("justify-content（水平）/align-content（垂直）：参数一致")]),t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.justifyContent,callback:function(t){e.justifyContent=t},expression:"justifyContent"}},e._l(e.justifyContentOpts,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),t("span",{staticClass:"detail"},[e._v(e._s(e.justifyContentInfo))]),t("br"),t("div",{staticClass:"demo",class:[e.columns,e.rows,e.gridGap,e.justifyItems,e.alignItems,e.justifyContent]},e._l(e.count,(function(l,a){return t("div",{key:a,staticClass:"box"},[e._v(e._s(l))])})),0),t("p"),t("b",[e._v("特殊布局：元素的宽度固定，最大填充在行内(例如:元素宽度固定100px)")]),t("div",{staticClass:"demo1"},e._l(e.count1,(function(l,a){return t("div",{key:a,staticClass:"box1"},[e._v(e._s(l))])})),0)],1)}),[function(){var e=this._self._c;return e("p",[e("b",[this._v("grid基础属性")])])}],!1,null,"4807d6d8",null);t.default=l.exports}}]);