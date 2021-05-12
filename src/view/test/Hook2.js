import React, { Component, useContext, createContext, useState } from 'react';
import ReactDom from 'react-dom';

const C = createContext(null);

function App() {
  console.log('App');
  const [n, setN] = useState(0);
  return (
    <C.Provider value={{n, setN}}>
      <div className="app">
        <Baba></Baba>
      </div>
    </C.Provider>
  )
}

function Baba() {
  const {n, setN} = useContext(C);
  return (
    <div>
      我是父组件 n:{n} <Child></Child>
    </div>
  )
}
// todo??? 更改 context 中的值已经不合适使用 useContext 了, 可以使用 redux 或其他数据管理工具
function Child() {
  const {n, setN} = useContext(C);
  const onClick = () => {
    setN(i => i + 1)
  }
  return (
    <div>
      我是子组件 n:{n}
      <button onClick={onClick}>+1</button>
    </div>
  )
}

export default App;
