import React from "react";
import Accordion from "../Components/Page1/Accordion/Accordion";
import Areas from "../Components/Page1/Areas/Areas";
import Carousel from "../Components/Page1/Carousel/Carousel";
import Header from "../Components/Page1/Header/Header";
import Section1 from "../Components/Page1/Section1/Section1";
import Section2 from "../Components/Page1/Section2/Section2";
import Section3 from "../Components/Page1/Section3/Section3";
import data from "../Questions";

function Home() {
  return (
    <div>
      <Header />
      <Section1 />
      <Carousel />
      <Section2 />
      <h1 className="text-[40px] font-[700] text-[#353535] pt-[80px]">
        FREQUENTLY ASKED QUESTIONS
      </h1>
      {data.map((item) => {
        return <Accordion key={item.id} {...item} />;
      })}
      <Section3 />
      <Areas />
    </div>
  );
}

export default Home;
