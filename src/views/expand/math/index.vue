<template>
  <div>
    <el-button type="primary" @click="test">测试生成随机数学公式</el-button>
  </div>
</template>

<script>
export default {
  name: 'math',
  data () {
    return {
      // 出题的参数
      numMax: 20, // 数字的最大值
      numbers: [], // 数字数组
      operators: ['+', '-', '*', '/'], // 选择的运算符
      count: 3, // 参与运算的数字个数,
      // 对结果过滤的参数

      results: []
    }
  },
  methods: {
    // 根据numMax生成数字数组
    getNumbers () {
      for (let i = 1; i <= this.numMax; i++) {
        this.numbers.push(i)
      }
    },
    // 生成随机数
    getRandomInt (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    generateMath () {
      // 生成随机算术表达式
      let expression = ''
      // 生成第一个数字
      let number1 = this.numbers[this.getRandomInt(0, this.numbers.length - 1)]
      // 提前赋值给expression，用于后续的拼接
      expression += number1
      // 定义一个临时变量，用于存储之后随机生成的数字
      let tempNumber
      // 遍历的是count，参与计算的数字。
      // 例如，count为3，则从numbers数组中取出3个数字，从operators数组中取出2个运算符。
      for (let i = 0; i < this.count - 1; i++) {
        // 生成随机运算符
        const operator = this.operators[this.getRandomInt(0, this.operators.length - 1)]
        console.log('operator:', operator)
        // 生成第二个随机数字
        const number2 = this.numbers[this.getRandomInt(0, this.numbers.length - 1)]
        console.log('number2:', number2)

        // 如果是除法，则确保除数不为0，// 先不加这个：且结果为整数
        if (operator === '/' && number2 === 0) {
          i--
          continue
        }
        // 赋值
        tempNumber = number2

        // 将数字和运算符添加到表达式中
        expression += operator + number2
      }

      // 返回表达式
      return expression
    },
    evil (fn) {
      let Fn = Function
      return new Fn('return ' + fn)()
    },
    // 定义一个函数来计算算术表达式的值
    evaluateExpression (expression) {
      // 使用eval函数计算表达式的值
      const result = this.evil(expression)
      // 返回结果
      return result
    },
    // 对结果过滤
    filterResult (expression, result) {
      // 返回表达式和结果
      return {
        expression,
        result
      }
    },
    test () {
      // 生成数字数组
      this.getNumbers()
      // 生成随机的表达式
      const expression = this.generateMath()
      console.log('expression:', expression)
      // 计算算术表达式的值
      const result = this.evaluateExpression(expression)
      console.log('result:', result)
      // 对结果过滤
      const mathProblem = this.filterResult(expression, result)
      console.log('mathProblem:', mathProblem)
      console.log(`题目：${mathProblem.expression}`)
      console.log(`答案：${mathProblem.result}`)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
