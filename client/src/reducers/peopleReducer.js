const peopleReducer = (state = [], action) => {
  switch(action.type){
    case 'CONNECTED_NEW_USER':
      return [
        ...state,
        action.userName
      ];
    default:
      return state;
  }
};

export default peopleReducer;
