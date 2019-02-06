import React from "react";

import GuestRSVP from "./GuestRSVP.jsx";
import Header from "./Layout/Header.jsx";

const RSVP = ({
  invite,
  rsvps,
  rsvpAction,
  submitAction,
  everybodyRSVP
}) => {
  let buttonState = everybodyRSVP ? null : "opacity-50 cursor-not-allowed";
  return (
    <div className="w-screen">
      <Header dayGuests={invite.day_guests} guests={invite.guests} />
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="">
          {rsvps.map((r, i) => {
            return (
              <GuestRSVP
                key={`rsvp${i}`}
                guestData={r}
                rsvpAction={rsvpAction}
              />
            );
          })}
          <div className="max-w-md sm:flex sm:flex-col md:flex-row my-4 p-0 justify-end">
            <button
              className={`w-full md:w-1/2 bg-orange hover:orange text-white
            text-2xl font-bold py-4 px-4 my-6 rounded shadow ${buttonState}`}
              onClick={e => everybodyRSVP && submitAction(e)}
            >
              RSVP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RSVP;
