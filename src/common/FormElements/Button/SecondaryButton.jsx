import React from "react";

const SecondaryButton = ({ children }) => {
  return (
    <div className="bg-white text-[#45818E] border-2 border-[#45818E] cursor-pointer px-3 py-0.5 rounded-md flex justify-center items-center gap-1">
      {children}
    </div>
  );
};

export default SecondaryButton;
