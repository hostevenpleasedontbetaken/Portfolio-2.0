import React, { useState, useEffect } from "react";
import "./SmallNavigationBot.css";

const SmallNavigationBot = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="bg-mac-2 w-full h-[3rem] flex items-center rounded-b-xl ">
      <div className="grid grid-cols-5 w-full text-light-2">
        <div className="col-span-1 justify-center flex items-center">
          <svg
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="rounded-full hover:bg-white hover:bg-opacity-10 transition-all ease-in-out duration-50"
          >
            <path
              d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z"
              fill-rule="nonzero"
            />
          </svg>
        </div>
        <div className="col-span-1 justify-center flex items-center">
          <svg
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="rounded-full hover:bg-white hover:bg-opacity-10 transition-all ease-in-out duration-50"
          >
            <path
              d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z"
              fill-rule="nonzero"
            />
          </svg>
        </div>
        <div className="col-span-2 "></div>
        <div
          className="col-span-1  justify-center flex items-center"
          class="burger-icon"
        >
          <label class="burger" for="burger">
            <input class="line" type="checkbox" id="burger" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default SmallNavigationBot;
