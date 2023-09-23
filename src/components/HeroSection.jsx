import React from "react";
import heroImage from "../assets/heroImage.png";
import chain from "../assets/chain.png";
import fire from "../assets/fire.png";
import star from "../assets/star-1.png";
import star2 from "../assets/star.png";
import creative from "../assets/Creative.png";
import CustomButton from "./CustomButton";

const HeroSection = () => {
  return (
    <div className=" relative flex items-center justify-center self-stretch">
      <div className="container">
        <div className=" flex flex-col items-center justify-center gap-14 lg:mt-20 lg:flex-row">
          <div className="flex-1 text-center lg:ml-24 lg:text-left">
            <p className="py-8 font-bold italic md:text-2xl lg:absolute lg:right-14  lg:top-0">
              Igniting a Revolution in HR Innovation
            </p>
            <div className="flex flex-col gap-4">
              <h1 className="font-clash  mb-2 pt-4 text-3xl font-bold leading-8 md:text-7xl">
                getlinked Tech <br /> Hackathon{" "}
                <span className="text-purple">1.0</span>
                <img src={chain} className="inline-block h-8 w-8" alt="" />
                <img src={fire} className="inline-block h-8 w-8" alt="" />
              </h1>
              <p className=" max-w-xl md:text-xl">
                Participate in getlinked tech Hackathon 2023 stand a chance to
                win a Big prize
              </p>
              <img
                src={star}
                className="absolute -top-4 left-24 h-3 w-3"
                alt=""
              />
              <img
                src={star2}
                className="absolute -bottom-14 right-10 h-3 w-3"
                alt=""
              />
              <img
                src={creative}
                className="w-[1.125rem absolute -top-1 right-16 h-[1.625rem]"
                alt=""
              />
            </div>

            <CustomButton
              title={"Register"}
              customStyles={"w-[9.5rem] mt-8 text-sm md:text-base"}
            />

            <div className="mt-12 flex items-center justify-center gap-4 text-sm lg:justify-start">
              <div>
                <span className="font-unica text-5xl md:text-6xl">00</span>H
              </div>
              <div>
                <span className="font-unica text-5xl md:text-6xl">00</span>M
              </div>
              <div>
                <span className="font-unica text-5xl md:text-6xl">00</span>S
              </div>
            </div>
          </div>
          <div className="w-full flex-1">
            <img
              src={heroImage}
              className="h-auto w-full overflow-visible object-cover object-center lg:bottom-0 lg:right-0"
            />
          </div>
        </div>
      </div>

      <div className="bg-flareLeft absolute inset-0 z-0  bg-left-top bg-no-repeat bg-blend-hard-light"></div>
      <div className="bg-image2 absolute inset-0 z-0"></div>
    </div>
  );
};

export default HeroSection;
