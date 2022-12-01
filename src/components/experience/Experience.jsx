import React, { useState } from "react";

function Experience() {
  const [toggleState, setToggleState] = useState(1);
  function toggleTab(index) {
    setToggleState(index);
    console.log(index);
    console.log(toggleState);
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
            <div className="experience__data">
              <div>
                <h3 className="experience__title"><i className="uil uil-graduation-cap experience__icon"></i> Informatica Musical</h3>
                <span className="experience__subtitle">ITM - Medellin</span>
                <div className="experience__calender">
                  <i className="uil uil-calendar-alt"></i> 2016 - 2019
                </div>
              </div>
              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
            </div>

            <div className="experience__data">
              <div></div>
              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
              <div>
                <h3 className="experience__title"><i className="uil uil-briefcase-alt experience__icon"></i> Tecnico de Sonido e Iluminacion - Practicas
                </h3>
                <span className="experience__subtitle">
                  Teatro Pablo Tobon Uribe - Medellin
                </span>
                <div className="experience__calender">
                  <i className="uil uil-calendar-alt"></i> 2019
                </div>
              </div>
            </div>

            <div className="experience__data">
              <div>
                <h3 className="experience__title"><i className="uil uil-briefcase-alt experience__icon"></i> Tecnico de Sala</h3>
                <span className="experience__subtitle">
                  Casa Teatro El Poblado - Medellin
                </span>
                <div className="experience__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2022
                </div>
              </div>
              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
            </div>

            <div className="experience__data">
              <div></div>
              <div>
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>
              <div>
                <h3 className="experience__title"><i className="uil uil-graduation-cap experience__icon"></i> Desarrollo Web Full Stack</h3>
                <span className="experience__subtitle">
                  Coder House - Argentina
                </span>
                <div className="experience__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - Present
                </div>
              </div>
            </div>

            <div className="experience__data">
              <div>
                <h3 className="experience__title"><i className="uil uil-graduation-cap experience__icon"></i> Certified Tech Developer</h3>
                <span className="experience__subtitle">
                  Digital House - Argentina
                </span>
                <div className="experience__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - Present
                </div>
              </div>
              <div>
                <span className="experience__rounder"></span>
                {/* <span className="experience__line"></span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
