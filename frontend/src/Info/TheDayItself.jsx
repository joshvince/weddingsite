import React from "react";

const TheDayItself = () => {
  return (
    <div className="mt-12">
      <h1 className="text-4xl text-blue-darker font-extrabold">Gifts</h1>
      <div className="bg-blue h-1 w-12 my-4" />
      <p className="my-6">
        You being there is all we really want, so please don't feel obliged to
        get us a gift.
        <br />
        <br />
        We've lived together for six years and our flat is full of everything we
        need. So if you really would like to get us something, we'd appreciate
        contributions towards our honeymoon in Italy.
      </p>
      <p className="my-6">
        If stuffing wads of non-sequential notes in an envelope is not your
        thing (it is ours), then you can contribute to&nbsp;
        <a
          href="https://prezola.com/wishlists/10202096/"
          className="text-blue-darker border-b-4 border-orange"
          target="_blank"
          rel="noopener noreferrer"
        >
        specific parts of our honeymoon here.
        </a>
      </p>
    </div>
  );
};

export default TheDayItself;
