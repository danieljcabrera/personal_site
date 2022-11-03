import React from "react";
import { Link, animateScroll } from "react-scroll";

export default function NavLinks(props) {
  return (
    <ul id="nav-links">
      <li
        className="nav-link-item"
        onClick={() => {
          animateScroll.scrollToTop({
            spy: true,
            smooth: true,
            duration: 500
          });
          props.isMobile && props.closeMobileNav();
        }}
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
          onClick={() => props.isMobile && props.closeMobileNav()}
        >
          Projects
        </Link>
      </li>
      <li
        className="nav-link-item"
        onClick={() => {
          animateScroll.scrollToBottom({
            spy: true,
            smooth: true,
            duration: 500
          });
          props.isMobile && props.closeMobileNav();
        }}
      >
        Contact
      </li>
    </ul>
  );
}
