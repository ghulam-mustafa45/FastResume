import { userInfo } from 'os';
import React, { useState, useEffect  } from 'react';
import { connect } from 'react-redux';

const RetrieveUserComponent =(props) => {
  const [uname, setUname] = useState('');

  useEffect(() => {
    
    setUname(props.user.fname);
    console.log('useEffect triggered with username:', props.user.fname);
  }, [props.user.fname]);

return (
  <div>
    <h1 >User Information</h1>
    <p>First Name: {props.user.data.fname}</p>
    <p>Last Name: {props.user.data.lname}</p>
    <p>Profession: {props.user.data.profession}</p>
    <p>City: {props.user.data.city}</p>
    <p>State: {props.user.data.statee}</p>
    <p>Zip: {props.user.data.Zip}</p>
    <p>Phone: {props.user.data.phone}</p>
    <p>Email: {props.user.data.email}</p>
    <p> Email: {props.user.skills.selectedOptions}</p>
    </div>
);

}

const mapStateToProps = (state) => {
  console.log('State from mapStateToProps:', state);
  return {
    user: state,
  };
};

export default connect(mapStateToProps)(RetrieveUserComponent);