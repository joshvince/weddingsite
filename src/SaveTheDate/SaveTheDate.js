import React from 'react';
import Flowers from '../App/flowers.svg';
import LightSection from '../App/Section/LightSection';
import DarkSection from '../App/Section/DarkSection';

import './style.css';

/*
Format the URL like `/?names=Josh/Bethan`
*/
const getNames = () => {
  let namesArray = window.location.search.replace("%20", " ").split("=").pop().split("/");
  if (!namesArray.length) {
    return ""
  }
  else if (namesArray.length === 1) {
    return `${namesArray[0]}`.toUpperCase()
  }
  else {
    let lastName = namesArray.pop();
    let firstNames = namesArray.join(", ");

    return `${firstNames} & ${lastName}`.toUpperCase()
  }
}

const SaveTheDate = () => {
  const image = <img src={Flowers} id="flowers"/>
  const names = getNames();
  return (
    <div className="pageContainer">
      <LightSection
        image={image}
        firstRow="SAVE THE DATE"
        secondRow="22ND JUNE 2019"
        thirdRow="WEST SUSSEX"
      />
      <div className="darkSection padded">
        <div className="flex-center-col">
          <div className="text-row">
            <p className="subheader">{names}</p>
            <p>
              JOSH & BETHAN ARE GETTING MARRIED
            </p>
            <p>
              WE'D LOVE FOR YOU TO JOIN US
            </p>
            <p>
              INVITATIONS COMING SOON
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveTheDate;