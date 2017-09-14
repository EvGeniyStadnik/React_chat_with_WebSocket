const peopleReducer = (state = [], action) => {
  switch(action.type){
    case 'CONNECTED_NEW_USER':
      return [
        ...state,
        {
          id: action.userID,
          data: action.userName
        }
      ];
      break;
    default:
      return state;
  }
};

export default peopleReducer;
