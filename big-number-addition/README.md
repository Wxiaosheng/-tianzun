# 大整数加法

由于 JavaScript 能表示的整数的范围在 2 的 53 次幂之间，当处于这个区间之外的整数  

JavaScript 无法处理，因此提供一个 大整数相加 的基础库，用于计算大整数相加的问题   

由于 JavaScript 无法表示数字类型的大整数，因此参数很返回的结果都为 字符类型的数字字符串  

## 快速开始

### 安装
```
  npm i big-number-addition
```

### 使用
```
  import bigNumberAddition from 'big-number-addition'

  // ...

  const stringNumber = bigNumberAddition('999', '1')
```