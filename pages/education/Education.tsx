import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useRouter } from 'next/router';
import Retrievework from '../component-fetch/Retrievework';
import Preview_side from '../previewresume/Preview_side';
import NewNavbar from '../Navbar/NewNavbar';


const Education = ({user, setEducation }) => {
  const [localUsereducation, setLocalUsereducation] = useState({});

  const router=useRouter()

    const [name, setname] = useState('');
    const [location, setlocation] = useState('');
    const [degree, setdegree] = useState('');
    const [field, setfield] = useState('');
    const [sdate, setsdate] = useState('');
    const [edate, setedate] = useState('');
   
  
    const handleInputChange = (e) => {
      // Update local state as the user types
      setLocalUsereducation({
        ...localUsereducation,
        [e.target.name]: e.target.value,
      });
    };


    const handleSavecontinue = () => {
      const education = { name, location,degree,field, sdate, edate};
      console.log('Dispatching action to set user info:', education);
      const updatededucation = { ...user, ...localUsereducation };
      setEducation(updatededucation);
      router.push('/skills/Skills') 
    
     
    };
    const back = () => {
      const education = {  name, location,degree,field, sdate, edate};
      setEducation(education);
      router.push('/education/Mainoptions');
     
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
                            <h2 className='text-[#0066cf] text-[1.5rem]'>Tell us about your education</h2>
                            <span className='hidden sm:block text-[1.125rem] pt-2 text-gray-500'>Enter your education experience so far, even if you are a current student or did not graduate.</span>
                        </div>
                      <div className='inline-flex space-x-9   mt-10' id='info+image-flex'>
                      <div id='info-data ' className='w-[60%] space-y-10'>
    
                  <div className='inline-flex space-x-8 w-full' id='input-row-1'>
                        <div className='w-1/2 space-y-2' id='f-mame'>
                            <label htmlFor='name' className='font-semibold'>School Name</label >
                            <input className='border-2 rounded-lg w-full h-[85%] px-3 ' type="text" 
                            value={localUsereducation.name || (user && user.name) || ''}
                            onChange={handleInputChange}
                            name="name" id="name" />
                          </div>
    
                          <div className='w-1/2 space-y-2' id='f-mame'>
                            <label htmlFor='location' className='font-semibold'>School Location</label >
                            <input className='border-2 rounded-lg w-full h-[85%] px-3' type="text" 
                            value={localUsereducation.location || (user && user.location) || ''}
                            onChange={handleInputChange}
                            name="location" id="location" />
                          </div>
                  </div>
                   
    
                    <div className='inline-flex space-x-8 w-full' id='input-row-3'>
                          <div className='w-1/2 space-y-2' id='City'>
                            <label htmlFor='degree' className='font-semibold'>Degree</label>
                            <input className='border-2 rounded-lg w-full h-[85%] px-3' type="text" 
                            value={localUsereducation.degree || (user && user.degree) || ''}
                            onChange={handleInputChange}
                            name="degree" id="degree" />
                          </div>
    
                          <div className='w-1/2 space-y-2' id='statee'>
                            <label htmlFor='field' className='font-semibold'>Field of Study</label>
                            <input className='border-2 rounded-lg w-full h-[85%] px-3' type="text" 
                            value={localUsereducation.field || (user && user.field) || ''}
                            onChange={handleInputChange}
                            name="field" id="field" />
                          </div>
                         
                    </div>
    
                    <div className='inline-flex space-x-8 w-full' id='input-row-1'>
                        <div className='w-1/2 space-y-2' id='sdate'>
                            <label htmlFor='sdate' className='font-semibold'>Graduation Start Date</label>
                            <input className='border-2 rounded-lg w-full h-[85%] px-3' type="date" 
                            value={localUsereducation.sdate || (user && user.sdate) || ''}
                            onChange={handleInputChange}
                            name="sdate" id="sdate" />
                          </div>
    
                          <div className='w-1/2 space-y-2' id='edate'>
                            <label htmlFor='edate' className='font-semibold'>Graduation End Date</label>
                            <input className='border-2 rounded-lg w-full h-[85%] px-3'  
                             type="date"
                             value={localUsereducation.edate || (user && user.edate) || ''}
                             onChange={handleInputChange}
                             name="edate" id="edate"
                             />
                          </div>
                        </div>
    
                        <div className="space-y-2  ml-[53%]">
                        <label htmlFor="checkbox" className="flex items-center space-x-2">
                            <input type="checkbox" id="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
                            <span className="text-gray-700">I currently Work Here</span>
                        </label>
                        </div> 
                 <div >
                    <button
                  className='float-left  rounded-md px-12 py-4 text-base font-semibold text-[#0066cf]'
                  style={{ border: '1px solid #0066cf' }}onClick={back}>Back</button>

                        <div className='text-xs w-[50%] float-right'>
                                                                  
                          <button className='bg-[#0066cf] float-right rounded-md px-12 py-4 text-base font-semibold text-white' onClick={handleSavecontinue}>Continue</button>
                      </div>
               </div>
                      
    
                                  
                  </div>
                  <div className=' border-2 w-[43%] rounded-lg'>
                  < Preview_side education={localUsereducation}/>
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
      user: state.education || {}, // Assuming your Redux store has a 'userInfo' slice
    });
    
    const mapDispatchToProps = {
      setEducation: (education) => {
        console.log(education);
        return {
          type: 'SET_EDUCATION',
          payload: education,
        };
      },
    };
    export default connect(mapStateToProps, mapDispatchToProps)(Education);
