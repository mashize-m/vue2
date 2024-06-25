<template>
  <div>
    <el-form ref="form" label-width="160px">
      <div>加数 + 加数 = 和</div>
      <div>被减数 - 减数 = 差</div>
      <div>乘数 * 乘数 = 积</div>
      <div>被除数 / 除数 = 商</div>
      <div>前提：只有正整数，不包含负数，小数。</div>
      <div>分类1:不限制加数/减数/乘数/除数的大小，只控制最终的和</div>
      <div>分类2:限制加数/减数/乘数/除数的大小，同时控制最终的和</div>
      <el-form-item label="运算符号">
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="加法"></el-checkbox>
          <el-checkbox label="减法"></el-checkbox>
          <el-checkbox label="乘法"></el-checkbox>
          <el-checkbox label="除法"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="运算个数">
        <el-radio-group v-model="count">
          <el-radio :label="2"></el-radio>
          <el-radio :label="3"></el-radio>
          <el-radio :label="4"></el-radio>
          <el-radio :label="5"></el-radio>
          <el-radio label="不限制"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="和最小值">
        <el-radio-group v-model="sumMinRange">
          <el-radio :label="1"></el-radio>
          <el-radio :label="10"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="和最大值">
        <el-radio-group v-model="sumMaxRange">
          <el-radio :label="10"></el-radio>
          <el-radio :label="20"></el-radio>
          <el-radio :label="50"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="加数最小值(不能100%过滤掉)">
        <el-radio-group v-model="addMinRange">
          <el-radio :label="1"></el-radio>
          <el-radio :label="2"></el-radio>
          <el-radio :label="5"></el-radio>
          <el-radio :label="10"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="加数最大值">
        <el-radio-group v-model="addMaxRange">
          <el-radio :label="10"></el-radio>
          <el-radio :label="20"></el-radio>
          <el-radio label="不限制"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="题目数量">
        <el-radio-group v-model="topicCount">
          <el-radio :label="10"></el-radio>
          <el-radio :label="20"></el-radio>
          <el-radio label="不限制"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="是否允许小数">
        <el-switch v-model="form.decimal"></el-switch>
      </el-form-item>
      <el-form-item label="是否包括括号">
        <el-switch v-model="form.bracket"></el-switch>
      </el-form-item>
      <el-form-item label="是否允许负数">
        <el-switch v-model="form.negative"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="test1">纯加法测试</el-button>
        <el-button type="primary" @click="test2">纯减法测试</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    <div>-----------------------------------</div>
    <p>
      decimal.js的基础使用
      <el-button type="primary" @click="test">测试</el-button>
    </p>
    <div>生成Decimal实例：new Decimal(7)</div>
    <div>加：add或者plus</div>
    <div>减：sub或minus</div>
    <div>乘：mul或times</div>
    <div>除：div或devidedBy</div>
    <div>随机数：random()</div>
    <div>绝对值：abs或absoluteValue</div>
    <div>对数进行上舍入：ceil()</div>
    <div>比较两个数大小：comparedTo()</div>
    <div>对 x 进行下舍入：floor()</div>
    <div>取余数：modulo()</div>
    <div>取负值：negated()</div>
    <div>四舍五入：round()</div>
    <div>结果：toString()</div>
    <div>保留几位小数：toFixed()</div>
  </div>
</template>

<script>
import Decimal from 'decimal.js'

