import React from 'react';
import styles from './style.css';

const DarkSection = ({header, subheader, image}) => {
  return (
    <section className="darkSection">
      {image}
      <h1>{header}</h1>
      <h2>{subheader}</h2>
    </section>
  );
};

export default DarkSection;