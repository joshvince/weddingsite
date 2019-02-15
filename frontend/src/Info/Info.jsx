import React from "react";
import GettingThere from "./GettingThere";
import Staying from "./Staying";
import TheDayItself from "./TheDayItself";

const Info = () => {
  return (
    <div className="w-screen">
      <div className="w-screen min-h-screen max-w-md pt-16 pb-16 px-6 container mx-auto flex flex-col justify-center">
        <GettingThere />
        <Staying />
        <TheDayItself />
      </div>
    </div>
  );
};

export default Info;
