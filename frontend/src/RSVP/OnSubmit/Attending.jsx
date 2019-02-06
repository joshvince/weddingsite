import React from "react";
import { ReactComponent as Party } from "../Attendance/alcohol.svg";

const Attending = () => {
  return (
    <div className="text-center w-full mb-8 md:mb-16">
      <Party className="h-32 w-32 md:h-48 md:w-48 mb-8" />
      <h1 className="text-4xl text-blue-dark font-extrabold">See you there!</h1>
    </div>
  );
};

export default Attending;
