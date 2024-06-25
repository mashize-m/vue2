# Cafe-OFD

![NPM Publish](https://github.com/wangdaodao/cafe-ofd/actions/workflows/npm-publish.yml/badge.svg) ![NPM version](https://img.shields.io/npm/v/cafe-ofd.svg) ![GitHub stars](https://img.shields.io/github/stars/wangdaodao/cafe-ofd.svg) ![GitHub issues](https://img.shields.io/github/issues/wangdaodao/cafe-ofd.svg) ![GitHub forks](https://img.shields.io/github/forks/wangdaodao/cafe-ofd.svg)

> Render OFD files on Vue pages using ofd.js.

* 😊 Vue 2.0 + [`ofd.js`](https://github.com/DLTech21/ofd.js), Thanks ofd.js!
* 😂 Support for modern browsers (IE11);

## Install

```shell
npm install cafe-ofd --save
```

## Quick Start
```js
import cafeOfd from 'cafe-ofd'
import 'cafe-ofd/package/index.css'
Vue.use(cafeOfd)
```

## Example

Demo：[http://demo.const.team/ofd/](http://demo.const.team/ofd/)

ofd test file download:
* Link: https://pan.baidu.com/s/1FGiQWDEg8er-LhUJFMbtGg Code: 72sh

Note: the use of print, need to cooperate with the print style.

```vue
<template>
  <cafe-ofd ref="ofd" :filePath="file" @on-success="load" @on-scroll="scroll">
    <div slot="header">
      <input type="file" ref="file" class="hidden" accept=".ofd" @change="fileChanged">
    </div>
    <div slot="footer">
      <button @click="plus">plus</button>
      <button @click="minus">minus</button>
      <button @click="pre" :disabled="currentNum <= 1">pre</button>
      <input type="number" :min="1" :max="pageNum" v-model.number="currentNum" @change="pageChange(currentNum)">
      <button @click="next" :disabled="currentNum >= pageNum">next</button>
      <button @click="print">print</button>
    </div>
  </cafe-ofd>
</template>

<script>
export default {
  name: 'app',
  components: {},
  data() {
    //这里存放数据
    return {
      currentNum: null,
      file: null,
      pageNum: null
    };
  },
  methods: {
    load(val) {
      this.pageNum = val;
    },
    fileChanged() {
      this.file = this.$refs.file.files[0];
    },
    plus() {
      this.$refs.ofd.scale(50);
    },
    minus() {
      this.$refs.ofd.scale(-50);
    },
    next() {
      this.$refs.ofd.nextPage();
    },
    pre() {
      this.$refs.ofd.prePage();
    },
    pageChange(val) {
      this.$refs.ofd.goToPage(val);
    },
    print() {
      this.$refs.ofd.printFile();
    },
    scroll(val) {
      this.currentNum = val;
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
@media print {
  html,
  body,
  #app {
    height: auto;
    overflow: auto;
  }
}
</style>
```

## Attributes
| Attribute      | Description          | Type      | Accepted Values      | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| filePath | ofd source | string | — | — |
| width | ofd width | number | — | 900 |

## Events
| Event Name | Description | Parameters |
| ---- | ---- | ---- |
| on-success | success event | page count, ofd Object |
| on-error | error event | error |
| on-scroll | scroll event | current page, ofd Object |

## Methods
| Method | Description | Parameters |
| ---- | ---- | ---- |
| scale | scale | steps |
| prePage | pre page | — |
| nextPage | next page | — |
| goToPage | go to page | page number |
| printFile | Print all ofd | — |


## Slot
| name | Description |
|------|--------|
| header | header slot |
| footer | footer slot |