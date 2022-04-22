import React, { useState } from 'react';
import { Button,  Form, Input, Radio, InputNumber } from 'antd';
import { downloadRandomNum } from '../../api/upload/index';
import './index.scss';

const Upload = () => {
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };
  const tailLayout = {
    wrapperCol: { offset: 4, span: 20 },
  };

  function upload(data) {
    downloadRandomNum(data).then(response => {
      console.log('response', response);
      // const filename = response.headers['content-disposition'].match(
      //   /filename=(.*)/
      // )[1]
      const filename = 'testFile.xlsx';
      // 将二进制流转为 blob
      const blob = new Blob([response.data], { type: 'application/octet-stream' })
      console.log('blob', blob);
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

  const onFinish = (values) => {
    console.log('Success:', values);
    upload(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  }

  return (
    <div className="upload_container">
      <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="最小值"
        name="min"
        rules={[{ required: true, message: '请填入最小值!' }]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item
        label="最大值"
        name="max"
        rules={[{ required: true, message: '请填入最大值!' }]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item
        label="生成个数"
        name="count"
        rules={[{ required: true, message: '请填入生成个数!' }]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item
        label="保留位数"
        name="digits"
        rules={[{ required: true, message: '请填入保留位数!' }]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item name="numRepeat" label="数字是否重复">
        <Radio.Group>
          <Radio value="1">是</Radio>
          <Radio value="2">否</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        label="符号"
        name="sym"
      >
        <Input />
      </Form.Item>

      <Form.Item name="symPosi" label="符号位置">
        <Radio.Group>
          <Radio value="1">符号放到开头</Radio>
          <Radio value="2">符号放到最后</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
      {/* <Button onClick={upload}>下载</Button> */}
    </div>
  )
}

export default Upload
