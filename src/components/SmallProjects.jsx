import React from "react";

import CardType from "./CardType";
import { Swiper, SwiperSlide } from "swiper/react";
import "./SmallProjects.css";

import { projects } from "../constants";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const SmallProjects = (isVisible) => {
  return (
    <div
      className={`container row-span-1 col-span-1 md:h-[30rem] h-[25rem] transition-all duration-1000 ease-in-out bg-dark-4 rounded-xl w-[280px] py-[20px] ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-[10rem] opacity-0"
      }`}
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="custom-next swiper-button-next"></div>
        <div className="custom-prev swiper-button-prev"></div>

        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="flex-col h-full w-full space-y-3 py-4">
              <div className="flex justify-center">
                <div className="px-10">
                  <img
                    className="w-[20rem] h-[12rem] rounded-xl"
                    src={project.image}
                    alt={project.name}
                  />
                </div>
              </div>
              <div className="px-10 text-[1.5rem]">
                <p>{project.name}</p>
              </div>
              <div className="px-10 grid md:grid-cols-4 grid-cols-2 grid-rows-2 gap-2">
                {project.techStack.map((tech, index) => (
                  <CardType key={index}>{tech}</CardType>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SmallProjects;
