import React from "react";
import ss from "../../../assets/Page1/ss.png";
import ss1 from "../../../assets/Page1/ss1.png";
import ss2 from "../../../assets/Page1/ss1.png";

function Section2() {
  return (
    <div className="flex flex-col justify-center items-center pt-[80px]">
      <div className="card flex items-center justify-end gap-[95px]">
        <div className="left-side flex flex-col text-start pl-[100px] pr-[100px]">
          <h1 className="text-[36px] text-[#353535] font-bold font-sans">
            Drainage Services
          </h1>
          <p className="text-[#1E1E1E] font-[300] text-[18px] pt-[20px]">
            Blocked drains are potentially messy, disruptive, upsetting and{" "}
            <br /> at worst a health hazard, the good news is that 3 Flow <br />{" "}
            Drainage are just a phone call away.
          </p>
          <a
          href="/about"
          className="rounded-md flex font-[700] leading-5 tracking-wide items-center justify-center bg-[#003060] text-[18px] text-white w-[220px] mt-[40px] h-[60px] font-sans"
        >
          Learn more
        </a>
        </div>
        <div className="right-side flex justify-end items-end">
          <img src={ss} alt="" width='760px'/>
        </div>
      </div>
      <div className="card flex items-center justify-between gap-[102px]">
      <div className="left-side justify-start items-start">
          <img src={ss1} alt="" width='760px'/>
        </div>
        <div className="right-side flex flex-col text-start pl-[90px] pr-[90px]">
          <h1 className="text-[36px] text-[#353535] font-bold font-sans">
          CCTV Drainage Surveys
          </h1>
          <p className="text-[#1E1E1E] font-[300] text-[18px] pt-[20px]">
            “CCTV Drain Survey Specialist” We specialize in CCTV drain <br /> inspection and survey in London, Kent and other parts of South <br /> East England. As the top notch.
          </p>
          <a
          href="/about"
          className="rounded-md flex font-[700] leading-5 tracking-wide items-center justify-center bg-[#003060] text-[18px] text-white w-[220px] mt-[40px] h-[60px] font-sans"
        >
          Learn more
        </a>
        </div>
      </div>
      <div className="card flex items-center justify-end gap-[102px]">
        <div className="left-side flex flex-col text-start pl-[90px] pr-[100px]">
          <h1 className="text-[36px] text-[#353535] font-bold font-sans">
          About Us
          </h1>
          <p className="text-[#1E1E1E] font-[300] text-[18px] pt-[20px]">
          3 Flow Drainage cover the South East of England including <br /> Central and Greater London, Kent, Essex and Sussex providing <br /> drainage servicing and repair work.
          </p>
          <a
          href="/about"
          className="rounded-md flex font-[700] leading-5 tracking-wide items-center justify-center bg-[#003060] text-[18px] text-white w-[220px] mt-[40px] h-[60px] font-sans"
        >
          Learn more
        </a>
        </div>
        <div className="right-side flex justify-end items-end">
          <img src={ss2} alt="" width='760px'/>
        </div>
      </div>
    </div>
  );
}

export default Section2;
