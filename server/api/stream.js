/**
 * @Description:
 * @author Weibel Lee
 * @date 2020/4/27
*/

// stream是用于与node中流数据交互的接口

const fs = require('fs')

// const rs = fs.createReadStream('../utils.js')
// const ws = fs.createWriteStream('./tempFile/utils.js')
// rs.pipe(ws)
//
// // 二进制友好，图片操作
// const rs2 = fs.createReadStream('./口岸通关.png')
// const ws2 = fs.createWriteStream('./kouan.png')
// rs2.pipe(ws2)

// 响应图片请求
const http = require('http')
const server = http.createServer((request, response)=>{
  const {url, method, headers} = request;
  if(url==='home'&&method === 'GET' &&
    headers.accept.indexOf('image/*')!==-1
  ){
    // fs.createReadStream('.' + url).pipe(response)
    fs.createReadStream('./口岸通关.png').pipe(response)
  }else{
    fs.createReadStream('./口岸通关.png').pipe(response)
  }
})

server.listen(4000)

