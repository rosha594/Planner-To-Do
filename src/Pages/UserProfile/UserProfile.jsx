import React, { useContext, useEffect, useState } from "react";
import profile from "../../Assets/profile.jpg";
import "./UserProfile.css";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { AuthContext } from "../../context/AutheContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase-config";


function UserProfile({ user }) {
  const {userData} = useContext(AuthContext)
  const [percentage,setPercentage] = useState(35);
  const [CList, setList] = useState([{
    userName:"Ashish Bopache",
    title:"Engineer",    
  },{
    userName:"Ashish Bopache",
    title:"Engineer",    
  },{
    userName:"Ashish Bopache",
    title:"Engineer",    
  },{
    userName:"Ashish Bopache",
    title:"Engineer",    
  },{
    userName:"Ashish Bopache",
    title:"Engineer",    
  },{
    userName:"Ashish Bopache",
    title:"Engineer",    
  },{
    userName:"Ashish Bopache",
    title:"Engineer",    
  },{
    userName:"Ashish Bopache",
    title:"Engineer",    
  }])
useEffect(()=>{
  console.log(userData)
 
},[])
  const progressColor = () => {
    if(percentage<=40)
      return "red"
    else if(percentage<70 && percentage>=41)
      return "yellow"
    else return "green"
  }

  return (
    <div className="userBlock">

    <div className="userProfile">
      <div
        className="userImage"
        style={{ backgroundImage: `url(${profile})` }}
      ></div>
      <div className="userName">
        <span>{userData.fullNameValue}</span>
        <span>{userData.userTitleValue}</span>
      </div>
    </div>
    <div className="progressBlock">
      <h3>Overall Progress</h3>
      <div className="progress" >
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        size="sm"
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "purple",
          textColor: "#fff",
          pathColor: "#fff",
          trailColor: "transparent"
        })}
      />
      </div>
    </div>

    <div className="collaborators">
      <h4>Your Collaborators</h4>
      <div className="collaboratorsList">
        {CList.map((collabeUser) => <div className="collabeUser">
        <div
        className="collabeUserImage"
        style={{ backgroundImage: `url(${profile})` }}
      ></div>
      <div className="collabeUserName">
        <span>{collabeUser.userName}</span>
        <span>{collabeUser.title}</span>
      </div>
        </div>)}
      </div>
    </div>
    </div>
  );
}

export default UserProfile;
