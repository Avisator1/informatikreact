import React from 'react'
import '../src/components/Badge.css'

const About = () => {
  return (
    <div>
      <div className="justify-center items-center text-center flex mt-28">
        <span className="inline-flex shadow-xl drop-shadow-2xl items-center backdrop-blur-lg rounded-2xl border-[#9018ff] px-5 py-1 text-md font-medium badgeText ring-1 ring-inset ring-pink-300/20 mt-[-20px]">
          About
        </span>

      </div>
      <div className='items-center text-center justify-center'>
        <h1 className='text-4xl herotext lg:text-6xl font-poppins font-extrabold tracking-tight mt-5'>
            About Us
        </h1>
        <p className='lg:mx-96 mx-10 font-poppins text-gray-500 mt-5 text-center text-lg lg:text-xl'> Welcome to Informatik, your trusted partner in cloud solutions and digital transformation. We specialize in providing scalable and secure cloud infrastructure, empowering businesses of all sizes to innovate and grow.</p>
      </div>
    </div>
  )
}

export default About
