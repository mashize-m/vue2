<template>
  <div>
    <div id="math-problems"></div>
    <el-button type="primary" @click="test">测试</el-button>
    <el-button type="primary" @click="test2">测试2</el-button>
    <el-button type="primary" @click="test3">测试3</el-button>
  </div>
</template>

<script>
import Decimal from 'decimal.js'
import { generateMathProblem } from './index'
export default {
  name: 'math',
  data () {
    return {
      // opts: ['+', '-', 'x', '/'], // 选择的运算符
      opts: ['+', '-'], // 选择的运算符
      count: 3, // 参与运算的数字个数,
      maxResult: 20, // 数字的最大值
      tempResult: 0, // 每次计算后的临时的和
      numbers: [], // 数字数组
      operators: [], // 运算符数组
      addOpts: {
        minNum: 1,
        maxNum: 10 // 选项：5/10/20/50/100/不限制
      },
      results: []
    }
  },
  methods: {
    test3 () {
      // 使用函数生成10个自动出加减乘除口算题
      for (let i = 0; i < 10; i++) {
        const mathProblem = generateMathProblem()

        console.log(`题目：${mathProblem.expression}`)
        console.log(`答案：${mathProblem.result}`)
      }
    },
    // 获取 正整数
    getRandom (min, max) {
      min = Math.ceil(min) // 向上取整
      max = Math.floor(max)// 向下取整
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    // 获取运算符
    getSymbol (num) {
      const index = num % this.opts.length
      return index
    },
    // 加法
    add () {
      // 当为 '+'时，
      // 此时数学题应该是：  ？ + ？ + （-18） = 0
      this.operators.unshift('+')
      // （1） 先获取随机数，最大值不超过上一次的random1（18）
      let max = this.tempResult
      // if (max.maxNum < this.tempResult) {
      //   max = max.maxNum
      // }
      let random = this.getRandom(1, max)
      console.log('add-random:', random)
      this.numbers.unshift(random)
      // （2） 然后用 ’-‘ 进行运算， random1 - random2 = 12。 此时获取的结果为下一次运算的和
      this.tempResult = this.tempResult - random
    },
    // 减法
    subtract () {
      // 当为 '-'时，
      // 此时数学题应该是：  ？ - ？ + （-18） = 0
      this.operators.unshift('-')
      // （1） 先获取随机数，最大值没有限制，也可以有限制
      let random = this.getRandom(1, this.tempResult)
      console.log('subtract-random:', random)
      this.numbers.unshift(random)
      // （2） 然后用 ’+‘ 进行运算， random1 + random2 = 24。 此时获取的结果为下一次运算的和
      this.tempResult = this.tempResult + random
    },
    // 获取余数为零的数组
    remainNumIsZero () {
      const arr = []
      for (let i = 1; i < this.tempResult; i++) {
        if (this.tempResult % i === 0 && !arr.includes(i)) {
          arr.push(i)
        }
      }
      return arr
    },
    // 获取运算符
    getRandomNumByArr (arr) {
      const num = this.getRandom(arr.length + 1, arr.length * 2)
      const index = num % arr.length
      return arr[index]
    },
    // 乘法
    multiply () {
      // 当为 '*'时，
      // 此时数学题应该是：  ？ * ？ + （-18） = 0
      this.operators.push('x')
      // （1） 从1到random1（18），依次用random1 取余，将余为0 的值，存入arr中。 获取 18 / ？ = 整数。整数情况下的数组
      const arr = this.remainNumIsZero()
      console.log('arr:', arr)
      // （2） 随机从 arr4 中获取一个数，作为 random4
      let random = this.getRandomNumByArr(arr)
      console.log('multiply-random:', random)
      this.numbers.push(random)
      // （3） 然后用 ’/‘ 进行运算， random1 / random4 = 3。 此时获取的结果为下一次运算的和
      this.tempResult = this.tempResult / random
    },
    // 除法
    divide () {
      // 当为 '/'时，
      // 此时数学题应该是：  ？ / ？ + （-18） = 0
      this.operators.push('/')
      // （1） 先获取随机数（第二个问号），最大值可以没有限制，但为了常用且方便，最好有个默认值，比如：10
      let random = this.getRandom(1, 10)
      console.log('divide-random:', random)
      this.numbers.push(random)
      // （2） 然后用 ’*‘ 进行运算， random1 * random5 = 180。 此时获取的结果为下一次运算的和
      this.tempResult = this.tempResult * random
    },
    test2 () {
      // 3+2=5   =》 3+2+(-5)=0
      // 7-2=5  =》 7-2+(-5) = 0
      // 2*5=10 =》 2*5+(-10) = 0
      // 10/2=5 =》 10/2+(-5) = 0

      // 先考虑正整数的情况
      // 核心：先取 0 和 = ，0作为临时的和
      this.operators.push('=')
      this.numbers.push(0)
      // 1. 获取第一个随机数，作为真正运算的和。为了参与运算中，进行取反，以及获取固定 '+' 运算符
      let random1 = this.getRandom(10, this.maxResult)
      this.operators.unshift('+')
      this.numbers.unshift(-random1)
      this.tempResult = random1
      console.log('this.tempResult:', this.tempResult)
      // 后面的依次遍历循环即可（从第2步开始）
      for (let i = 0; i < this.count; i++) {
        // 2. 先获取第二个运算符号，然后获取第二个随机数，其中最大值为上一次的random1，
        const index = this.getSymbol(this.getRandom(1, this.tempResult))
        switch (this.opts[index]) {
          case '+':
            this.add()
            break
          case '-':
            this.subtract()
            break
          case 'x':
            this.multiply()
            break
          case '/':
            this.divide()
            break
          default:
            break
        }
      }
      console.log(this.operators, this.numbers, '最后结果')
    },
    generateMathProblem (operator, numCount, questionCount, maxValue, allowDecimal, allowNegative) {
      // 数学符号
      const operators = ['+', '-', 'x', '/']
      // 参与运算的个数
      const numCounts = [2, 3, 4, 5, 6]
      // 最大值
      const maxValues = [10, 20, 30]
      // 是否允许小数
      const allowDecimals = [true, false]
      // 是否允许负数
      const allowNegatives = [true, false]
      // 问题数量
      const questionCounts = [10, 20, 30]

      // 初始化结果数组
      this.results = []

      // 根据参数生成数字数组
      const numbers = []
      for (let i = 0; i < numCount; i++) {
        // 随机生成一个数字
        let number = Math.floor(Math.random() * maxValue)

        // 如果允许小数，则生成一个小数
        if (allowDecimal) {
          number += Math.random()
        }

        // 如果允许负数，则生成一个负数
        if (allowNegative) {
          number = -number
        }

        // 将数字添加到数组中
        numbers.push(number)
      }
      console.log('numbers:', numbers)

      // 根据运算符生成运算式
      let expression = ''
      for (let i = 0; i < numCount; i++) {
        expression += numbers[i]
        if (i < numCount - 1) {
          expression += operator
        }
      }

      // 计算结果
      let result
      switch (operator) {
        case '+':
          result = numbers.reduce((a, b) => a + b, 0)
          break
        case '-':
          result = numbers.reduce((a, b) => a - b)
          break
        case 'x':
          result = numbers.reduce((a, b) => a * b, 1)
          break
        case '/':
          result = numbers.reduce((a, b) => a / b)
          break
      }
      console.log('result:', result)

      // 将结果添加到结果数组中
      this.results.push({
        expression: expression,
        result: result
      })
      console.log('results:', this.results)

      // // 重复上述过程，直到生成所需数量的口算题
      // while (this.results.length < questionCount) {
      //   this.generateMathProblem(operator, numCount, questionCount, maxValue, allowDecimal, allowNegative)
      // }

      // 返回结果数组
      return results
    },
    test () {
      const problems = this.generateMathProblem('+', 3, 10, 10, false, false)
      console.log('problems:', problems)

      // 输出口算题
      for (const problem of problems) {
        console.log(problem.expression + ' = ' + problem.result)
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>
