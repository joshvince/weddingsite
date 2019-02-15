import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Contact } from "./contact.svg";
import { ReactComponent as Info } from "./info.svg";

import InfoItem from "./InfoItem";
import Attending from "./Attending";
import NotAttending from "./NotAttending";

const Success = ({ anyoneComing }) => {
  let content = anyoneComing ? <Attending /> : <NotAttending />;

  useEffect(() => {
    window.scrollTo(0,0);
  })

  return (
    <div className="min-h-screen max-w-lg mx-auto py-10 px-6">
      <div className="container mx-auto flex flex-col text-grey-dark mt-16">
        {content}
        <div className="flex flex-col md:flex-row justify-center items-center">
          <Link to="/">
            <InfoItem
              icon={<Info />}
              header="Looking for more info?"
              subheader={[
                "Check out the rest of the site for more information on the day."
              ]}
            />
          </Link>

          <InfoItem
            icon={<Contact />}
            header="Need to get in touch?"
            subheader={[
              "bvhead@gmail.com for Bethan",
              "joshmvince@gmail.com for Josh"
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Success;
