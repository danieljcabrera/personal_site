import React from "react";
import { animateScroll } from "react-scroll";
import Logo from "../images/Logo.png";
import MobileNavigation from "./mobile-navigation";
import Navigation from "./navigation";

const Header = () => {
  return (
    <header>
      <MobileNavigation />
      <img
        src={Logo}
        id="header-logo"
        onClick={() =>
          animateScroll.scrollToTop({
            spy: true,
            smooth: true,
            duration: 500
          })
        }
        alt="DC initials in a black outlined greyish circle using the characters |]("
      ></img>
      <Navigation />
    </header>
  );
};

export default Header;
