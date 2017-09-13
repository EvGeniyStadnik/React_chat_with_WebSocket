import React, { Component } from 'react';
import hocLoader from './hocLoader';

class HocChild extends Component {
  render() {
    const { currency, timeDiff } = this.props;
    // if (!Object.keys(currency).length){
    //   return <div>LOADING...</div>
    // }
    return (
      <div>
        Date: {currency.date} <br />
        1 USD = {currency.rates['EUR']} EUR
        <br /><br />
        <p>Time: {timeDiff}s</p>
      </div>
    );
  }
}

export default hocLoader('currency')('http://s1.ticketm.net/tm/en-us/img/sys/1000/gray75_polling.gif')(HocChild);

