# 具体实现请参考代码案例

## 预览的插件

1. cafe-ofd：局 ofd 测试文件签章没有，pdf 转 ofd 的油票有签章。
2. ofd-tools： 局 ofd 测试文件签章背景白色，pdf 转 ofd 的油票正常。
3. ion-ofd： 局 ofd 测试文件无签章，pdf 转 ofd 的油票有签章。

以上三个包的源码放在了 public 下，如后续有变动，可以直接复制源码。

## 目前选用 ofd-tools 的方案。需处理掉印章的背景色（改成透明）

```bash
npm install ofd-tools@1.0.3 --save
```

## 注 1：ofd-tools 包含：ofd-tools 和 ofd-xml-parser 两个文件

## 注 2：修改源码：扩展部分 ofd 文件不识别问题

node_modules/ofd-tools/lib/ofd.es.js 的 848 行

```js
if (!font) {
  font = '宋体'
}
```

## 背景色解决方案

参考 demo.html 的案例。
结合 canvas 重新绘制印制，替换原来的 img。
不直接通过 canvas.toDataURL 转 base64，替换 img 中的 src。是因为替换了之后，背景变成黑色。完全不知道啥原因。

## 附件文件跳转到 ofd 预览页面

```js
// 1. 注册路由
{
  path: '/viewofd',
  name: 'viewofd',
  component: () => import(/* webpackChunkName: "viewofd" */ '@/components/viewofd/viewofd.vue')
},

// 2. 预览
handlePreview (file) {
  console.log(file, '--file')
  if (file.fileType === 'ofd') {
    let newUrl = this.$router.resolve({
      // path: `/viewofd?ofdUrl=${fileUrl}` // 跳转的路由地址，用path: 'path地址'也可以
      name: 'viewofd',
      query: {
        ofdFile: JSON.stringify(file.fileUrl)
      }
    })
    window.open(newUrl.href, '_blank')
  } else {
    window.open(file.fileUrl)
  }
},
```
