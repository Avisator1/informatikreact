import React from 'react';
import './Badge.css';
import { RiCopilotFill, RiOpenaiFill } from "react-icons/ri";
import { FaGithub, FaWindows } from "react-icons/fa";
import './Client.css';
import jezler from '../assets/images/bKRezqS.png';
import migration from '../assets/svg/migration.svg';
import bigLights from '../assets/images/biglights.png';
import stars from './stars.json';
import planet1 from '../assets/images/planet1.png';
import planet2 from '../assets/images/planet2.png';
import smallLights from '../assets/images/lights.png';
import data from '../assets/svg/data.svg';
import star from './night.json';  // Adjust the path as necessary

import Lottie from 'lottie-react';

const gridItemClasses = "rounded-3xl flex justify-center text-center items-center gridBackground text-white p-4 border";

function Intro() {
  return (
    <div className='mt-14 font-poppins relative overflow-hidden'>
      <div className='second-shooting-star-lottie'>
        <Lottie className=' opacity-45' animationData={star} loop={true}/>
      </div> 
      <div className='justify-center items-center text-center flex'>
        <img className='w-[90%] lg:w-[80%] h-full rounded-2xl mb-6' src={jezler} alt="" />
      </div>
      <div className='justify-center items-center text-center flex'>
        <span className="inline-flex shadow-xl drop-shadow-2xl items-center backdrop-blur-lg rounded-2xl border-[#9018ff] px-2 py-1 text-sm font-medium badgeText ring-1 ring-inset ring-pink-300/20 mt-[-20px]">
          Marketing Excellence
        </span>
      </div>
      <h1 className='text-4xl lg:text-5xl heroText text-center text-white font-bold mt-5'>It's time to Elevate <br className='lg:hidden' />Your Brand</h1>
      <h1 className='text-2xl lg:text-5xl heroText font-bold text-center hidden lg:block text-white mt-[-8px]'>And Stand Out.</h1>
      <p className='text-gray-400 text-center text-lg lg:text-xl mt-5'>Enough being the same and blending in with the others. It's time for a serious change.</p>
      <p className='text-gray-400 text-center text-lg lg:text-xl'>Let's approach marketing in a different unique way.</p>

      {/* Bento Grid Layout for medium and larger screens */}
      <div className="hidden md:grid h-screen p-5 mt-10 rounded-lg gap-5 grid-cols-5 grid-rows-4 lg:mx-28 overflow-hidden">
        <div className="rounded-lg px-12 bentogrid-box justify-center hover:scale-105 transition duration-150 items-end col-span-3 border border-[rgba(255,255,255,.08)] special row-span-2 relative overflow-hidden">
          <img src={bigLights} alt="Big Lights" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
          <div className="relative z-10">
            <h1 className="mt-10 text-3xl">
              Cloud Migration
            </h1>
            <p className='text-white mt-2'>Seamlessly transition your infrastructure and applications to the cloud for improved scalability, flexibility, and cost-effectiveness.</p>
            <img src={migration} className='mb-10 w-[90%]' alt="" />
          </div>
          <div className="absolute inset-0">
            <Lottie animationData={stars} loop={true} className="h-full w-full" />
          </div>
        </div>
        <div className="rounded-lg border bentogrid-box hover:scale-105 transition duration-150 border-[rgba(255,255,255,.08)] col-span-2 px-6 special row-span-2 relative overflow-hidden">
          <img src={smallLights} alt="Small Lights" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
          <div className="flex flex-col items-start align-bottom relative z-10">
            <img className='w-1/2 h-1/2' src={data} alt="" />
            <h1 className="text-2xl font-semibold">Data Management</h1>
            <p className='text-white'>Efficiently organize, store, and access your data to ensure its accuracy.</p>
          </div>
          <div className="absolute inset-0">
            <Lottie animationData={stars} loop={true} className="h-full w-full" />
          </div>
        </div>
        <div className="rounded-lg bentogrid-box col-span-2 hover:scale-105 transition duration-150 px-8 border border-[rgba(255,255,255,.08)] special row-span-2 relative overflow-hidden">
          <img src={smallLights} alt="Small Lights" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
          <div className="text-xl flex flex-row mt-12 space-x-6 justify-center items-center relative z-10">
            <RiOpenaiFill className="shadow-2xl shadow-slate-100 bg-dark p-4 text-7xl rounded-full text-white border-blue-700 border" />
            <FaWindows className="text-gray-400 text-3xl " />
            <FaGithub className="text-gray-400 text-3xl " />
            <RiCopilotFill className="text-gray-400 text-3xl " />
          </div>
          <div className="relative z-10">
            <h1 className="text-2xl mt-16 font-semibold">
              AI Consulting
            </h1>
            <p className='text-white'>Leverage artificial intelligence to unlock valuable insights, automate processes, and drive innovation in your organization.</p>
          </div>
          <div className="absolute inset-0">
            <Lottie animationData={stars} loop={true} className="h-full w-full" />
          </div>
        </div>
        <div className="rounded-lg bentogrid-box hover:scale-105 transition duration-150 col-span-3 px-12 pt-8 border border-[rgba(255,255,255,.08)] row-span-2 special relative overflow-hidden">
          <img src={bigLights} alt="Big Lights" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
          <div className="relative z-10">
            <h1 className="text-3xl font-bold">
              Customer Analytics
            </h1>
            <p className='text-white mt-2'>Gain deep insights into customer behavior, preferences, and trends to enhance engagement, loyalty, and satisfaction.</p>
          </div>
          <div className="absolute inset-0">
            <Lottie animationData={stars} loop={true} className="h-full w-full" />
          </div>
          <img className='right-0 bottom-0 absolute h-[70%]' src={planet1} alt="" />
          <img className='left-0 bottom-3 absolute h-[50%]' src={planet2} alt="" />
        </div>
      </div>

      {/* Card Layout for small screens */}
      <div className="grid grid-cols-1 gap-5 p-5 md:hidden">
        <div className="bg-[#040119] rounded-lg p-4 border border-[rgba(255,255,255,.08)] relative overflow-hidden">
          <img src={bigLights} alt="Big Lights" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0">
            <Lottie animationData={stars} loop={true} className="h-full w-full" />
          </div>
          <div className="relative z-10">
            <h1 className="text-2xl font-semibold">Cloud Migration</h1>
            <p className='text-white mt-2'>Seamlessly transition your infrastructure and applications to the cloud for improved scalability, flexibility, and cost-effectiveness.</p>
            <img src={migration} className='mt-4 w-1/2' alt="" />
          </div>
        </div>
        <div className="bg-[#040119] rounded-lg p-4 border border-[rgba(255,255,255,.08)] relative overflow-hidden">
          <img src={smallLights} alt="Small Lights" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0">
            <Lottie animationData={stars} loop={true} className="h-full w-full" />
          </div>
          <div className="relative z-10">
            <h1 className="text-2xl font-semibold">Data Management</h1>
            <p className='text-white mt-2'>Efficiently organize, store, and access your data to ensure its accuracy.</p>
            <img src={data} className='mt-4 w-1/3' alt="" />
          </div>
        </div>
        <div className="bg-[#040119] rounded-lg p-4 border border-[rgba(255,255,255,.08)] relative overflow-hidden">
          <img src={smallLights} alt="Small Lights" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0">
            <Lottie animationData={stars} loop={true} className="h-full w-full" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center space-x-4 mb-4">
              <RiOpenaiFill className="shadow-2xl shadow-slate-100 bg-dark p-4 text-5xl rounded-full text-white border-blue-700 border" />
              <FaWindows className="text-gray-400 text-3xl" />
              <FaGithub className="text-gray-400 text-3xl" />
              <RiCopilotFill className="text-gray-400 text-3xl" />
            </div>
            <h1 className="text-2xl font-semibold">AI Consulting</h1>
            <p className='text-white mt-2'>Leverage artificial intelligence to unlock valuable insights, automate processes, and drive innovation in your organization.</p>
          </div>
        </div>
        <div className="bg-[#040119] rounded-lg p-4 border border-[rgba(255,255,255,.08)] relative overflow-hidden">
          <img src={bigLights} alt="Big Lights" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0">
            <Lottie animationData={stars} loop={true} className="h-full w-full" />
          </div>
          <div className="z-10">
            <h1 className="text-2xl font-semibold">Customer Analytics</h1>
            <p className='text-white mt-2 mb-28'>Gain deep insights into customer behavior, preferences, and trends to enhance engagement, loyalty, and satisfaction.</p>
            <img className='w-1/3 right-0 bottom-0 absolute' src={planet1} alt="" />
            <img className='w-1/3 left-0 absolute z-0 -bottom-20' src={planet2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
