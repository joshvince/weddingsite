import React from "react";

const Map = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.4020880168705!2d-0.4012750842537108!3d50.860755479534106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875bd3c709201cd%3A0xa08e2ce9697f7d41!2sCissbury!5e0!3m2!1sen!2suk!4v1550265561984"
        style={{
          width: "100%",
          height: "50vh",
          frameBorder: "0",
          style: "border:0",
          allowfullscreen: true
        }}
      />
    </div>
  );
};

export default Map;
