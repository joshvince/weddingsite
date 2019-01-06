import React from 'react';
import "./RSVP.css";

const GuestAttendance = ({guestData, rsvpAction}) => {
  return (
    <div className="guestAttendance">
      <h2>{guestData.first_name}</h2>
      <div
        className={`attendanceButton positive ${guestData.attending ? "active" : ""}`}
        onClick={e => rsvpAction(guestData, true)}
      >
        Yes, I can attend
      </div>
      <div
        className={`attendanceButton negative ${guestData.attending ? "" : "active"}`}
        onClick={e => rsvpAction(guestData, false)}
      >
        No, I can't attend
      </div>
    </div>
  );
};

export default GuestAttendance;