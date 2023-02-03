import React from "react";

const SkillsCard = ({ item }) => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">{item.title}</h3>
      <div className="skills__box">
        <div className="skills__group">
          {item.skills.map((skls, index) => {
            return (
              <div key={index} className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                  <h3 className="skills__name">{skls.title}</h3>
                  <span className="skills__level">{skls.level}</span>
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
