import React from 'react'
import './Task.css'
import { useLocation } from 'react-router-dom'

function Task(props) {
    const location = useLocation();
   
    console.log(location.state);
  return (
    <div>
<span>ok</span>
    </div>
  )
}

export default Task