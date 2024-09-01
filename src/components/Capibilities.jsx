import React from 'react';
import './Badge.css';

// Import the images
import smallCardImage from '../assets/images/y9cAPZ4.png';
import largeCardImage from '../assets/images/biglights.png';
import additionalSmallCardImage from '../assets/images/lights.png';
import largecard2 from '../assets/images/biglights2.png';
import bolt from '../assets/images/bolt.png'
import planet1 from '../assets/images/planet1.png';
import customeranalytics from '../assets/images/dataanalyticsbento.png'
import healthcare from '../assets/images/healthcare.png'
import retailanalytics from '../assets/images/retailanalytics.png'
import planet2 from '../assets/images/planet2.png';
import magi from '../assets/images/magnifying_glass.png'
import datagraphic from '../assets/images/dataMangement1png.png'

function Capabilities() {
  return (
    <div className="items-center text-center mt-28 font-poppins">
      <div className="justify-center items-center text-center flex">
        <span className="inline-flex shadow-xl drop-shadow-2xl items-center backdrop-blur-lg rounded-2xl border-[#9018ff] px-2 py-1 text-md font-medium badgeText ring-1 ring-inset ring-pink-300/20 mt-[-20px]">
          Our Services
        </span>
      </div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-5">Our Capabilities</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[300px] gap-4 my-10 mx-5 md:mx-20 lg:mx-40'>
        <div className='relative border border-[rgba(255,255,255,.08)] rounded-xl p-4 flex flex-col items-start justify-start md:col-span-2 overflow-hidden'>
          <img
            src={smallCardImage}
            alt="Background"
            className='absolute inset-0 w-full h-full object-cover'
            style={{ opacity: 0.5 }} // Control the opacity of the background image here
          />
          <div className="relative z-10 flex flex-col items-start justify-start h-full p-4">
            <h1 className='text-xl md:text-2xl font-bold mb-2 text-left'>Retail Analytics<br /><span className='opacity-70'>Easier Insights</span></h1>
            <img className='opacity-40 hover:scale-150 duration-1000 transition' src={retailanalytics} alt="" />
          </div>
        </div>

        <div className='relative border border-[rgba(255,255,255,.08)] rounded-xl p-4 flex flex-col items-start justify-start overflow-hidden'>
          <img
            src={largecard2}
            alt="Background"
            className='absolute inset-0 w-full h-full object-cover'
            style={{ opacity: 0.5 }} // Control the opacity of the background image here
          />
          <div className="relative z-10 flex flex-col items-start justify-start h-full p-4">
            <h1 className='text-xl md:text-2xl font-bold z-50 text-left'>SEO Optimization<br /><span className='opacity-70'>Easy Ranking</span></h1>
            <div className="flex justify-center items-center w-full h-full">
              <img className='h-3/4 opacity-40 mb-12 hover:opacity-100 transition duration-1000 hover:scale-125' src={magi} alt="" />
            </div>
          </div>
        </div>

        <div className='relative border border-[rgba(255,255,255,.08)] rounded-xl p-4 flex flex-col items-start justify-start md:row-span-2 overflow-hidden'>
          <img
            src={largeCardImage}
            alt="Background"
            className='absolute inset-0 w-full h-full object-cover'
            style={{ opacity: 0.5 }} // Control the opacity of the background image here
          />
          <div className="relative z-10 flex flex-col items-start justify-start h-full p-4">
            <h1 className='text-xl md:text-2xl font-bold mb-2 text-left'>Top Support<br/><span className="opacity-70">Fast Responses</span></h1>
            <div className="flex justify-center items-center w-full h-full">
              <img className='w-[50%] lg:w-3/4 opacity-40 mb-12 hover:opacity-100 transition duration-1000 hover:scale-150' src={bolt} alt="Lightning Bolt" />
            </div>
          </div>
        </div>

        <div className='relative dataMangement border border-[rgba(255,255,255,.08)] rounded-xl p-4 flex flex-col items-start justify-start overflow-hidden'>
          <img
            src={largecard2}
            alt="Background"
            className='absolute inset-0 w-full h-full object-cover'
            style={{ opacity: 0.5 }} // Control the opacity of the background image here
          />
          <div className="relative z-10 flex flex-col items-start justify-start h-full p-4">
            <h1 className='text-xl md:text-2xl font-bold dataText text-white'>Data Mangement<br /><span className='opacity-70'>With Ease</span></h1>
            <div className="flex justify-center dataImage items-center w-full h-full">
              <img className='opacity-40 mb-20' src={datagraphic} alt="" />
            </div>
          </div>
        </div>

        <div className='relative border border-[rgba(255,255,255,.08)] rounded-xl p-4 flex flex-col items-start justify-start md:col-span-2 overflow-hidden'>
          <img
            src={smallCardImage}
            alt="Background"
            className='absolute inset-0 w-full h-full object-cover'
            style={{ opacity: 0.5 }} // Control the opacity of the background image here
          />
          <div className="relative z-10 flex flex-col items-start justify-start h-full p-4">
            <h1 className='text-xl md:text-2xl font-bold text-left'>Healthcare Analytics<br /><span className='opacity-70'>Better Insights</span></h1>
            <img className='opacity-40 mb-12 hover:scale-150 duration-1000 transition' src={healthcare} alt="" />
          </div>
        </div>

        <div className='relative border border-[rgba(255,255,255,.08)] rounded-xl p-4 flex flex-col items-start justify-start md:col-span-2 overflow-hidden'>
          <img
            src={largecard2}
            alt="Background"
            className='absolute inset-0 w-full h-full object-cover'
            style={{ opacity: 0.5 }} // Control the opacity of the background image here
          />
          <div className="relative z-10 flex flex-col items-start justify-start h-full p-4">
            <h1 className='text-xl md:text-2xl font-bold text-left mb-2'>Customer Analytics<br /><span className='opacity-70'>Helpful Data</span></h1>
            <img className='opacity-40 hover:scale-110 duration-1000 transition' src={customeranalytics} alt="" />
          </div>
        </div>

        <div className='relative border border-[rgba(255,255,255,.08)] rounded-xl p-4 flex flex-col items-start justify-start md:col-span-2 overflow-hidden'>
          <img
            src={smallCardImage}
            alt="Background"
            className='absolute inset-0 w-full h-full object-cover'
            style={{ opacity: 0.5 }} // Control the opacity of the background image here
          />
          <div className="relative z-10 flex flex-col items-start justify-start h-full p-4">
            <h1 className='text-xl md:text-2xl font-bold mb-2 text-left'>Customers First Priority.<br /><span className='opacity-70'>Always.</span></h1>
          </div>
          <div>
            <img className='absolute bottom-0 right-0 h-[60%]' src={planet1} alt="" />
            <img className='absolute bottom-4 left-5 h-[50%]' src={planet2} alt="" />
          </div>
        </div>
      </div>
      <div class="line-break mt-48"></div>
    </div>
  );
}

export default Capabilities;
