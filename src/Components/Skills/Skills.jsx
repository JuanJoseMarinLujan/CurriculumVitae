import React from "react";

import SkillsCard from "./SkillsCard";

import { useGlobalContext } from "../../context/GlobalContext";

function Skills() {
  const { skills } = useGlobalContext();
  
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Habilidades</h2>
      <span className="section__subtitle">Mi nivel tecnico</span>

      <div className="skills__container container grid">
        {skills.map((item, index) => {
          return <SkillsCard key={index} item={item} />;
        })}
      </div>
    </section>
  );
}

export default Skills;
