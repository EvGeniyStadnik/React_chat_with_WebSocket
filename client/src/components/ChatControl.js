import React, { Component } from 'react';

class ChatControl extends Component {
  render() {
    return (
      <div class="chat-message clearfix">
        <textarea placeholder="Type your message" rows="4" />
        <button>Send</button>
      </div>
    );
  }
}

export default ChatControl;