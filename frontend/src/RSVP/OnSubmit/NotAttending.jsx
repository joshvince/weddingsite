import React from 'react';
import { ReactComponent as Sad } from "../Attendance/sad.svg";


const NotAttending = () => {
  return (
    <div className="text-center w-full mb-8 md:mb-16">
      <Sad className="h-32 w-32 md:h-48 md:w-48 mb-8" />
      <h1 className="text-4xl text-blue-dark font-extrabold">Sorry you can't make it</h1>
    </div>
  );
};

export default NotAttending;