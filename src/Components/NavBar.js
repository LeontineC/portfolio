import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"


const NavBar = () => {
  return (
    <>
      <nav className="navBar">
        
        <img src="./bird-logo.jpg" alt="bird logo" className="logoNav" />

        <ul className="navLinks">
          <li className="navItem">
            <Link to="/" className="navLink">
              Home
            </Link>
          </li>
          <li className="navItem">
            <Link to="/about" className="navLink">
              Who I Am
            </Link>
          </li>
          <li className="navItem">
            <Link to="/contact" className="navLink">
              Get in Touch
            </Link>
          </li>
          {/* <li className="navItem"> */}
            {/* <Link to="/particles" className="navLink"> */}
              {/* Particles */}
            {/* </Link> */}
          {/* </li> */}
          <li className="navItem">
            <Link to="/neon" className="navLink">
              Neon
            </Link>
          </li>
          <li className="navItem">
            <a
              href="https://leontinec.github.io/weather-app/"
              className="navLink">
              Weather
            </a>
          </li>
          <li className="navItem">
            <a
              href="https://leontinec.github.io/webshop/"
              className="navLink">
              Webshop
            </a>
          </li>
        </ul>

      </nav>
    </>
  );
};

export default NavBar;
