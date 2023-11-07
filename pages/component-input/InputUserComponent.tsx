import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import Preview_side from '../previewresume/Preview_side';
import NewNavbar from '../Navbar/NewNavbar';


const InputUserComponent = ({ user, setUserInfo }) => {
  const router = useRouter();
  const [localUserInfo, setLocalUserInfo] = useState({});

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [profession, setprofession] = useState('');
    const [city, setcity] = useState('');
    const [statee, setstatee] = useState('');
    const [Zip, setZip] = useState('');
    const [phone, setphone] = useState('');


    const handleInputChange = (e) => {
      // Update local state as the user types
      setLocalUserInfo({
        ...localUserInfo,
        [e.target.name]: e.target.value,
      });
    };

    const handleSave = () => {
      const userInfo = { fname, email,lname,profession, city,statee,Zip,phone};
      const updated = { ...user, ...localUserInfo };
      console.log('Dispatching action to set user info:', userInfo);
      setUserInfo(updated);
      router.push('/work-hiatory/Inputwork');
    };
    
  return (
    <>
    <NewNavbar/>
   
    <div className='bg-white pt-8 pb-10'>
        
    <div id='main'>
          <div className='w-[85%] mx-auto'>
            <div  >
              <div>
                    <div className=''>
                        <h2 className='text-[#0066cf] text-[1.5rem] font-semibold text-3xl'>What’s the best way for an employer to contact you?</h2>
                        <span className='hidden sm:block text-[1.125rem] pt-2 text-gray-500'>We recommend adding an email and phone number</span>
                    </div>
                  <div className='inline-flex space-x-9   mt-10' id='info+image-flex'>
                  <div id='info-data ' className='w-[60%] space-y-10'>

              <div className='inline-flex space-x-8 w-full' id='input-row-1'>
                    <div className='w-1/2' id='f-mame'>
                        <label htmlFor='fname' className='font-semibold'>First Name</label >
                        <input className='border-2 rounded-lg w-full h-[85%] px-2' type="text" 
                        value={localUserInfo.fname || (user && user.fname) || ''}             
                        onChange={handleInputChange}
                        name="fname" id="fname" />
                      </div>

                      <div className='w-1/2' id='f-mame'>
                        <label htmlFor='lname' className='font-semibold'>Last Name</label >
                        <input className='border-2 rounded-lg w-full h-[85%] px-2 ' type="text" 
                        value={localUserInfo.lname || (user && user.lname) || ''} 
                        onChange={handleInputChange}
                        name="lname" id="lname" />
                      </div>
              </div>
                <div id='profession-row-2 ' className='w-full'>
                <label htmlFor='profession' className='font-semibold'>Profession</label>
                  <input className='border-2 rounded-lg w-full  h-[45px] px-2' type="text" 
                  value={localUserInfo.profession || (user && user.profession) || ''}  
                  onChange={handleInputChange}
                  name="profession" id="profession" />
                </div>


                <div className='inline-flex space-x-8 w-full' id='input-row-3'>
                      <div className='w-1/3' id='city'>
                        <label htmlFor='city' className='font-semibold'>City</label>
                        <input className='border-2 rounded-lg w-full h-[85%] px-2' type="text" 
                        value={localUserInfo.city || (user && user.city) || ''}
                        onChange={handleInputChange}
                        name="city" id="city" />
                      </div>

                      <div className='w-1/3' id='statee'>
                        <label htmlFor='statee' className='font-semibold'>State / Province</label>
                        <input className='border-2 rounded-lg w-full h-[85%] px-2' type="text" 
                        value={ localUserInfo.statee || (user && user.statee) || ''}
                        onChange={handleInputChange}
                        name="statee" id="statee" />
                      </div>
                      <div className='w-1/3' id='zip-code'>
                        <label htmlFor='Zip' className='font-semibold'>Zip code / Postal code</label>
                        <input className='border-2 rounded-lg w-full h-[85%] px-2' type="text" 
                        value={localUserInfo.Zip || (user && user.Zip) || ''}
                        onChange={handleInputChange}
                        name="Zip" id="Zip" />
                      </div>
                </div>

                <div className='inline-flex space-x-8 w-full' id='input-row-1'>
                    <div className='w-1/2' id='Phone'>
                        <label htmlFor='phone' className='font-semibold'>Phone</label>
                        <input className='border-2 rounded-lg w-full h-[85%] px-2' type="text" 
                        value={localUserInfo.phone || (user && user.phone) || ''} 
                        onChange={handleInputChange}
                        name="phone" id="phone" />
                      </div>
           
                      <div className='w-1/2' id='Email'>
                        <label htmlFor='email' className='font-semibold'>Email address</label>
                        <input className='border-2 rounded-lg w-full h-[85%] px-2'  
                         type="email"
                         value={localUserInfo.email || (user && user.email) || ''} 
                         onChange={handleInputChange}
                         name="email" id="email"/>
                      </div>
                    </div>

                    <div className='text-xs w-[50%] float-right'>
                      <p className='text-gray-400 ml-4'>By providing your email address, you agree to receive promotional emails and personalized recommendations. You can unsubscribe anytime.</p>
                      <button className='bg-[#0066cf] float-right rounded-md px-12 mt-5 py-3 text-base font-semibold text-white' onClick={handleSave}>Continue</button>
                    </div>

                              
              </div>
              <div className=' border-2 w-[43%] rounded-lg'>
                  <Preview_side userInfo={localUserInfo}   />
                </div>
                
              </div>
              
            
          </div>
        
          </div>
          </div>
            
  </div> 
    </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  user: state.userInfo || {}, // Assuming your Redux store has a 'userInfo' slice
});

const mapDispatchToProps = {
  setUserInfo: (userInfo) => {
    console.log(userInfo);
    return {
      type: 'SET_USER_INFO',
      payload: userInfo,
    };
  },
};

  export default connect(mapStateToProps, mapDispatchToProps)(InputUserComponent);