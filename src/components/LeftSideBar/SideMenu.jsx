import React, { useState } from "react";

import "./SideMenu.css";
import { NavLink } from "react-router-dom";
function SideMenu(props) {
  const navlinkStyle = ({ isActive }) => {
    return {
      width: "100%",
      color: isActive ? "white" : "",
      backgroundColor: isActive ? "purple" : "",
      fontWeight: isActive ? "600" : "",
      borderRadius: isActive ? ".5rem" : "",
    };
  };
  return (
    <div className="sideMenu">
      <NavLink to={props.path} className={"menu"} style={navlinkStyle}>
        {props.icon}
        <span>{props.heading}</span>
        <span
          className={
            props.count ? "count " + props.countStyle : { display: "none" }
          }
        >
          {props.count}
        </span>
      </NavLink>
    </div>
  );
}

export default SideMenu;
