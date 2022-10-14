import React from "react";
import { Link } from "react-router-dom";
import Killua from "../images/KilluaProfilePic.jpg";

const Header = () => {
  return (
    <header>
      <img src={Killua} alt=""></img>
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
