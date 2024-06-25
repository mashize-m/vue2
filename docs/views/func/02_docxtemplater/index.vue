
<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item
        label="用户名称"
        prop="userName"
        :rules="{
          required: true,
          message: '请输入用户名称',
          trigger: 'blur'
        }"
      >
        <el-input v-model="form.userName"></el-input>
      </el-form-item>
      <el-form-item
        label="值"
        prop="value"
        :rules="{
          required: true,
          message: '当前项为必填项',
          trigger: 'blur'
        }"
      >
        <el-input v-model="form.value"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button style="background-color: #1094cb" type="primary" @click="onSubmit('form')">导出</el-button>
        <el-button style="background-color: #1094cb" type="primary" @click="proviewWord('form')">
          预览
        </el-button>
        <div id="bodyContainer"></div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { previewDocx, exportDocx } from './tool'

export default {
  name: 'docxtemplate',
  data () {
    return {
      form: {
        userName: '',
        value: '',
        show: true,
        info: 'info信息',
        hid: true,
        hidinfo: 'hid info xinxi'
      },
      table: [
        {
          name: 'aaa',
          value: '111'
        },
        {
          name: 'bbb',
          value: '222'
        }
      ],
      docxOptions: {
        className: 'docx', // string：默认和文档样式类的类名/前缀
        inWrapper: true, // boolean：启用围绕文档内容的包装器渲染
        ignoreWidth: false, // boolean：禁用页面的渲染宽度
        ignoreHeight: false, // boolean：禁止渲染页面高度
        ignoreFonts: false, // boolean：禁用字体渲染
        breakPages: true, // boolean：在分页符上启用分页
        ignoreLastRenderedPageBreak: true, // boolean：在 lastRenderedPageBreak 元素上禁用分页
        experimental: false, // boolean：启用实验功能（制表符停止计算）
        trimXmlDeclaration: true, // boolean 如果为true, 解析前会从 xml 文档中移除 xml 声明
        useBase64URL: false, // boolean：如果为true，图片、字体等会转为base 64 URL，否则使用URL.createObjectURL
        useMathMLPolyfill: false, // boolean：包括用于 chrome、edge 等的 MathML polyfill。
        showChanges: false, // boolean：启用文档更改的实验性渲染（插入/删除）
        debug: false // boolean：启用额外的日志记录
      }
    }
  },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.exportWord()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    exportWord () {
      const table = this.table
      const obj = {
        ...this.form,
        table
      }
      exportDocx('/test.docx', obj, '测试.docx')
    },
    proviewWord () {
      const table = this.table
      const obj = {
        ...this.form,
        table
      }
      let bodyContainer = document.getElementById('bodyContainer')
      previewDocx('/test.docx', obj, bodyContainer)
    }
  }
}
</script>

<style scoped></style>
