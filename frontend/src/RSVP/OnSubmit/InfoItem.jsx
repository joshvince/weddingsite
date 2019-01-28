import React from "react";

const InfoItem = ({ icon, header, subheader }) => {
  return (
    <div className="mt-8 mb-2 text-center w-64">
      {icon}
      <h3 className="my-2 text-xl text-blue-dark font-extrabold">{header}</h3>
      {subheader.map((text,i) => {
        return (
          <p key={i} className="">{text}<br></br></p>
        );
      })}
    </div>
  );
};

export default InfoItem;
