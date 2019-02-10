import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="fixed w-screen h-16 bg-blue-light shadow p-4 text-white flex items-center justify-around">
      <Link to="/" className="no-underline">
        <p className="w-24 font-bold md:text-xl text-white">22619</p>
      </Link>
      <Link to="/where" className="no-underline">
        <p className="w-24 font-bold md:text-xl text-white">FAQs</p>
      </Link>
      <Link to="/rsvp">
        <button className="w-24 bg-orange hover:bg-orange text-white md:text-lg font-bold py-4 px-4 rounded shadow">
          RSVP
        </button>
      </Link>
    </div>
  );
};

export default Nav;
