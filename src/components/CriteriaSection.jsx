import React from "react";
import star from "../assets/star.png";
import star1 from "../assets/star-1.png";
import starp from "../assets/star pu.png";

import CriteriaSectionImg from "../assets/CriteriaSectionImg.png";
import CustomButton from "./CustomButton";

const CriteriaSection = () => {
  return (
    <div className="relative flex flex-col justify-center self-stretch border-b py-14">
      <div className="container mx-auto text-center lg:text-left">
        <div className="mt-7 flex flex-col items-center justify-center lg:flex-row">
          <div className="w-full flex-1">
            <img src={CriteriaSectionImg} />
          </div>

          <div className="mt-7 flex flex-1 flex-col items-center justify-center gap-8 p-2 lg:items-start">
            <h2 className="text-clash mb-4 text-xl font-bold leading-10 lg:text-3xl">
              Judgning Criteria <br />{" "}
              <span className="text-purple">Key attributes</span>
            </h2>
            <div className="space-y-4">
              <p className="text-sm">
                <span className="text-pink">Innovation and Creativity: </span>
                Evaluate the uniqueness and creativity of the solution. Consider
                whether it addresses a real-world problem in a novel way or
                introduces innovative features.
              </p>
              <p>
                <span className="text-pink">Functionality: </span>Assess how
                well the solution works. Does it perform its intended functions
                effectively and without major issues? Judges would consider the
                completeness and robustness of the solution.
              </p>
              <p>
                <span className="text-pink">Impact and Relevance: </span>
                Determine the potential impact of the solution in the real
                world. Does it address a significant problem, and is it relevant
                to the target audience? Judges would assess the potential
                social, economic, or environmental benefits.
              </p>
              <p>
                <span className="text-pink">Technical Complexity: </span>
                Evaluate the technical sophistication of the solution. Judges
                would consider the complexity of the code, the use of advanced
                technologies or algorithms, and the scalability of the solution.
              </p>
              <p>
                <span className="text-pink">
                  Adherence to Hackathon Rules:{" "}
                </span>
                Judges will Ensure that the team adhered to the rules and
                guidelines of the hackathon, including deadlines, use of
                specific technologies or APIs, and any other
                competition-specific requirements.
              </p>
            </div>
            <CustomButton
              title={"Read More"}
              customStyles={"w-[9.5rem] mt-6 text-sm"}
            />
          </div>
        </div>

        <img src={starp} className="absolute -top-4 right-44 h-3 w-3" alt="" />
        <img src={star} className="absolute left-44 top-44 h-3 w-3" alt="" />
        <img src={star1} className="absolute bottom-8 right-4 h-2 w-2" alt="" />
      </div>

      <div className="absolute inset-0 -left-4 -top-6 -z-50 h-[27.1875rem] w-[25.25rem] bg-flarecriteriaM1 bg-no-repeat bg-blend-hard-light lg:hidden"></div>
      <div className="absolute -right-12 bottom-24 -z-50 h-[27.875rem] w-[15.75rem] bg-flarecriteriaM2 bg-no-repeat bg-blend-hard-light lg:hidden"></div>
      <div className="absolute bottom-0 left-0 -z-50 hidden h-[59.25rem] w-[64.8125rem] bg-flarecriteriaS1 bg-no-repeat bg-blend-hard-light lg:block"></div>
      <div className="absolute inset-0 -right-1/2 bottom-0 -z-50  hidden overflow-hidden bg-flarecriteriaS2 bg-cover bg-no-repeat bg-blend-hard-light lg:block"></div>
    </div>
  );
};

export default CriteriaSection;
