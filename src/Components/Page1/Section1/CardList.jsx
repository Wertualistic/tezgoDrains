import React from "react";

function CardList({ item }) {
  return (
    <div className="bg-white rounded-md shadow-md w-[388px] h-[674px] items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <img src={item.img} alt=""/>
        <h1 className="text-[28px] font-bold pt-[30px]  px-[40px]">{item.title}</h1>
        <p className="text-[#1E1E1E] text-[16px] font-[400] px-4 pt-3">{item.text}</p>
        <a
          href="tel:9988 999 0077"
          className="rounded-md flex font-[700] leading-5 tracking-wide items-center justify-center bg-[#003060] text-[18px] text-white w-[220px] mt-[25px] h-[60px] font-sans"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default CardList;
