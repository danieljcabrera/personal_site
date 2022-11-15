import { React, useState, useEffect, useRef } from "react";
import NavLinks from "./nav-links";
import { CgMenuRound, CgCloseO } from "react-icons/cg";

export default function MobileNavigation() {
  const [navLinksOpen, setNavLinksOpen] = useState(false);
  const ref = useRef(null);

  const closeMobileNav = () => setNavLinksOpen(false);

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setNavLinksOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const hamburgerIcon = (
    <CgMenuRound
      className="burger-menu"
      size="2.5rem"
      color="white"
      onClick={() => setNavLinksOpen(!navLinksOpen)}
    ></CgMenuRound>
  );

  const closeIcon = (
    <CgCloseO
      className="burger-menu"
      size="2.5rem"
      color="white"
      onClick={() => setNavLinksOpen(!navLinksOpen)}
    ></CgCloseO>
  );

  return (
    <nav id="mobile-navigation">
      {navLinksOpen ? null : hamburgerIcon}
      {navLinksOpen && (
        <div id="burger-opacity-background">
          <div id="burger-sidebar" ref={ref}>
            {closeIcon}
            <NavLinks isMobile={true} closeMobileNav={closeMobileNav} />
          </div>
        </div>
      )}
    </nav>
  );
}
