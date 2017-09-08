import React, { Component } from 'react';

class Messages extends Component {
  render() {
    return (
      <div className="chat">
        <p className="message">
          <span className="message__date">08.09.2017</span>
          <span className="message__author">Vlad</span>
          <span>Hello</span>
        </p>
        <p className="message">
          <span className="message__date">08.09.2017</span>
          <span className="message__author">Alex</span>
          <span>Hello from Alex</span>
        </p>

        <input type="text" className="chat__input" />
      </div>
    );
  }
}

export default Messages;