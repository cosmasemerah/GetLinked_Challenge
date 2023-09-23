import React from "react";
import star from "../assets/star-1.png";
import starp from "../assets/star pu.png";
import GuildelinesSectionImg from "../assets/GuildelinesSectionImg.png";

const GuildelineSection = () => {
  return (
    <div className="bg-flareGuildeline flex flex-col justify-center self-stretch border-b bg-no-repeat py-14 bg-blend-hard-light">
      <div className="container mx-auto text-center lg:text-left">
        <div className="mt-7 flex flex-col items-center justify-center lg:flex-row">
          <div className="order-2 w-full flex-1">
            <img src={GuildelinesSectionImg} className="" alt="" />
          </div>

          <div className="p-2s relative order-1 mt-7 flex-1">
            <h2 className="text-clash mb-2 text-xl font-bold leading-10 lg:text-3xl">
              Rules and <br /> <span className="text-purple">Guildelines</span>
            </h2>
            <p className="text-sm">
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>

            <img
              src={starp}
              className="absolute right-4 top-8 h-3 w-3"
              alt=""
            />
            <img
              src={star}
              className="absolute -top-52 left-4 h-3 w-3"
              alt=""
            />
            <img
              src={star}
              className="absolute -bottom-8 left-24 h-3 w-3"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuildelineSection;
