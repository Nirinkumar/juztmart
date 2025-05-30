import React from 'react'
import { Link } from "react-router-dom"
import { useState } from "react";
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

function Navbar() {

  const [isClick, setIsClick] = useState(false)

    const showNavbar = () => {
        setIsClick(!isClick);
    }

    const hideNavbar = () => {
        setIsClick(!isClick);
    }

  return (
    <div>
      <nav className="navbar">
        <h1>JuZtMart</h1>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/search" className="nav-link">Search</Link>
            <Link to="/contact" className="nav-link">contact</Link>
        </div>

        <div className="nav-toggle-button" onClick={showNavbar}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </nav>

      <div className={isClick ? 'side-navbar-active' : 'side-navbar-inactive'}>
          {/* <p style={{textAlign: 'right'}}> */}
            {/* <button onClick={hideNavbar}>close</button> */}
            <FontAwesomeIcon icon={faXmark} onClick={hideNavbar} />
          {/* </p> */}
          <div className="side-navbar-links">
              <Link to="/" className="side-nav-link" onClick={hideNavbar}>Home</Link>
              <Link to="/login" className="side-nav-link" onClick={hideNavbar}>Login</Link>
              <Link to="/search" className="side-nav-link" onClick={hideNavbar}>Search</Link>
              <Link to="/contact" className="side-nav-link" onClick={hideNavbar}>contact</Link>
          </div>

      </div>

    </div>
  )
}

export default Navbar
