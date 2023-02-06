import React from "react";

const Education = ({ item }) => {
  return (
    <div className="experience__data grid grid-cols-[1fr_max-content_1fr] gap-x-6 gap-2">
      <div className="w-full">
        <h3 className="experience__title text-base font-medium">
          <i className="uil uil-graduation-cap experience__icon text-2xl mr-1"></i>{" "}
          {item.title}
        </h3>
        <span className="experience__subtitle inline-block text-sm mb-4">
          {item.university} - {item.city}
        </span>
        <div className="experience__calender text-sm">
          <i className="uil uil-calendar-alt"></i> {item.initialyear} -{" "}
          {item.finalyear}
        </div>
      </div>
      <div>
        <span className="experience__rounder inline-block w-[13px] h-[13px] bg-titleColor rounded-[50%]"></span>
        <span className="experience__line -mt-[25px] block w-[1px] h-[106%] bg-textColor"></span>
      </div>
    </div>
  );
};

export default Education;
