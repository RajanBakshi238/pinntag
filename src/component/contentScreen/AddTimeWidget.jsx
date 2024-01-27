import { Add } from "@mui/icons-material";
import classNames from "classnames";
import React from "react";

const AddTimeWidget = ({ date }) => {
  return (
    <div className="mb-3">
      <div
        className={classNames({
          "": true,
          "bg-[#0000000d] p-3 rounded-lg": !!date,
        })}
      >
        {date && (
          <h1 className="text-black text-base font-semibold mb-3">{date}</h1>
        )}
        <div className="flex gap-2 justify-between w-full">
          <div className="w-[40%]">
            <input
              type="time"
              className={classNames({
                "py-2 px-5 rounded-md text-base w-full text-black": true,
                "bg-[#0000000d]": !date,
              })}
              value="15:00"
            />
          </div>
          <span>-</span>
          <div className="w-[40%]">
            <input
              type="time"
              className={classNames({
                "py-2 px-5 rounded-md text-base w-full text-black": true,
                "bg-[#0000000d]": !date,
              })}
              value="18:00"
            />
          </div>
        </div>
        <div className="w-full text-center mt-3 rounded-lg p-2 bg-[#ffff0036] text-[#e8e51a] font-semibold cursor-pointer">
          <Add className="!text-[#e8e51a] mr-3" />
          Add Interval
        </div>
      </div>
    </div>
  );
};

export default AddTimeWidget;
