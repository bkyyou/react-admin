import React, { useState } from 'react';
import { getPDFRandomNum } from '../../api/upload/index';

const Child = (({ data }) => {
  console.log('child render...', data)
  return (
    <div>
      <div>child</div>
      <div>{data.name}</div>
    </div>
  );
})

const HookEg = () => {
  console.log('Hook render...')
  const [count, setCount] = useState(0)
  // const [name, setName] = useState('rose')
  const name = 'zs';

  const data = {
    name
  }

  // https://zhuanlan.zhihu.com/p/77672133


  function upload() {
    getPDFRandomNum({min: 1, max: 10, count: 10, sym: '', digits: 2, numRepeat: 1, symPosi: 1}).then(response => {
      console.log('response', response);
      // const filename = response.headers['content-disposition'].match(
      //   /filename=(.*)/
      // )[1]
      console.log("response.headers['content-disposition']", response.headers['content-disposition'])
      const filename = '1.pdf';
      // 将二进制流转为blob
      const blob = new Blob([response.data], { type: 'application/pdf;chartset=utf-8' })
      if (typeof window.navigator.msSaveBlob !== 'undefined') {
        // 兼容IE，window.navigator.msSaveBlob：以本地方式保存文件
        window.navigator.msSaveBlob(blob, decodeURI(filename))
      } else {
        // 创建新的URL并指向File对象或者Blob对象的地址
        const blobURL = window.URL.createObjectURL(blob)
        // 创建a标签，用于跳转至下载链接
        const tempLink = document.createElement('a')
        tempLink.style.display = 'none'
        tempLink.href = blobURL
        tempLink.setAttribute('download', decodeURI(filename))
        // 兼容：某些浏览器不支持HTML5的download属性
        if (typeof tempLink.download === 'undefined') {
          tempLink.setAttribute('target', '_blank')
        }
        // 挂载a标签
        document.body.appendChild(tempLink)
        tempLink.click()
        document.body.removeChild(tempLink)
        // 释放blob URL地址
        window.URL.revokeObjectURL(blobURL)
      }
    })
  }

  return (
    <div>
      <div>
        {count}
      </div>
      <button onClick={() => setCount(count + 1)}>update count </button>
      <Child data={data} />
      <div onClick={upload}>下载</div>
    </div>
  )
}

function fn1({obj}) {
  console.log('obj', obj);
}

// fn1({a:1})
fn1({obj: {a:1}})

export default HookEg
