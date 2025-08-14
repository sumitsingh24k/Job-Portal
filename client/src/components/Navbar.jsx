import React, { useContext } from 'react'
import { PiSuitcaseLight } from "react-icons/pi";
import { useClerk,UserButton,useUser } from '@clerk/clerk-react';
import { Link,useNavigate } from 'react-router-dom';
import { AppContext } from '../context/Appcontext';

const Navbar = () => {
    const navigate = useNavigate();
  
    const {openSignIn}=useClerk()
    const {user}=useUser()
    const {setShowRecruiterLogin}=useContext(AppContext)
  return (
    <div className=' shadow py-4    ' >
      <div className='container px-4 2xl:px-20 my-auto flex justify-between item-center'>
       {/* Logo and Title */}
        <div
          className='flex items-center gap-2 text-lg font-semibold cursor-pointer'
          onClick={() => navigate('/')}
        >
          <PiSuitcaseLight />
          JobCircuit
        </div>
        {
            user
            ?
            <div className='flex items-center gap-3'>
                <Link to={'/Application'}> Applied Jobs</Link>
                <p>|</p>
                <p className='max-sm:hidden'>Hi,{user.firstName+""+user.lastName} </p>
                <UserButton/>
            </div>
            :<div className='flex gap-4 max-sm:text-xs '>
            <button onClick={e=>setShowRecruiterLogin(true )} className='px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors'>
            Recruiter Login
          </button>
          <button onClick={e=>openSignIn()} className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors'>
            Login
          </button>
        </div>
        }
        
      </div>
    </div>
  )
}

export default Navbar 
