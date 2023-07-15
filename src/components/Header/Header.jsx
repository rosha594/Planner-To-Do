import React, { useContext, useState } from "react";
import './Header.css'
import SearchBar from "../Search/SearchBar";
import { AuthContext } from "../../context/AutheContext";
import InputModal from "../InputModal/InputModal";
import profile from '../../Assets/profile.jpg'

function Header() {
  const {currentUser} = useContext(AuthContext);

  const [modalOpened, setModalStatus] = useState(false);
  
  return (
    <div className="header">
      <div className="welcomeTag">
        {currentUser ? (
          <div className="head"><h3>Hello <span style={{color:"blueviolet"}}>{currentUser.email}</span><br/>Welcome Back !</h3></div>
        ) : (
          <div className="head">
            <h1>Welcome To Planner-To-Do !</h1>
            <p style={{fontSize:'1.5rem'}}>Start To-Doing Things....</p>
          </div>
        )}
      </div>
        <SearchBar />
    </div>
  );
}

export default Header;
