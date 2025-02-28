import React from "react";

const IncorrectCode = ({toggleError}) => {
  return (
    <div>
      <h1 className="font-extrabold text-red-dark">Oops!</h1>
      <p className="my-6 leading=loose">
        Looks like you entered an incorrect code. <br />Check your email
      </p>
      <button
        className="bg-transparent hover:bg-orange text-orange-dark font-semibold hover:text-white py-2
               px-4 border border-orange hover:border-transparent rounded"
        onClick={e => toggleError()}
      >
        Try again
      </button>
    </div>
  );
};

export default IncorrectCode;
