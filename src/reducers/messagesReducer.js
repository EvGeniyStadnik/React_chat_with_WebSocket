
const messageReducer = (state = {}, action) => {
  switch(action.type){
    case 'TYPE':
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  }
};

export default messageReducer;