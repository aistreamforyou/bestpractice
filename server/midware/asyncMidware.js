function compose(middlewares){
  return function(){
    return dispatch(0)

    //执行第0个
    function dispatch(i){
      let fn = middlewares[i]
      if(!fn){
        return Promise.resolve()
      }
      return Promise.resolve(
        fn(function next(){
          // promise完成后，再执行下一个
          return dispatch(i + 1)
        })
      )
    }
  }
}

async function fn1(next){
  console.log('fn1')
  await next()
  console.log('end fn1')
}

async function fn2(next) {
  console.log('fn2')
  await next()
  console.log('end fn2')
}

function fn3(next) {
  console.log('fn3')
}

function delay() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })
}

const midwares = [fn1, fn2, fn3]
const finalFn = compose(midwares)

finalFn()
