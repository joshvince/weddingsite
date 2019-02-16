import React, { useEffect } from "react";
import Map from "./Map";
import GettingThere from "./GettingThere";
import Staying from "./Staying";
import TheDayItself from "./TheDayItself";

const Info = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="w-screen pt-16">
      <Map />
      <div className="w-screen min-h-screen max-w-md mt-12 pb-16 px-6 container mx-auto flex flex-col justify-center">
        <GettingThere />
        <Staying />
        <TheDayItself />
      </div>
    </div>
  );
};

export default Info;
