import JSZipUtils from 'jszip-utils'
import JSZip from 'pizzip'
import Docxtemplater from 'docxtemplater'
import { saveAs } from 'file-saver'
import { renderAsync } from 'docx-preview'

const docxOptions = {
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
// 生成二进制
function createBlob (docxTemplatePath, docxData, handle, handleParams) {
  /**
   * 文件放在public目录下，因此文件路径和文件名相同
   */
  /** 将文件转为二进制 */
  JSZipUtils.getBinaryContent(docxTemplatePath, function (error, content) {
    // 抛出异常
    if (error) {
      throw new Error(error)
    }
    // 创建一个JSZip实例，内容为模板的内容
    const zip = new JSZip(content)
    // 创建并加载docxtemplater实例对象
    const doc = new Docxtemplater().loadZip(zip)
    // 设置模板变量的值
    doc.setData(docxData)
    try {
      // 用模板变量的值替换所有模板变量
      doc.render()
    } catch (error) {
      // 抛出异常
      throw new Error(error)
    }

    // 生成一个代表docxtemplater对象的zip文件（不是一个真实的文件，而是在内存中的表示）
    const out = doc.getZip().generate({
      type: 'blob',
      mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    })
    console.log(Object.prototype.toString.call(out), '---- out')
    console.log('out:', out)

    // 将目标文件对象保存为目标类型的文件，并命名
    typeof handle === 'function' && handle(out, handleParams)
  })
}
// 渲染docx
function docxRender (buffer, ele) {
  let bodyContainer = ele
  renderAsync(
    buffer, // Blob | ArrayBuffer | Uint8Array, 可以是 JSZip.loadAsync 支持的任何类型
    bodyContainer, // HTMLElement 渲染文档内容的元素,
    null, // HTMLElement, 用于呈现文档样式、数字、字体的元素。如果为 null，则将使用 bodyContainer。
    docxOptions // 配置
  ).then(res => {
    console.log('res:', res)
  })
}

/**
 * @description 预览word
 * @param {String} docxTemplatePath docx模板的路径
 * @param {Object} docxData 模板渲染的数据
 * @param {DOM Element} ele 装载预览docx的盒子dom
 */
function previewDocx (docxTemplatePath, docxData, ele) {
  createBlob(docxTemplatePath, docxData, docxRender, ele)
}
/**
 * @description 导出word
 * @param {String} docxTemplatePath docx模板的路径
 * @param {Object} docxData 模板渲染的数据
 * @param {String} fileName 保存的文件名称
 */
function exportDocx (docxTemplatePath, docxData, fileName) {
  createBlob(docxTemplatePath, docxData, saveAs, fileName)
}

export { previewDocx, exportDocx }
