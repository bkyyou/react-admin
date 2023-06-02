import React from 'react';
import MyDialog, { open } from '../../components/myDialog/Index.jsx'
import { open2 } from '../../components/myDialog/Index2.jsx'

const TestDialog = () => {
  const click2 = () => {
    return new Promise(resolve => {
      // console.error(22)
      throw ''
    })
    // .catch(res => {
    //   console.log(2222222);
    // })
  }
  const click1 = async () => {
    const res = await click2()
    console.log(2222);
  }
  return (
    <div>
      <button onClick={() => {
        // MyDialog.open({
        //   alertTip:"这是一个测试弹框",
        //   closeAlert:function(){
        //       console.log("关闭了...");
        //   }
        // });
        open({
            alertTip:"这是一个测试弹框",
            closeAlert:function(){
                console.log("关闭了...");
            }
          });
      }}>弹窗</button>
      <button onClick={() => {
        open2().then(res => {
            console.log(res);
          });
      }}>弹窗2</button>
      <div>
        <button onClick={click1}>代码执行按钮</button>
      </div>
    </div>
  )
}

export default TestDialog;