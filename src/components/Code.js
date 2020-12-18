import React, { Component } from 'react';
import { getMs } from '../api/login/index.js';
import { Button, message } from 'antd';
import { reg_emial } from '../util/vaildate.js';

class Code extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code_txt: '获取验证码',
      code_is_loading: false,
      code_flag: true
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  setCodeText() {
    let time = 4
    this.setState({
      code_txt: `${time}s`
    })
    this.timer = setInterval(() => {
      if (time <= 0) {
        clearInterval(this.timer);
        this.setState({
          code_flag: true,
          code_txt: '重新发送'
        })
        return
      };
      this.setState({
        code_txt: `${--time}s`
      })
    }, 1000);
  }

  getMs = () => {
    console.log(reg_emial.test(this.props.username));
    console.log(this.props.username);
    if (!this.state.code_flag) return;
    if (reg_emial.test(this.props.username)) {
      this.setState({
        code_is_loading: true,
        code_flag: false,
        code_txt: '发送中'
      })

      getMs({username: this.props.username, type: this.props.type}).then(res => {
        console.log('res', res);
        if (res.data.code === 200) {
          this.setCodeText();
          message.success('验证码: ' + res.data.data.code);
        } else {
          message.error(res.data.msg);
          this.setState({
            code_flag: true
          })
        }

        this.setState({
          code_is_loading: false
        });

      }).catch(err => {
        console.log('err', err);
      })
    } else {
      message.warning('请填写邮箱');
    }
  }

  render() {
    let { code_txt, code_is_loading } = this.state;
    return (
      <Button onClick={this.getMs} loading={ code_is_loading } type="primary" danger block>{ code_txt }</Button>
    )
  }
}

export default Code;