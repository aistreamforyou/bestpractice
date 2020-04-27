/**
 * @Description:
 * @author Weibel Lee
 * @date 2020/4/27
*/

/***
 * 计算内存
 */
function memory(){
  //计算内存占有率
  const os = require('os')
  const mem = os.freemem()/os.totalmem() * 100
  console.log(`内存占有率：${mem.toFixed(2)}%`)
}

/***
 * 下载资源
 * @param addr 资源地址
 * @param projName 仓库名称
 */
function download(addr, projName){
  // 下载
  const download = require('download-git-repo')
  const ora = require('ora')
  const process = ora('下载------项目')
  process.start()
  download('github:su37josephxia/vue-template','test',err => {
    if(err){
      process.fail()
    }else{
      process.succeed()
    }
  })
}

function asyncDownload() {
// 如何让异步任务串行化
  const repo = 'github:su37josephxia/vue-template'
  const desc = './test'
  clone(repo, desc)

  async function clone(repo, desc) {
    const {promisify} = require('util')
    const download = promisify(require('download-git-repo'))
    const ora = require('ora')
    const process = ora('项目------正在下载')
    process.start()
    try {
      await download(repo, desc)
    }catch (error) {
      process.fail()
    }
    process.succeed()
  }
}


module.exports = {
  memory,
  download,
  asyncDownload,
}
