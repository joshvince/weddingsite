import React from "react";

import GuestAttendance from "./GuestAttendance.jsx";
import Attendance from "./Attendance/Attendance.jsx";
import GuestRSVP from "./GuestRSVP.jsx";

const DayGuestText =
  "We'd love for you to join us to celebrate our wedding at 1pm on 22nd June 2019.";
const EveningGuestText =
  "We'd love for you to join us to celebrate our wedding at our evening reception at 6:30pm on 22nd June 2019.";

const formatNames = nameArray => {
  return nameArray.map(p => p.first_name).join(", ");
};

const RSVP = ({ invite, rsvps, rsvpAction, submitAction, everybodyComing, everybodyRSVP }) => {
  let inviteType = invite.day_guests ? DayGuestText : EveningGuestText;
  let guestNames = formatNames(invite.guests);
  let buttonCopy = everybodyComing ? "Say you'll be there" : "Say it aint so?";
  let buttonState = everybodyRSVP ? null : "opacity-50 cursor-not-allowed"
  return (
    <div>
      <h1>Hi there, {invite.family_name}</h1>
      {guestNames}
      <br />
      {inviteType}
      <div className="flex-col">
        {rsvps.map((r, i) => {
          return (
            <GuestRSVP key={`rsvp${i}`} guestData={r} rsvpAction={rsvpAction} />
          );
        })}
        <div className="max-w-md sm:flex sm:flex-col md:flex-row m-4 p-0 justify-end">
          <button
            className={`w-full md:w-1/2 bg-blue hover:bg-blue-dark text-white
                        text-2xl font-bold py-4 px-4 my-6 rounded shadow ${buttonState}`}
            onClick={e => everybodyRSVP && submitAction(e)}
          >
            {buttonCopy}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RSVP;
