import React, { useContext } from 'react'
import {Route,Routes} from 'react-router-dom';
import Home from './pages/Home'
import Application from './pages/Application'
import Applyjob from './pages/Applyjob'
import RecruiterLogin from './components/RecruiterLogin';
import { AppContext } from './context/Appcontext';
import Dashboard from './pages/Dashboard';
import Addjobs from './pages/Addjobs';
import ManageJobs from './pages/ManageJobs';
import Viewapplication from './pages/Viewapplication';
const App = () => {
  const {showRecruiterLogin}=useContext(AppContext)
  return (
    <div>
      {showRecruiterLogin && <RecruiterLogin/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Application' element={<Application/>}/>
        <Route path='/Apply-job/:id' element={<Applyjob/>}/> 
        <Route path='Dashboard' element={<Dashboard/>}>
          <Route path='Add-job' element={<Addjobs/>}/>
          <Route path='Manage-jobs' element={<ManageJobs/>}/>
          <Route path='view-applications' element={<Viewapplication/>}/>

        </Route>
      </Routes>
    </div>
  )
}

export default App
