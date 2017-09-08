import React, { Component } from 'react';

class Messages extends Component {
  handleSubmint = (e) => {
    e.preventDefault();
    this.props.addNewMessage('@nik', this.input.value, Date.now());
    this.input.value = '';
  };
  render() {
    const { messages } = this.props;
    return (
      <div className="chat">
        <form action="#" onSubmit={this.handleSubmint}>
          {messages.map(m => {
            let d = new Date(m.datetime);
            return (
              <p key={m.datetime} className="message">
                <span className="message__date">{ `${d.getFullYear()}. ${d.getMonth()}. ${d.getDay()}. ${d.getHours()}. ${d.getMinutes()}` }</span>
                <span className="message__author">{ m.author }</span>
                <span>{ m.text }</span>
              </p>
            )
          })}
          <input ref={(input) => this.input = input} type="text" className="chat__input" />
        </form>
      </div>
    );
  }
}

export default Messages;

