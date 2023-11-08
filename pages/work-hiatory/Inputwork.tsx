import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import Preview_side from '../previewresume/Preview_side';
import NewNavbar from '../Navbar/NewNavbar';


const Inputwork = ({user, setUserWork }) => {
  const [localUserwork, setLocalUserwork] = useState({});

  const router=useRouter()

    const [title, settitle] = useState('');
    const [Employer, setEmployer] = useState('');
    const [sdate, setsdate] = useState('');
    const [edate, setedate] = useState('');
    const [profession, setprofession] = useState('');
    const [City, setCity] = useState('');
    const [statee, setstatee] = useState('');
  
    const handleInputChange = (e) => {
      // Update local state as the user types
      setLocalUserwork({
        ...localUserwork,
        [e.target.name]: e.target.value,
      });
    };

    const handleSavecontinue = () => {
      const userWork = { title, Employer,City,statee, sdate, edate};
      console.log('Dispatching action to set user info:', userWork);
      const updatedwork = { ...user, ...localUserwork };
      setUserWork(updatedwork);
      router.push('/work-hiatory/Addnewposition');
     
    };
    const back = () => {      
      router.push('/component-input/InputUserComponent');
     
    };
  return (
    <>
    <NewNavbar/>
          <div className='bg-white pt-8'>
        
        <div id='main'>
              <div className='w-[85%] mx-auto'>
                <div  >
                  <div>
                        <div className=''>
                            <h2 className='text-[#0066cf] text-[1.5rem]'>Tell us about your most recent job</h2>
                            <span className='hidden sm:block text-[1.125rem] pt-2 text-gray-500'>We’ll use this information to generate AI-Optimized skills later.</span>
                        </div>
                      <div className='inline-flex space-x-9   mt-10' id='info+image-flex'>
                      <div id='info-data ' className='w-[60%] space-y-10'>
    
                  <div className='inline-flex space-x-8 w-full' id='input-row-1'>
                        <div className='w-1/2' id='f-mame'>
                            <label htmlFor='fname' className='font-semibold'>Job title</label >
                            <input className='border-2 rounded-lg w-full h-[85%] px-2' type="text" 
                            value={localUserwork.title || (user && user.title) || ''}
                            onChange={handleInputChange}
                            name="title" id="title" />
                          </div>
    
                          <div className='w-1/2' id='f-name'>
                            <label htmlFor='lname' className='font-semibold'>Employer</label >
                            <input className='border-2 rounded-lg w-full h-[85%] px-2 ' type="text" 
                            value={localUserwork.Employer || (user && user.Employer) || ''}
                            onChange={handleInputChange}
                            name="Employer" id="Employer" />
                          </div>
                  </div>
                   
    
                    <div className='inline-flex space-x-8 w-full' id='input-row-3'>
                          <div className='w-1/2' id='City'>
                            <label htmlFor='City' className='font-semibold'>City</label>
                            <input className='border-2 rounded-lg w-full h-[85%] px-2' type="text" 
                            value={localUserwork.City || (user && user.City) || '' }
                            onChange={handleInputChange}
                            name="City" id="City" />
                          </div>
    
                          <div className='w-1/2' id='statee'>
                            <label htmlFor='statee' className='font-semibold'>State / Province</label>
                            <input className='border-2 rounded-lg w-full h-[85%] px-2' type="text" 
                            value={localUserwork.statee || (user && user.statee) || ''} 
                            onChange={handleInputChange}
                            name="statee" id="statee" />
                          </div>
                         
                    </div>
    
                    <div className='inline-flex space-x-8 w-full' id='input-row-1'>
                        <div className='w-1/2' id='sdate'>
                            <label htmlFor='sdate' className='font-semibold'>Start date</label>
                            <input className='border-2 rounded-lg w-full h-[85%] px-2' type="date" 
                            value={localUserwork.sdate || (user && user.sdate) || ''}
                            onChange={handleInputChange}
                            name="sdate" id="sdate" />
                          </div>
    
                          <div className='w-1/2' id='edate'>
                            <label htmlFor='edate' className='font-semibold'>End date</label>
                            <input className='border-2 rounded-lg w-full h-[85%] px-2'  
                             type="date"
                             value={localUserwork.edate || (user && user.edate) || ''}
                             onChange={handleInputChange}
                             name="edate" id="edate"
                             />
                          </div>
                        </div>
    
                        <div className="space-y-2 ml-[53%]">
                        <label htmlFor="checkbox" className="flex items-center space-x-2">
                            <input type="checkbox" id="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
                            <span className="text-gray-700">I currently Work Here</span>
                        </label>
                        </div> 
                 <div >
                    <button
                  className='float-left rounded-md px-12 py-4 text-base font-semibold text-[#0066cf]'
                  style={{ border: '1px solid #0066cf' }}onClick={back}>Back</button>

                        <div className='text-xs w-[50%] float-right'>
                                                                  
                          <button className='bg-[#0066cf] float-right rounded-md px-12 py-4 text-base font-semibold text-white' onClick={handleSavecontinue}>Continue</button>
                      </div>
               </div>
                      
    
                                  
                  </div>
                  <div className=' border-2 w-[43%] rounded-lg'>
                  <Preview_side userwork={localUserwork}   />
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
      user: state.userwork || {}, // Assuming your Redux store has a 'userInfo' slice
    });

    const mapDispatchToProps = {
        setUserWork: (userWork) => {
        console.log(userWork);
        return {
          type: 'SET_USER_WORK',
          payload: userWork,
        };
      },
    };
    export default connect(mapStateToProps, mapDispatchToProps)(Inputwork);
