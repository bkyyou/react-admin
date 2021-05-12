import React from 'react';
import { Button } from 'antd';
import FormRender, { connectForm } from 'form-render';
import { PlusOutlined } from '@ant-design/icons';
import './style/formRender.css'

// const schema = {
//   type: 'object',
//   properties: {
//     input1: {
//       title: '简单输入框',
//       type: 'string',
//       required: true,
//     },
//     select1: {
//       title: '单选',
//       type: 'string',
//       enum: ['a', 'b', 'c'],
//       enumNames: ['早', '中', '晚'],
//     },
//   },
// };

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schema1: {
        type: 'object',
        properties: {
          input1: {
            title: '简单输入框',
            type: 'string',
            required: true,
          },
          select1: {
            title: '单选',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['早', '中', '晚'],
          },
        },
      },
      schema2: {
        type: 'object',
        properties: {
          input2: {
            title: '简单输入框',
            type: 'string',
            required: true,
          },
          select3: {
            title: '单选',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['早', '中', '晚'],
          },
        },
      },
    };
  }
  add = () => {
    let { schema1 } = this.state;
    schema1.properties.select2 = {
      title: '简单输入框2',
      type: 'string',
      required: true,
    }
    this.setState({
      schema1
    })
  }
  finish = (msg) => {
    console.log('msg', msg);
  }
  render() {
    const { schema1, schema2 } = this.state;
    const { form } = this.props;
    return (
      <div className="formRender_container">
        <FormRender form={form} schema={schema1} onFinish={this.finish}/>
        <div>
          <PlusOutlined onClick={this.add} />
        </div>
        <FormRender form={form} schema={schema2} onFinish={this.finish}/>
        <Button type="primary" onClick={form.submit}>
          提交
        </Button>
      </div>
    );
  }
}

export default connectForm(Demo);