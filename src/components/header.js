import { React, useState } from "react";
import { Link, animateScroll } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../images/Logo.png";

const Header = () => {
  // Use state to handle toggling the nav links with a hamburger menu on mobile
  const [navLinksOpen, setNavLinksOpen] = useState(window.screen.width >= 600);

  // JSX elements to interact with the nav links useState
  const hamburgerOpenIcon = (
    <MenuIcon
      className="burger-menu"
      onClick={() => setNavLinksOpen(!navLinksOpen)}
    ></MenuIcon>
  );
  const hamburgerCloseIcon = (
    <CloseIcon
      className="burger-menu"
      onClick={() => setNavLinksOpen(!navLinksOpen)}
    ></CloseIcon>
  );
  return (
    <header>
      <nav>
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
        {navLinksOpen ? hamburgerCloseIcon : hamburgerOpenIcon}
        {navLinksOpen && (
          <ul id="nav-links">
            <li
              className="nav-link-item"
              onClick={() =>
                animateScroll.scrollToTop({
                  spy: true,
                  smooth: true,
                  duration: 500
                })
              }
            >
              Home
            </li>
            <li className="nav-link-item">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li
              className="nav-link-item"
              onClick={() =>
                animateScroll.scrollToBottom({
                  spy: true,
                  smooth: true,
                  duration: 500
                })
              }
            >
              Contact
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
