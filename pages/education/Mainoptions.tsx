import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useRouter } from 'next/router';
import NewNavbar from '../Navbar/NewNavbar';

const Mainoptions = () => {

    const router=useRouter()

    const handleSavecontinue = () => {
        router.push('/education/Education') 
      };

    const Highschool=()=>{
        router.push('/education/Education')   };

    const Associates=()=>{
        router.push('/education/Education')  };

    const Bachelor=()=>{
        router.push('/education/Education')};
            
    const Masters=()=>{
            router.push('/education/Education')  };

    const College=()=>{
            router.push('/education/Education') };
        
    const Vocational=()=>{
             router.push('/education/Education')};

    const noanswer=()=>{
              router.push('/skills/Skills')};
                
            
  return (
    <>
      <div className='bg-white pb-10'>
        <div>
              <NewNavbar/>
        </div>
                <div className='pt-8 '>
                        <div className='w-fit m-auto'>
                                        <h2 className='text-[#0066cf] text-[2rem] font-sans '>What best describes your level of education?</h2>
                                        <span className='hidden sm:block text-[1.125rem] pt-2 text-gray-500'>Select the best option and we'll help you structure your education section.</span>
                        </div>
                </div>

                <div className='m-auto w-[50%] mt-14 text-center space-y-10' id='main-grid'>
                        <div className='flex space-x-9 ' id='row-1'>
                            <div className='w-1/3 border-2 rounded-lg  text-[#0066cf] font-bold border-[#0066cf] p-5 cursor-pointer shadow-md hover:border-blue-600 hover:border-[1px] hover:shadow-xl hover:shadow-gray-200-100' onClick={Highschool} id='School'>
                                <div>
                                    <p>High School or GED</p>
                                </div>
                            </div>

                            <div className='w-1/3 border-[1px] rounded-lg border-gray-300 p-5 cursor-pointer shadow-md hover:border-blue-600 hover:border-[1px] hover:shadow-xl hover:shadow-gray-200-100' onClick={Associates} id='School'>
                                <div>
                                    <p>Associates</p>
                                </div>
                            </div>

                            <div className='w-1/3 border-[1px] rounded-lg border-gray-300 p-5 cursor-pointer shadow-md hover:border-blue-600 hover:border-[1px] hover:shadow-xl hover:shadow-gray-200-100' onClick={Bachelor} id='School'>
                                <div>
                                    <p>Bachelor</p>
                                </div>
                            </div>
                        </div>

                        <div className=' space-x-9 flex' id='row-2'>
                            <div className='w-1/3 border-[1px] rounded-lg border-gray-300 p-5 cursor-pointer shadow-md hover:border-blue-600 hover:border-[1px] hover:shadow-xl hover:shadow-gray-200-100' onClick={Masters} id='School'>
                                <div>
                                    <p>Masters or Higher</p>
                                </div>
                            </div>

                            <div className=' w-1/3 border-[1px] rounded-lg border-gray-300 p-5 cursor-pointer shadow-md hover:border-blue-600 hover:border-[1px] hover:shadow-xl hover:shadow-gray-200-100' onClick={College} id='School'>
                                <div>
                                    <p>Some College</p>
                                </div>
                            </div>

                            <div className='w-1/3 border-[1px] rounded-lg border-gray-300 p-5 cursor-pointer shadow-md hover:border-blue-600 hover:border-[1px] hover:shadow-xl hover:shadow-gray-200-100' onClick={Vocational} id='School'>
                                <div>
                                    <p>Vocational</p>
                                </div>
                            </div>
                        </div>
                        <div className='pt-20 pb-20'>
                    <button className='float-left rounded-md px-12 py-4 text-base font-semibold text-[#0066cf] hover:bg-blue-50' onClick={noanswer}>Prefer not to answer</button>
                        <div className='text-xs w-[50%] float-right'>           
                          <button className='bg-[#0066cf] float-right rounded-md px-14 py-5 text-base font-semibold text-white  transition-transform duration-500 ease-in-out transform hover:bg-slate-600' onClick={handleSavecontinue}>Continue</button>
                      </div>
               </div>
               
                </div>

                
      </div>
    </>
  )
}

export default Mainoptions
