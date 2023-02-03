import React from "react";

const Labour = ({ item }) => {
  return (
    <div className="experience__data">
      <div></div>
      <div>
        <span className="experience__rounder"></span>
        <span className="experience__line"></span>
      </div>
      <div>
        <h3 className="experience__title">
          <i className="uil uil-briefcase-alt experience__icon"></i> {item.role}
        </h3>
        <span className="experience__subtitle">
          {item.company} - {item.city}
        </span>
        <div className="experience__calender">
          <i className="uil uil-calendar-alt"></i> {item.initialyear} -{" "}
          {item.finalyear}
        </div>
      </div>
    </div>
  );
};

export default Labour;
