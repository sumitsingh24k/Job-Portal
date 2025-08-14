import React, { useContext } from 'react'
import {Route,Routes} from 'react-router-dom';
import Home from './pages/Home'
import Application from './pages/Application'
import Applyjob from './pages/Applyjob'
import RecruiterLogin from './components/RecruiterLogin';
import { AppContext } from './context/Appcontext';
const App = () => {
  const {showRecruiterLogin}=useContext(AppContext)
  return (
    <div>
      {showRecruiterLogin && <RecruiterLogin/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Application' element={<Application/>}/>
        <Route path='/Apply-job/:id' element={<Applyjob/>}/> 
      </Routes>
    </div>
  )
}

export default App
