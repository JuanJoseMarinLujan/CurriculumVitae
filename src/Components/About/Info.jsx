import React from "react";

import { Data as User } from "../../Data/Data.js";

function Info() {
  return (
    <div className="about__info grid max-w-md gap-x-1 grid-cols-2 md:grid-cols-[repeat(3,_1fr)] gap-2 my-4">
      <div className="about__box bg-containerColor w-36 h-28 p-2 rounded-2xl grid m-auto">
        <i className="bx bxs-keyboard about__icon text-2xl text-titleColor text-center"></i>
        <h3 className="about__title text-sm font-normal text-center">
          Desarrollador
        </h3>
        <span className="about__subtitle text-xs text-center">
          {User.about.expDeveloper}
        </span>
      </div>

      <div className="about__box bg-containerColor w-36 h-28 p-2 rounded-2xl grid m-auto">
        <i className="bx bxs-music about__icon text-2xl text-titleColor text-center"></i>
        <h3 className="about__title text-sm font-normal text-center">
          Sonido e Iluminacion
        </h3>
        <span className="about__subtitle text-xs text-center">
          {User.about.expSound}
        </span>
      </div>

      <div className="about__box bg-containerColor w-36 h-28 p-2 rounded-2xl grid m-auto">
        <i className="bx bx-badge-check about__icon text-2xl text-titleColor text-center"></i>
        <h3 className="about__title text-sm font-normal text-center">
          Logros
        </h3>
        <span className="about__subtitle text-xs text-center">
          {User.achievements.items.length}
        </span>
      </div>
    </div>
  );
}

export default Info;
