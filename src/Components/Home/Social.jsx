import React from "react";

import { Data as User } from "../../Data/Data.js";

function Social() {
  return (
    <div className="w-10 grid justify-start items-center gap-y-4 lg:gap-y-10">
      <a
        href={User.socialmedia.instagram}
        className="text-2xl text-titleColor hover:text-instgrmColor hover:text-[22px]"
        target="_blank"
      >
        <i className="uil uil-instagram instagram"></i>
      </a>
      <a
        href={User.socialmedia.linkedin}
        className="text-2xl text-titleColor hover:text-lnkdnColor hover:text-[22px]"
        target="_blank"
      >
        <i className="uil uil-linkedin-alt linkedin"></i>
      </a>
      <a
        href={User.socialmedia.github}
        className="text-2xl font-bold text-titleColor hover:text-gthbColor hover:text-[22px]"
        target="_blank"
      >
        <i className="uil uil-github-alt github"></i>
      </a>
    </div>
  );
}

export default Social;
