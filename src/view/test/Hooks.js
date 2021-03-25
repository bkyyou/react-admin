import React, { useState, useRef, useEffect, useMemo, useCallback, createContext, useContext } from 'react';

function CountDown() {
  const maxTime = 2;
  const [countDownText, setCountDownText] = useState('获取验证码');
  // eslint-disable-next-line
  const [count, setCount] = useState(0);
  const [name, setName] = useState('zs');
  const [timerNum, setTimerNum] = useState(maxTime);
  const [boolCountDown, setBoolCountDown] = useState(false);
  const refCountDown = useRef(null);
  const btnRef = useRef(null);

  const data = useMemo(() => {
    return {
      name
    }
  }, [name])

  const handleClick = () => {
    if (!boolCountDown) {
      setBoolCountDown(true);
    }
  }

  // const handleClick = useCallback(e => {
  //   if (!boolCountDown) {
  //     setBoolCountDown(true);
  //   }
  // }, [])

  refCountDown.current = () => {
    if (timerNum > 0) {
      setTimerNum(timerNum - 1);
    } else {
      setTimerNum(maxTime);
      setBoolCountDown(false);
      setCountDownText('重新获取');
    }
  }

  // const countDom = () => {
  //   if (timerNum > 0) {
  //     setTimerNum(timerNum - 1);
  //   } else {
  //     setTimerNum(maxTime);
  //     setBoolCountDown(false);
  //     setCountDownText('重新
  //   }
  // }

  useEffect(() => {
    if (boolCountDown) {
      console.log('boolCountDown--1', boolCountDown)
      const timer = setInterval(() => {
        refCountDown.current();
        // countDom()
        // console.log('timerNum', timerNum);
        // if (timerNum > 0) {
        //   setTimerNum(timerNum - 1);
        // } else {
        //   setTimerNum(maxTime);
        //   setBoolCountDown(false);
        //   setCountDownText('重新获取');
        // }

      }, 1000);
      return () => {
        console.log('boolCountDown--2', boolCountDown)
        console.log('maxTime--2', maxTime)
        clearInterval(timer)
      };
    }
  }, [boolCountDown]);

  // useEffect 里面使用到的state的值, 固定在了useEffect内部， 不会被改变，除非useEffect刷新，重新固定state的值。
  // 当前的 useEffect 被刷新了
  // useEffect(() => {
  //   console.log('use effect...')
  //   const onClick = () => {
  //     setCount(count + 1);
  //     // setInterval(() => {
  //     //   console.log('count', count);
  //     //   setCount(count + 1)
  //     // }, 1000);
  //   }
  //   btnRef.current.addEventListener('click', onClick, false)
  //   return () => btnRef.current.removeEventListener('click', onClick, false)
  // }, [count])

  // 这种应该绑定不上 dom 没有生成
  // const onClick = () => {
  //   setCount(count + 1);
  // }
  // btnRef.current.addEventListener('click', onClick, false)

  return (
    <div>
      <button type="button"
        onClick={handleClick}>
        {boolCountDown ? `${timerNum}s` : countDownText}
      </button>

      <div>{count}</div>
      <button ref={btnRef}>count增加</button>
    </div>
  )
}

export default CountDown;