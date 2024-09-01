import React, { useState } from 'react';
import './Animation.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMobileMenuOpen(false);
        setIsClosing(false);
      }, 500); // Match animation duration
    } else {
      setIsMobileMenuOpen(true);
    }
  };

  return (
    <nav className='flex items-center justify-between border-b border-[rgba(255,255,255,.08)] p-4 text-white lg:mx-20 md:mx-20 mx-10'>
      <div className='flex-shrink-0'>
        <a href='/informatik' className='text-xl font-bold font-custom'>
          informatik
        </a>
      </div>
      <div className='lg:flex hidden justify-center flex-grow'>
        <ul className='flex space-x-10 bg-[rgba(255,255,255,.02)] p-2 px-10 font-sans border border-[rgba(255,255,255,.08)] rounded-3xl'>
          <li><a href='/' className='hover:opacity-75 transition duration-150 ease-in-out'>Home</a></li>
          <li><a href='/about' className='hover:opacity-75 transition duration-150 ease-in-out'>About</a></li>
          <li><a href='/services' className='hover:opacity-75 transition duration-150 ease-in-out'>Services</a></li>
          <li><a href='/blog' className='hover:opacity-75 transition duration-150 ease-in-out'>Blog</a></li>
        </ul>
      </div>
      <div className='lg:hidden'>
        {!isMobileMenuOpen && (
          <button onClick={toggleMobileMenu} className='focus:outline-none'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
            </svg>
          </button>
        )}
        {isMobileMenuOpen && (
          <button onClick={toggleMobileMenu} className='focus:outline-none'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
            </svg>
          </button>
        )}
      </div>
      <div className='hidden lg:block'>
        <button className='text-white amazingbg transition duration-150 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2'>
          Contact
        </button>
      </div>
      {isMobileMenuOpen && !isClosing && (
        <div className='lg:hidden fixed inset-0 z-50 top-16 bg-[#040119] p-4 flex flex-col items-center justify-center animate-unwrap'>
          <ul className='flex flex-col items-center space-y-4'>
            <li><a href='#home' className='hover:opacity-75 transition duration-150 ease-in-out text-white text-lg'>Home</a></li>
            <li><a href='#about' className='hover:opacity-75 transition duration-150 ease-in-out text-white text-lg'>About</a></li>
            <li><a href='#services' className='hover:opacity-75 transition duration-150 ease-in-out text-white text-lg'>Services</a></li>
            <li><a href='#contact' className='hover:opacity-75 transition duration-150 ease-in-out text-white text-lg'>Process</a></li>
            <li>
              <button className='text-white bg-gradient-to-br from-purple-600 to-indigo-700 transition duration-150 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2'>
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
      {isClosing && (
        <div className='lg:hidden fixed inset-0 z-50 top-16 bg-[#040119] p-4 flex flex-col items-center justify-center animate-wrap'>
          <ul className='flex flex-col items-center space-y-4'>
            <li><a href='#home' className='hover:opacity-75 transition duration-150 ease-in-out text-white text-lg'>Home</a></li>
            <li><a href='#about' className='hover:opacity-75 transition duration-150 ease-in-out text-white text-lg'>About</a></li>
            <li><a href='#services' className='hover:opacity-75 transition duration-150 ease-in-out text-white text-lg'>Services</a></li>
            <li><a href='#contact' className='hover:opacity-75 transition duration-150 ease-in-out text-white text-lg'>Process</a></li>
            <li>
              <button className='text-white bg-gradient-to-br from-purple-600 to-indigo-700 transition duration-150 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2'>
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
