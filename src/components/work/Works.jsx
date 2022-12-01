import React, { useState, useEffect } from "react";
import WorkItems from "./WorkItems";
import { projectsData } from "./Data";
import { projectsNav } from "./Data";

function Works() {
  const [item, setItem] = useState({ name: "todo" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "todo") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
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
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              key={index}
              className={`${active === index ? "active-work" : ""} work__item`}
            >
              {item.name}
            </span>
          );
        })}
      </div>
      <div className="work__container container grid">
        {projects.map((item) => {
          return <WorkItems key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Works;
