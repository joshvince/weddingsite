import React from 'react';
import { ReactComponent as Chocolate } from "./chocolate.svg";
import { ReactComponent as Raspberry } from "./raspberry.svg";

const DessertChoice = ({guestData, rsvpAction, dessertOption}) => {
  let isSelected = (guestData.dessert_choice === dessertOption)
  let uiColor = isSelected ? "blue" : "grey"
  let text = dessertOption.split("_").join(" ");
  let icon = (dessertOption === "raspberry_cheesecake") ?
    <Raspberry className="h-12 w-24 md:h-8 md:w-16 mb-2"/>
    :
    <Chocolate className="h-12 w-24 md:h-8 md:w-16 mb-2"/>
  return (
    <div
      className={`w-32 h-32 md:h-24 md:w-24 rounded border border-solid border-${uiColor} m-1 p-2 shadow-inner`}
      onClick={e => rsvpAction(guestData, {dessert_choice: dessertOption})}
    >
      <div className="h-full flex flex-col items-center justify-center text-center">
        {icon}
        <p className={`capitalize text-sm text-${uiColor}`}>{text}</p>
      </div>
    </div>
  );
};

export default DessertChoice;