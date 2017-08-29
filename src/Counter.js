import React, { Component } from 'react';
import './assets/styles/style.scss';

class Counter extends Component {
  state = {
    count: null
  };
  render() {
    return (
      <div
        style={{color: 'green'}}
        onClick={() => this.setState({count: ~~(Math.random() * 10)})}
      >
        Count {this.state.count}
      </div>
    );
  }
}

export default Counter;