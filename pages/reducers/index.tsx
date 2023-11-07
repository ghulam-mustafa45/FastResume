import { combineReducers } from 'redux';
import userReducer from './userReducer';
import userReducerwork from './userReducerwork';
import EducationReducer from './EducationReducer';
import skillsReducer from './SkillsReducer';


const rootReducer = combineReducers({
  data: userReducer,
  work:userReducerwork,
  Education:EducationReducer,
  skills:skillsReducer

});

export default rootReducer;

