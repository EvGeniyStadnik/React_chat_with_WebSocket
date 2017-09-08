import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Messages from './Messages';
import Users from './Users';
import { addNewUser, addNewMessage } from './actions';
import './assets/styles/style.scss';

class Chat extends Component {
  render() {
    console.log(this.props);
    return (
      <main className="main-wrapper">
        <Messages messages={this.props.messages} addNewMessage={this.props.addNewMessage} />
        <Users users={this.props.users} addNewUser={this.props.addNewUser} />
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
    addNewUser: bindActionCreators(addNewUser, dispatch),
    addNewMessage: bindActionCreators(addNewMessage, dispatch)
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Chat);

