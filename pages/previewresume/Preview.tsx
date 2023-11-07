import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoIosMail } from 'react-icons/io';
import { ImLocation } from 'react-icons/im';
import { MdOutlineDownloadForOffline } from 'react-icons/md';
import RetrieveSkills from '../component-fetch/RetrieveSkills';



const Preview = (props) => {
  const { user } = props;

    const startDate = new Date(props.user.Education.sdate);
const endDate = new Date(props.user.Education.edate);

const startYear = startDate.getFullYear();
const endYear = endDate.getFullYear();

  return (
    <>
      <div className='bg-white' id='full'>
        <div>
          <img className='p-6 ml-[6rem] pb-7 ' src="/images/logo.png" alt="error" />
          <hr className=' w-full'></hr>
        </div>

        <div id='page-heading'>
             <p className='justify-center text-center font-semibold text-[#0066cf] text-[1.875rem] pt-12'>Looking Good, {props.user.data.fname}!</p>
             <div className='text-[#46464d] justify-center text-center mt-10 inline-flex  m-auto  cursor-pointer ml-[45%]'>
                <div className='space-x-2 m-auto justify-center text-center ' style={{ display: 'flex', alignItems: 'center' }}>
                    <MdOutlineDownloadForOffline className='font-thin' style={{ fontSize: '1.7rem' }}/>
                    <p className='text-[#46464d] text-[1.125rem]' >Download</p>
                </div>
            </div>
          
         </div>     {/*page-heading */}


         <div className='w-[70%] m-auto border-[1px] shadow-xl rounded-xl p-5 mt-16 ' id='main-cv-box'>
           <div className='w-[97%] m-auto' id='main-cv-box-width'>
            <div id='cv-heading'>
                    <p className='text-[2.5rem]'>{props.user.data.fname} {props.user.data.lname} </p>
                     <p className='text-[1.5rem]'>{props.user.data.profession}</p>
                     <div className='w-full border-[0.1px] rounded-full mt-8 border-gray-600'></div>
            </div>  {/*main-cv-heading */}

<div className='mt-12' id='info-main-box'>
    <div className='flex space-x-7' id='main-right-left-flex'>
            <div className='w-[35%] space-y-8' id='left-contact-main'>

                    <div className='bg-[#efefef] space-y-4 p-5 py-8' id='contactus-div'>
                        <h1 className='text-[20px] font-medium'>CONTACT</h1>
                        <div className='inline-flex space-x-2'><BsFillTelephoneFill className='text-xl'/> <p>tel: {props.user.data.phone}</p></div>                       
                        <div className='inline-flex space-x-2'><IoIosMail className='text-2xl'/><p>{props.user.data.email}</p></div>
                       <div className='inline-flex space-x-2'> <ImLocation className='text-2xl'/><p>{props.user.data.Zip} {props.user.data.statee}, {props.user.data.city}</p></div>
        
                    </div>   {/*contactus-div */}

                    <div className=' ' id='skills'>
                    <h1 className='text-[20px] font-medium  bg-[#efefef] p-3 py-4 '>SKILLS</h1>
                    <div >
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
                    <h1 className='text-[20px] font-medium  bg-[#efefef] p-3 py-4'>EDUCATION</h1>
                    <p className='font-bold mt-3'>{props.user.Education.degree}/ {props.user.Education.field} </p>
                    <p>{props.user.Education.name}</p>
                    <p>{startYear} - {endYear}</p>
                    </div>     {/*education-div */}

            </div>         {/*left-contact-main*/} 


            <div className='w-[65%] space-y-14' id='right-main'>
                
                      <div id='profile'>
                            <h1 className='text-[20px] font-medium  bg-[#efefef] p-3 py-4'>PROFILE</h1>
                           <p  className='text-sm pt-3'>Marketing management is the organizational discipline which focuses on the practical application of marketing orientation, techniques and methods inside enterprises and organizations and on the management of a firm's marketing resources and activities.</p>
                      </div>     {/*profile-div */}


                      <div id='experience'>
                              <h1 className='text-[20px] font-medium  bg-[#efefef] p-3 py-4'>EXPERIENCE</h1>
                              <p className='font-bold mt-3'>{props.user.work.title}</p>
                              <div className='inline-flex space-x-2 mt-1' id='profile-separation'>
                              <div className='flex items-center space-x-2'>
                                <p>{props.user.work.Employer}</p>
                                <div className=' h-5 border-[0.1px] rounded-full border-gray-400'></div>
                              </div>
                              
                              <div className='flex items-center space-x-2'>
                                <p>{props.user.work.City}</p>       <div className=' h-5 border-[0.1px] rounded-full border-gray-400'></div>
                              </div>
                              
                              <div className='flex items-center space-x-2'>
                                <p>{props.user.work.statee}</p>      <div className=' h-5 border-[0.1px] rounded-full border-gray-400'></div>
                              </div>

                              <p>{startYear} - {endYear}</p>

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

export default connect(mapStateToProps)(Preview);
