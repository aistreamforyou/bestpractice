/**
 * @Description:
 * @author Weibel Lee
 * @date 2020/4/27
*/


function getPrototypeChain(obj){
  var protoChain = []
  while(obj = Object.getPrototypeOf(obj)){
    // 返回给定对象的原型，如果没有继承属性，则返回null
    protoChain.push(obj)
  }
  protoChain.push(null)
  return protoChain
}

const http = require('http')
const fs = require('fs')
const server = http.createServer((request, response) => {
  const {url, method} = request
  if(url === '/home' && method === 'GET'){
    fs.readFile('./index.html',(err, data)=>{
      if(err){
        response.writeHead(500,{
          'Content-type': 'text/plain;charset=utf-8'
        })
        response.end('500,服务器错误')
      }
    })
  }else if(url === '/users' && method === 'GET'){
    response.writeHead(200, {
      'Content-type':'text/plain;charset=utf-8'
    })
    response.end(JSON.stringify([
      {name: 'lucy',age: 12},
      {name: 'lucy',age: 12},
      {name: 'lucy',age: 12},
      {name: 'lucy',age: 12},
      {name: 'lucy',age: 12},
    ]))
  }else{
    response.statusCode = '404'
    response.setHeader('Content-type', 'text/plain;charset=utf-8')
    response.end('404，页面没有找到')
  }
})

server.listen(3000)



