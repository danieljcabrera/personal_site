import React from "react";
import LogoAndLink from "./logo-and-link";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import ArticleIcon from "@mui/icons-material/Article";

import Logo from "../images/Logo.png";

const Footer = () => {
  return (
    <footer id="contact">
      <div id="name-contact-container">
        <div id="logo-name-container">
          <img src={Logo} alt="" id="footer-logo"></img>
          <p id="footer-name">Daniel Cabrera</p>
        </div>
        <div id="contact-links-container">
          <LogoAndLink
            icon={<EmailIcon sx={{ fontSize: 30 }}></EmailIcon>}
            link="mailto:dcabrera030@gmail.com"
            text="Email: dcabrera030@gmail.com"
          ></LogoAndLink>
          <LogoAndLink
            icon={<GitHubIcon sx={{ fontSize: 30 }}></GitHubIcon>}
            link="https://github.com/danieljcabrera"
            text="GitHub: danieljcabrera"
          ></LogoAndLink>
          <LogoAndLink
            icon={<LinkedInIcon sx={{ fontSize: 30 }}></LinkedInIcon>}
            link="https://www.linkedin.com/in/daniel-cabrera-3a9306196/"
            text="LinkedIn: daniel-cabrera-3a9306196"
          ></LogoAndLink>
          <LogoAndLink
            icon={<TwitterIcon sx={{ fontSize: 30 }}></TwitterIcon>}
            link="https://twitter.com/dcabrera50"
            text="Twitter: @dcabrera50"
          ></LogoAndLink>
          <LogoAndLink
            icon={<ArticleIcon sx={{ fontSize: 30 }}></ArticleIcon>}
            link={process.env.PUBLIC_URL + "/DanielCabreraResume.pdf"}
            text="Resume"
          ></LogoAndLink>
        </div>
      </div>
      <p id="copyright">© Daniel Cabrera 2022</p>
    </footer>
  );
};

export default Footer;
