// 定义一个函数来生成随机整数
function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// 定义一个函数来生成随机小数
function getRandomFloat (min, max) {
  return Math.random() * (max - min) + min
}

// 定义一个函数来生成随机算术表达式
function generateExpression () {
  // 定义运算符数组
  const operators = ['+', '-', '*', '/']

  // 定义数字数组
  const numbers = []
  for (let i = 1; i <= 20; i++) {
    numbers.push(i)
  }

  // 生成随机算术表达式
  let expression = ''
  for (let i = 0; i < 4; i++) {
    // 生成随机数字
    const number1 = numbers[getRandomInt(0, numbers.length - 1)]
    console.log('number1:', number1)
    const number2 = numbers[getRandomInt(0, numbers.length - 1)]
    console.log('number2:', number2)

    // 生成随机运算符
    const operator = operators[getRandomInt(0, operators.length - 1)]
    console.log('operator:', operator)

    // 如果是除法，则确保除数不为0
    if (operator === '/' && number2 === 0) {
      i--
      continue
    }

    // 将数字和运算符添加到表达式中
    expression += number1 + operator + number2
  }

  // 返回表达式
  return expression
}

// 定义一个函数来计算算术表达式的值
function evaluateExpression (expression) {
  // 使用eval函数计算表达式的值
  const result = eval(expression)

  // 返回结果
  return result
}

// 定义一个函数来格式化结果
function formatResult (result) {
  // 如果结果是整数，则直接返回
  if (Number.isInteger(result)) {
    return result
  }

  // 如果结果是小数，则保留两位小数
  return result.toFixed(2)
}

// 定义一个函数来生成自动出加减乘除口算题的功能
function generateMathProblem () {
  // 生成随机算术表达式
  const expression = generateExpression()

  // 计算表达式的值
  const result = evaluateExpression(expression)

  // 格式化结果
  const formattedResult = formatResult(result)

  // 返回表达式和结果
  return {
    expression,
    result: formattedResult
  }
}

export {
  generateMathProblem
}
