<template>
  <div>
    <div v-for="item in '123'" :key="item">
      <div style="text-align: left">第{{ item }}个</div>
      <CardList :cardData="cardData" class="cardlist">
        <template v-slot="scope">
          <Card :cardObj="scope.row" @click.native="cardClick(scope.row)" class="card"></Card>
        </template>
      </CardList>
    </div>
  </div>
</template>

<script>
import Card from './card.vue'
import CardList from './cardList.vue'
export default {
  components: {
    Card,
    CardList
  },
  data () {
    return {
      cardData: [
        { name: 'zs', age: 18 },
        { name: 'ls', age: 19 }
      ]
    }
  },
  methods: {
    cardClick (row) {
      console.log('卡片点击了：' + row.name + '--' + row.age)
    }
  }
}
</script>

<style scoped>
.cardlist {
  display: flex;
}
.card {
  margin: 10px 20px;
}
</style>
