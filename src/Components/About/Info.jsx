import React from "react";

import { useGlobalContext } from "../../context/GlobalContext";

function Info() {
  const { about } = useGlobalContext();
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Experiencia</h3>
        <span className="about__subtitle">{about.experience}</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Proyectos</h3>
        <span className="about__subtitle">{about.projects}</span>
      </div>

      <div className="about__box">
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">Soporte</h3>
        <span className="about__subtitle">{about.support}</span>
      </div>
    </div>
  );
}

export default Info;
