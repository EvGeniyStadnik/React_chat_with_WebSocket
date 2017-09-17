import React, { Component } from 'react';
import ws from 'util/ws';

class ChatControl extends Component {

  state = {
    text: ''
  };

  handleChange = (e) => {
    this.setState({text: e.target.value})
  };

  handleSubmit = () => {
    ws.emit(this.state.text);
    this.textarea.value = '';
  };

  render() {
    return (
      <div class="chat-message clearfix">
        <form action="#" onSubmit={this.handleSubmit}>
          <textarea ref={elem => this.textarea = elem} onChange={this.handleChange} placeholder="Type your message" rows="4" />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default ChatControl;