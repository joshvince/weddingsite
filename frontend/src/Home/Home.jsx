import React from "react";
import Timeline from "./Timeline/Timeline";

import Flowers from "./flowers.svg";
import { ReactComponent as Link } from "./link.svg";

const Home = () => {
  return (
      <div className="w-screen pt-16 container mx-auto flex flex-col items-center justify-center px-2 pb-12">
        <img src={Flowers} className="my-4 md:my-12 w-screen md:w-4/5" />
        <div className="flex flex-col justify-center text-center mt-4 mb-12">
          <h1 className="font-extrabold text-blue text-3xl md:text-5xl mb-8">
            Bethan & Josh are getting married
          </h1>
          <p className=" text-blue-darker text-xl md:text-4xl mb-2 md:mb-4">
            22nd June 2019
          </p>
          <div className="flex  justify-center text-xl md:text-4xl text-blue-darker">
            <p>at&nbsp;</p>
            <a
              href="https://goo.gl/maps/t6Bqu7BfXrM2"
              target="_blank"
              className="no-underline text-blue-darker"
            >
              <p className="border-b-4 border-blue-light">Cissbury Barns</p>
            </a>
            <p>,&nbsp;Nepcote</p>
          </div>
        </div>
        <Timeline />
      </div>
  );
};

export default Home;
