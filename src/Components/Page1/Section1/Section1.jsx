import React from "react";
import Card from "./Card";

function Section1() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-[40px] text-[#353535] font-[600] font-sans">
        QUALITY DRAIN UNBLOCKING BY <br />{" "}
        <span className="text-[#003060]">BLOCKED DRAINS TEZGO</span>
      </h1>
      <p className="text-center text-[#1E1E1E] font-[300] pt-8 w-[1100px]">
        For years, our team of engineers have been garnering experience from
        drainage repairs in Wealden. Their amicable manner of approach,
        savviness, and tendency to get the job done in little time has given
        them no small acclaim amongst our clients. In a bid to provide you with
        the best drain service, Blocked Drains Wealden, keeps tabs on the
        drainage industry to make sure we continuously have updated knowledge
        and the best set of tools to get the work done quickly and efficiently.
        Such tech includes our CCTV drain survey, which helps us reach even the
        slightest of faults.
      </p>
      <Card />
    </div>
  );
}

export default Section1;
