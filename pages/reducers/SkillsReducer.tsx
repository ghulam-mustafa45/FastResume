
const initialState = [
  {
    selectedOptions: [
      'READING',
      'TRAVELLING',
      'MOVIES',
    ],
  },
  
];

function skillsReducer(state= initialState, action:any) {
    switch (action.type) {
      case 'SET_USER_SKILLS':
        return [...state, action.payload];
        
      default:
        return state;
    }
  }
  export default skillsReducer;
  