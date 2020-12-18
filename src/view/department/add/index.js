import React, { Component } from 'react';

import { Form, InputNumber, Input, Radio, Button, message } from 'antd';
// import { FormInstance } from 'antd/lib/form';

import { addDepartment } from '../../../api/department/index.js';

import './index.scss';

// import { SmileOutlined } from '@ant-design/icons';
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

// const [form] = Form.useForm();

class Add extends Component {
  // state = {}
  // formRef = React.createRef<FormInstance>()
  constructor(props) {
    super(props);
    this.state = {
      // formRef: React.createRef()
    }

    this.formRef = React.createRef()
  }

  onFinish = values => {
    console.log(values);
    addDepartment(values).then(res => {
      console.log('res', res);
      // console.log(this.props);
      if (res.data.code === 200) {
        message.success('添加成功');
        this.onReset();
      } else {
        message.error('添加失败');
      }
    })
  }
  onReset = () => {
    // form.resetFields();
    this.formRef.current.resetFields();

  }
  render() {
    return (
      <div className="department_add_container">
        <Form {...layout} onFinish={this.onFinish} ref={this.formRef} name="basic">
          <Form.Item label="部门名称" name="departmentName" rules={[{ required: true, message: '请填写部门名称' }]}>
            <Input />
          </Form.Item>

          <Form.Item label="人数数量" name="peopleNum" rules={[{ required: true, message: '请填写人数数量' }]}>
            <InputNumber min={1} max={10} />
          </Form.Item>

          <Form.Item name="status" label="是否启用" rules={[{ required: true, message: '是否启用' }]}>
            <Radio.Group>
              <Radio value="1">启用</Radio>
              <Radio value="0">禁用</Radio>
            </Radio.Group>
          </Form.Item>

          {/* <Form.Item name={['user', 'introduction']} name="desc" label="备注">
            <Input.TextArea />
          </Form.Item> */}


          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
          </Button>
          </Form.Item>
        </Form>

      </div>
    );
  }
}

export default Add;