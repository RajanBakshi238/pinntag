import React from "react";
import classNames from "classnames";

const PrimaryButton = ({ children, onClick, inputClass }) => {
  return (
    <div onClick={onClick} className={classNames(["bg-[#45818E] text-white cursor-pointer px-3 py-0.5 rounded-md flex justify-center items-center gap-1", inputClass])}>
      {children}
    </div>
  );
};

export default PrimaryButton;
