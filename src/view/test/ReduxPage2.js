import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActions, bindState } from '../../reducer/reducer';


class ReduxPage extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log('this.props', this.props);
  }
  updateName = () => {
    // console.log(11111)
    this.props.updateName('修改 homeName');
    // this.props.asynUpdateName('异步修改 homeName');
  }
  queryName = () => {
    // console.log(11111)
    let queryName = this.props.queryAsyncName(111);
    console.log('queryName', queryName);
  }
  updateNickName = () => {
    // this.props.updateNickName('ls');
    console.log('this.props.asyncUpdateNickName', this.props.asyncUpdateNickName);
    this.props.asyncUpdateNickName('ls');
  }

  render() {
    const { homeName, nickname } = this.props;
    return (
      <div>
        <div> Redux: {homeName}  </div>
        <div> nickname: {nickname}  </div>
        {/* <button type="button" onClick={this.updateName}>修改</button>
        <button type="button" onClick={this.queryName}>查询</button> */}
        <button type="button" onClick={this.updateNickName}>修改 nickname</button>
      </div>
    )
  }
}

export default connect(bindState, bindActions)(ReduxPage);