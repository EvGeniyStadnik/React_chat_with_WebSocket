import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChatHeader from 'components/ChatHeader';
import MessageItem from 'components/MessageItem';
import ChatControl from 'components/ChatControl';

class MessagesList extends Component {

  constructor(){
    super();
    this.ul = null;
    this.chatWrap = null;
  }

  componentDidUpdate(){
    console.log('this.chatWrap ', this.chatWrap);
    console.log('this.ul ', this.ul);
    this.chatWrap.scrollTop = this.ul.scrollHeight;
  }

  render() {
    const { messages } = this.props;
    return (
      <div class="chat">
        <ChatHeader />
        <div class="chat-history" ref={chatWrap => this.chatWrap = chatWrap}>
          <ul ref={ul => this.ul = ul}>
            {messages.map(m => {
              return <MessageItem key={m.time} {...m} />
            })}
          </ul>
        </div>

        <ChatControl />

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messagesReducer
  }
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);