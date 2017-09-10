import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import Chat from './chat';
import rootReducer from './reducers';
import { addNewUser } from './actions';

//------Middleware-------------------

const loggerMiddleware = (store) => {
  return function (next) {
    return function (action) {
      console.log('trigger action', action);
      console.log('state before action', store.getState());
      const result = next(action);
      console.log('state after action', store.getState());
      return result;
    }
  }
};

const checkUserMiddleware = store => next => action => {
  if ( action.type === 'CONNECTED_NEW_USER' ) {
    let fakeRequest = () => new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, 1500)
    });

    fakeRequest().then(() => {
      store.dispatch(addNewUser())
    })
  }
  return next(action)
};

const store = createStore(
  rootReducer,
  applyMiddleware(reduxThunk, loggerMiddleware, checkUserMiddleware),
);

//-------------------------
window.store = store;
// store.subscribe(() => {
//   console.log('store has been changed');
// });

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