import { Button, Form, Select, Switch } from 'antd';
import React from 'react';
 
const AntdTest = () => {
  const [form] = Form.useForm();
  // console.log(form);
  const onFinish = (values) => {
    console.log('转换后的数据格式：');
    console.log(values); // {test: '1,2', state: 'open'}
    console.log(form.getFieldValue("test")); // 1,2
  };
 
 
  /**
   * Form.Item 数组<=>字符串转化
   * 
   * 改变值的流传顺序 getValueFromEvent -> normalize -> getValueProps -> 显示在页面上
   * 
   * getValueProps 赋值的时候，把给到组件的值进行转换, set 赋值 -只会- 走这里
   * 
   * set 主动赋值 只有 getValueProps 执行了
   * 
   * valuePropName 是给 input 赋值的， input 的类型有 text radio checkout 等, 
   *      <input value="" /> 给原生组件赋值有 value checked 等, 所有 Swtich 要设置成 checked。
   * 
   * 有时 valuePropName 和 getValueProps 这两个还得配合使用。。。
   * 
   */
  const ArrayToString = {
    valuePropName: 'value', // 可以注销, 本身 select 就是 value
    // 2
    getValueProps: (val) => {
      // 处理从 normalize 得到的数据, 给到 form 的; set 赋值 只会 走这里
      console.log("getValueProps", val); // getValueProps 1,2 选中触发4
      return { value: val ? val.split(',') : [] }
    },
    // 1
    getValueFromEvent: (e) => {
      // 这是你想要的数据结构, get 的时候返回这个值
      console.log("getValueFromEvent", e); // getValueFromEvent ['1', '2'] 选中触发1
      return e ? e.join(',') : '';
    },
    normalize: (val) => {
      // 处理从 getValueFromEvent 得到的数据
      console.log("normalize", val); // normalize 1,2 选中触发2
      return val;
    },
    onChange: val => {
      console.log("onChage", val); // onChage ['1', '2'] 选中触发3
    }
  };
 
  return (
   <>
     <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
      autoComplete="off"
      form={form}
    >
 
      <Form.Item label="平台" name="test" {...ArrayToString}>
        <Select
          style={{ width: '180px' }}
          mode="multiple"
          onChange={val => {
            console.log("onChage", val);
          }}
        >
          <Select.Option value={'1'}>安卓</Select.Option>
          <Select.Option value={'2'}>ios</Select.Option>
          <Select.Option value={'3'}>小程序</Select.Option>
        </Select>
      </Form.Item>
 
 
 
      <Form.Item
        label="开关"
        name="state"
        valuePropName="checked"
        initialValue="open"
        getValueProps={value => ({ checked: value === 'open' ? true : false })}
        getValueFromEvent={value => {
          return value ? 'open' : 'close';
        }}>
        <Switch />
      </Form.Item>
 
 
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    <div onClick={() => {
      form.setFieldValue("test", "1,2,3")
      form.setFieldValue("state", "close")
    }}>赋值</div>
   </>
  );
};
 
export default AntdTest;