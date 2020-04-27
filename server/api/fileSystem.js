/**
 * @Description:
 * @author Weibel Lee
 * @date 2020/4/27
*/
const fs = require('fs')

// 同步调用
const data = fs.readFileSync('../utils.js')
console.log(data)

// 异步调用
fs.readFile('../utils.js', (err, data) => {
  if(err) throw err;
  console.log('没有优化',data)
})
console.log('其他操作')

// fs 常常搭配path api使用
const path = require('path')
fs.readFile(path.resolve(__dirname, '../utils.js'), (err, data) => {
  if(err) throw err;
  console.log('搭配path',data)
})
console.log('搭配path模块后的异步调用')

// promisify
const {promisify} = require('util')
const readFile = promisify(fs.readFile)
readFile('../utils.js').then(console.log('promisify',data))

// fs promises API node v10
const fsp = require('fs').promises
fsp
  .readFile('../utils.js')
  .then(data => console.log('使用promises',data))
  .catch(err => console.log(err))

// async-await
// (async () => {
//   const fs = require('fs')
//   const {promisify} = require('util')
//   const readFile = promisify(fs.readFile)
//   const data = await readFile('../utils.js')
//   console.log('使用async await :', data)
// })()
