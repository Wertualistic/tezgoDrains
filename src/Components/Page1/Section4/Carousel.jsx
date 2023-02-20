import React, { useState } from "react";
import img1 from "../../../assets/Page1/img1.png";
import img2 from "../../../assets/Page1/img2.png";
import img3 from "../../../assets/Page1/img3.png";
import { CarouselItem } from "./CarouselItem";

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const items = [
    {
      id: 1,
      img: `${img1}`,
    },
    {
      id: 2,
      img: `${img2}`,
    },
    {
      id: 3,
      img: `${img3}`,
    },
  ];
  return (
    <div className="carousel overflow-hidden w-[700px] flex flex-col justify-center">
      <div className="inner whitespace-nowrap transition-transform" style={{transform: `translate:(-${activeIndex * 100})`}}>
        {items.map((item) => {
          return (
            <CarouselItem key={item.id} {...item}/>
          )
        })}
      </div>
    </div>
  );
}

export default Carousel;
