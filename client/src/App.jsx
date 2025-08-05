import React from 'react'
import {Route,Routes} from 'react-router-dom';
import Home from './pages/Home'
import Application from './pages/Application'
import Applyjob from './pages/Applyjob'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Application' element={<Application/>}/>
        <Route path='/Apply-job/:id' element={<Applyjob/>}/> 
      </Routes>
    </div>
  )
}

export default App
