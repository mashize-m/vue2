<template>
  <div class="page">
    <div v-for="item in config" :key="item.name" class="module">
      <div class="title">{{ item.title }}</div>
      <div class="item">
        <div v-for="k in item.list" :key="k.name" class="child" @click="onClick(k.url)">
          <div class="name" :title="k.name">
            <img :src="k.img" alt="" class="icon" />
            {{ k.name }}
          </div>
          <div class="description" :title="k.description">{{ k.description }}</div>
        </div>
        <div v-for="n in item.list" :key="n" class="test"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'basecpn',
  props: {
    config: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
    }
  },
  methods: {
    onClick (url) {
      window.open(url)
    }
  }
}
</script>

<style lang="less" scoped>
.page {
  height: 100%;
  background-color: #f2f2f2;
  box-sizing: border-box;
  border: 1px solid transparent;
  .module {
    background-color: #fff;
    margin: 10px;
    padding: 20px;
    .title {
      padding-bottom: 10px;
      border-bottom: 1px solid #f2f2f2;
      font-size: 14px;
      color: #6b7184;
    }
    .item {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-content: flex-start; // 取消多行间上下间距
      margin-top: 20px;
      .child {
        flex: 0 0 calc(90% / 5); // 对剩余空间的（放大、缩小、大小比例）
        height: 70px;
        margin-right: calc(10% / 5);
        // width: 280px;
        background-color: #f2f2f2;
        margin-bottom: 10px;
        padding: 0 10px;
        box-sizing: border-box;
        border-radius: 10px;
        margin-right: 10px;
        cursor: pointer;
        .name {
          height: 35px;
          font-size: 12px;
          font-weight: 700;
          color: #30333c;
          display: flex;
          align-items: center;
          .icon {
            width: 26px;
            height: 26px;
            border-radius: 50%;
            vertical-align: middle;
            margin-right: 10px;
          }
        }
        .description {
          height: 30px;
          color: #a1a7b7;
          font-size: 12px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2; //（行数）
          -webkit-box-orient: vertical;
        }
        &:hover {
          background-color: #6b7184;
          .name {
            color: #fff;
          }
          .description {
            color: #ddd;
          }
        }
      }
      .test {
        width: 300px;
        height: 0;
        border: unset;
      }
    }
  }
}
</style>
