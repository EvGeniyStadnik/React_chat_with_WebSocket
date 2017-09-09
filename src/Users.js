import React, { Component } from 'react';

class Users extends Component {
  render() {
    const { users, connectNewUser } = this.props;
    return (
      <div className="users">
        <h3 className="users__title">Online users:</h3>

        <ul>
          {users.map(u => {
            return (
              <li key={u}>{u}</li>
            )
          })}
        </ul>
        <button onClick={connectNewUser}>
          Add new user
        </button>
      </div>
    );
  }
}

export default Users;