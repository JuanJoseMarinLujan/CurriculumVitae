import React from "react";

import { useGlobalContext } from "../../context/GlobalContext";

function Social() {
  const { socialMedia } = useGlobalContext();
  return (
    <div className="home__social w-10 grid justify-start items-center gap-y-4 lg:gap-y-10">
      <a
        href={socialMedia.instagram}
        className="home__social-icon text-2xl text-titleColor hover:text-instgrmColor hover:text-[22px]"
        target="_blank"
      >
        <i className="uil uil-instagram instagram"></i>
      </a>
      <a
        href={socialMedia.linkedin}
        className="home__social-icon text-2xl text-titleColor hover:text-lnkdnColor hover:text-[22px]"
        target="_blank"
      >
        <i className="uil uil-linkedin-alt linkedin"></i>
      </a>
      <a
        href={socialMedia.github}
        className="home__social-icon text-2xl font-bold text-titleColor hover:text-gthbColor hover:text-[22px]"
        target="_blank"
      >
        <i className="uil uil-github-alt github"></i>
      </a>
    </div>
  );
}

export default Social;
