import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Client.css';
import lights from '../assets/images/lights.png';
import bigLights from '../assets/images/biglights.png';
import { IoMdStats, IoMdVideocam, IoMdPeople, IoMdCall } from 'react-icons/io';
import { IoSparkles } from 'react-icons/io5';
import Lottie from 'lottie-react';
import starsAnimation from './stars.json'; // Ensure the path is correct

function Process() {
  const steps = [
    {
      title: 'Performance Marketing',
      description: 'Performance marketing involves using advertising methods where advertisers only pay when specific actions are completed, like a sale or click. This ensures that marketing budgets are used effectively to drive measurable results.',
      icon: IoMdStats,
    },
    {
      title: 'Video Production',
      description: 'Video production includes all the steps involved in creating a video, from conceptualizing the idea to final editing. High-quality video content can significantly enhance a brand\'s visibility and engagement.',
      icon: IoMdVideocam,
    },
    {
      title: 'Relations',
      description: 'Building and maintaining strong relationships with clients, stakeholders, and the community is essential for business success. Effective communication and trust are key components of strong relations.',
      icon: IoMdPeople,
    },
    {
      title: 'Inside Sales',
      description: 'Inside sales involve remote sales activities, typically conducted via phone or the internet. This approach allows sales teams to efficiently reach a larger audience and close deals quickly.',
      icon: IoMdCall,
    },
  ];

  return (
    <div className="flex flex-col items-center mt-28 font-poppins md:mt-15 px-4">
      <span className="inline-flex shadow-xl drop-shadow-2xl items-center backdrop-blur-lg rounded-2xl border-[#9018ff] px-2 py-1 text-xs md:text-sm font-medium badgeText ring-1 ring-inset ring-pink-300/20 mt-[-20px]">
        The Process
      </span>
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-poppins mt-5">How We Roll</h1>
      <div className="relative w-full max-w-3xl mt-8">
        <div className="flex flex-col items-center">
          {steps.map((step, index) => {
            const { ref, inView } = useInView({
              triggerOnce: false,
              threshold: 0.1,
            });
            
            return (
              <div
                key={index}
                ref={ref}
                className={`relative border rounded-2xl drop-shadow-xl shadow-xl border-[rgba(255,255,255,.08)] w-full md:w-11/12 lg:w-full h-80 md:h-96 p-4 md:p-6 my-4 flex flex-col justify-center text-white overflow-hidden transform transition-opacity duration-1000 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <img 
                  src={index === 0 || index === 2 ? bigLights : lights} 
                  alt="background lights" 
                  className="absolute top-0 left-0 w-full h-full object-cover opacity-60" 
                />
                <div className="absolute inset-0">
                  <Lottie 
                    animationData={starsAnimation}
                    loop
                    autoplay
                    className="h-full w-full"
                  />
                </div>
                <step.icon className="text-3xl absolute right-10 top-10 md:text-4xl" />
                <div className="relative z-10 mx-4 md:mx-5">
                  <div className={`absolute -mt-8 md:-mt-10 border border-[#9018ff] px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm flex items-center text-[#9018ff]`}>
                    <IoSparkles className="text-base md:text-lg mr-1" />
                    {`Step ${index + 1}`}
                  </div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{step.title}</h1>
                  <p className="mt-2 text-base md:text-lg">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Process;
