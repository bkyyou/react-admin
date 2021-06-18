import React, { useEffect } from 'react';
// import styles from './DynamicTest.less';

function DynamicTest() {
  useEffect(() => {
    console.log(111)
  }, [])
  // 实际案例中，这里的实现逻辑可能非常复杂，我们想把它单独拎出来
  return <div>动态加载组件内容</div>;
}
// class DynamicTest extends React.Component{
//   render() {
//     return (
//       <div>动态加载组件内容</div>
//     )
//   }
// }

export default DynamicTest;