import React from 'react';
import styles from './style.css';

const LightSection = ({firstRow, secondRow, thirdRow, image}) => {
  return (
    <div className="lightSection fullPageColumn">
      <div className="row">
        <div className="col">
          {image}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>{firstRow}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1>{secondRow}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>{thirdRow}</h2>
        </div>
      </div>


    </div>
  );
};

export default LightSection;