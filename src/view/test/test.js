import React, { useState } from 'react';

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

  return (
    <div>
      <div>
        {count}
      </div>
      <button onClick={() => setCount(count + 1)}>update count </button>
      <Child data={data} />
    </div>
  )
}

function fn1({obj}) {
  console.log('obj', obj);
}

// fn1({a:1})
fn1({obj: {a:1}})

export default HookEg
