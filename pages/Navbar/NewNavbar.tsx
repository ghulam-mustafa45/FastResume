import React, { useState } from 'react';
import { useRouter } from 'next/router';


const NewNavbar = () => {
    const router=useRouter()
    const [activeTab, setActiveTab] = useState(null);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
        switch (tabNumber) {
          case 1:
            router.push('/component-input/InputUserComponent');
            break;
          case 2:
            router.push('/work-hiatory/Inputwork');
            break;
          case 3:
            router.push('/education/Mainoptions');
            break;
          case 4:
            router.push('/skills/Skills');
            break;
          case 5:
            router.push('/previewresume/Preview');
            break;
          default:
            break;
        }
      };

  return (
<>
<div className='bg-white border-b-[1px] border-gray-200'>
    <div className='inline-flex space-x-24'>
        <div>
            <img className='p-5 ml-[6rem] pb-7 ' src="/images/logo.png" alt="error" />
        </div>

    <div className='space-x-6 inline-flex text-[rgb(213,218,225)] '>
    <div className='inline-flex space-x-2 cursor-pointer'  style={{ alignItems: 'center' }}>
             <div className={`inline-flex space-x-2 cursor-pointer ${activeTab === 1 ? 'ring ring-blue-500' : ''}`} onClick={() => handleTabClick(1)} style={{ alignItems: 'center' }}>
             <div className={`border-2 rounded-full w-[2rem] h-[2rem] border-gray-400 text-center ${activeTab === 1 ? 'active' : ''}`}> 
                        <p>1</p>
                    </div>
                    <p className='text-[0.75rem]'>Contact Information</p>
            </div>
            <div className='h-0 w-[2rem] border-[1px] rounded-full border-[#d5dae1]'></div>
            </div>


            <div className='inline-flex space-x-2 cursor-pointer' style={{ alignItems: 'center' }} onClick={() => handleTabClick(2)}>
            <div className='inline-flex space-x-2' style={{ alignItems: 'center' }}>
            <div className={`border-2 rounded-full w-[2rem] h-[2rem] border-gray-400 text-center ${activeTab === 2 ? 'active' : ''}`}>
                        <p>2</p>
                    </div>
                    <p className='text-[0.75rem]'>Work History</p>
            </div>
            <div className='h-0 w-[2rem] border-[1px] rounded-full border-[#d5dae1]'></div>
            </div>

            <div className='inline-flex space-x-2 cursor-pointer' style={{ alignItems: 'center' }} onClick={() => handleTabClick(3)}>
            <div className='inline-flex space-x-2' style={{ alignItems: 'center' }}>
            <div className={`border-2 rounded-full w-[2rem] h-[2rem] border-gray-400 text-center ${activeTab === 3 ? 'active' : ''}`}>
                        <p>3</p>
                    </div>
                    <p className='text-[0.75rem]'>Education</p>
            </div>
            <div className='h-0 w-[2rem] border-[1px] rounded-full border-[#d5dae1]'></div>
            </div>

            <div className='inline-flex space-x-2 cursor-pointer' style={{ alignItems: 'center' }} onClick={() => handleTabClick(4)}>
            <div className='inline-flex space-x-2' style={{ alignItems: 'center' }}>
            <div className={`border-2 rounded-full w-[2rem] h-[2rem] border-gray-400 text-center ${activeTab === 4 ? 'active' : ''}`}>
                        <p>4</p>
                    </div>
                    <p className='text-[0.75rem]'>Skills</p>
            </div>
            <div className='h-0 w-[2rem] border-[1px] rounded-full border-[#d5dae1]'></div>
            </div>

            <div className='inline-flex space-x-2 cursor-pointer' style={{ alignItems: 'center' }} onClick={() => handleTabClick(5)}>
            <div className='inline-flex space-x-2' style={{ alignItems: 'center' }}>
            <div className={`border-2 rounded-full w-[2rem] h-[2rem] border-gray-400 text-center ${activeTab === 5 ? 'active' : ''}`}>
                        <p>5</p>
                    </div>
                    <p className='text-[0.75rem]'>Summary</p>
            </div>
            </div>

    </div>
    </div>
</div>
</>
  )
}

export default NewNavbar
