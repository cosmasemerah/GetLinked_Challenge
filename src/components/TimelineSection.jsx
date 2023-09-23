import React from "react";

const TimelineSection = () => {
  return (
    <div><div className="mx-auto max-w-[19rem] py-14 text-xs">
      <div className="text-center">
        <h2 className="text-clash mb-2 text-xl font-bold">Timeline</h2>
        <p className="text-sm">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </div>

      <div className="">
        {/* <!-- Item #3 --> */}
        <div className="group relative py-6 pl-8 sm:pl-32">
          {/* <!-- Purple label --> */}
          <div className="text-purple mb-1 text-xl font-medium sm:mb-0">
            Hackaton Annoucment
          </div>
          <div className="">
            Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.
            Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus
            risus.
          </div>
        </div>
      </div>
    </div></div>
    
  );
};

export default TimelineSection;
