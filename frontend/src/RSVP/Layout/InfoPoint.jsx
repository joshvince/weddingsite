import React from 'react';

const InfoPoint = ({icon, title, subtitle}) => {
  return (
    <div className="my-8 md:my-4 flex flex-col text-blue-light">
      {icon}
      <p className="mt-4 text-xl font-extrabold text-blue">{title}</p>
    </div>
  );
};

export default InfoPoint;