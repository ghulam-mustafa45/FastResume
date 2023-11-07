const initialState={
    title: 'JOB' , 
    Employer: 'Company' ,
    City: 'Location' ,
    statee: 'state' ,
    sdate: '2015' ,
    edate: '2019' ,
}

const userReducerwork= (state = initialState, action:any) => {
    switch (action.type) {
        case 'SET_USER_WORK':
  return { ...state, ...action.payload };
  default:
    return state;
}
};

export default userReducerwork
