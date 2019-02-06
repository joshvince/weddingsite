import React from "react";

const Selector = ({inputHandler, submitHandler, defaultCode}) => {
  return (
    <div>
      <h1 className="font-extrabold text-blue-darker">RSVP</h1>
      <input
        className="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded
                       w-full mt-8 mb-6 py-2 px-4 text-grey-darker text-xl md:text-2xl leading-tight
                       focus:outline-none focus:bg-white focus:border-blue"
        id="inline-full-name"
        type="text"
        defaultValue={defaultCode}
        placeholder="Enter your code"
        onChange={e => inputHandler(e)}
      />
      <div className="w-full flex justify-end">
        <button
          className="w-full bg-orange hover:bg-orange-dark text-white
                         text-xl font-bold py-3 px-4 mt-3 rounded shadow"
          onClick={e => submitHandler(e)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Selector;
