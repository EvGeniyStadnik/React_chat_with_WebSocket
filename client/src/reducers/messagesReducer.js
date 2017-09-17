
const messageReducer = (state = [], action) => {
  switch(action.type){
    case 'RECEIVE_NEW_MESSAGE':
      return [
        ...state,
        {
          author: action.author,
          text: action.text,
          time: action.time,
          color: action.color,
        },
      ];
    default:
      return state;
  }
};

export default messageReducer;