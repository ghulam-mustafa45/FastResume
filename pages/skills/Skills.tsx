import React, { useState, useReducer } from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';
import { BsCheck2 } from 'react-icons/bs';
import { FaTrash } from 'react-icons/fa'; // Import the delete icon
import Navbar from '../Navbar/Navbar';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import RetrieveSkills from '../component-fetch/RetrieveSkills';
import NewNavbar from '../Navbar/NewNavbar';


const Skills = ({ setuserskills }) => {

  const router=useRouter()
  const option = [
    'Software development expertise','Systems analysis proficiency','Strong programming skills','Database management competence','Web development aptitude','Algorithm design capability','Problem-solving prowess','Quality assurance competency','Agile project management','Networking knowledge','Data structure proficiency','Cybersecurity awareness','Object-oriented programming expertise','Cloud computing familiarity','User interface design skills'];

  const [options, setOptions] = useState(option);
  const [selectedOptions, setSelectedOptions] = useState(['']); // Default empty selection

  const handleSelectOption = (option) => {
    if (!selectedOptions.includes(option)) {
      // Remove the empty option (if present) and add it again at the end
      const newSelectedOptions = selectedOptions.filter((selected) => selected !== '') || [];
      newSelectedOptions.push(option);
      setSelectedOptions(newSelectedOptions);
    }
  };

  const handleDeselectOption = (option) => {
    const newSelectedOptions = selectedOptions.filter((selected) => selected !== option);
    setSelectedOptions(newSelectedOptions);
  };

  const handleDeleteOption = (index) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions.splice(index, 1);
    setSelectedOptions(newSelectedOptions);
  };

  const handleSavecontinue = () => {
    const userskills = {selectedOptions};
    setuserskills(userskills); 
    console.log('Dispatching action to set user info:', userskills);
   router.push('/previewresume/Preview')
   
  };
  const back = () => {
    router.push('/education/Education');
  };

  return (
    <div>
      <NewNavbar/>
      <div className='bg-white '>
        <div className="w-[85%] m-auto pt-8 pb-14 b">
          <h2 className="text-[#0066cf] text-[2rem] font-sans">
            What skills would you like to highlight?
          </h2>
          <span className="hidden sm:block text-[1.125rem] pt-2 text-gray-500 font-sans">
            Our AI analyzes over 87 billion data points to write job-winning skills, increasing your chance to be hired by over 91%.
          </span>
        </div>
        <div className='w-[85%] m-auto pb-16'>
               <div className="flex space-x-28 text-[#46464d]">
            <div className='w-[47%]' style={{ maxHeight: '600px', overflowY: 'auto' }}>
              <div className='bg-gray-50 rounded-md p-5 '>
                <h2 className="pb-3">AI-Generated results for: </h2>
                <div className='w-full border-[0.5px] rounded-full'></div>
                <ul>
                  {options.map((option, index) => (
                    <li className='space-y-4 pt-3 ' key={index}>
                      {!selectedOptions.includes(option) ? (
                        <button className="mr-4 text-[#0066cf] text-2xl  " onClick={() => handleSelectOption(option)}>
                          <BsPlusCircleFill className="" />
                        </button>
                      ) : (
                        <button className="mr-4 text-[#0066cf] text-2xl" onClick={() => handleDeselectOption(option)}>
                          <BsCheck2 className="" />
                        </button>
                      )}
                      {option}
                      <div className='w-full border-[0.5px] rounded-full'></div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-[35%]">
              <h2 className="font-bold mb-3">Highlighted skills</h2>
              <ul className=' space-y-3'>
                {selectedOptions.map((option, index) => (
                  <li className={`p-4 bg-[#e9ecef] rounded-lg space-x-2 border-[1px] border-gray-300  ${option === '' ? 'mt-2' : ''}`} key={index}>
                    {option === '' ?  (
                      // Empty option, no delete button
                      ' '
                    ) : (
                      // Display the delete button for other options
                      <>
                        <span className="mr-2">{`#${index + 1} ${option}`}</span>
                        <button onClick={() => handleDeleteOption(index)}>
                          <FaTrash />
                        </button>
                      </>
                    )}
                  </li>
                ))}
              </ul>
              
              <div className='mt-[3rem] flex items-center justify-center space-x-3 text-lg font-semibold text-center w-fit m-auto cursor-pointer '>
                  <BsPlusCircleFill className='text-3xl text-[#1890ff] hover:text-blue-400' />
                  <p className='text-[#0066cf] text-lg font-bold'>Add another skill</p>
              </div>

                <div className='mt-[5rem]'>
                    <button
                  className='float-left  rounded-md px-12 py-4 text-base font-semibold text-[#0066cf]'
                  style={{ border: '1px solid #0066cf' }}onClick={back}>Back</button>
                        <div className='text-xs w-[50%] float-right'>
                           <button className='bg-[#0066cf] float-right rounded-md px-12 py-4 
                           text-base font-semibold text-white' onClick={handleSavecontinue}>Continue</button>
                      </div>
               </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps =  {
  

    setuserskills: (userskills) => {
      return({
        type: 'SET_USER_SKILLS',
        payload: userskills,
      });
    },
  };



export default connect(null, mapDispatchToProps)(Skills);


