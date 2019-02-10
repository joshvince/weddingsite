import React from 'react';

const InfoPoint = ({icon, title, subtitle}) => {
  return (
    <div className="mt-8 md:mt-4 flex flex-col text-blue-light">
      {icon}
      <p className="mt-4 text-xl text-blue">{title}</p>
    </div>
  );
};

export default InfoPoint;