<template>
  <div class="tabs">
    <div class="header">
      <div class="left">
        <div
          class="tab-header"
          :class="{ activeHeader: item.value === activeName }"
          v-for="item in labels"
          :key="item.label"
          @click="headerClick(item)"
        >
          {{ item.label }}
        </div>
      </div>
      <div class="right">
        <div class="header_btn" v-for="item in labelBtns" :key="item.btn" @click="btnClick(item)">
          {{ item.btn }}
        </div>
      </div>
    </div>
    <template v-for="item in labels">
      <div class="content" :key="item.label" v-if="item.value === activeName">
        <div class="tab-pane">
          <slot :name="item.value"></slot>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ElTabsCpn',
  props: {
    // 接收父组件传递的属性
    labels: {
      type: Array,
      default: () => []
    },
    labelBtns: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      activeName: this.labels[0].value
    }
  },
  methods: {
    headerClick (item) {
      this.activeName = item.value
      this.$emit('tabClick', item)
    },
    btnClick (item) {
      this.$emit('btnClick', item)
    }
  }
}
</script>

<style lang="less" scoped>
.tabs {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // 头部样式
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 32px;
    background: #fff;
    // box-shadow: inset 0px -1px 0px 0px rgba(240, 240, 240, 0.2);
    // border-radius: 0px 0px 0px 0px;
    // backdrop-filter: blur(3px);
    // padding: 0 16px;
    .left {
      display: flex;
      justify-content: flex-start;
      :not(:nth-child(1)) {
        margin-left: 20px;
      }
      .tab-header {
        height: 32px;
        line-height: 32px;
        cursor: pointer;
        color: #666;
        font-size: 14px;
        &:hover {
          color: #666;
        }
      }
      .activeHeader {
        color: #666;
        border-bottom: 2px solid #0294ff;
        // font-weight: bold;
        font-size: 14px;
      }
    }
    .right {
      display: flex;
      justify-content: flex-end;
      :not(:nth-last-child(1)) {
        margin-right: 20px;
      }
      .header_btn {
        cursor: pointer;
        color: #33a9ff;
        font-size: 14px;
        border: 1px solid #a1c3db;
        background-color: rgba(154, 213, 255, 0.2);
        padding: 3px 15px;
        border-radius: 5px;
        &:hover {
          filter: brightness(110%) contrast(105%);
        }
        &:active {
          filter: brightness(90%) contrast(105%);
        }
      }
    }
  }
  .content {
    flex: 1;
    margin-top: 5px;
    .tab-pane {
      height: 100%;
    }
  }
}
</style>
