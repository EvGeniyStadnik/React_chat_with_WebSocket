export const connectedNewUser = (userName, userID) => {
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