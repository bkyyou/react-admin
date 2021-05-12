import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateName, asynUpdateName, queryAsyncName } from '../../action/ReduxPage';
import { updateNickName, asyncUpdateNickName } from '../../action/Global';

@connect( 
  (state) => { return {...state.ReduxPage, ...state.Global}},
  (dispatch) => ({
    updateName: (params) => dispatch(updateName(params)),
    asynUpdateName: (params) => dispatch(asynUpdateName(params)),
    queryAsyncName: (params) => dispatch(queryAsyncName(params)),
    updateNickName: (params) => dispatch(updateNickName(params)),
    asyncUpdateNickName: (params) => dispatch(asyncUpdateNickName(params)),
  })
)
class ReduxPage extends Component {
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
    this.props.asyncUpdateNickName('ls');
  }

  render() {
    const { homeName, nickname } = this.props;
    return (
      <div>
        <div> Redux {homeName}  </div>
        <div> nickname: {nickname}  </div>
        <button type="button" onClick={this.updateName}>修改</button>
        <button type="button" onClick={this.queryName}>查询</button>
        <button type="button" onClick={this.updateNickName}>修改 nickname</button>
      </div>
    )
  }
}

export default ReduxPage;