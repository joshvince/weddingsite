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
  if (namesArray.length === 1) {
    return `${namesArray[0]}...`.toUpperCase()
  }
  else {
    let lastName = namesArray.pop();
    let firstNames = namesArray.join(", ");

    return `${firstNames} & ${lastName}...`.toUpperCase()
  }
}

const SaveTheDate = () => {
  const image = <img src={Flowers} id="flowers"/>
  const names = getNames();
  return (
    <div>
      <LightSection
        image={image}
        header="1ST JUNE 2019"
        subheader="SAVE THE DATE"
      />
      <div className="darkSection padded">
        <div className="flex-center-col">
          <div className="text-row">
            <p className="subheader">{names}</p>
            <p>
              JOSH & BETHAN ARE HEADING FOR A WEDDING, AND SO ARE YOU
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveTheDate;