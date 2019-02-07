import React from "react";

const TimelineItem = ({ time, header, subheader }) => {
  return (
    <div
      className="w-64 pb-6 pt-4 px-2 mt-4 px-4 bg-white rounded shadow
                    md:w-128 md:py-6 md:px-6"
    >
      <div className="flex flex-col md:flex-row">
        <p className="text-blue font-extrabold my-2 md:my-auto mr-6 text-lg">{time}</p>
        <div className="flex flex-col">
          <p className="font-extrabold text-2xl text-blue-darkest">{header}</p>
          <p className="text-blue mt-2">{subheader}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
