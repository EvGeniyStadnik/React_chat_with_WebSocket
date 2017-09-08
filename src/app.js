import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Chat from './chat';
import reducer from './reducers';
//-------------------------

const store = createStore(reducer);
window.store = store;
// store.subscribe(() => {
//   console.log('store has been changed');
// });
//------------------------

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Chat />
        </div>
      </Provider>
    );
  }
}

export default App;