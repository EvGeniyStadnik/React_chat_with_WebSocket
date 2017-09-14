import React, { Component } from 'react';

class UserItem extends Component {
  render() {
    const { userName } = this.props;
    return (
      <li class="clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg" alt="avatar"/>
        <div class="about">
          <div class="name">{userName}</div>
          <div class="status">
            <i class="fa fa-circle online"></i>
            online
          </div>
        </div>
      </li>
    );
  }
}

export default UserItem;