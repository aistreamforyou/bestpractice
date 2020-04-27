
// 引用方式
const data = {
  name: 'lucy',
  age: 12
}.toString()
Buffer.from(data).toString('utf-8')

// Buffer - 用于在 TCP 流、文件系统操作、以及其他上下文中与八位字节流进行交互。 八位字节组成的数
// 组，可以有效的在JS中存储二进制数据

// 创建一个长度为10字节以0填充的Buffer
const buf1 = Buffer.alloc(10)
console.log(buf1,'+++',buf1.toString())

// 创建一个buffer包含ascii
//ascii码查询：http://ascii.911cha.com
const buf2 = Buffer.from('a')
console.log(buf2, buf2.toString())

// 创建Buffer包含UTF-8字节
// UFT-8： 一种变长的编码方案，使用 1~6 个字节来存储；
// UFT-32：一种固定长度的编码方案，不管字符编号大小，始终使用 4 个字节来存储；
// UTF-16：介于 UTF-8和 UTF-32 之间，使用 2 个或者 4 个字节来存储，长度既固定又可变。

const buf3 = Buffer.from('Buffer创建方法')
console.log(buf3)

// 写入buffer数据
buf1.write('hello')
console.log(buf1)

// Buffer类似数组，所以很多数组方法它都有 GBK 转码 iconv-lite




















