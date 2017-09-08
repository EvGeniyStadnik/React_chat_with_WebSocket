import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import faker from 'faker';
import Messages from './Messages';
import Users from './Users';
import './assets/styles/style.scss';

class Chat extends Component {
  render() {
    const rndUsername = `@${faker.internet.userName().toLowerCase()}`;
    console.log(this.props);
    return (
      <main className="main-wrapper">
        <Messages />
        <Users />
      </main>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: state
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    addNewUser: (username) => dispatch({ type: 'ADD_NEW_USER', username })
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Chat);

