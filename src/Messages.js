import React, { Component } from 'react';

class Messages extends Component {
  render() {
    const { messages } = this.props;
    return (
      <div className="chat">
        {messages.map(m => {
          let d = new Date(m.datetime);
          return (
            <p className="message">
              <span className="message__date">{ `${d.getFullYear()}. ${d.getMonth()}. ${d.getDay()}. ${d.getHours()}. ${d.getMinutes()}` }</span>
              <span className="message__author">{ m.author }</span>
              <span>{ m.text }</span>
            </p>
          )
        })}
        <input type="text" className="chat__input" />
      </div>
    );
  }
}

export default Messages;