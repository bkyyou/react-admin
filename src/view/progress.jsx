
import React, { Component } from 'react';
import { Progress } from 'antd';

class MyProgress extends Component {
  // state = {  }
  render() { 
    return ( 
      <Progress strokeLinecap="square" type="dashboard" gapDegree={150} percent={75} />
      // <div>123</div>
    );
  }
}
 
export default MyProgress;