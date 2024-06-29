
<template>
  <div>
    <div class="header">目录</div>
    <div class="container">
      <el-scrollbar>
        <div class="aside">
          <el-menu
            :default-active="defaultSelectMenu"
            :default-openeds="defaultOpenMenuArr"
            unique-opened
            class="el-menu-vertical-demo"
            @select="menuSelect"
          >
            <template v-for="(item, index) in menuList">
              <el-submenu :index="item.index" :key="index">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>{{ item.title }}</span>
                </template>
                <template v-for="(menu, k) in item.children">
                  <el-menu-item :index="menu.path" :key="k">{{ menu.name }}</el-menu-item>
                </template>
              </el-submenu>
            </template>
          </el-menu>
        </div>
      </el-scrollbar>
      <div class="main">
        <router-view class="left"></router-view>
        <!-- <CodemirrorCpn :path="path" v-if="isShow"></CodemirrorCpn> -->
      </div>
    </div>
  </div>
</template>

<script>
import { menuList } from '@/config/menuConfig.js'
// import CodemirrorCpn from '@/components/CodemirrorCpn'

export default {
  name: 'AdminLayout',
  // components: {
  //   CodemirrorCpn
  // },
  data () {
    return {
      defaultSelectMenu: '',
      defaultOpenMenuArr: [],
      menuList,
      path: '',
      isShow: false
    }
  },
  methods: {
    menuSelect (key, keyPath) {
      console.log('keyPath:', keyPath)
      console.log('key:', key)
      this.judgeIsShow(key)
      this.$router.push({
        path: key
      })
      this.path = key
      this.defaultOpenMenuArr = [keyPath[0]]
      this.defaultSelectMenu = keyPath[1]
    },
    judgeIsShow (key) {
      this.menuList.forEach(_ => {
        _.children.forEach(k => {
          if (k.path === key) {
            this.isShow = k?.meta?.isShow || false
          }
        })
      })
    }
  },
  created () {
    // 刷新路由保持当前状态
    this.defaultSelectMenu = this.$route.path
    this.judgeIsShow(this.$route.path)
    this.defaultOpenMenuArr = [this.$route.path.split('/')[2]]
  }
}
</script>

<style scoped lang="less">
.header {
  background-color: skyblue;
  /* border: 1px solid skyblue; */
  height: 60px;
}
.container {
  display: flex;
  height: calc(100vh - 60px - 16px);
}
.aside {
  background: transparent;
  text-align: left;
  /* width: 200px; */
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 300px;
  height: 100%;
}
.main {
  /* background-color: lightgreen; */
  flex: 1;
  overflow-y: auto;
  display: flex;
  .left {
    flex: 1;
    overflow-y: auto;
    text-align: left;
  }
}
/* 取消el-scrollbar的横向滚动条 */
:deep(.el-scrollbar__wrap) {
  overflow-x: hidden;
}
</style>
