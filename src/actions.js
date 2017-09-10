import faker from 'faker';

export const addNewUser = () => {
  const username = `@${faker.internet.userName().toLowerCase()}`;
  return dispatch => {
    dispatch({
      type: 'ADD_NEW_USER',
      username
    });
    dispatch(addNewMessage(
      username,
      'Hello guys...',
      Date.now()
    ))
  }
};

export const connectNewUser = () => {
  return (
    {
      type: 'CONNECTED_NEW_USER',
    }
  )
};

export const addNewMessage = (author, text, datetime) => {
  return (
    {
      type: 'ADD_NEW_MESSAGE',
      author,
      text,
      datetime
    }
  )
};