import React, {Component} from 'react';
import { getUserList } from '../../../api/login/index.js';

class UserList extends Component {
  componentDidMount() {
    getUserList().then(res => {
      console.log('res', res);
    })
  }
  render() {
    return (
      <div>UserList</div>
    )
  }
}

export default UserList;