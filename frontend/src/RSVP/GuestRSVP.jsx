import React from 'react';
import Attendance from "./Attendance/Attendance.jsx";
import FoodContainer from "./Food/FoodContainer.jsx";

const GuestRSVP = ({guestData, rsvpAction}) => {
  return (
    <div className="max-w-md sm:flex sm:flex-col md:flex-row rounded border border-solid border-lightgrey shadow my-8 p-6">
      <div className="flex flex-col">
        <h2 className="mb-6">{guestData.first_name}</h2>
        <div className="flex justify-around md:justify-start">
          <Attendance guestData={guestData} rsvpAction={rsvpAction} type="positive" />
          <Attendance guestData={guestData} rsvpAction={rsvpAction} type="negative" />
        </div>
      </div>
      <div className="flex flex-col w-full h-full mt-6 md:mt-0">
        <FoodContainer
          hasRSVP={guestData.rsvp_at}
          rsvpAction={rsvpAction}
          guestData={guestData}
        />
      </div>
    </div>
  );
};

export default GuestRSVP;