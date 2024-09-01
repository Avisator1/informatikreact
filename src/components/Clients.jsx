import React from 'react'
import accentureLogo from '../assets/clients/accenture.png'
import open from '../assets/clients/open.png'
import equi from '../assets/clients/equi.png'
import mol from '../assets/clients/mol.svg'
import cox from '../assets/clients/cox.png'
import './Client.css'

function Clients() {
  return (
    <div className='flex justify-center items-center text-center'>
      <section className="mt-28 flex justify-center items-center text-center logos">
        <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
          <div className="flex flex-wrap justify-center items-center space-x-8 space-y-4 md:space-y-0 text-gray-500 dark:text-gray-400">
            <a href="#" className="flex justify-center items-center">
              <img className='object-contain hover:text-gray-900 dark:hover:text-white' src={mol} alt="MOL" />
            </a>
            <a href="#" className="flex justify-center items-center">
              <img className='object-contain hover:text-gray-900 dark:hover:text-white' src={open} alt="Open" />
            </a>
            <a href="#" className="flex justify-center items-center">
              <img className='object-contain hover:text-gray-900 dark:hover:text-white' src={accentureLogo} alt="Accenture" />
            </a>
            <a href="#" className="flex justify-center items-center">
              <img className='object-contain hover:text-gray-900 dark:hover:text-white' src={cox} alt="Cox" />
            </a>
            <a href="#" className="flex justify-center items-center">
              <img className='object-contain hover:text-gray-900 dark:hover:text-white' src={equi} alt="Equi" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Clients
