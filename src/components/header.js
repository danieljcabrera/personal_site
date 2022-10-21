import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";

const Header = () => {
  return (
    <header>
      <img src={Logo} alt=""></img>
      <nav>
        <div className="link">
          <Link to="/">Home</Link>
        </div>
        <div className="link">
          <Link to="/projects">Projects</Link>
        </div>
        <div className="link">
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
