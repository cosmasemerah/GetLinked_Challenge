import React from "react";

import star from "../assets/star.png";
import star1 from "../assets/star-1.png";
import starp from "../assets/star pu.png";

import CustomButton from "./CustomButton";
import PolicySectionImg from "../assets/PolicySectionImg.png";

const PolicySection = () => {
  return (
    <div className="bg-flareLeft flex flex-col justify-center self-stretch border-b bg-center bg-no-repeat py-14 bg-blend-hard-light">
      <div className="container relative mx-auto text-center lg:text-left">
        <div className="mx-20 mt-7 flex flex-col items-center justify-center gap-6 lg:flex-row">
          <div className="flex flex-col justify-center">
            <div className="mb-10">
              <h2 className="text-clash mb-4 text-xl font-bold leading-10 lg:text-3xl">
                Privacy Policy and <br />{" "}
                <span className="text-purple">Terms</span>
              </h2>
              <p>
                Getlinked Hackathon 1.0 is honored to have the following major
                companies as its partners and sponsors
              </p>
            </div>
            <div className="border-pink rounded-md border px-4 py-8">
              <p>
                At getlinked tech Hackathon 1.0, we value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your data when you participate in our tech hackathon event. By
                participating in our event, you consent to the practices
                described in this policy.
              </p>

              <h3 className="text-purple mb-1 mt-5 text-start font-bold">
                Licensing Policy
              </h3>
              <p className="text-start text-xs font-bold">
                Here are terms of our Standard License:
              </p>
              <ul className="flex flex-col gap-6 py-6 text-start">
                <li className="flex items-start justify-center gap-4">
                  <svg
                    className="mt-1 shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                  >
                    <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
                    <path
                      d="M5 8L7 10.5L13.5 6"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                  <p>
                    The Standard License grants you a non-exclusive right to
                    navigate and register for our event
                  </p>
                </li>
                <li className="flex items-start justify-center gap-4">
                  <svg
                    className="mt-1 shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                  >
                    <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
                    <path
                      d="M5 8L7 10.5L13.5 6"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                  <p>
                    You are licensed to use the item available at any free
                    source sites, for your project developement
                  </p>
                </li>
              </ul>
              <CustomButton
                title={"Read More"}
                customStyles={"w-[9.5rem] mt-6 text-sm"}
              />
            </div>
          </div>

          <img src={PolicySectionImg} />
        </div>

        <img src={star} className="absolute -top-4 right-6 h-2 w-2" alt="" />
        <img src={starp} className="absolute right-8 top-44 h-3 w-3" alt="" />
        <img
          src={starp}
          className="absolute -left-3 bottom-1/2 h-3 w-3"
          alt=""
        />
        <img src={starp} className="absolute bottom-96 left-1 h-3 w-3" alt="" />
        <img
          src={star1}
          className="absolute bottom-96 right-12 h-[0.375rem] w-[0.375rem]"
          alt=""
        />
        <img
          src={star1}
          className="absolute bottom-28 left-12 h-[0.375rem] w-[0.375rem]"
          alt=""
        />
        <img
          src={star}
          className="absolute bottom-24 right-4 h-[0.375rem] w-[0.375rem]"
          alt=""
        />
      </div>
    </div>
  );
};

export default PolicySection;
