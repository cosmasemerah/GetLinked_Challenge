import React from "react";
import star1 from "../assets/star-1.png";
import starp from "../assets/star pu.png";
import Partners from "../assets/Sponsors.png";

const Sponsor = () => {
  return (
    <div className="bg-flareLeft flex flex-col justify-center self-stretch border-b bg-top bg-no-repeat py-14 bg-blend-hard-light">
      <div className="container relative mx-auto text-center">
        <div className="mt-7 flex flex-col items-center justify-center gap-10">
          <div className="mb-10">
            <h2 className="text-clash mb-4 text-xl font-bold">
              Parners and Sponsors
            </h2>
            <p className="lg:max-w-lg">
              Getlinked Hackathon 1.0 is honored to have the following major
              companies as its partners and sponsors
            </p>
          </div>
          <div className="border-pink rounded-md border px-12 py-9">
            <img src={Partners} />
          </div>
          <img src={starp} className="absolute left-10 top-56 h-2 w-2" alt="" />
          <img
            src={star1}
            className="absolute bottom-4 right-8 h-2 w-2"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
