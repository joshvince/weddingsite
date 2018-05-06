import React from 'react';
import styles from './style.css';

const LightSection = ({header, subheader, image}) => {
  return (
    <div className="lightSection">
      <div className="row">
        <div className="col">
          {image}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1>{header}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>{subheader}</h2>
        </div>
      </div>


    </div>
  );
};

export default LightSection;