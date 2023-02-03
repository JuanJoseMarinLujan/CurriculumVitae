import React, { useState } from "react";

import Education from "./Education.jsx";
import Labour from "./Labour.jsx";

import { useGlobalContext } from "../../context/GlobalContext";

function Experience() {
  const { experience } = useGlobalContext();
  const [toggleState, setToggleState] = useState(1);

  function toggleTab(index) {
    setToggleState(index);
  }

  return (
    <section className="experience section" id="experience">
      <h2 className="section__title">Experiencia</h2>
      <span className="section__subtitle">Logros personales</span>

      <div className="experience__container container">
        <div className="experience__tabs">
          <div
            className={
              toggleState === 1
                ? "experience__button experience__active button--flex"
                : "experience__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap experience__icon"></i>Educacion
          </div>

          <div
            className={
              toggleState === 2
                ? "experience__button experience__active button--flex"
                : "experience__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt experience__icon"></i>Laboral
          </div>
        </div>

        <div className="experience__sections">
          <div
            className={
              toggleState === 1
                ? "experience__content experience__content-active"
                : "experience__content"
            }
          >
            {experience.map((item, index) => {
              return item.type === "education" ? (
                <Education key={index} item={item} />
              ) : (
                <Labour key={index} item={item} />
              );
            })}

            <div className="experience__data">
              <div></div>
              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
