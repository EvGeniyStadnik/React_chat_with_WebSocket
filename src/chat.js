import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Messages from './Messages';
import Users from './Users';
import './assets/styles/style.scss';

class Chat extends Component {
  render() {
    console.log(this.props);
    return (
      <main className="main-wrapper">
        <Messages messages={this.props.messages} />
        <Users users={this.props.users} addNewUser={this.props.addNewUser} />
      </main>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.usersReducer,
    messages: state.messageReducer
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    addNewUser: (username) => dispatch({ type: 'ADD_NEW_USER', username })
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Chat);

