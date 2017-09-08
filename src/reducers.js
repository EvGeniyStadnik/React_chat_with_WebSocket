import { combineReducers } from 'redux'

const usersState = ['@john234', '@smith234', '@yevgen2345'];
const messagesState = [
  {
    text: 'Hi',
    datetime: 1504873898058,
    author: 'john234'
  },
  {
    text: 'Hi John',
    datetime: 1504873898758,
    author: 'smith234'
  },
];

const usersReducer = (state = usersState, action) => {
  switch(action.type){
    case 'ADD_NEW_USER':
      return state.concat(action.username);
    default:
      return state;
  }
};

const messageReducer = (state = messagesState, action) => {
  return state;
};

export default combineReducers({
  usersReducer,
  messageReducer
});