import React from "react";

const Education = ({ item }) => {
  return (
    <div className="experience__data">
      <div>
        <h3 className="experience__title">
          <i className="uil uil-graduation-cap experience__icon"></i>{" "}
          {item.title}
        </h3>
        <span className="experience__subtitle">
          {item.university} - {item.city}
        </span>
        <div className="experience__calender">
          <i className="uil uil-calendar-alt"></i> {item.initialyear} -{" "}
          {item.finalyear}
        </div>
      </div>
      <div>
        <span className="experience__rounder"></span>
        <span className="experience__line"></span>
      </div>
    </div>
  );
};

export default Education;
