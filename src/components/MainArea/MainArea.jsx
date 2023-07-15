import React from 'react';
import Header from '../Header/Header';
import Dashboard from'../../Pages/Dashboard/Dashboard';
import RegularTask from '../../Pages/RegularTask/RegularTask';
import CompletedTask from '../../Pages/CompletedTask/CompletedTask';
import MissedTask from '../../Pages/MissedTask/MissedTask';
import Tag from '../../Pages/Tags/Tags';
import Calender from '../../Pages/Calender/Calender';
import Task from "../Task/Task";
import { useState } from 'react';
import {Routes,Route} from 'react-router-dom'
import './MainArea.css'

function MainArea() {
  const [userStatus, setUserStatus] = useState(false);
  return (
    <div className='mainArea'>
      <Header/>
      <Routes>
        <Route path='/' element={<Dashboard/>}>
          
        </Route>
        <Route path='/regularTask' element={<RegularTask/>}></Route>
        <Route path='/completedTask' element={<CompletedTask/>}></Route>
        <Route path='/missedTask' element={<MissedTask/>}></Route>
        <Route path='/tag' element={<Tag/>}></Route>
        <Route path='/calender' element={<Calender/>}></Route>
        <Route path='/task' element={<Task/>}></Route>
      </Routes>
    </div>
  )
}

export default MainArea