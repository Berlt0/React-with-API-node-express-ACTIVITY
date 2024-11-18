import React from 'react'
import { useState } from 'react'
import {Link} from "react-router-dom"
import "./header.css"

const Header = () => {
    const {activeTab, setActiveTab} = useState("Home");

  return (
    <div className='header'>
        <p className='logo'>Contact Management System</p>
        <div className="header-right"> 
            <Link to="/">
                <p className={`${activeTab === "Home" ? "active" : " "}`} onClick={() => setActiveTab("Home")}>Home</p>
            </Link>
            <Link to="/add">
                <p className={`${activeTab === "Adduser" ? "active" : " "}`} onClick={() => setActiveTab("Adduser")}>Add Contact</p>
            </Link>
           
           
        </div>

      
    </div>
  )
}

export default Header
