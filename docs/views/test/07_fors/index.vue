<template>
  <div>
    <p>
      <b>continue：</b>
      指的是跳出当前循环，即不执行continue后的语句，直接进入下次循环。
    </p>
    <p>
      <b>break：</b>
      指的是跳出for循环本身，不再进行之后的循环，但可以执行for循环之外的语句。(不影响嵌套循环的外层循环)
    </p>
    <p>
      <b>return：</b>
      指的是跳出for循环，且不执行for循环之外的语句，直接跳出当前函数，返回return后的值。
    </p>
    <p><b>for循环</b></p>
    <p>const arr1 = [1,2,3,4,5]</p>
    <div class="base">
      <el-button @click="click1(1)">for循环:continue</el-button>
      <div>{{ for1 }}</div>
    </div>
    <div class="base">
      <el-button @click="click1(2)">for循环:break</el-button>
      <div>{{ for2 }}</div>
    </div>
    <div class="base">
      <el-button @click="click1(3)">for循环:return</el-button>
      <div>{{ for3 }}</div>
    </div>
    <p><b>for嵌套循环</b></p>
    <p>const arr1 = [1,2,3,4,5]</p>
    <p>const arr2 = [6,7,8,9,10]</p>
    <div class="base">
      <el-button @click="click2(1)">for嵌套循环:continue</el-button>
      <div>{{ fors1 }}</div>
    </div>
    <div class="base">
      <el-button @click="click2(2)">for嵌套循环:break</el-button>
      <div>{{ fors2 }}</div>
    </div>
    <div class="base">
      <el-button @click="click2(3)">for嵌套循环:return</el-button>
      <div>{{ fors3 }}</div>
    </div>
    <p><b>forof循环(forin也一样)</b></p>
    <p>const arr1 = [1,2,3,4,5]</p>
    <div class="base">
      <el-button @click="click3(1)">forof循环:continue</el-button>
      <div>{{ forof1 }}</div>
    </div>
    <div class="base">
      <el-button @click="click3(2)">forof循环:break</el-button>
      <div>{{ forof2 }}</div>
    </div>
    <div class="base">
      <el-button @click="click3(3)">forof循环:return</el-button>
      <div>{{ forof3 }}</div>
    </div>
    <p><b>forof嵌套循环(forin也一样)</b></p>
    <p>const arr1 = [1,2,3,4,5]</p>
    <p>const arr2 = [6,7,8,9,10]</p>
    <div class="base">
      <el-button @click="click4(1)">for嵌套循环:continue</el-button>
      <div>{{ forsof1 }}</div>
    </div>
    <div class="base">
      <el-button @click="click4(2)">for嵌套循环:break</el-button>
      <div>{{ forsof2 }}</div>
    </div>
    <div class="base">
      <el-button @click="click4(3)">for嵌套循环:return</el-button>
      <div>{{ forsof3 }}</div>
    </div>
    <p><b>html中v-for循环+ || 运算符</b></p>
    <div v-for="i in fun(arr4, arr1)" :key="i">{{ i }}</div>
  </div>
</template>

<script>
export default {
  name: 'fors',
  data () {
    return {
      arr1: [1, 2, 3, 4, 5],
      arr2: [6, 7, 8, 9, 10],
      arr3: { k1: 1, k2: 2, k3: 3, k4: 4, k5: 5 },
      arr4: [],
      for1: '',
      for2: '',
      for3: '',
      fors1: '',
      fors2: '',
      fors3: '',
      forof1: '',
      forof2: '',
      forof3: '',
      forsof1: '',
      forsof2: '',
      forsof3: ''
    }
  },
  methods: {
    fun (arr4, arr1) {
      return arr4.length === 0 ? arr1 : arr4
    },
    click1 (num) {
      this['for' + num] = ''
      for (let i = 0; i < this.arr1.length; i++) {
        const e = this.arr1[i]
        if (e === 3) {
          if (num === 1) {
            continue
          } else if (num === 2) {
            break
          } else if (num === 3) {
            return
          }
        }
        this['for' + num] += e
      }
      this['for' + num] += '结束'
    },
    click2 (num) {
      this['fors' + num] = ''
      for (let i = 0; i < this.arr1.length; i++) {
        const e = this.arr1[i]
        for (let j = 0; j < this.arr2.length; j++) {
          const el = this.arr2[j]
          if (el === 8) {
            if (num === 1) {
              continue
            } else if (num === 2) {
              break
            } else if (num === 3) {
              return
            }
          }
          this['fors' + num] += el
          this['fors' + num] += '-'
        }
        this['fors' + num] += e
        this['fors' + num] += ','
      }
      this['fors' + num] += '结束'
    },
    click3 (num) {
      this['forof' + num] = ''
      for (let e of this.arr1) {
        if (e === 3) {
          if (num === 1) {
            continue
          } else if (num === 2) {
            break
          } else if (num === 3) {
            return
          }
        }
        this['forof' + num] += e
      }
      this['forof' + num] += '结束'
    },
    click4 (num) {
      this['forsof' + num] = ''
      for (let e of this.arr1) {
        for (let el of this.arr2) {
          if (el === 8) {
            if (num === 1) {
              continue
            } else if (num === 2) {
              break
            } else if (num === 3) {
              return
            }
          }
          this['forsof' + num] += el
          this['forsof' + num] += '-'
        }
        this['forsof' + num] += e
        this['forsof' + num] += ','
      }
      this['forsof' + num] += '结束'
    }

  }
}
</script>

<style lang="less" scoped>
.base {
  display: flex;
  align-items: center;
}
</style>
