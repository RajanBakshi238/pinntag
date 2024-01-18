import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <div className="bg-[#45818E] text-white cursor-pointer px-3 py-0.5 rounded-md flex justify-center items-center gap-1">
      {children}
    </div>
  );
};

export default PrimaryButton;
