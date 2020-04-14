/**
 * 大整数相加
 * 
 * 由于 JavaScript 能表示的整数的范围在 2 的 53 次幂之间，当处于这个区间之外的整数
 * JavaScript 无法处理，因此提供一个 大整数相加 的基础库，用于计算大整数相加的问题
 * 
 * 由于 JavaScript 无法表示数字类型的大整数，因此参数很返回的结果都为 字符类型的数字字符串
 */

export default function add(a, b){
  if (a.length == 0 || b.length == 0) {
    return ''
  }

  let i = a.length - 1
  let j = b.length - 1

  let carry = 0
  let result = ''

  while (i >=0 || j >= 0) {
    let x = 0, y = 0

    if (i >= 0) {
      x = a[i] - '0'
      i--
    }
    if (j >= 0) {
      y = b[j] - '0'
      j--
    }

    let sum = x + y + carry

    if (sum >= 10) {
      result = (sum-10) + result
      carry = 1
    } else {
      result = sum + result
      carry = 0
    }
  }

  if (carry > 0) {
    result = carry + result
  }

  return result
}

 