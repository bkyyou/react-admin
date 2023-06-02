import React, { useState, useRef, MutableRefObject } from 'react';


const DragCom = (props) => {
  console.log('props', props);
  const newChild = props.children
  return newChild;
}

const Content = () => {
  const list = ['合同', '1', '2', '3']
  return (
    <div className="wrapper">
      <div className="l">
      {/* {
        list.map((val, i) => {
          return (
            <DragCom key={i}> <div>{val}</div> </DragCom>
          )
        })
      } */}
      </div>
    </div>
  )
}

export default Content