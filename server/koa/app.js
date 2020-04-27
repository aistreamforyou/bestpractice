const WBL = require('./wbl')

const app = new WBL()
app.use((req,res) => {
  res.writeHead(200)
  res.end('hi wbl')
})

app.use(ctx => {
  ctx.body = 'hehe'
})

app.listen(3000, () => {
  console.log('监听端口3000')
})
