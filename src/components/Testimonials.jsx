import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import circlegrid from '../assets/images/circles_grid.png';
import leftspeech from '../assets/images/leftspeech.png';
import rightspeech from '../assets/images/speechright.png';
import lights from '../assets/images/biglights2.png';
import './Badge.css';

const testimonials = [
  {
    text: "Informatik transformed our tech strategy with innovative solutions and exceptional professionalism, boosting our productivity significantly.",
    author: "Sarah M",
    position: "CTO, InnovateTech",
    image: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    text: "Informatik delivered clear insights and effective solutions that enhanced our system efficiency and provided long-term value.",
    author: "James L",
    position: "CEO, FutureGen Solutions",
    image: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    text: "Informatik's deep tech expertise and tailored solutions greatly improved our systems and aligned perfectly with our business goals",
    author: "Emily Benth",
    position: "Head of IT, GreenTech Industries",
    image: "https://randomuser.me/api/portraits/women/5.jpg"
  }
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative font-poppins mx-4 sm:mx-6 md:mx-8 lg:mx-32">
      <div className="relative flex justify-center">
        <div className='square hidden lg:block'></div>
        <div className='square2 hidden lg:block'></div>
        <img className='lg:w-[70%] opacity-30 hidden lg:block' src={circlegrid} alt="" />

        <div className='absolute inset-0 flex flex-col items-center justify-center text-center'>
          <span className="inline-flex shadow-xl drop-shadow-2xl items-center backdrop-blur-lg rounded-2xl border-[#9018ff] px-2 py-1 text-md font-medium badgeText ring-1 ring-inset ring-pink-300/20">
            Testimonials
          </span>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-16 lg:mb-32 text-white'>Loved By Everyone</h1>
        </div>
      </div>

      <section className="">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <TransitionGroup className="testimonial-wrapper">
            <CSSTransition
              key={currentIndex}
              timeout={300}
              classNames="slide"
            >
              <figure className="relative max-w-screen-md mx-auto border border-[rgba(255,255,255,.08)] rounded-xl p-4 sm:p-5 overflow-hidden">
                <img className='testimonial-image absolute inset-0 z-0 opacity-70' src={lights} alt="" />
                <img className='h-8 sm:h-10 mb-3 sm:mb-5 relative z-10' src={leftspeech} alt="" />
                <img className='h-8 sm:h-10 mb-3 sm:mb-5 absolute right-0 bottom-0 mr-3 sm:mr-5 z-10' src={rightspeech} alt="" />

                {/* Navigation Arrows */}
                <div className="absolute top-2 right-2 flex space-x-2 z-10">
                  <button onClick={prevTestimonial} className="text-gray-500 text-lg sm:text-xl p-1 hover:text-gray-400 transition-colors">
                    <FaArrowLeft />
                  </button>
                  <button onClick={nextTestimonial} className="text-gray-500 text-lg sm:text-xl p-1 hover:text-gray-400 transition-colors">
                    <FaArrowRight />
                  </button>
                </div>

                <blockquote className="relative z-10 mt-4 sm:mt-6">
                  <h1 className="lg:text-2xl text-lg font-poppins font-bold">{testimonials[currentIndex].text}</h1>
                </blockquote>

                <figcaption className="flex items-center justify-center mt-4 sm:mt-6 space-x-3 relative z-10">
                  <img className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" src={testimonials[currentIndex].image} alt="profile picture" />
                  <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div className="pr-3 font-medium text-gray-900 dark:text-white">{testimonials[currentIndex].author}</div>
                    <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">{testimonials[currentIndex].position}</div>
                  </div>
                </figcaption>
              </figure>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </section>
      <div class="line-break mt-48"></div>
    </div>
  );
}

export default Testimonials;
