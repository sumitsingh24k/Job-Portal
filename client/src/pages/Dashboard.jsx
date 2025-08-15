import React from 'react';
import { PiSuitcaseLight } from "react-icons/pi";
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Dashboard = () => {
  const navigate = useNavigate();

  // Import your assets her

  return (
    <div>
      {/* Navbar for recruiter panel */}
      <div className='flex items-center justify-between p-4 shadow-md bg-white'>
        {/* Logo + Title */}
        <div
          className='flex items-center gap-2 text-lg font-semibold cursor-pointer'
          onClick={() => navigate('/')}
        >
          <PiSuitcaseLight />
          JobCircuit
        </div>

        {/* Welcome message & user icon */}
        <div className='flex items-center gap-4'>
          <p className='max-sm:hidden'>Welcome To JobCircuit</p>
          <div className='relative group'>
            <img
              className='w-8 h-8 border rounded-full cursor-pointer'
              src={assets.company_icon}
              alt="Company Icon"
            />
            {/* Dropdown */}
            <div className='absolute hidden group-hover:block right-0 z-10 text-black rounded pt-12'>
              <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm shadow-md'>
                <li
                  className='py-1 px-2 cursor-pointer hover:bg-gray-100'
                  onClick={() => {
                    // Handle logout here
                  }}
                >
                  Logout
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className='flex items-start bg-gray-50 min-h-screen'>
        {/* Left sidebar with option to add job, manage job, view application */}
        <div className='w-64 bg-white shadow-sm border-r'>
          <ul className='list-none p-0 m-0'>
            <NavLink 
              className={({isActive}) => `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 transition-colors ${isActive ? 'bg-blue-100 border-r-4 border-blue-500' : ''}`} 
              to={'/dashboard/add-job'}
            >
              <img src={assets.add_icon} alt="" className='w-5 h-5' />
              <p className='text-gray-700 font-medium'>Add Job</p>
            </NavLink>
            
            <NavLink 
              className={({isActive}) => `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 transition-colors ${isActive ? 'bg-blue-100 border-r-4 border-blue-500' : ''}`} 
              to={'/dashboard/manage-jobs'}
            >
              <img src={assets.home_icon} alt="" className='w-5 h-5' />
              <p className='text-gray-700 font-medium'>Manage Jobs</p>
            </NavLink>
            
            <NavLink 
              className={({isActive}) => `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 transition-colors ${isActive ? 'bg-blue-100 border-r-4 border-blue-500' : ''}`} 
              to={'/dashboard/view-applications'}
            >
              <img src={assets.person_tick_icon} alt="" className='w-5 h-5' />
              <p className='text-gray-700 font-medium'>View Applications</p>
            </NavLink>
          </ul>
        </div>
        
        <div className='flex-1 p-6'>
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;