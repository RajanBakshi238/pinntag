import React from "react";
import Text from "../../common/Text";
import {
  Add,
  CalendarMonth,
  FilterAlt,
  MenuOutlined,
} from "@mui/icons-material";
import CardView from "../../component/contentScreen/CardView";
import ListView from "../../component/contentScreen/ListView";

const Content = () => {
  return (
    <div className="">
      <div className=" flex w-full relative justify-between mob:gap-[10px] mob:flex-col mob:px-[10px] pl-[80px] pt-[30px] pr-[160px]">
        <div className="flex items-center gap-3">
          <Text className="text-[24px] mob:text-[16px] font-bold">Content</Text>
          <MenuOutlined className="text-[#45818E]" />
        </div>
        <div className="flex text-[#45818E] items-center">
          <Text className="pr-2 border-r-2 border-black">View List</Text>
          <Text className="pr-2 ">
            <CalendarMonth /> View Calender
          </Text>
        </div>
        <div className="flex items-center mob:absolute mob:right-[10px] mob:bottom-0 mob:ml-auto">
          <FilterAlt className="text-[#45818E]" />
          <label className="flex px-3 py-2 cursor-pointer rounded-lg bg-[#45818E] text-white w-fit">
            <Add className="!text-white" />
            Add
          </label>
        </div>
      </div>
      <CardView />
      {/* <ListView /> */}
    </div>
  );
};

export default Content;
