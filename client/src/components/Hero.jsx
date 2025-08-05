import React, { useContext, useRef } from 'react'
import {assets} from '../assets/assets'
import { AppContext } from '../context/Appcontext'


const Hero = () => {
    const {setSearchFilter,setIsSearched}=useContext(AppContext)
    const titleref=useRef(null)
    const locationref=useRef(null)

    const onSearch=()=>{
        setSearchFilter({
            title:titleref.current.value,
            location:locationref.current.value
        })
        setIsSearched(true)
        console.log({
            title:titleref.current.value,
            location:locationref.current.value
        });
    }
  return (
    <div className='container 2xl:px-20 mx-auto py-16'>
        {/* Hero Section */}
        <div className='text-center mx-2 mb-16'>
            <h1 className='font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 text-gray-800'>
                Find Your Dream Job Today
            </h1>
            <p className='font-serif mb-12 max-w-2xl mx-auto text-lg font-light px-5 text-gray-600'>
                Connect with top employers and discover opportunities that match your skills and aspirations.
            </p>
            
            {/* Search Bar */}
            <div className='flex items-center justify-center max-w-4xl mx-auto mb-16'>
                <div className='flex items-center w-full bg-white rounded-lg shadow-lg overflow-hidden'>
                    <div className='flex items-center gap-3 px-6 py-4 flex-1 border-r border-gray-200'>
                        <img className='h-5 w-5 text-gray-400' src={assets.search_icon} alt="" />
                        <input 
                            type="text"  
                            placeholder='Job title, keywords, or company' 
                            className='outline-none text-gray-700 placeholder-gray-400 w-full'
                            ref={titleref}
                        />
                    </div>
                    <div className='flex items-center gap-3 px-6 py-4 flex-1'>
                        <img className='h-5 w-5 text-gray-400' src={assets.location_icon} alt="" />
                        <input 
                            type="text"  
                            placeholder='City, state, or remote' 
                            className='outline-none text-gray-700 placeholder-gray-400 w-full'
                            ref={locationref}
                        />
                    </div>
                    <button onClick={onSearch} className='bg-blue-600 hover:bg-blue-700 px-8 py-4 text-white font-semibold transition-colors'>
                        Search Jobs
                    </button>
                </div>
            </div>
        </div>

        {/* Stats Section */}
        <div className='flex justify-center items-center gap-16 mb-16 flex-wrap'>
            <div className='text-center'>
                <div className='flex items-center justify-center mb-2'>
                    <svg className='w-8 h-8 text-blue-600 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                        <path d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'/>
                    </svg>
                </div>
                <h2 className='text-3xl font-bold text-gray-800 mb-1'>50K+</h2>
                <p className='text-gray-600 font-medium'>Active Jobs</p>
            </div>
            
            <div className='text-center'>
                <div className='flex items-center justify-center mb-2'>
                    <svg className='w-8 h-8 text-blue-600 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                        <path d='M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z'/>
                    </svg>
                </div>
                <h2 className='text-3xl font-bold text-gray-800 mb-1'>5K+</h2>
                <p className='text-gray-600 font-medium'>Companies</p>
            </div>
            
            <div className='text-center'>
                <div className='flex items-center justify-center mb-2'>
                    <svg className='w-8 h-8 text-blue-600 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                        <path d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'/>
                    </svg>
                </div>
                <h2 className='text-3xl font-bold text-gray-800 mb-1'>100K+</h2>
                <p className='text-gray-600 font-medium'>Job Seekers</p>
            </div>
        </div>

        {/* Trusted Companies Section */}
        <div className='bg-white border border-gray-200 shadow-sm mx-2 p-8 rounded-lg'>
            <div className='flex justify-center items-center gap-12 lg:gap-16 flex-wrap'>
                <p className='font-medium text-gray-700 text-lg'>Trusted By</p>
                <img className='h-8 opacity-70 hover:opacity-100 transition-opacity' src={assets.microsoft_logo} alt="Microsoft" />
                <img className='h-8 opacity-70 hover:opacity-100 transition-opacity' src={assets.samsung_logo} alt="Samsung" />
                <img className='h-8 opacity-70 hover:opacity-100 transition-opacity' src={assets.walmart_logo} alt="Walmart" />
                <img className='h-8 opacity-70 hover:opacity-100 transition-opacity' src={assets.accenture_logo} alt="Accenture" />
                <img className='h-8 opacity-70 hover:opacity-100 transition-opacity' src={assets.amazon_logo} alt="Amazon" />
                <img className='h-8 opacity-70 hover:opacity-100 transition-opacity' src={assets.adobe_logo} alt="Adobe" />
            </div>
        </div>
    </div>
  )
}

export default Hero