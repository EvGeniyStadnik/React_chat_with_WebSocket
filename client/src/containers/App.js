import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ChatWrap from './ChatWrap';
import store from '../store';
window.store = store;

class App extends Component {
  render() {
    return (
      <Provider key={module.hot && Date.now()} store={store}>
        <div class="container clearfix">
          <ChatWrap />
        </div>
      </Provider>
    );
  }
}

export default App;