import React, { useState, useEffect  } from 'react';
import { connect } from 'react-redux';


const RetrieveSkills = (props) => {

  const { user } = props;

  return (
    <div>
      <div>
    <h1 className='font-bold text-lg'>Skills Information</h1>
    <p>skills:</p>  
    
    <ul>
          {user.skills.map((skillSet, setIndex) => (
            <ul key={setIndex}>
            {skillSet.selectedOptions.map((option, optionIndex) => (
              <li key={optionIndex}>{option}</li>
            ))}
          </ul>
          ))}
          
        </ul>
        </div>
       
    </div>
  )
}
const mapStateToProps = (state) => {
    console.log('State from mapStateToProps:', state);
    
    return {
      user: state,
    };
  };

  export default connect(mapStateToProps)(RetrieveSkills)

