import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Chat from './chat';
//-------------------------
const usersState = ['@john234', '@smith234', '@yevgen2345'];
const reducer = (state = usersState, action) => {
  switch(action.type){
    case 'ADD_NEW_USER':
      return state.concat(action.username);
    default:
      return state;
  }
};
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