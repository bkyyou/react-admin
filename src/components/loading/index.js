import React from 'react';
import { Spin } from 'antd';
import { connect } from 'react-redux';
import { bindActions, bindState } from '../../reducer/reducer';
import './index.scss';
 
class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      loadingTip: '加载中...'
    }
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    let { loadingState } = nextProps;
    return {
      ...loadingState
    }
  }

  render() {
    // let showLoading;
    let { loadingTip, show } = this.state
    console.log('this.state', this.state);
    console.log('this.props', this.props);
    if (show) {
      return (
         <div className="loading_container">
            <div>{loadingTip}</div>
            <Spin size="large" />
         </div>
      );
    }
    return null
  }
}

export default connect(bindState, bindActions)(Loading);