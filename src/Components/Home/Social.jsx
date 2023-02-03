import React from "react";

import { useGlobalContext } from "../../context/GlobalContext";

function Social() {
  const { socialMedia } = useGlobalContext();
  return (
    <div className="home__social">
      <a
        href={socialMedia.instagram}
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-instagram instagram"></i>
      </a>
      <a
        href={socialMedia.linkedin}
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin-alt linkedin"></i>
      </a>
      <a
        href={socialMedia.github}
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt github"></i>
      </a>
    </div>
  );
}

export default Social;
