import React from 'react';

import GuestAttendance from './GuestAttendance.jsx';

const DayGuestText = "We'd love for you to join us to celebrate our wedding at 1pm on 22nd June 2019."
const EveningGuestText = "We'd love for you to join us to celebrate our wedding at our evening reception at 6:30pm on 22nd June 2019."

const formatNames = (nameArray) => {
  return nameArray.map(p => p.first_name).join(", ")
}

const RSVP = ({invite, rsvps, rsvpAction}) => {
  let inviteType = invite.day_guests ? DayGuestText : EveningGuestText;
  let guestNames = formatNames(invite.guests)
  return (
    <div>
      <h1>Hi there, {invite.family_name}</h1>
      {guestNames}<br/>
      {inviteType}
      {rsvps.map((r,i) => <GuestAttendance guestData={r} rsvpAction={rsvpAction} key={i}/>)}
    </div>
  );
};

export default RSVP;