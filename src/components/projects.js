import React from "react";
import ProjectCard from "./project-card";
import LogoAndLink from "./logo-and-link";

import BorrachoSaloonWebsite from "../images/BorrachoSaloonWebsite.jpg";
import AdventureBiofeedbackWebsite from "../images/AdventureBiofeedbackWebsite.jpg";
import WBOInterpolationAmbertoolsOpeneye from "../images/WBOInterpolationAmbertoolsOpeneye.jpg";
import WBOInterpolationeMoleculesPubChem from "../images/WBOInterpolationeMoleculesPubChem.jpg";
import DANCEMolecule from "../images/DANCEMolecule.png";

import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import HtmlIcon from "@mui/icons-material/Html";
import ArticleIcon from "@mui/icons-material/Article";

export default function Projects() {
  return (
    <div className="section">
      <h1 className="section-header">Projects</h1>
      <div id="project-cards">
        <ProjectCard
          title="Borracho Saloon Website"
          date="August 2022 - Present"
          jobTitle="Freelance Web Developer"
          cardImg={BorrachoSaloonWebsite}
          cardImgAlt="Borracho Saloon website homepage"
          description="Leading development on a full stack website for Borracho Saloon in Munds Park, AZ that will be complete with static business 
          information, events displayed using Facebook API, and a merchandise store powered by Stripe"
          links={[]}
        ></ProjectCard>

        <ProjectCard
          title="Adventure Biofeedback"
          date="September 2021 - March 2022"
          jobTitle="Web Developer Intern"
          cardImg={AdventureBiofeedbackWebsite}
          cardImgAlt=""
          description="Designed and developed a full stack web application complete with a user profile, patient dashboard, 
          and homework builder utilized by 150+ speech language pathologists and 300+ patients for patient therapy"
          links={[
            <LogoAndLink
              icon={<LanguageIcon sx={{ fontSize: 30 }}></LanguageIcon>}
              link="https://dev-mvcty-xv.us.auth0.com/u/login?state=hKFo2SBibzRsRGp2SVVSdlpKcWZFcFRwYVVURWIzRG5OdTl6U6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIFBCSGZwbDVRQ1JYbnJpbnNISDRSX281ZHVPcktIOHRXo2NpZNkgNE44NGRmNU1XUTZhaXdzYkZLVnNadTBVRmZqWnBwbDM"
              text="Website"
            ></LogoAndLink>,
            <LogoAndLink
              icon={<GitHubIcon sx={{ fontSize: 30 }}></GitHubIcon>}
              link="https://github.com/adventurebiofeedback/homework"
              text="GitHub"
            ></LogoAndLink>
          ]}
        ></ProjectCard>

        <ProjectCard
          title="Wiberg Bond Order Interpolation"
          subtitle="eMolecules vs PubChem"
          date="April 2021 - June 2022"
          jobTitle="Undergraduate Researcher"
          cardImg={WBOInterpolationeMoleculesPubChem}
          cardImgAlt=""
          description="Led analysis on differences in Wiberg bond order calculations between two major commercial databases, eMolecules and PubChem, 
          and two major conformer toolkits, AmberTools and OpenEye"
          links={[
            <LogoAndLink
              icon={<LanguageIcon sx={{ fontSize: 30 }}></LanguageIcon>}
              link="https://mobleylab.org/"
              text="Website"
            ></LogoAndLink>,
            <LogoAndLink
              icon={<GitHubIcon sx={{ fontSize: 30 }}></GitHubIcon>}
              link="https://github.com/MobleyLab/wbointerpolation/tree/WBO_dataset_analysis/WBO_dataset_analysis"
              text="Github"
            ></LogoAndLink>
          ]}
        ></ProjectCard>

        <ProjectCard
          title="Wiberg Bond Order Interpolation"
          subtitle="Ambertools vs Openeye"
          date="April 2021 - June 2022"
          jobTitle="Undergraduate Researcher"
          cardImg={WBOInterpolationAmbertoolsOpeneye}
          cardImgAlt=""
          description="Led analysis on differences in Wiberg bond order calculations between two major commercial databases, eMolecules and PubChem, 
          and two major conformer toolkits, AmberTools and OpenEye"
          links={[
            <LogoAndLink
              icon={<LanguageIcon sx={{ fontSize: 30 }}></LanguageIcon>}
              link="https://mobleylab.org/"
              text="Website"
            ></LogoAndLink>,
            <LogoAndLink
              icon={<GitHubIcon sx={{ fontSize: 30 }}></GitHubIcon>}
              link="https://github.com/MobleyLab/wbointerpolation/tree/amber_openeye_wbo/amber_openeye_wbo_comparison"
              text="Github"
            ></LogoAndLink>,
            <LogoAndLink
              icon={<HtmlIcon sx={{ fontSize: 30 }}></HtmlIcon>}
              link={process.env.PUBLIC_URL + "/All_Datasets_interactive.html"}
              text="Interactable Results"
            ></LogoAndLink>
          ]}
        ></ProjectCard>

        <ProjectCard
          title="DANCE"
          date="June 2020 - October 2021"
          jobTitle="Undergraduate Researcher"
          cardImg={DANCEMolecule}
          cardImgAlt=""
          description="Developed customizable fingerprint functions to filter commercial molecule databases and tag molecules with unique data, 
          improving force field parameterization by allowing filtering of specific molecular substructures"
          links={[
            <LogoAndLink
              icon={<LanguageIcon sx={{ fontSize: 30 }}></LanguageIcon>}
              link="https://mobleylab.org/"
              text="Website"
            ></LogoAndLink>,
            <LogoAndLink
              icon={<GitHubIcon sx={{ fontSize: 30 }}></GitHubIcon>}
              link="https://github.com/dance-pipeline/dance/tree/nn-pipeline"
              text="Github"
            ></LogoAndLink>,
            <LogoAndLink
              icon={<ArticleIcon sx={{ fontSize: 30 }}></ArticleIcon>}
              link={
                process.env.PUBLIC_URL +
                "/Daniel_UROP_Research_Statement_2020.pdf"
              }
              text="Research Statement (PDF)"
            ></LogoAndLink>,
            <LogoAndLink
              icon={<ArticleIcon sx={{ fontSize: 30 }}></ArticleIcon>}
              link={process.env.PUBLIC_URL + "/Daniel_UROP_Poster_2020.pdf"}
              text="Presentation (PDF)"
            ></LogoAndLink>
          ]}
        ></ProjectCard>
      </div>
    </div>
  );
}
