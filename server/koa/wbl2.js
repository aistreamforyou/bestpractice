const http = require('http')
const context = require('./context')
const request = require('./request')
const response = require('./response')

class WBL{
  listen(...args){
    const server = http.createServer((req,res) => {
      // 创建上下文
      let ctx = this.createContext(req,rex)
      this.callback(ctx)
      // 响应
      res.end(ctx.body)
    })
    // ...
  }
  // 构建上下文，把res和req都挂载到ctx上，并且ctx.req和
  //ctx.res同时保存
  createContext(req,res){
    const ctx = Object.create(context)
    ctx.request = Object.create(request)
    ctx.response = Object.create(response)

    ctx.req = ctx.request.req = req;
    ctx.res = ctx.response.res = res;

    return ctx
  }
}
