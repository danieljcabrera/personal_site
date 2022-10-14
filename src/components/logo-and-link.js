import React from "react";

export default function LogoAndLink({ icon = null, link = "", text = "" }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {icon}
      {text}
    </a>
  );
}
