import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateName, asynUpdateName, queryAsyncName } from '../../action/ReduxPage';

@connect( 
  (state) => state.ReduxPage,
  (dispatch) => ({
    updateName: (params) => dispatch(updateName(params)),
    asynUpdateName: (params) => dispatch(asynUpdateName(params)),
    queryAsyncName: (params) => dispatch(queryAsyncName(params)),
  })
)
class ReduxPage extends Component {

  updateName = () => {
    // console.log(11111)
    // this.props.updateName('修改 homeName');
    this.props.asynUpdateName('异步修改 homeName');
  }
  queryName = () => {
    // console.log(11111)
    let queryName = this.props.queryAsyncName();
    console.log('queryName', queryName)
  }

  render() {
    const { homeName } = this.props;
    return (
      <div>
        <div> Redux {homeName}  </div>
        <button type="button" onClick={this.updateName}>修改</button>
        <button type="button" onClick={this.queryName}>查询</button>
      </div>
    )
  }
}

export default ReduxPage;