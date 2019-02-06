import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-screen h-16 bg-blue shadow p-4 text-white flex items-center justify-between">
      <Link to="/" className="no-underline">
        <p className="w-24 font-extrabold text-xl text-white">BOSH</p>
      </Link>
      <Link to="/rsvp">
        <button className="w-24 bg-orange hover:bg-orange text-white text-lg font-bold py-4 px-4 rounded shadow">
          RSVP
        </button>
      </Link>
    </div>
  );
};

export default Nav;
