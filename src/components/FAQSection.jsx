import React from "react";
import star from "../assets/star.png";
import star1 from "../assets/star-1.png";
import starp from "../assets/star pu.png";
import FAQSectionImg from "../assets/FAQSectionImg.png";

const FAQSection = () => {
  return (
    <div className="container mx-auto py-14 text-center text-xs lg:text-left lg:text-sm">
      <div className="relative mt-7 flex flex-col items-center justify-center gap-10 lg:flex-row">
        <div className="flex-1 p-2">
          <h2 className="text-clash mb-2 text-xl font-bold leading-10 lg:text-3xl">
            Frequently Asked <br />
            <span className="text-purple">Questions</span>
          </h2>
          <p>
            We got answers to the questions that you might want to ask about{" "}
            <span className="font-bold">getlinked Hackathon 1.0</span>
          </p>

          <ul className="divide-purple divide-y py-11 text-left">
            <li>
              <details>
                <summary className="flex items-end justify-between gap-3 py-3 marker:content-none">
                  Can I work on a project I started before the hackathon?
                  <svg
                    width="15"
                    height="20"
                    viewBox="0 0 10 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.10376 8.92848V0.448476H5.36376V8.92848H4.10376ZM0.383765 5.28848V4.10848H9.08376V5.28848H0.383765Z"
                      fill="#D434FE"
                    />
                  </svg>
                </summary>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptates, commodi.
                </p>
              </details>
            </li>
            <li>
              <details>
                <summary className="flex items-end justify-between gap-3 py-3 marker:content-none">
                  What happens if I need help during the hackathon?
                  <svg
                    width="15"
                    height="20"
                    viewBox="0 0 10 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.10376 8.92848V0.448476H5.36376V8.92848H4.10376ZM0.383765 5.28848V4.10848H9.08376V5.28848H0.383765Z"
                      fill="#D434FE"
                    />
                  </svg>
                </summary>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptates, commodi.
                </p>
              </details>
            </li>
            <li>
              <details>
                <summary className="flex items-end justify-between gap-3 py-3 marker:content-none">
                  What happens if I don't have an idea for a project?
                  <svg
                    width="15"
                    height="20"
                    viewBox="0 0 10 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.10376 8.92848V0.448476H5.36376V8.92848H4.10376ZM0.383765 5.28848V4.10848H9.08376V5.28848H0.383765Z"
                      fill="#D434FE"
                    />
                  </svg>
                </summary>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptates, commodi.
                </p>
              </details>
            </li>
            <li>
              <details>
                <summary className="flex items-end justify-between gap-3 py-3 marker:content-none">
                  Can I join a team or do I have to come with one?
                  <svg
                    width="15"
                    height="20"
                    viewBox="0 0 10 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.10376 8.92848V0.448476H5.36376V8.92848H4.10376ZM0.383765 5.28848V4.10848H9.08376V5.28848H0.383765Z"
                      fill="#D434FE"
                    />
                  </svg>
                </summary>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptates, commodi.
                </p>
              </details>
            </li>
            <li>
              <details>
                <summary className="flex items-end justify-between gap-3 py-3 marker:content-none">
                  What happens after the hackathon ends
                  <svg
                    width="15"
                    height="20"
                    viewBox="0 0 10 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.10376 8.92848V0.448476H5.36376V8.92848H4.10376ZM0.383765 5.28848V4.10848H9.08376V5.28848H0.383765Z"
                      fill="#D434FE"
                    />
                  </svg>
                </summary>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptates, commodi.
                </p>
              </details>
            </li>
            <li>
              <details>
                <summary className="flex items-end justify-between gap-3 py-3 marker:content-none">
                  Can I work on a project I started before the hackathon?
                  <svg
                    width="15"
                    height="20"
                    viewBox="0 0 10 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.10376 8.92848V0.448476H5.36376V8.92848H4.10376ZM0.383765 5.28848V4.10848H9.08376V5.28848H0.383765Z"
                      fill="#D434FE"
                    />
                  </svg>
                </summary>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptates, commodi.
                </p>
              </details>
            </li>
          </ul>
        </div>
        <div className="w-full flex-1">
          <img src={FAQSectionImg} />
        </div>

        <img src={starp} className="absolute -top-4 left-8 h-4 w-4" alt="" />
        <img
          src={starp}
          className="absolute bottom-80 left-44 h-4 w-4"
          alt=""
        />
        <img
          src={starp}
          className="absolute bottom-48 left-14 h-2 w-2"
          alt=""
        />
        <img src={star} className="absolute bottom-40 left-10 h-3 w-3" alt="" />
        <img
          src={star1}
          className="absolute bottom-0 right-14 h-4 w-4"
          alt=""
        />
      </div>
    </div>
  );
};

export default FAQSection;
