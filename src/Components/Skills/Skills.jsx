import React from "react";

import SkillsCard from "./SkillsCard";

import { Data as User } from "../../Data/Data.js";

function Skills() {

  return (
    <section className="sctn" id="Habilidades">
      <div className=" flex flex-col items-center mb-4">
        <h2>Habilidades</h2>
        <span className="text-sm">Mi nivel tecnico</span>
      </div>

      <div className="cntnr grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-5 md:px-20 max-w-4xl">
        {User.skills.map((item, index) => {
          return <SkillsCard key={index} item={item} />;
        })}
      </div>
    </section>
  );
}

export default Skills;
