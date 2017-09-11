import { combineReducers } from 'redux'
import messagesReducer from './messagesReducer';
import peopleReducer from './peopleReducer.js';

const reducers = combineReducers({
  messagesReducer,
  peopleReducer
});

export default reducers;
