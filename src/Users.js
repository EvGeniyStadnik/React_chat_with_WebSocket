import React, { Component } from 'react';

class Users extends Component {
  render() {
    return (
      <div className="users">
        <h3 className="users__title">Online users:</h3>

        <ul>
          <li>Alex</li>
          <li>Vlad</li>
        </ul>
      </div>
    );
  }
}

export default Users;