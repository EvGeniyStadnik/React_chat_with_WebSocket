const peopleReducer = (state = [], action) => {
  switch(action.type){
    case 'CONNECTED_NEW_USER':
      return [
        ...state,
        {
          id: action.userID,
          userName: action.userName
        }
      ];
    case 'DISCONNECTED_USER':
      return state.filter(u => {
        return u.id !== action.userID
      });
    default:
      return state;
  }
};

export default peopleReducer;
