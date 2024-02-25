import React from "react";
import classNames from "classnames";
import { CircularProgress } from "@mui/material";

const PrimaryButton = ({ children, onClick, inputClass, loading }) => {
  return (
    <div
      onClick={onClick}
      className={classNames([
        inputClass,
        "bg-[#45818E] text-white cursor-pointer px-3 py-0.5 rounded-md flex justify-center items-center gap-1",
        {
          "bg-opacity-65 pointer-events-none": loading,
        },
      ])}
    >
      {loading ? (
        <CircularProgress className="!w-5 !h-5 !text-white" />
      ) : (
        children
      )}
    </div>
  );
};

export default PrimaryButton;
