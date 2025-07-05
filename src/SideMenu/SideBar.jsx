import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./SideBar.css";
// import React from "react";
// import Home from "../Pages/Home/Home";
import {Link} from "react-router-dom";



function SideBar(){

    const[isOpen, setIsOpen]=useState(false);
    
    function toggleBar(){
    
        setIsOpen(!isOpen);
        
    }

    return(<>

        <button className="button-menu" onClick={toggleBar}> 
                {isOpen ? <FaTimes className=""/> : <FaBars className="open" style={{ color: "grey" }} />}
            </button>
        
            <div className={`sidebar-container ${isOpen ? "Open" : ""}`}>
      <button className="button-menu" onClick={toggleBar}>
        <FaTimes className="Close" />
      </button>

      <ul>
        <li onClick={toggleBar}>
          <Link to="/Home" className="link">Home</Link>
        </li>
        <li onClick={toggleBar}>
          <Link to="/Shop" className="link">Shop</Link>
        </li>
        <li onClick={toggleBar}>
          <Link to="/Contact" className="link">Contact</Link>
        </li>
        
      </ul>
    </div>
    </>)

}

export default SideBar;