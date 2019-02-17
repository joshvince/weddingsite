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
        <h2 className="text-blue-dark font-extrabold mb-2">Car</h2>
        <p className="mb-6">
          Driving is the easiest way to get to the barns, and there's plenty of parking. <br /></p>
          <ul className="my-4">
            <li className="mt-4">
              Exit the A24 and turn into Nepcote (Nepcote Lane)
            </li>
            <li className="mt-4">
              <span className="text-blue font-bold">
                Take the first right
              </span>{" "}
              through the stone gates into Cissbury.
            </li>
            <li className="mt-4">
              <span className="text-blue font-bold">
                Immediately bear right
              </span>{" "}
              again towards the barns.{" "}
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
          Park on the grass past the tree line. You can leave your car overnight but please pick it up
          by <span className="text-blue font-bold">11am the next day.</span>
        </p>
      </div>
      <div className="mb-6">
        <h2 className="text-blue-dark font-extrabold mb-2">Train</h2>
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
        <h2 className="text-blue-dark font-extrabold mb-2">Taxi</h2>
        <p>
          Worthing is a big ol' town but you should definitely pre-book taxis in
          advance for 23:45 on Saturday night. There's no uber here.</p>
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
