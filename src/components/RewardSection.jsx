import React from "react";

import star from "../assets/star.png";
import star1 from "../assets/star-1.png";
import starp from "../assets/star pu.png";

import Trophy from "../assets/Trophy.png";
import Rewards from "../assets/Rewards.png";

const RewardSection = () => {
  return (
    <div className="bg-flareCriteria flex flex-col justify-center self-stretch border-b bg-no-repeat py-14 bg-blend-hard-light">
      <div className="container relative mx-auto py-14 text-center lg:text-left">
        <div className="mt-7 flex flex-col items-center justify-center gap-10 lg:items-end">
          <div className="mb-10 flex flex-col lg:mr-20">
            <h2 className="text-clash mb-4 text-xl font-bold">
              Prices <br /> <span className="text-purple">Rewards</span>
            </h2>
            <p>
              Highlight of the prizes or rewards for winners and for
              participants.
            </p>
          </div>
          <div className="flex w-full flex-1 flex-col lg:flex-row">
            <img src={Trophy} />
            <img src={Rewards} />
          </div>
        </div>

        <img src={starp} className="absolute -top-4 left-6 h-2 w-2" alt="" />
        <img src={starp} className="absolute right-14 top-24 h-2 w-2" alt="" />
        <img
          src={star1}
          className="absolute bottom-72 left-14 h-2 w-2"
          alt=""
        />
        <img src={star} className="absolute bottom-2 right-10 h-2 w-2" alt="" />
        <img
          src={star1}
          className="absolute bottom-60 right-6 h-2 w-2"
          alt=""
        />
      </div>
    </div>
  );
};

export default RewardSection;
