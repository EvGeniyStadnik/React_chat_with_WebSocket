import React, { Component } from 'react';
import faker from 'faker';

class Users extends Component {
  render() {
    const { users, addNewUser } = this.props,
    rndUsername = `@${faker.internet.userName().toLowerCase()}`;
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
        <button onClick={() => addNewUser(rndUsername)}>
          Add new user
        </button>
      </div>
    );
  }
}

export default Users;