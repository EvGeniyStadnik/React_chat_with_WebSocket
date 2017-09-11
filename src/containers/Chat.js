import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PeopleList from 'containers/PeopleList';
import MessagesList from 'containers/MessagesList';
import store from '../store'

class Chat extends Component {
  render() {
    return (
      <Provider store={store}>
        <div class="container clearfix">
          <PeopleList />
          <MessagesList />
        </div>
      </Provider>
    );
  }
}

export default Chat;