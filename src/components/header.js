import React from "react";
import { Link } from "react-scroll";
import Logo from "../images/Logo.png";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
          <img
            src={Logo}
            id="header-logo"
            alt="DC initials in a black outlined greyish circle using the characters |]("
          ></img>
        </Link>
        <ul id="nav-links">
          <li className="nav-link-item">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="nav-link-item">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="nav-link-item">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={100}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* <div className="link">
          <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
            Home
          </Link>
        </div>
        <div className="link">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            Projects
          </Link>
        </div>
        <div className="link">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={100}
            duration={500}
          >
            Contact
          </Link>
        </div> */}
      </nav>
    </header>
  );
};

export default Header;
