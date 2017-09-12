const initState = [
  '@Vitya',
  '@Sasha',
  '@Igor',
  '@Yevgen',
];

const peopleReducer = (state = initState, action) => {
  switch(action.type){
    case 'ADD_NEW_USER':
      return [
        ...state,
        'Alex ' + Date.now()
      ];
    default:
      return state;
  }
};

export default peopleReducer;
