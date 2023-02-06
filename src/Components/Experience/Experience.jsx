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
    <section className="experience sctn" id="experience">
      <div className=" flex flex-col items-center mb-5">
        <h2 className="section__title">Experiencia</h2>
        <span className="section__subtitle text-sm">Logros personales</span>
      </div>

      <div className="experience__container cntnr w-full flex flex-col justify-center items-center">
        <div className="experience__tabs flex gap-5 mb-4">
          <div
            className={
              toggleState === 1
                ? "experience__button experience__active inline-flex justify-between items-center"
                : "experience__button inline-flex justify-between items-center"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap experience__icon text-2xl mr-1"></i>Educacion
          </div>

          <div
            className={
              toggleState === 2
                ? "experience__button experience__active inline-flex justify-between items-center"
                : "experience__button inline-flex justify-between items-center"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt experience__icon text-2xl mr-1"></i>Laboral
          </div>
        </div>

        <div className="experience__sections w-full max-w-xl grid grid-cols-[1fr]">
          <div
            className={
              toggleState === 1
                ? "experience__content experience__content-active grid gap-2"
                : "experience__content grid gap-3"
            }
          >
            {experience.map((item, index) => {
              return item.type === "education" ? (
                <Education key={index} item={item} />
              ) : (
                <Labour key={index} item={item} />
              );
            })}

            <div className="experience__data grid grid-cols-[1fr_max-content_1fr] gap-x-6 gap-2">
              <div></div>
              <div>
                <span className="experience__rounder inline-block w-[13px] h-[13px] bg-titleColor rounded-[50%]"></span>
                <span className="experience__line -mt-[25px] block w-[1px] h-[106%] bg-textColor"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