export default {
  name: 'math',
  data () {
    return {

      form: {
        // checkList: ['加法', '减法', '乘法', '除法'], // 4
        decimal: false,
        bracket: false,
        negative: false
      },
      checkList: ['加法'], // 4
      count: 5,
      sumMinRange: 10,
      sumMaxRange: 20,
      addMinRange: 2,
      addMaxRange: 10,
      topicCount: 10
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
      // 计算：和为2-20之间，2个数，加法运算。 A + B = 18
      // 1. 根据 minRange 和 maxRange，生成最大的和。 // 比如：18
      // 2. 根据 minRange 和 18 ，生成 临时 A 数
      // 3. 取 18 除以 checkList.length 的余数 2 ，以余数 2 取 checkList 数组的坐标，获取运算符号
      // 4. 根据 18 和 获取的运算符，以及 临时 A 数，进行计算，
      // 5. --加法： B= 18 - A，  结果：A + B = 18，  对其中一个数进行隐藏，用 □ 替换
      // 6. --减法： B= 18 - A，  结果：18 - A = B，  对其中一个数进行隐藏，用 □ 替换
      // 7. --乘法： 18 / A， 判断余数，如果为0 ， B = 18 / A， 如果不为 0，将 A 进行转换，加/减当前的余数之后，获取AA， B= 18 / AA。  结果：B * AA = 18。 隐藏一个数
      // 7. --除法： 18 / A， 判断余数，如果为0 ， B = 18 / A， 如果不为 0，将 A 进行转换，加/减当前的余数之后，获取AA， B= 18 / AA。  结果：18 / AA = B。 隐藏一个数
    },
    // 获取 整数(正数)
    getRandom (min, max) {
      min = Math.ceil(min) // 向上取整
      max = Math.floor(max)// 向下取整
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    getSymbol (maxInteger) {
      // const maxInteger = this.getRandom(10, 100)
      const remainder = maxInteger % this.checkList.length
      return remainder
    },
    test1 () {
      let result = []
      // 题目数量
      for (let topic = 0; topic < this.topicCount; topic++) {
        // 存储结果
        let arr = []
        // 条件判断----通过监听用户的选择项，实时处理
        // 加数的最小值，大于等于和的最小值（不能低于和的最小值）
        this.sumMinRange = this.addMinRange > this.sumMinRange ? this.addMinRange : this.sumMinRange
        // 加数的最大值，大于等于和的最小值（不能低于和的最小值）
        this.sumMaxRange = this.addMaxRange > this.sumMaxRange ? this.addMaxRange : this.sumMaxRange

        // 获取和的随机值
        let randomSum = this.getRandom(this.sumMinRange, this.sumMaxRange) // 18
        arr.push(randomSum)
        arr.push('=')
        // 每次运算后 存储运算后的结果。
        let tempSum = randomSum
        let tempAddMaxRange = this.addMaxRange
        // 不限制加数的大小（不超过和）--不限制的情况，不需要判断边界
        if (this.addMaxRange === '不限制') {
          tempAddMaxRange = tempSum
        }
        for (let i = 0; i < 100; i++) {
          // 设置每次循环，加数的最大值
          tempAddMaxRange = tempSum < tempAddMaxRange ? tempSum : tempAddMaxRange
          // 获取第一个加数
          const randomNum = this.getRandom(this.addMinRange, tempAddMaxRange) // 9
          arr.push(randomNum)
          // 获取运算符号
          const index = this.getSymbol(randomSum)
          if (index === 0) {
            // 加法
            arr.push('+')
            // 获取第二个加数（临时和）
            const num1 = tempSum - randomNum <= 0 ? 0 : tempSum - randomNum // 9
            // 重新赋值临时和
            tempSum = num1
            // 当等于1,0，或者  this.count - 2 跳出循环
            if (tempSum <= this.addMinRange || i === this.count - 2) {
              arr.push(tempSum)
              break
            }
          }
        }
        console.log('arr:', arr)
        result.push(arr)
      }
      console.log('result:', result)
    },
    test2 () {

    },
    test () {
      // 获取一个 最大值
      const maxInteger = this.getRandom(this.form.minRange, this.form.maxRange)
      console.log('maxInteger:', maxInteger)
      // 获取运算符号
      const remainder = this.getSymbol(maxInteger)
      console.log('remainder:', remainder)
      // 获取 第二个 随机值
      const temp = this.getRandom(this.form.minRange, maxInteger)
      console.log('temp:', temp)
      // if (remainder === 0) {
      //   console.log('加法')

      //   this.finallyNum = maxInteger
      //   // this.param1 = temp
      //   // this.symbol1 = remainder
      //   this.resultNum = maxInteger - temp
      //   console.log(`this.resultNum : ${this.resultNum} + ${temp}=  ${this.finallyNum}`)
      // } else if (remainder === 1) {
      //   console.log('减法')

      //   this.finallyNum = maxInteger
      //   this.resultNum = maxInteger - temp
      //   console.log(`this.resultNum : ${this.finallyNum} - ${temp}=  ${this.resultNum}`)
      // }
      if (remainder === 0) {
        console.log('乘法')

        this.finallyNum = maxInteger
        this.resultNum = maxInteger % temp
        console.log('this.resultNum :', this.resultNum)
        if (this.resultNum === 0) {
          console.log(`余数为0的情况下：this.resultNum : ${maxInteger / temp} * ${temp}=  ${this.finallyNum}`)
        } else {
          const tempFinally = this.finallyNum - this.resultNum
          console.log('tempFinally:', tempFinally)
          console.log(`余数不为0的情况下：this.resultNum : ${tempFinally / temp} * ${temp}=  ${tempFinally}`)
        }
      } else if (remainder === 1) {
        console.log('除法')
        this.finallyNum = maxInteger
        this.resultNum = maxInteger % temp
        console.log('this.resultNum :', this.resultNum)
        if (this.resultNum === 0) {
          console.log(`余数为0的情况下：this.resultNum : ${this.finallyNum} / ${temp}=  ${maxInteger / temp}`)
        } else {
          const tempFinally = this.finallyNum - this.resultNum
          console.log('tempFinally:', tempFinally)
          console.log(`余数不为0的情况下：this.resultNum :${tempFinally} / ${temp}=  ${tempFinally / temp}`)
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>
