import React from "react";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Design from "./Design";
import Methodologies from "./Methodologies";
import Others from "./Others";

function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Habilidades</h2>
      <span className="section__subtitle">Mi nivel tecnico</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
        <Design />
        <Methodologies />
        <Others />
      </div>
    </section>
  );
}

export default Skills;
