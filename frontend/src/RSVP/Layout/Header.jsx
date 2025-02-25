import React from "react";
import InfoPoint from "./InfoPoint.jsx";
import { ReactComponent as Calendar } from "./calendar.svg";
import { ReactComponent as Pin } from "./placeholder.svg";
import { ReactComponent as Clock } from "./time.svg";

const Header = ({ dayGuests, guests }) => {
  const DayGuestText = "1pm - midnight";
  const EveningGuestText = "6:30pm - midnight";
  let inviteText = dayGuests ? DayGuestText : EveningGuestText;
  let guestNames = guests.map(p => p.first_name).join(", ");
  return (
    <div className="max-w-lg mx-auto pt-10 px-6">
      <div className="container mx-auto flex flex-col ">
        <h1 className="text-4xl text-blue-darker font-extrabold">
          {guestNames}
        </h1>
        <div className="bg-blue h-1 w-32 mt-4" />
        <p className="text-xl py-6">
          We'd love for you to join us to celebrate our wedding
        </p>
        <div className="flex flex-col md:flex-row justify-around items-center mt-4">
          <InfoPoint
            icon={<Calendar />}
            title="22nd June 2019"
            subtitle="Yes, a Saturday"
          />
          <InfoPoint icon={<Clock />} title={inviteText} subtitle="" />
          <a
            href="https://goo.gl/maps/t6Bqu7BfXrM2"
            className="no-underlinetext-blue-darker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InfoPoint
              icon={<Pin />}
              title="Cissbury Barns, Nepcote"
              subtitle=""
            />
            <div className="border-b-4 border-orange" />
          </a>
        </div>
        <h2 className="text-2xl font-extrabold text-blue-darker mt-16 mb-4">
          Let us know if everyone can make it
        </h2>
      </div>
    </div>
  );
};

export default Header;
