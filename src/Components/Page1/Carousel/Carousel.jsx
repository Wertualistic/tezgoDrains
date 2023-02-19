import React, { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import avatar from "../../../assets/Page1/avatar.svg";
import "pure-react-carousel/dist/react-carousel.es.css";

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function Carousel() {
  return (
    <div className="flex container gap-[80px] mx-auto items-start justify-center px-[120px] py-[80px]">
      <div className="flex flex-col pt-[40px]">
        <h1 className="text-[#000000] font-bold text-[18px]">REVIEWS</h1>
        <div className="flex">
          <i class="ri-star-fill text-[23px] text-[#CEC9C1]"></i>
          <i class="ri-star-fill text-[23px] text-[#FFAC33]"></i>
          <i class="ri-star-fill text-[23px] text-[#FFAC33]"></i>
          <i class="ri-star-fill text-[23px] text-[#FFAC33]"></i>
          <i class="ri-star-fill text-[23px] text-[#FFAC33]"></i>
        </div>
        <div className="text pt-4">
          <p className="text-[#1E1E1E] text-[13px] p-0">4.5</p>
          <p className="text-[gray] text-[13px]">Average</p>
          <p className="text-[#1E1E1E] text-[13px]">1102</p>
          <p className="text-[gray] text-[13px]">Reviews</p>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
        {/* Carousel for desktop and large size devices */}
        <CarouselProvider
          className="lg:block hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={7}
          visibleSlides={2}
          step={2}
          infinite={true}
        >
          <div className="relative flex items-center justify-center w-[1100px]">
          <ButtonBack
              role="button"
              aria-label="slide backward"
              className="relative top-[150px] left-[600px] z-50 bg-[#003060] w-[40px] h-[40px] rounded-full flex items-center justify-center"
              id="prev"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                >
                  <Slide index={0} className="">
                    <div className="flex flex-col w-[486px] h-[225px] bg-white items-start justify-center rounded-md p-[40px]">
                      <div className="flex gap-40">
                        <div className="flex items-center">
                          <img src={avatar} alt="" />
                          <h1>Вероника Лимонова</h1>
                        </div>
                        <div className="flex">
                          <i class="ri-star-fill text-[23px] text-[#CEC9C1]"></i>
                          <i class="ri-star-fill text-[23px] text-[#FFAC33]"></i>
                          <i class="ri-star-fill text-[23px] text-[#FFAC33]"></i>
                          <i class="ri-star-fill text-[23px] text-[#FFAC33]"></i>
                          <i class="ri-star-fill text-[23px] text-[#FFAC33]"></i>
                        </div>
                      </div>
                      <p className="text-start pt-[10px]">
                        Больше всего понравилась окраска кружки, но,к сожалению,
                        после первой стирки в посудомоечной машинке появились
                        маленькие царапки, очень жаль :(
                      </p>
                      <p className="text-start pt-[15px] text-[#00000066]">18 декабря </p>
                    </div>
                  </Slide>
                  <Slide index={1}>
                  <div className="flex flex-col w-[486px] h-[225px] bg-white items-start justify-center rounded-md p-[40px]">
                      <div className="flex gap-40">
                        <div className="flex items-center">
                          <img src={avatar} alt="" />
                          <h1>Вероника Лимонова</h1>
                        </div>
                        <div className="flex">
                          <i class="ri-star-fill text-[23px] text-[#CEC9C1]"></i>
                          <i class="ri-star-fill text-[23px] text-[#FFAC33]"></i>
                          <i class="ri-star-fill text-[23px] text-[#FFAC33]"></i>
                          <i class="ri-star-fill text-[23px] text-[#FFAC33]"></i>
                          <i class="ri-star-fill text-[23px] text-[#FFAC33]"></i>
                        </div>
                      </div>
                      <p className="text-start pt-[10px]">
                        Больше всего понравилась окраска кружки, но,к сожалению,
                        после первой стирки в посудомоечной машинке появились
                        маленькие царапки, очень жаль :(
                      </p>
                      <p className="text-start pt-[15px] text-[#00000066]">18 декабря </p>
                    </div>
                  </Slide>
                  <Slide index={2}>
                  <div className="flex flex-col w-[486px] h-[225px] bg-white items-start justify-center rounded-md p-[40px]">
                      <div className="flex gap-40">
                        <div className="flex items-center">
                          <img src={avatar} alt="" />
                          <h1>Вероника Лимонова</h1>
                        </div>
                        <div className="flex">
                          <i class="ri-star-fill text-[23px] text-[#CEC9C1]"></i>
                          <i class="ri-star-fill text-[23px] text-[#FFAC33]"></i>
                          <i class="ri-star-fill text-[23px] text-[#FFAC33]"></i>
                          <i class="ri-star-fill text-[23px] text-[#FFAC33]"></i>
                          <i class="ri-star-fill text-[23px] text-[#FFAC33]"></i>
                        </div>
                      </div>
                      <p className="text-start pt-[10px]">
                        Больше всего понравилась окраска кружки, но,к сожалению,
                        после первой стирки в посудомоечной машинке появились
                        маленькие царапки, очень жаль :(
                      </p>
                      <p className="text-start pt-[15px] text-[#00000066]">18 декабря </p>
                    </div>
                  </Slide>
                  <Slide index={3}>
                  <div className="flex flex-col w-[486px] h-[225px] bg-white items-start justify-center rounded-md p-[40px]">
                      <div className="flex gap-40">
                        <div className="flex items-center">
                          <img src={avatar} alt="" />
                          <h1>Вероника Лимонова</h1>
                        </div>
                        <div className="flex">
                          <i class="ri-star-fill text-[23px] text-[#CEC9C1]"></i>
                          <i class="ri-star-fill text-[23px] text-[#FFAC33]"></i>
                          <i class="ri-star-fill text-[23px] text-[#FFAC33]"></i>
                          <i class="ri-star-fill text-[23px] text-[#FFAC33]"></i>
                          <i class="ri-star-fill text-[23px] text-[#FFAC33]"></i>
                        </div>
                      </div>
                      <p className="text-start pt-[10px]">
                        Больше всего понравилась окраска кружки, но,к сожалению,
                        после первой стирки в посудомоечной машинке появились
                        маленькие царапки, очень жаль :(
                      </p>
                      <p className="text-start pt-[15px] text-[#00000066]">18 декабря </p>
                    </div>
                  </Slide>
                  <Slide index={4}>
                  <div className="flex flex-col w-[486px] h-[225px] bg-white items-start justify-center rounded-md p-[40px]">
                      <div className="flex gap-40">
                        <div className="flex items-center">
                          <img src={avatar} alt="" />
                          <h1>Вероника Лимонова</h1>
                        </div>
                        <div className="flex">
                          <i class="ri-star-fill text-[23px] text-[#CEC9C1]"></i>
                          <i class="ri-star-fill text-[23px] text-[#FFAC33]"></i>
                          <i class="ri-star-fill text-[23px] text-[#FFAC33]"></i>
                          <i class="ri-star-fill text-[23px] text-[#FFAC33]"></i>
                          <i class="ri-star-fill text-[23px] text-[#FFAC33]"></i>
                        </div>
                      </div>
                      <p className="text-start pt-[10px]">
                        Больше всего понравилась окраска кружки, но,к сожалению,
                        после первой стирки в посудомоечной машинке появились
                        маленькие царапки, очень жаль :(
                      </p>
                      <p className="text-start pt-[15px] text-[#00000066]">18 декабря </p>
                    </div>
                  </Slide>
                  <Slide index={5}>
                  <div className="flex flex-col w-[486px] h-[225px] bg-white items-start justify-center rounded-md p-[40px]">
                      <div className="flex gap-40">
                        <div className="flex items-center">
                          <img src={avatar} alt="" />
                          <h1>Вероника Лимонова</h1>
                        </div>
                        <div className="flex">
                          <i class="ri-star-fill text-[23px] text-[#CEC9C1]"></i>
                          <i class="ri-star-fill text-[23px] text-[#FFAC33]"></i>
                          <i class="ri-star-fill text-[23px] text-[#FFAC33]"></i>
                          <i class="ri-star-fill text-[23px] text-[#FFAC33]"></i>
                          <i class="ri-star-fill text-[23px] text-[#FFAC33]"></i>
                        </div>
                      </div>
                      <p className="text-start pt-[10px]">
                        Больше всего понравилась окраска кружки, но,к сожалению,
                        после первой стирки в посудомоечной машинке появились
                        маленькие царапки, очень жаль :(
                      </p>
                      <p className="text-start pt-[15px] text-[#00000066]">18 декабря </p>
                    </div>
                  </Slide>
                  <Slide index={6}>
                  <div className="flex flex-col w-[486px] h-[225px] bg-white items-start justify-center rounded-md p-[40px]">
                      <div className="flex gap-40">
                        <div className="flex items-center">
                          <img src={avatar} alt="" />
                          <h1>Вероника Лимонова</h1>
                        </div>
                        <div className="flex">
                          <i class="ri-star-fill text-[23px] text-[#CEC9C1]"></i>
                          <i class="ri-star-fill text-[23px] text-[#FFAC33]"></i>
                          <i class="ri-star-fill text-[23px] text-[#FFAC33]"></i>
                          <i class="ri-star-fill text-[23px] text-[#FFAC33]"></i>
                          <i class="ri-star-fill text-[23px] text-[#FFAC33]"></i>
                        </div>
                      </div>
                      <p className="text-start pt-[10px]">
                        Больше всего понравилась окраска кружки, но,к сожалению,
                        после первой стирки в посудомоечной машинке появились
                        маленькие царапки, очень жаль :(
                      </p>
                      <p className="text-start pt-[15px] text-[#00000066]">18 декабря </p>
                    </div>
                  </Slide>
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="relative top-[150px] left-[-370px] bg-[#003060] w-[40px] h-[40px] rounded-full flex items-center justify-center"
              id="next"
            >
              <svg
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
}
