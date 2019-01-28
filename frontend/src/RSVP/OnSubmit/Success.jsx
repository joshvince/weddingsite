import React from "react";
import { ReactComponent as Contact } from "./contact.svg";
import { ReactComponent as Info } from "./info.svg";
import { ReactComponent as Party } from "../Attendance/alcohol.svg";

import InfoItem from "./InfoItem";

const Success = () => {
  return (
    <div className="min-h-screen max-w-lg mx-auto py-10 px-6">
      <div className="container mx-auto flex flex-col text-grey-dark mt-16">
        <div className="text-center w-full mb-8 md:mb-16">
          <Party className="h-32 w-32 md:h-48 md:w-48 mb-8" />
          <h1 className="text-4xl text-blue-dark font-extrabold">
            See you there!
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <InfoItem
            icon={<Info/>}
            header="Looking for more info?"
            subheader={["Check out the info page for more information on the day."]}
          />
          <InfoItem
            icon={<Contact/>}
            header="Need to get in touch?"
            subheader={["bvhead@gmail.com for Bethan","joshmvince@gmail.com for Josh"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Success;
