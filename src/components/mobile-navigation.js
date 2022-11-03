import { React, useState } from "react";
import NavLinks from "./nav-links";
import { CgMenuRound, CgCloseO } from "react-icons/cg";

export default function MobileNavigation() {
  const [navLinksOpen, setNavLinksOpen] = useState(false);

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

  const closeMobileNav = () => setNavLinksOpen(false);

  return (
    <nav id="mobile-navigation">
      {navLinksOpen ? null : hamburgerIcon}
      {navLinksOpen && (
        <div id="burger-opacity-background">
          <div id="burger-sidebar">
            {closeIcon}
            <NavLinks isMobile={true} closeMobileNav={closeMobileNav} />
          </div>
        </div>
      )}
    </nav>
  );
}
