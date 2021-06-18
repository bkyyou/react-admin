function requestDistribution(arr, maxLimit) {
  let min = Math.min(arr.length, maxLimit);
  let runArr = [];
  for (let i = 0; i < min; i++) {
    runArr.push(fn2(arr.splice(0, 1)));
  }

  function fn() {
    console.log(arr)
    if (arr.length == 0) {
      return Promise.resolve(); 
    }
    return fn2(arr.splice(0, 1))
  }

  function fn2(url) {
    // console.log('url', url);
    return new Promise(resolve => {
      if (arr.length == 0) {
        resolve();
      } else {
        setTimeout(() => {
          resolve()
        }, 1000);
      }
    }).then(() => {
      // fn()
      // fn() {
        console.log('请求并发', arr.length);
        if (arr.length == 0) {
          return Promise.resolve(); 
        }
        return fn2(arr.splice(0, 1))
      // }
    })
  }


  Promise.all(runArr).then(res => {
    console.log('结束')
  });
}

requestDistribution([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 3)

// new Promise(resolve => {
//   setTimeout(() => {
//     console.log(1)
//     resolve()
//   }, 1000);
// }).then(res => {
//   return new Promise(resolve => {
//     console.log(2)
//     setTimeout(() => {
//       resolve()
//     }, 2000);
//   }).then(res => {
//     console.log(3)
//   })
// }).then(res => {
//   console.log('end')
// })