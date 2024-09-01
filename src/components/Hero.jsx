import React from 'react';
import GridImage from '../assets/images/grid.png';
import heroImage from '../assets/images/heroImage.jpg'; // Import the hero image
import './Client.css'

function Hero() {
  return (
    <div className='relative mt-28 text-center justify-center items-center text-white font-poppins'>
      {/* Background Grid Image */}
      <div className='absolute -top-28 inset-0 z-[-1] opacity-30'>
        <img
          src={GridImage}
          alt="Grid Background"
          className='w-full h-1/2'
        />
      </div>

      <span className="inline-flex shadow-md shadow-indigo-600 drop-shadow-2xl items-center backdrop-blur-lg rounded-2xl bg-transparent border border-[#a855f7] px-2 py-1 text-sm font-medium text-purple-500 ring-1 ring-inset ring-blue-700/10 mb-7">
      
      <svg width="24" className='mr-3' height="24" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione-monotone" preserveAspectRatio="xMidYMid meet"><path d="M22.625 2c0 15.834-8.557 30-20.625 30c12.068 0 20.625 14.167 20.625 30c0-15.833 8.557-30 20.625-30c-12.068 0-20.625-14.166-20.625-30" fill="#6D28D9"></path><path d="M47 32c0 7.918-4.277 15-10.313 15C42.723 47 47 54.084 47 62c0-7.916 4.277-15 10.313-15C51.277 47 47 39.918 47 32z" fill="#6D28D9"></path><path d="M51.688 2c0 7.917-4.277 15-10.313 15c6.035 0 10.313 7.084 10.313 15c0-7.916 4.277-15 10.313-15c-6.036 0-10.313-7.083-10.313-15" fill="#6D28D9"></path></svg>
        New: Blog Feature Has Just Landed
      </span>
      <h1 className='text-4xl herotext lg:text-6xl font-poppins font-extrabold mb-7 tracking-tight'>
        Tech Consulting At
        <br className='lg:hidden block md:hidden' /> It's Finest.
      </h1>
      <span className='text-lg lg:text-xl font-poppins tracking-tight'>
        Find out what's working with your business and elevate it. 
      </span>
      <br className='hidden md:block lg:block' />
      <span className='text-lg lg:text-xl font-poppins tracking-tight'>
      ‎ Like a business consultant who can analyze millions of data.
      </span>
      <p className='mb-7'></p>
      <a
        href=''
        className="text-white mt-5 amazingbg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2"
      >
        Schedule A Free Call
      </a>
      <div className="container relative mx-auto px-6">
        <div className="demo-viewport relative lg:mx-20">
          <div className="absolute inset-0 -top-3 origin-bottom-left -rotate-1 transform rounded-xl blur-3xl bg-gradient-to-br from-purple-600 to-indigo-700"></div>
          <div className="relative h-auto max-h-[400px] lg:max-h-[600px] rounded-xl bg-white shadow-md">
            <div id="demo-container" className="flex mt-20 h-full flex-col overflow-hidden rounded-lg bg-[#040119] shadow-xl">
              <div className="z-0 flex shrink-0 items-center bg-[#040119] px-4 py-2">
                <div className="mr-2 hidden h-4 w-4 shrink-0 rounded-full bg-red-500 sm:block"></div>
                <div className="mr-2 hidden h-4 w-4 shrink-0 rounded-full bg-yellow-500 sm:block"></div>
                <div className="mr-2 hidden h-4 w-4 shrink-0 rounded-full bg-green-500 sm:block"></div>
                <div className="flex flex-grow items-center justify-center truncate rounded-full bg-gray-600 px-4 py-2 text-center text-sm leading-5 text-gray-200 sm:ml-6 sm:mr-24 z-0">
                  <div className="truncate z-0">
                    <span className="font-medium text-gray-100 z-0">Demo</span> — informatik.com
                  </div>
                </div>
              </div>
              <div className="relative z-0 w-full flex-grow overflow-y-auto">
                <div className="max-w-screen-xl mx-auto px-4 py-8">
                  <img
                    src={heroImage}
                    alt="Hero"
                    className="w-full h-auto lg:h-[600px] object-cover opacity-75" // Updated height property
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
