import React, { useState } from "react";
import './Header.css'
import SearchBar from "../Search/SearchBar";

function Header() {
  const [userStatus, setUserStatus] = useState(false);
  return (
    <div className="header">
      <div className="welcomeTag">
        {userStatus ? (
          <div className="head">Hello Roshan Bende</div>
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
