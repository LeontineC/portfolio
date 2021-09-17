import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { RiMenu5Fill } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";

const NavBar = () => {

  const [showHamburger, setShowHamburger] = useState(false);

  return (
    <>
      <nav className="navBar">
        <img src="./bird-logo.jpg" alt="bird logo" className="logoNav" />
        <button onClick={() => setShowHamburger(!showHamburger)}><RiMenu5Fill/></button>
        <ul className="navLinks" id={showHamburger ? 'hidden' : ""}>
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
          <li className="navItem">
            <Link to="/particles" className="navLink">
              Particles
            </Link>
          </li>
          <li className="navItem">
            <Link to="/neon" className="navLink">
              Neon
            </Link>
          </li>
          <li className="navItem">
            <a
              href="https://leontinec.github.io/weather-app/"
              className="navLink"
            >
              Weather
            </a>
          </li>
          <li className="navItem">
            <a href="https://leontinec.github.io/webshop/" className="navLink">
              Webshop
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
