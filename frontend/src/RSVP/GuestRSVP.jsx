import React from "react";
import Attendance from "./Attendance/Attendance.jsx";
import FoodContainer from "./Food/FoodContainer.jsx";

const GuestRSVP = ({ guestData, rsvpAction, dayGuest }) => {
  return (
    <div className="bg-white max-w-md sm:flex sm:flex-col md:flex-row rounded shadow-lg my-8 p-6">
      <div className="flex flex-col">
        <h2 className="mb-6 font-extrabold text-blue">
          {guestData.first_name}
        </h2>
        <div className="flex justify-around md:justify-start">
          <Attendance
            guestData={guestData}
            rsvpAction={rsvpAction}
            type="positive"
          />
          <Attendance
            guestData={guestData}
            rsvpAction={rsvpAction}
            type="negative"
          />
        </div>
      </div>
      {dayGuest && (
        <div className="flex flex-col w-full h-full mt-6 md:mt-0">
          <FoodContainer
            hasRSVP={guestData.rsvp_at}
            rsvpAction={rsvpAction}
            guestData={guestData}
          />
        </div>
      )}
    </div>
  );
};

export default GuestRSVP;
