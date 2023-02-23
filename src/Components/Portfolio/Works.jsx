import React, { useState, useEffect } from "react";
import WorkCard from "./WorkCard";

import User from "../../Data/Data.json";

function Works() {
  const [item, setItem] = useState({ name: "todo" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "todo") {
      setProjects(User.portfolio.projects);
    } else {
      const newProjects = User.portfolio.projects.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  function handleClick(e, index) {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  }

  return (
    <div>
      <div className="work__filters flex justify-center items-center gap-5 mb-6">
        {User.portfolio.categorys.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              key={index}
              className={`${active === index ? "active-work bg-titleDarkColor text-bodyColor" : ""} work__item cursor-pointer text-titleColor py-1 px-3 rounded-lg capitalize`}
            >
              {item}
            </span>
          );
        })}
      </div>
      <div className="work__container cntnr grid grid-cols-1 md:grid-cols-[max-content] lg:grid-cols-[repeat(2,_max-content)] dt:grid-cols-[repeat(3,_max-content)] gap-5 lg:gap-12 justify-center">
        {projects.map((item, index) => {
          return <WorkCard key={index} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Works;
