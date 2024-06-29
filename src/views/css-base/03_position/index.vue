<template>
  <div class="page">
    <div class="box">
      <p>子绝父相：垂直水平居中</p>
      <div class="baseBox parent1">
        <div class="baseItem child1"></div>
      </div>
    </div>
    <div class="box">
      <p>固定定位：直接在要固定的元素添加fixed</p>
      <div class="baseBox parent2">
        <div class="baseItem child2"></div>
      </div>
    </div>
    <div class="box">
      <p>粘性定位：需要position: relative;</p>
      <div class="baseBox parent3">
        <div v-for="k in 10" :key="k" class="baseItem child3"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'positionLayout'
}
</script>

<style lang="less" scoped>
.page {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  .box {
    height: 200px;
    flex: 0 0 calc(90% / 2);
    margin-right: calc(10% / 2);
    margin-bottom: 30px;
    border: 1px solid #333;
    box-sizing: border-box;
    p {
      text-align: left;
      font-weight: 700;
      height: 20px;
      line-height: 20px;
      margin: 10px 0;
    }
  }
  .baseBox {
    width: 100%;
    height: 160px;
    background-color: pink;
    .baseItem {
      width: 50px;
      height: 50px;
      background-color: skyblue;
    }
  }
  .parent1 {
    position: relative;
    .child1 {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      // transform: translateX(-50%); // X轴方向， x轴正向为右,y轴正向为下
      // transform: translateY(-50%); // Y轴方向， x轴正向为右,y轴正向为下
    }
  }
  .parent2 {
    .child2 {
      position: fixed;
      top: 15%;
      left: 70%;
    }
  }
  .parent3 {
    position: relative;
    overflow: auto;
    .child3 {
      margin: 10px;
    }
    :nth-child(2n) {
      background-color: orange;
    }
    :nth-child(3) {
      position: sticky;
      top: 10px;
      left: 100px;
    }
  }
}
</style>
