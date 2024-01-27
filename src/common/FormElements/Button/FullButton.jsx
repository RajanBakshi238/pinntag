import React from "react";
import classNames from "classnames";

const FullButton = ({ children, onClick, inputClass }) => {
  return (
    <div
      onClick={onClick}
      className={classNames([
        inputClass,
        "w-full text-center mt-3 rounded-lg p-2 font-semibold cursor-pointer",
      ])}
    >
      {children}
    </div>
  );
};

export default FullButton;
