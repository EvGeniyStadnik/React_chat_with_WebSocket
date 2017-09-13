import React, { Component } from 'react';
import HocChild from './HocChild';

class HocExample extends Component {
  state = {
    currency: {}
  };
  componentWillMount(){
    fetch('http://api.fixer.io/latest?base=USD')
      .then(r => r.json())
      .then(d => this.setState({ currency: d }))
      .catch(message => console.log('error in promise fixer.io ', message))
  }

  render() {
    return (
      <div style={{color: 'black'}}>
        <HocChild currency={this.state.currency} />
      </div>
    );
  }
}

export default HocExample;

