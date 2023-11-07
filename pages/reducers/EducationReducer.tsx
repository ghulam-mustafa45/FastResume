const initialState={
    name :'University Name',
    location :"",
    degree :'DEGREE',
    field :'BACHELOR',
    sdate :'2010',
    edate:'2014',
}

const EducationReducer= (state = initialState, action:any) => {
    switch (action.type) {
        case 'SET_EDUCATION':
  return { ...state, ...action.payload };
  default:
    return state;
}
};

export default EducationReducer
