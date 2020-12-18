import React, { Component,  } from 'react';

import Login from '../../components/account/index.js';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  goHref (url) {
    // console.log(url);
    this.props.history.push(url);
  }
  render() {
    return (
      <Login type='register'>
        <div> 注册 </div>
        <div onClick={ () => {
          this.goHref('/login')
        } }> 登录 </div>
      </Login>
    )
  }
}

export default Register;