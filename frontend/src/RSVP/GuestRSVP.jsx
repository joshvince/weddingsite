import React from 'react';
import Attendance from "./Attendance/Attendance.jsx";
import FoodContainer from "./Food/FoodContainer.jsx";

const GuestRSVP = ({guestData, rsvpAction}) => {
  return (
    <div className="max-w-md flex rounded border border-solid border-lightgrey shadow m-4 p-6">
      <div className="flex flex-col">
        <h2 className="mb-6">{guestData.first_name}</h2>
        <div className="flex">
          <Attendance guestData={guestData} rsvpAction={rsvpAction} type="positive" />
          <Attendance guestData={guestData} rsvpAction={rsvpAction} type="negative" />
        </div>
      </div>
      <div className="flex flex-col w-full h-full">
        <FoodContainer
          hasRSVP={guestData.rsvp_at}
          rsvpAction={rsvpAction}
          guestData={guestData}
        />
      </div>
                {/* <GuestAttendance guestData={r} rsvpAction={rsvpAction} />
            <DessertChoice guestData={r} rsvpAction={rsvpAction} />
            <DietaryRequirements guestData={r} rsvpAction={rsvpAction}/> */}
    </div>
  );
};

export default GuestRSVP;