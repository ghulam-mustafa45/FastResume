import React from 'react'
import NewNavbar from '../Navbar/NewNavbar'
import { connect } from 'react-redux';
import { BsPlusCircleFill ,BsPencil,BsFillTrash3Fill } from 'react-icons/bs';
import { useRouter } from 'next/router';

const Addnewposition = (props) => {
    const router=useRouter()

    const startDate = new Date(props.user.Education.sdate);
    const endDate = new Date(props.user.Education.edate);
    
    const startYear = startDate.getFullYear();
    const endYear = endDate.getFullYear();

    const handleSavecontinue = () => {
       router.push('/education/Mainoptions')
       
      };
      const back = () => {
        router.push('/education/Education');
      };

  return (
<>
<div className='bg-white '>
    <div id='navbar'>
        <NewNavbar/>
    </div>
    
    <div className='w-[83%] m-auto pt-6' id='main-width'>

        <div className=''>
            <h2 className='text-[#0066cf] text-[1.875rem]'>Work History summary</h2>
        </div>

        <div className='mt-12' id='work-history-box'>

            <div className='border h-24 rounded-xl items-center'>

                <div className='flex '>
                <div className='w-[9%] h-[95px] bg-[#0066cf] rounded-l-xl items-center flex '>
                    <p className='text-white w-fit m-auto font-bold text-3xl'>#1</p>
                </div>
                <div className='inline-flex ml-5 text-lg w-fit'>
                            <div className='inline-flex space-x-4 mt-1' id='profile-separation'>
                            <div className='flex items-center space-x-2'>
                                <p className='font-bold '>{props.user.work.title}</p>     <div className=' h-5 border-[0.1px] rounded-full border-gray-600'></div>
                            </div>
                              <div className='flex items-center space-x-2'>
                                <p className='font-bold'>{props.user.work.Employer}</p>    <div className=' h-5 border-[0.1px] rounded-full border-gray-600'></div>
                              </div>
                              
                              <div className='flex items-center space-x-2'>
                                <p>{props.user.work.City} ,</p>
                                <p>{props.user.work.statee}</p>      <div className=' h-5 border-[0.1px] rounded-full border-gray-400'></div>
                              </div>
                              <div className='flex items-center space-x-2'>
                                 <p>{startYear} - {endYear}</p>
                              </div>
                            </div>
                </div>
                <div className='inline-flex text-2xl items-end w-fit float-right 'style={{ alignItems: 'center' }}>              
                        <button className='float-right hover:bg-blue-50 rounded-full w-[4rem] h-[4rem] text-center flex items-center justify-center' ><BsPencil /></button>       
                        <button className='float-right hover:bg-blue-50 rounded-full w-[4rem] h-[4rem] text-center flex items-center justify-center' ><BsFillTrash3Fill /></button>       
                </div>

                </div>

            </div>

        </div>  {/*work-history-box */}


        <div className='mt-10 bg-[#f5f7fa]'  id='add-new-work'>            
            <div className='border h-28 rounded-xl flex items-center justify-center'>
                    <div className=' flex items-center justify-center space-x-3 text-lg font-semibold text-center w-fit m-auto cursor-pointer '>
                        <BsPlusCircleFill className='text-3xl text-[#1890ff] hover:text-blue-400' />
                        <p className='text-[#0066cf] text-lg font-bold'>Add another position</p>
                    </div>
            </div>

        </div>  {/*add-new-work*/}

        <div className='pt-[3rem] pb-32'>
                    <button
                  className='float-left  rounded-md px-12 py-4 text-base font-semibold text-[#0066cf]'
                  style={{ border: '1px solid #0066cf' }}onClick={back}>Back</button>
                        <div className='text-xs w-[50%] float-right'>
                           <button className='bg-[#0066cf] float-right rounded-md px-12 py-4 
                           text-base font-semibold text-white' onClick={handleSavecontinue}>Continue</button>
                      </div>
               </div>



    </div>  {/*main-width */}
</div>  
</>
  )
}
const mapStateToProps = (state) => {
    return {
  user: state,   

};
};
export default connect(mapStateToProps)(Addnewposition);

