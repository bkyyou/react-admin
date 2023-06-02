import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal } from 'antd';


const MyDialog2 = (props) => {
  console.log('MyDialog2 props', props);
  const {
    // open, 
    wrapDom,
    resolve,
  } = props;
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(true);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    wrapDom.remove();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
    resolve('ok')
  };

  const handleCancel = () => {
    try {
      // console.error();
      wrapDom.remove();
      setOpen(false);
      resolve('cancel')
    } catch (error) {
      console.log(error);
    }
  };

  {/* <Button type="primary" onClick={showModal}>
    Open Modal with customized footer
  </Button> */}
  return (
      <Modal
      destroyOnClose={true}
        wrapClassName="you-dialog"
        open={open}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            Submit
          </Button>,
          <Button
            key="link"
            href="https://google.com"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Search on Google
          </Button>,
        ]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
  );
}

export const open2 = (params) => {
  let div = document.createElement('div');
  document.body.appendChild(div);
  return new Promise(resolve => {
    let props = {wrapDom: div, resolve};
    let Box = ReactDOM.render(React.createElement(
      MyDialog2,
      props
    ), div);
  })
}

// console.log(React.createElement(MyDialog2));
// let div = document.createElement('div');
// document.body.appendChild(div);
// console.log(ReactDOM.render(React.createElement(MyDialog2, {open: true}), div));
// console.log(ReactDOM.render(<MyDialog2></MyDialog2>, div));

export default MyDialog2;