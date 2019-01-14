import React from 'react';

import { ReactComponent as Sad } from "./sad.svg";
import { ReactComponent as Alcohol } from "./alcohol.svg";

const calculateColor = (attending, rsvpAt, isPositive) => {
  if (rsvpAt == null) {
    return "grey"
  }
  else {
    if ((attending && isPositive) || (!attending && !isPositive)){
      return "blue"
    }
    else {
      return "grey"
    }
  }
}

const Attendance = ({guestData, rsvpAction, type}) => {
  let isPositive = (type === "positive")
  let copyHeader, copyBody, uiColor;
  let icon = isPositive ? <Alcohol className="h-12 w-24 mb-2"/> : <Sad className="h-12 w-24 mb-2"/>;
  if (isPositive) {
    copyHeader = "Yes";
    copyBody = "Count me in";
    uiColor = calculateColor(guestData.attending, guestData.rsvp_at, isPositive);
  }
  else {
    copyHeader = "No";
    copyBody = "Can't make it";
    uiColor = calculateColor(guestData.attending, guestData.rsvp_at, isPositive);
  }

  return (
    <div
      className={`w-32 h-32 rounded border border-solid border-${uiColor} m-1 p-4 shadow-inner`}
      onClick={e => rsvpAction(guestData, {attending: isPositive})}
    >
      <div className="flex flex-col items-center text-center">
        <div>{icon}</div>
        <p className={`text text-lg font-bold text-${uiColor}`}>{copyHeader}</p>
        <p className={`text text-sm text-${uiColor}`}>{copyBody}</p>
      </div>

    </div>

  );
};

export default Attendance;