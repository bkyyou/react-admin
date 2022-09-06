import React, { useState } from "react";
import { Button, Form, Input, Radio, InputNumber } from "antd";
import {
  downloadRandomNum,
  downloadExcel,
  uploadApi,
} from "../../api/upload/index";
import "./index.css";

const Upload = () => {
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };
  const tailLayout = {
    wrapperCol: { offset: 4, span: 20 },
  };

  function upload(data) {
    downloadRandomNum(data).then((response) => {
      console.log("response", response);
      // const filename = response.headers['content-disposition'].match(
      //   /filename=(.*)/
      // )[1]
      const filename = "testFile.xlsx";
      // 将二进制流转为 blob
      const blob = new Blob([response.data], {
        type: "application/octet-stream",
      });
      console.log("blob", blob);
      if (typeof window.navigator.msSaveBlob !== "undefined") {
        // 兼容IE，window.navigator.msSaveBlob：以本地方式保存文件
        window.navigator.msSaveBlob(blob, decodeURI(filename));
      } else {
        // 创建新的URL并指向File对象或者Blob对象的地址
        const blobURL = window.URL.createObjectURL(blob);
        // 创建a标签，用于跳转至下载链接
        const tempLink = document.createElement("a");
        tempLink.style.display = "none";
        tempLink.href = blobURL;
        tempLink.setAttribute("download", decodeURI(filename));
        // 兼容：某些浏览器不支持HTML5的download属性
        if (typeof tempLink.download === "undefined") {
          tempLink.setAttribute("target", "_blank");
        }
        // 挂载a标签
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
        // 释放blob URL地址
        window.URL.revokeObjectURL(blobURL);
      }
    });
  }

  const onFinish = (values) => {
    console.log("Success:", values);
    upload(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const downloadExcelResuest = async () => {
    const response = await downloadExcel();
    console.log("response", response);
    const filename = "testFile.xlsx";
    // 将二进制流转为 blob
    const blob = new Blob([response.data], {
      type: "application/octet-stream",
    });
    console.log("blob", blob);
    const blobURL = window.URL.createObjectURL(blob);
    // 创建a标签，用于跳转至下载链接
    const tempLink = document.createElement("a");
    tempLink.style.display = "none";
    tempLink.href = blobURL;
    tempLink.setAttribute("download", decodeURI(filename));
    // 兼容：某些浏览器不支持HTML5的download属性
    if (typeof tempLink.download === "undefined") {
      tempLink.setAttribute("target", "_blank");
    }
    // 挂载a标签
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
    // 释放blob URL地址
    window.URL.revokeObjectURL(blobURL);
  };

  const uploadExcel = async (e) => {
    // console.log("uploadExcel", e.target.files);
    const files = e.target.files;
    let fd = new FormData();
    console.log('files', files);
    // fd.append('file', files)//文件
    for (let item of e.target.files) {
      fd.append("file", item);
    }
    console.log('fd', fd);
    const response = await uploadApi(fd);
    // console.log("response", response);

    // return

    const filename = "testFile.xlsx";
    // 将二进制流转为 blob
    const blob = new Blob([response.data], {
      type: "application/octet-stream",
    });
    console.log("blob", blob);
    const blobURL = window.URL.createObjectURL(blob);
    // 创建a标签，用于跳转至下载链接
    const tempLink = document.createElement("a");
    tempLink.style.display = "none";
    tempLink.href = blobURL;
    tempLink.setAttribute("download", decodeURI(filename));
    // 兼容：某些浏览器不支持HTML5的download属性
    if (typeof tempLink.download === "undefined") {
      tempLink.setAttribute("target", "_blank");
    }
    // 挂载a标签
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
    // 释放blob URL地址
    window.URL.revokeObjectURL(blobURL);
  };

  const uploadImages = (e) => {
    let read = new FileReader(); //创建文件读取对象
    let file = e.target.files[0]; //fileList name名字 size大小 type类型
    read.readAsDataURL(file); //读取file信息将读取到的内容存储到result中
    //读取成功触发的函数
    read.onload = function () {
      // state.onImg = read.result; //result 就是base64的缩略图地址
      //注意result只有在onload函数中才能触发，不然返回的base64就是null
      console.log('read.result', read.result);
    };
  };

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
          rules={[{ required: true, message: "请填入最小值!" }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="最大值"
          name="max"
          rules={[{ required: true, message: "请填入最大值!" }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="生成个数"
          name="count"
          rules={[{ required: true, message: "请填入生成个数!" }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="保留位数"
          name="digits"
          rules={[{ required: true, message: "请填入保留位数!" }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item name="numRepeat" label="数字是否重复">
          <Radio.Group>
            <Radio value="1">是</Radio>
            <Radio value="2">否</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="符号" name="sym">
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

      <br />

      <Button onClick={downloadExcelResuest}>下载</Button>

      {/* <Button  onClick={downloadExcelResuest}>上传</Button> */}
      <br />
      <br />

      <div>上传特定execl文件文件</div>
      <input type="file" multiple id="upload" onChange={uploadExcel} />

      <br />
      <br />
      <div>测试本地展示上传图片图片</div>
      <input type="file" multiple id="upload" onChange={uploadImages} />
    </div>
  );
};

export default Upload;
