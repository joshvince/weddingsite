import React from 'react';
// import './RSVP.css';

const DessertChoice = ({guestData, rsvpAction}) => {
  let choice = guestData.dessert_choice;
  return (
    <div>
      <div
        className={`attendanceButton positive ${choice === 'raspberry_cheesecake' ? "active" : ""}`}
        onClick={e => rsvpAction(guestData, {dessert_choice: "raspberry_cheesecake"})}
      >
        Raspberry Cheesecake
      </div>
      <div
        className={`attendanceButton positive ${choice === 'chocolate_tart' ? "active" : ""}`}
        onClick={e => rsvpAction(guestData, {dessert_choice: "chocolate_tart"})}
      >
        Dark Chocolate Tart
      </div>

    </div>
  );
};

export default DessertChoice;