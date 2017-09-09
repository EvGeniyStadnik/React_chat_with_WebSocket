import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Messages from './Messages';
import Users from './Users';
import { connectNewUser, addNewMessage } from './actions';
import './assets/styles/style.scss';

class Chat extends Component {
  render() {
    console.log('props in Chat component', this.props);
    return (
      <main className="main-wrapper">
        <Messages messages={this.props.messages} addNewMessage={this.props.addNewMessage} />
        <Users users={this.props.users} connectNewUser={this.props.connectNewUser} />
      </main>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.usersReducer,
    messages: state.messagesReducer
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    connectNewUser: bindActionCreators(connectNewUser, dispatch),
    addNewMessage: bindActionCreators(addNewMessage, dispatch)
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Chat);

