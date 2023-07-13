import React from "react";
import './LeftSideBar.css'
import SideMenu from "./SideMenu";

import Dashboard from '@mui/icons-material/DashboardOutlined';
import RegularTask from '@mui/icons-material/AssignmentOutlined';
import CompletedTask from '@mui/icons-material/AssignmentTurnedInOutlined';
import Tag from '@mui/icons-material/LocalOfferOutlined';
import Calendar from '@mui/icons-material/CalendarMonthOutlined';
import MissedTask from '@mui/icons-material/AssignmentLateOutlined';

import logo from '../../Assets/logoTodo.png'

function LeftSIdeBar() {
  return (
    <div className="LeftSideBar">
      
      <div className="logo">
      <h1><img src={logo} alt="App Logo"/>
      Planner-<span style={{color:'rgba(161, 0, 161, 0.589)'}}>To</span>-Do</h1>
      </div>

<div style={{marginTop:'3rem'}}>

      <SideMenu heading={"Dashboard"} icon={<Dashboard sx={{ fontSize: "1.5rem" }}/>} path={"/"}/>
      <SideMenu heading={"Regular_Tasks"} icon={<RegularTask sx={{ fontSize: "1.5rem" }}/>} path={"/regularTask"} count={10} countStyle={'regular'}/>
      <SideMenu heading={"Completed_Tasks"} icon={<CompletedTask sx={{ fontSize: "1.5rem" }}/>} path={"/CompletedTask"} count={2} countStyle={'completed'}/>
      <SideMenu heading={"Missed_Tasks"} icon={<MissedTask sx={{ fontSize: "1.5rem" }}/>} path={"/missedTask"} count={4} countStyle={'missed'}/>
      <SideMenu heading={"Tags"} icon={<Tag sx={{ fontSize: "1.5rem" }}/>} path={"/tag"} count={6} countStyle={'tag'}/>
      <SideMenu heading={"Calender"} icon={<Calendar sx={{ fontSize: "1.5rem" }}/>} path={"/calender"}/>
</div>
    </div>
  );
}

export default LeftSIdeBar;
