import React from "react";

const GettingThere = () => {
  return (
    <div>
      <h1 className="text-4xl text-blue-darker font-extrabold">
        Getting there
      </h1>
      <div className="bg-blue h-1 w-32 my-4" />
      <p className="my-6">
        The venue's address is{" "}
        <span className="text-blue">
          Cissbury Barns, Nepcote, Findon, Worthing BN14 0SR
        </span>
      </p>
      <div className="mb-6">
        <h2 className="text-blue-dark font-extrabold">Car</h2>
        <div className="bg-blue-light h-1 w-6 mt-2 mb-4" />
        <p className="mb-6">
          Driving is the easiest way to get to the Barns, and there's plenty of
          car parking. <br /></p>
          <ul className="my-4">
            <li className="mt-4">
              Follow a map until you reach the exit off the A24 outside Findon.
            </li>
            <li className="mt-4">
              Exit off the A24 and{" "}
              <span className="text-blue font-bold">
                take the first right turn
              </span>{" "}
              through the stone gates.
            </li>
            <li className="mt-4">
              <span className="text-blue font-bold">
                Immediately head right
              </span>{" "}
              again towards the stables.{" "}
            </li>
            <li className="mt-4">
              <span className="text-blue font-bold">Turn right</span> into the
              stables and{" "}
              <span className="text-blue font-bold">
                immediately turn left.
              </span>
            </li>
            <li className="mt-4">
              <span className="text-blue font-bold">Follow that road past</span>{" "}
              an empty field until you see the barns on the right.
            </li>
          </ul>
        <p>
          You can leave your car overnight in the car park but please pick it up
          by <span className="text-blue font-bold">11am the next day. </span>
        </p>
      </div>
      <div className="mb-6">
        <h2 className="text-blue-dark font-extrabold">Train</h2>
        <div className="bg-blue-light h-1 w-10 mt-2 mb-2" />
        <p>
          If you're getting the train, get a ticket to{" "}
          <span className="text-blue font-bold">Worthing Station</span> and get
          a taxi to the venue.
          <br />
          <br />
          There is a bus but it will leave you with quite a long walk to the
          barns.
        </p>
      </div>
      <div>
        <h2 className="text-blue-dark font-extrabold">Taxi</h2>
        <div className="bg-blue-light h-1 w-8 mt-2 mb-2" />
        <p>
          Worthing is a big ol' town but you should definitely pre-book taxis in
          advance for Saturday night. There's no uber here.</p>
          <ul className="my-6">
            <li className="mt-4">
              <span className="text-blue font-bold">Arrow</span>{" "}
              <a
                href="tel:01903-212121"
                className="text-blue-darker border-b-4 border-orange"
              >
                01903 212121
              </a>
            </li>
            <li className="mt-4">
              <span className="text-blue font-bold">Wortax</span>{" "}
              <a
                href="tel:01903-333333"
                className="text-blue-darker border-b-4 border-orange"
              >
                01903 333333
              </a>
            </li>
          </ul>
      </div>
    </div>
  );
};

export default GettingThere;
