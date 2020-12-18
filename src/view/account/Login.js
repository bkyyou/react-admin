import React, { Component,  } from 'react';

import Login from '../../components/account/index.js';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  goHref(url) {
    this.props.history.push(url)
  }
  render() {
    return (
      <Login type='login'>
        <div> 登录 </div>
        <div  onClick={ () => {
          this.goHref('/register')
        } }> 注册 </div>
      </Login>
    )
  }
}

export default Register;