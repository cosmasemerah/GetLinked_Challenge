import React from "react";
import arrow from "../assets/arrow.png";
import starp from "../assets/star pu.png";
import introSectionImg from "../assets/IntroductionSectionImg.png";

const IntroductionSection = () => {
  return (
    <div className="flex flex-col justify-center self-stretch border-b py-14">
      <div className="container mx-auto text-center  lg:text-left">
        <div className="mt-7 flex flex-col items-center justify-center gap-14 lg:flex-row">
          <div className="flex-1">
            <img src={introSectionImg} className="" />
          </div>

          <div className="relative mt-7 flex-1 space-y-4 p-2">
            <h2 className="text-clash mb-2 text-xl font-bold leading-10 lg:text-3xl">
              Introduction to getlinked <br />
              <span className="text-purple">techHackathon 1.0</span>
            </h2>
            <p>
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>

            <img
              src={arrow}
              className="absolute -top-6 left-32 h-5 w-6"
              alt=""
            />
            <img
              src={starp}
              className="absolute right-4 top-8 h-3 w-3"
              alt=""
            />
            <img
              src={starp}
              className="absolute -top-60 left-4 h-4 w-4"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionSection;
