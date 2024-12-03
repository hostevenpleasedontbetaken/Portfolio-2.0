import React from "react";

const SmallNavigationTop = () => {
  return (
    <div className="bg-mac-2 w-full h-[3rem] flex items-center justify-center  rounded-t-xl border-b-mac-1 border-b-[0.1rem]">
      <div className="w-[90%] h-[2rem] p-2 rounded-xl bg-dark-2 bg-opacity-80 flex items-center justify-end text-light-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="rounded-full hover:text-white hover:bg-opacity-10 transition-all ease-in-out duration-50"
        >
          <path d="M13.5 2c-5.288 0-9.649 3.914-10.377 9h-3.123l4 5.917 4-5.917h-2.847c.711-3.972 4.174-7 8.347-7 4.687 0 8.5 3.813 8.5 8.5s-3.813 8.5-8.5 8.5c-3.015 0-5.662-1.583-7.171-3.957l-1.2 1.775c1.916 2.536 4.948 4.182 8.371 4.182 5.797 0 10.5-4.702 10.5-10.5s-4.703-10.5-10.5-10.5z" />
        </svg>
      </div>
    </div>
  );
};

export default SmallNavigationTop;
