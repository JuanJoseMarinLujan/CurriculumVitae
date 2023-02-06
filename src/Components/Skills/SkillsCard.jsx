import React from "react";

const SkillsCard = ({ item }) => {
  return (
    <div className="skills__content bg-containerColor p-6 lg:py-8 lg:pb-16 rounded-2xl">
      <h3 className="skills__title text-center text-lg font-semibold mb-3">{item.title}</h3>
      <div className="skills__box">
        <div className="skills__group w-full grid grid-cols-2 gap-x-10 gap-4 items-start">
          {item.skills.map((skls, index) => {
            return (
              <div key={index} className="skills__data flex justify-start items-center gap-x-2">
                <i className="bx bx-badge-check text-base text-titleColor"></i>
                <div>
                  <h3 className="skills__name text-base font-medium">{skls.title}</h3>
                  <span className="skills__level text-xs">{skls.level}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
