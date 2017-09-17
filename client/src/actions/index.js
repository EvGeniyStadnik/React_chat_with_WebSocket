export const connectedNewUser = ({ userName, userID }) => {
  return {
    type: 'CONNECTED_NEW_USER',
    userName,
    userID
  }
};

export const disconnectedUser = (userID) => {
  return {
    type: 'DISCONNECTED_USER',
    userID
  }
};

export const receiveNewMessage = ({author, text, time, color }) => {
  return {
    type: 'RECEIVE_NEW_MESSAGE',
    author, text, time, color
  }
};