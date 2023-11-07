// src/reducers/userReducer.js
const initialState = {
      fname: 'BAILEY',
      email: 'hello@reallygreatsite.com',
      lname: "DUPONT",
      profession: 'MARKETING MANAGER',
      city: 'Any City',
      statee: 'Anywhere St.',
      Zip: '123' ,
      phone: '123-456-7890',

};

  
  const userReducer = (state = initialState, action:any) => {
    switch (action.type) {
      case 'SET_USER_INFO':
        return { ...state, ...action.payload };
      default:
        return state;
    }
  };
  
  export default userReducer;
  