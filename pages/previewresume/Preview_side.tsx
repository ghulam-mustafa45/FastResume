import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoIosMail } from 'react-icons/io';
import { ImLocation } from 'react-icons/im';


const Preview_side = (props) => {
  const { user, userInfo , userwork,education} = props;
  

    const edustartDate = new Date(props.user.Education.sdate);
    const eduendDate = new Date(props.user.Education.edate);

    const edustartYear = edustartDate.getFullYear();
    const eduendYear = eduendDate.getFullYear();

    const workstartDate = new Date(props.user.work.sdate);
    const workendDate = new Date(props.user.work.edate);

    const workstartYear = workstartDate.getFullYear();
    const workendYear = workendDate.getFullYear();
    


  return (
    <>
      <div className='bg-white' id='full'>
         <div className='m-auto p-4' id='main-cv-box'>
           <div className='w-full m-auto' id='main-cv-box-width'>
            <div id='cv-heading'>
                    <p className='text-[1.5rem]'>{ userInfo?.fname ||  props.user.data.fname} { userInfo?.lname || props.user.data.lname} </p>
                     <p className='text-[0.8rem]'>{userInfo?.profession || props.user.data.profession}</p>
                     <div className='w-full border-[0.1px] rounded-full mt-8 border-gray-600'></div>
            </div>  {/*main-cv-heading */}

<div className='mt-5 pb-3' id='info-main-box'>
    <div className='flex space-x-4' id='main-right-left-flex'>
            <div className='w-[42%] space-y-8' id='left-contact-main'>

                    <div className='bg-[#efefef] space-y-1 p-3 py-1' id='contactus-div'>
                        <h1 className='text-[13px] font-medium '>CONTACT</h1>
                        <div className='inline-flex space-x-2 text-center justify-center ' style={{ alignItems: 'center' }}>  <BsFillTelephoneFill className='text-xs' /><p className='text-sm text-gray-600'>
                        tel: <span className='text-[10px] text-gray-600'>{userInfo?.phone || props.user.data.phone}</span></p></div>
                        <div className='inline-flex space-x-2' style={{ alignItems: 'center' }}><IoIosMail className='text-sm'/><p> <span className='text-[10px] text-gray-600'>{userInfo?.email || props.user.data.email}</span></p></div>
                       <div className='inline-flex space-x-2'style={{ alignItems: 'center' }}> <ImLocation className='text-[9px]'/><p><span className='text-[10px] text-gray-600'>{ userInfo?.Zip || props.user.data.Zip} { userInfo?.statee || props.user.data.statee}, {userInfo?.city || props.user.data.city}</span></p></div>
        
                    </div>   {/*contactus-div */}

                    <div className=' ' id='skills'>
                    <h1 className='text-[13px] font-medium  bg-[#efefef] p-3 py-4 '>SKILLS</h1>
                    <div className='text-[10px]'>
                    <ul className='space-y-1 pt-2'>
          {user.skills.map((skillSet, setIndex) => (
            <ul className='space-y-2' key={setIndex}>
            {skillSet.selectedOptions.map((option, optionIndex) => (
              <li key={optionIndex}>{option}</li>
            ))}
          </ul>
          ))}
          
        </ul>
                    </div>
                    <p>{props.user.option}</p>
                    </div>     {/*skills-div */}

                    <div className='space-y-1' id='education'>
                    <h1 className='text-[13px] font-medium  bg-[#efefef] p-3 py-3'>EDUCATION</h1>
                    <p className='font-bold mt-3 text-xs pt-1 '>{education?.degree || props.user.Education.degree} / {education?.field || props.user.Education.field} </p>
                    <p className='text-[10px] text-gray-600'>{education?.name ||  props.user.Education.name}</p>
                    <p className='text-[10px] text-gray-600'>{edustartYear} - {eduendYear}</p>
                    </div>     {/*education-div */}

            </div>         {/*left-contact-main*/} 

            <div className='w-[58%] space-y-5' id='right-main'>
                
                      <div id='profile'>
                            <h1 className='text-[13px] font-medium  bg-[#efefef] p-3 py-3'>PROFILE</h1>
                            <p  className='text-[10px] pt-3 text-gray-600'>Marketing management is the organizational discipline which focuses on the practical application of marketing orientation, techniques and methods inside enterprises and organizations and on the management of a firm's marketing resources and activities.</p>
                      </div>     {/*profile-div */}

                      <div id='experience'>
                            <h1 className='text-[13px] font-medium  bg-[#efefef] p-3 py-3'>EXPERIENCE</h1>
                            <p className='font-bold mt-3 text-xs text-gray-600'>{userwork?.title || props.user.work.title}</p>
                            <div className='inline-flex space-x-2 mt-1' id='profile-separation'>
  <div className='flex items-center space-x-2'>
    <p className='text-[10px] text-gray-600'>{ userwork?.Employer || props.user.work.Employer}</p>
    <div className=' h-3 border-[0.1px] rounded-full border-gray-400'></div>
  </div>
  
  <div className='flex items-center space-x-2'>
    <p className='text-[10px] text-gray-600'>{ userwork?.City || props.user.work.City}</p><div className=' h-3 border-[0.1px] rounded-full border-gray-400'></div>
  </div>
  
  <div className='flex items-center space-x-2'>
    <p className='text-[10px] text-gray-600'>{userwork?.statee || props.user.work.statee}</p><div className=' h-3 border-[0.1px] rounded-full border-gray-400'></div>
  </div>

  <p className='text-[10px] text-gray-600'>{workstartYear} - {workendYear}</p>

</div>

                            
                           
                      </div>     {/*experience-div */}



            </div>      {/*right-main*/}

            </div>      {/*main-right-left-flex*/}
               
                
          </div>       {/*info-main-box*/}
         </div>        {/*main-cv-box-width*/}   
    </div>         {/*main-cv-box */}
   
</div>

</>
  );
};

const mapStateToProps = (state) => {
        return {
      user: state,   

    };
  };

export default connect(mapStateToProps)(Preview_side);
