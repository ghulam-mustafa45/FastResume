import React, { useState, useEffect  } from 'react';
import { connect } from 'react-redux';


const Retrievework = (props) => {
  return (
    <div>
      <div>
    <h1 className='font-bold text-lg'>User Information</h1>
    <p>Job Title: {props.user.work.title}</p>
    <p>Employer: {props.user.work.Employer}</p>
    <p>City: {props.user.work.City}</p>
    <p>State: {props.user.work.statee}</p>
    <p>Start Date: {props.user.work.sdate}</p>
    <p>End Date:{props.user.work.edate}</p>
    <br />
    <p>End Date:{props.user.Education.edate}</p>
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

  export default connect(mapStateToProps)(Retrievework)

