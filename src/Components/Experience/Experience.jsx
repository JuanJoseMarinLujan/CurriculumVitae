import React, { useState } from "react";

import Education from "./Education.jsx";
import Labour from "./Labour.jsx";

import { Data as User } from "../../Data/Data.js";

function Experience() {
  const [toggleState, setToggleState] = useState(0);

  return (
    <section className="experience sctn" id="experience">
      <div className=" flex flex-col items-center mb-5">
        <h2 className="section__title">Experiencia</h2>
        <span className="section__subtitle text-sm">Logros personales</span>
      </div>

      <div className="experience__container cntnr w-full flex flex-col justify-center items-center">
        <div className="experience__tabs grid grid-cols-3 gap-5 mb-4">
          <div
            className={
              toggleState === 1
                ? "experience__button text-titleDarkColor flex justify-center items-center"
                : "experience__button flex justify-center items-center"
            }
            onClick={() => setToggleState(1)}
          >
            <i className="uil uil-graduation-cap text-2xl mr-1"></i>
            <span className="text-lg">Educacion</span>
          </div>

          <div
            className={
              toggleState === 0
                ? "flex text-titleDarkColor justify-center items-center"
                : "flex justify-center items-center"
            }
            onClick={() => setToggleState(0)}
          >
            <i className="uil uil-link-h text-3xl"></i>
          </div>

          <div
            className={
              toggleState === 2
                ? "text-titleDarkColor flex justify-end items-center"
                : "flex justify-end items-center"
            }
            onClick={() => setToggleState(2)}
          >
            <i className="uil uil-briefcase-alt text-2xl mr-1"></i>
            <span className="text-lg">Laboral</span>
          </div>
        </div>

        <div className="w-full max-w-xl grid grid-cols-[1fr]">
          <div
            className={
              toggleState === 1
                ? "experience__content-active grid gap-2"
                : "grid gap-3"
            }
          >
            {User.experience.map((item, index) => {
              return item.type === "education" ? (
                <Education key={index} item={item} toggleState={toggleState} />
              ) : (
                <Labour key={index} item={item} toggleState={toggleState} />
              );
            })}

            <div className="grid grid-cols-[1fr_max-content_1fr] gap-x-6 gap-2">
              <div></div>
              <div>
                <span className="inline-block w-[13px] h-[13px] bg-titleColor rounded-[50%]"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
