import React, { useState } from 'react'


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (

    <>
      <div className='font-Lato font-custom7 h-max'>
        <nav className="  bg-[#fff]">
          <div className="flex py-4 px-6 lg:!px-10 w-full items-center justify-between ">

            <div className="navbar-header flex ">
              <a className="navbar-brand" href="/">
                <img className='w-[123px] lg:w-[12rem]' src="../images/logo.png" alt="error" />
              </a>
            </div>

            <div className="hamburger lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                <path d="M3.60938 16.0781H17.3906M3.60938 10.8281H17.3906M3.60938 5.57812H17.3906" stroke="#0066cf" stroke-width="2.8125" stroke-linecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <ul className="hidden lg:flex h-fit !mb-0 items-center space-x-4">
            <li className="text-[#1e2532]">Blog</li>
            <div className="rounded-md bg-gray-300 h-6 w-[0.1px]"></div>
            <li className="text-[#0066cf]">Login</li>
            <li className="bg-[#0066cf] rounded-md px-12 py-[6px] text-white">Sign up</li>
            </ul>
          </div>
        </nav>

        <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'}`}>
          <ul className='bg-[#fff] absolute w-full text-[#0066cf] text-left text-base py-4 font-custom7'>
            <li className='py-1'>Create my resume &gt; </li>
            <li className='py-3'>Login &gt;</li>
          
          </ul>
        </div>
      </div>
      <hr className=' w-full'></hr>
    </>
  )
}

export default Navbar