import React, { useState, useEffect } from "react";
import WorkCard from "./WorkCard";

import { useGlobalContext } from "../../context/GlobalContext";

function Works() {
  const { categories, items } = useGlobalContext();
  const [item, setItem] = useState({ name: "todo" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "todo") {
      setProjects(items);
    } else {
      const newProjects = items.filter((project) => {
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
        {categories.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              key={index}
              className={`${active === index ? "active-work" : ""} work__item`}
            >
              {item}
            </span>
          );
        })}
      </div>
      <div className="work__container container grid">
        {projects.map((item, index) => {
          return <WorkCard key={index} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Works;
