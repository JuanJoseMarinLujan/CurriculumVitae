import React from "react";

import { useGlobalContext } from "../../context/GlobalContext";

function Info() {
  const { about } = useGlobalContext();
  return (
    <div className="about__info grid max-w-md grid-cols-[repeat(2,_1fr)] gap-x-1 sm:grid-cols-[repeat(3,_1fr)] gap-2 my-4">
      <div className="about__box bg-containerColor w-36 h-24 p-2 rounded-2xl grid mx-auto">
        <i className="bx bx-award about__icon text-2xl text-titleColor text-center"></i>
        <h3 className="about__title text-base font-normal text-center">Experiencia</h3>
        <span className="about__subtitle text-xs text-center">{about.experience}</span>
      </div>

      <div className="about__box bg-containerColor w-36 h-24 p-2 rounded-2xl grid mx-auto">
        <i className="bx bx-briefcase-alt about__icon text-2xl text-titleColor text-center"></i>
        <h3 className="about__title text-base font-normal text-center">Proyectos</h3>
        <span className="about__subtitle text-xs text-center">{about.projects}</span>
      </div>

      <div className="about__box bg-containerColor w-36 h-24 p-2 rounded-2xl grid mx-auto">
        <i className="bx bx-support about__icon text-2xl text-titleColor text-center"></i>
        <h3 className="about__title text-base font-normal text-center">Soporte</h3>
        <span className="about__subtitle text-xs text-center">{about.support}</span>
      </div>
    </div>
  );
}

export default Info;
