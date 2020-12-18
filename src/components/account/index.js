import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import cookie from 'react-cookies'

import { login, register } from '../../api/login/index.js'
import { Form, Input, Button, Row, Col, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { reg_pwd } from '../../util/vaildate.js';
import Code from '../Code.js';
import './index.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
  }
  onFinish = values => {
    console.log('Received values of form: ', values);
    // this[this.props.type]();
    let type = this.props.type;
    let flag = type === 'register';
    let typeFun = (flag) ? register : login;
    typeFun(values).then(res => {
      if (res.data.code === 200) {
        console.log('accout res', res);
        message.success(type === 'login' ? '登录成功' : '注册成功');
        if (flag) {
          console.log('register');
          this.props.history.push('/login');
        } else {
          cookie.save('token', res.data.data.token);
          this.props.history.push('/home');
        }
      } else {
        message.error(res.data.msg)
      }
    }).catch(err => {
      console.log(err);
    })
  }
  changUserName = (e) => {
    console.log('e.target.value')
    this.setState({
      username: e.target.value
    })
  }
  render() {
    let { type } = this.props;
    let { username } = this.state;
    return (
      <div className='login_container'>
        <div className='login_wrapper'>
          <div className='loging_header'>
            {this.props.children}
          </div>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
          >
            <Form.Item
              name="username"
              rules={
                [
                  {
                    type: 'email',
                    message: '请输入邮箱',
                  },
                  { required: true, message: '邮箱不能为空' }
                ]
              }
            >
              <Input onChange={this.changUserName} value={username} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true, message: '密码不能为空'
                },
                { pattern: reg_pwd, message: '必须字母 + 函数， 6 - 20 位' }
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            {
              type === 'register' ? <Form.Item
                name="pwd"
                dependencies={['password']}
                rules={[
                  // { 
                  //   required: true, message: '密码不能为空' 
                  // },
                  // { pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/, message: '必须字母 + 函数， 6 - 20 位'},
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject('两次密码不一致');
                    },
                  }),
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item> : null
            }

            <Form.Item>
              <Row gutter={8}>
                <Col span={16}>
                  <Form.Item
                    name="captcha"
                    rules={[
                      {
                        required: true,
                        message: '请填写验证码',
                      },
                      { pattern: /^[0-9]{4}$/, message: '必须是4位数字' }
                    ]}
                  >
                    <Input
                      placeholder="code"
                      prefix={<LockOutlined className="site-form-item-icon" />}
                    />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Code username={username} type={type}></Code>
                </Col>
              </Row>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block className="login-form-button">
                {type === 'register' ? '注册' : '登录'}
              </Button>
            </Form.Item>
          </Form>
        </div>
        {/* <div className='login_wrapper'>
          <div className='login_title'> 登陆页 </div>
          <div className='list'>
            <div className='desc'>用户名:</div>
            <div>
              <Input></Input>
            </div>
          </div>
          <div className='list'>
            <div className='desc'>密码:</div>
            <div>
              <Input></Input>
            </div>
          </div>
          <div className='login_btn'>
            <Button onClick={
              () => {
                console.log('onClick')
              }
            }>登录</Button>
          </div>
        </div> */}
      </div>
    )
  }
}

export default withRouter(Login);
// export default Login;