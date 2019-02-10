import React from "react";
import Timeline from "./Timeline/Timeline";
import { Link } from "react-router-dom";
import Flowers from "./flowers.svg";

import { ReactComponent as Info } from "./info.svg";
import { ReactComponent as Contact } from "./contact.svg";


const Home = () => {
  return (
    <div className="w-screen">
      <div className="w-screen min-h-screen pt-16 container px-2 mx-auto flex flex-col items-center justify-center">
        <img src={Flowers} className="my-4 md:my-12 w-screen md:w-4/5" />
        <div className="flex flex-col justify-center text-center mt-4 mb-12">
          <h1 className="font-extrabold text-blue text-3xl md:text-5xl mb-8">
            Bethan & Josh are getting married
          </h1>
          <p className=" text-blue-darker text-xl md:text-4xl mb-2 md:mb-4">
            22nd June 2019
          </p>
          <div className="flex justify-center text-xl md:text-4xl text-blue-darker">
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
      </div>
      <div className="w-screen flex flex-col justify-center pb-12">
        <div className="flex flex-col justify-center mx-auto">
          <Timeline />
        </div>
      </div>
      <div className="w-screen bg-blue-light flex flex-col justify-center pb-12">
        <div className="flex flex-col justify-center pt-12 px-2 mx-auto ">
          <h1 className="w-64 md:w-128 font-bold text-3xl text-white">
            Questions?
          </h1>
          <div className="bg-orange h-1 w-24 my-4" />
          <div className="w-100 mt-6 flex flex-row text-white text-xl md:text-2xl">
            <Info />
            <p>More info over at&nbsp;</p>
            <Link to="/faq" className="no-underline text-white">
              <p className="border-b-4 border-blue-darkest">FAQs</p>
            </Link>
          </div>
          <div className="w-100 mt-6 flex flex-row text-white text-xl md:text-2xl">
            <Contact/>
            <p>Visit the&nbsp;</p>
            <Link to="/rsvp" className="no-underline text-white">
              <p className="border-b-4 border-blue-darkest">RSVP page</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
