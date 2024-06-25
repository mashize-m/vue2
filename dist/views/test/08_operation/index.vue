<template>
  <div>
    <p><b>赋值运算符：+= 、=+、++(前)、++(后)</b></p>
    <div>A += B 等价于 A = A + B</div>
    <div>A =+ B 是一种特殊的赋值，将 B 转化为数字赋值给A。（= 是赋值，+ 代表后面的数字为正数；）</div>
    <div>++(前)：先自身加一，然后参与到运算中</div>
    <div>++(后)：先参与运算，然后再自身加一</div>
    <p><b>逻辑运算符：||、&&、??</b></p>
    <p><b>（1）逻辑或：const result = a || b。处理逻辑如下：</b></p>
    <div>1、从左到右依次计算操作数（a是操作数，b也是操作数，简单理解：就是参与或运算的变量）</div>
    <div>2、处理每一个操作数时，都将其转化为布尔值</div>
    <div>
      3、如果结果是
      <span>true</span>
      ，就停止后续计算，返回这个操作数的
      <span>初始值</span>
      。
    </div>
    <div>
      4、如果所有的操作数都被计算过（也就是：所有转换结果都是false），则返回最后一个操作数的
      <span>初始值</span>
      。
    </div>
    <p><b>（2）逻辑与：const result = a && b。处理逻辑如下：</b></p>
    <div>1、从左到右依次计算操作数（a是操作数，b也是操作数，简单理解：就是参与或运算的变量）</div>
    <div>2、处理每一个操作数时，都将其转化为布尔值</div>
    <div>
      3、如果结果是
      <span>false</span>
      ，就停止后续计算，返回这个操作数的
      <span>初始值</span>
      。
    </div>
    <div>
      4、如果所有转换结果都是true，返回最后一个操作数的
      <span>初始值</span>
      。
    </div>
    <p><b>（3）|| 和 ?? 的区别：</b></p>
    <div>1、||是先转Boolean，之后根据Boolean判断；</div>
    <div>2、??只判断null和undefined。</div>
    <div>const foo = ''</div>
    <div>const res1 = foo || '默认值'</div>
    <div>const res2 = foo ?? '默认值'</div>
    <div>console.log(res1) // 默认值</div>
    <div>console.log(res2) // ''(空字符串)</div>
  </div>
</template>

<script>
export default {
  name: 'operation',
  data () {
    return {
      a: 2,
      b: 3
    }
  },
  methods: {
    click1 () {
      this.a += this.b
      console.log('this.b:', this.b)
      console.log('this.a:', this.a)
    }
  }

}
</script>

<style lang="less" scoped>
.base {
  display: flex;
  align-items: center;
}
span {
  color: red;
}
</style>
