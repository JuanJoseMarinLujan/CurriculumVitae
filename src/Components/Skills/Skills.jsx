import React from "react";

import SkillsCard from "./SkillsCard";

import { useGlobalContext } from "../../context/GlobalContext";

function Skills() {
  const { skills } = useGlobalContext();

  return (
    <section className="sctn" id="skills">
      <div className=" flex flex-col items-center mb-4">
        <h2 className="">Habilidades</h2>
        <span className="text-sm">Mi nivel tecnico</span>
      </div>

      <div className="skills__container cntnr grid lg:grid-cols-2 gap-2 lg:gap-5">
        {skills.map((item, index) => {
          return <SkillsCard key={index} item={item} />;
        })}
      </div>
    </section>
  );
}

export default Skills;
