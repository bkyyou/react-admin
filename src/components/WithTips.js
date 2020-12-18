import React from 'react';

const WithTips = Component => {
  class HOC extends React.Component {
    state = {
      showTips: false,
      content: ''
    }
    handleOver = (ev) => {

    }
    handleOut = (ev) => {

    }
    render() {
      return (
        <div onMouseOver={this.handleOver} onMouseOut={this.handleOut}>
          <Component action={this.state} {...this.props}></Component>
        </div>
      );
    }
  }

  return HOC
}

export default WithTips;