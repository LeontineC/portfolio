import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { RiMenu5Fill } from "react-icons/ri";
// import { FaTimes } from "react-icons/fa";

const NavBar = () => {

  const [showHamburger, setShowHamburger] = useState(false);

  const handleClick = () => setShowHamburger(!showHamburger);

  return (
    <>
      <nav className="navBar">
        <img src="./bird-logo.jpg" alt="bird logo" className="logoNav" />
        <button onClick={() => setShowHamburger(!showHamburger)}><RiMenu5Fill/></button>
        <ul className="navLinks" id={showHamburger ? 'hidden' : ""}>
          <li className="navItem">
            <Link to="/" className="navLink" onClick={handleClick}>
              Home
            </Link>
          </li>
          <li className="navItem">
            <Link to="/about" className="navLink" onClick={handleClick}>
              Who I Am
            </Link>
          </li>
          <li className="navItem">
            <Link to="/contact" className="navLink" onClick={handleClick}>
              Get in Touch
            </Link>
          </li>
          {/* <li className="navItem"> */}
            {/* <Link to="/particles" className="navLink" onClick={handleClick}> */}
              {/* Particles */}
            {/* </Link> */}
          {/* </li> */}
          <li className="navItem">
            <Link to="/neon" className="navLink" onClick={handleClick}>
              Neon
            </Link>
          </li>
          <li className="navItem">
            <a
              href="https://leontinec.github.io/weather-app/"
              className="navLink"
              onClick={handleClick}>
              Weather
            </a>
          </li>
          <li className="navItem">
            <a href="https://leontinec.github.io/webshop/" className="navLink"
            onClick={handleClick}>
              Webshop
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
