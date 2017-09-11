const initState = [
  '@Vitya',
  '@Sasha',
  '@Igor',
  '@Yevgen',
];

const peopleReducer = (state = initState, action) => {
  switch(action.type){
    case 'TYPE':
      return [
        ...state,
        ...action.people
      ];
    default:
      return state;
  }
};

export default peopleReducer;
