import React, { useState, useEffect } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { contact, navigation } from "../constants";

const LargeNavigation = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            console.log("Intersecting Section ID:", entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="bg-mac-2 w-full h-[6rem]  grid grid-rows-5 grids-col-6  rounded-t-xl border-b-mac-1 border-b-[0.1rem]">
      <div className="absolute top-0 left-0 w-full h-[0.1rem] bg-gradient-to-r from-transparent via-white to-transparent " />
      {/* Top Bar */}
      <div className=" row-span-2 items-center col-span-6 grid grid-cols-12 grid-rows-2 gap-x-1 p-2">
        {/* Dots */}
        <div className="flex items-center gap-x-2 w-full h-full row-span-2 col-span-1 ">
          <div className="pl-4 text-dots-3">
            <svg viewBox="0 0 24 24" height="16" width="16">
              <circle
                cx="11.998"
                cy="11.998"
                fill-rule="nonzero"
                r="9.998"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className=" text-dots-2">
            <svg viewBox="0 0 24 24" height="16" width="16">
              <circle
                cx="11.998"
                cy="11.998"
                fill-rule="nonzero"
                r="9.998"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className=" text-dots-1">
            <svg viewBox="0 0 24 24" height="16" width="16">
              <circle
                cx="11.998"
                cy="11.998"
                fill-rule="nonzero"
                r="9.998"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        {navigation.map((item) => (
          <div className="row-span-2 col-span-2" key={item.id}>
            <a
              className="flex items-center gap-1 transition-all text-white text-opacity-80 hover:bg-opacity-10  ease-in-out duration-50"
              href={`#${item.id}`} // Links to sections
            >
              <div
                className={` bg-dark-2 h-full w-full rounded-lg flex items-center justify-start px-2 gap-x-2 ${
                  activeSection === item.id ? "bg-mac-2" : ""
                }`}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  height="16"
                  width="16"
                >
                  {item.svgPaths.map((path, index) => (
                    <path key={index} d={path}></path>
                  ))}
                </svg>
                {item.title}
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Middle Bar */}
      <div className="row-span-1 col-span-6 h-full w-full  rounded-2xl p-2 flex items-center gap-x-4">
        <div className="pl-4 flex gap-x-5 text-mac-1 items-center">
          <svg
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="rounded-full hover:bg-white hover:bg-opacity-10 transition-all ease-in-out duration-50"
          >
            <path
              d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z"
              fill-rule="nonzero"
            />
          </svg>
          <svg
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="rounded-full hover:bg-white hover:bg-opacity-10 transition-all ease-in-out duration-50"
          >
            <path
              d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z"
              fill-rule="nonzero"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="rounded-full hover:bg-white hover:bg-opacity-10 transition-all ease-in-out duration-50"
          >
            <path d="M13.5 2c-5.288 0-9.649 3.914-10.377 9h-3.123l4 5.917 4-5.917h-2.847c.711-3.972 4.174-7 8.347-7 4.687 0 8.5 3.813 8.5 8.5s-3.813 8.5-8.5 8.5c-3.015 0-5.662-1.583-7.171-3.957l-1.2 1.775c1.916 2.536 4.948 4.182 8.371 4.182 5.797 0 10.5-4.702 10.5-10.5s-4.703-10.5-10.5-10.5z" />
          </svg>
        </div>
        <div className="w-full h-full p-2 rounded-3xl bg-dark-2 bg-opacity-80"></div>
        <div></div>
      </div>
      {/* Bottom Bar */}
      <div className=" row-span-2  col-span-6 grid grid-cols-12 grid-rows-2 gap-x-2 pl-6 ">
        {contact.map((item) => (
          <div className="col-span-1 row-span-1 pt-2">
            <a
              key={item.link}
              className="text-white text-opacity-80 gap-x-2 flex items-center  rounded-3xl hover:bg-white hover:bg-opacity-10 transition-colors ease-in-out duration-50"
              href={item.link}
              target={item.target}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="text-main-1"
              >
                <path d={item.path} fill="currentColor"></path>
              </svg>
              {item.title}
            </a>
          </div>
        ))}
      </div>
      {/* Hamgerburger Menu */}
    </div>
  );
};

export default LargeNavigation;
