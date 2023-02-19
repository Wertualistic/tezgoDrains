import React from "react";
import img from '../../../assets/Page1/image.png'

function Header() {
  return (
    <>
          <header className="page1 flex flex-col justify-center items-center h-[78vh] w-full">
      <h1 className="text-[60px] font-[500] text-white leading-5">
        Blocked Drains Kent?
      </h1>
      <p className="text-center font-[400] text-white leading-6 pt-[50px] font-sans">
        Often people don’t look after their drains until they stop functioning.
        And non-functioning drains or sewer lines can be <br /> potentially
        messy, troublesome and a big health hazard, if not fixed immediately.
      </p>
      <div className="flex gap-8 pt-10">
        <a
          href="tel:9988 999 0077"
          className="rounded-md flex font-[700] leading-5 tracking-wide items-center justify-center bg-[#003060] text-[18px] text-white w-[220px] h-[60px] font-sans"
        >
          Contact Us
        </a>
        <a
          href="tel:9988 999 0077"
          className="rounded-md flex font-[700] leading-5 tracking-wide items-center justify-center bg-white text-[18px] text-[#003060] w-[220px] h-[60px] font-sans"
        >
          SEND ENQUIRY
        </a>
      </div>
    </header>
    <center className="mt-9 pb-9">
      <img src={img} alt="" />
    </center>
    </>
  );
}

export default Header;
