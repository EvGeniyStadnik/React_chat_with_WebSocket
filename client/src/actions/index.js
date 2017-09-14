export const connectedNewUser = (userName, userID) => {
  return {
    type: 'CONNECTED_NEW_USER',
    userName,
    userID
  }
};