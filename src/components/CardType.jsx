import React from "react";

const CardType = ({ children }) => {
  return (
    <div className="w-full h-full p-1 rounded-xl bg-dark-1/20 flex items-center justify-center border border-dark-1 text-[.75rem]">
      {children}
    </div>
  );
};

export default CardType;
