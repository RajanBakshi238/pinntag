import React from "react";
import { socialMediaPost } from "../../contentmanagement/sidepanal";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import Image from "../image";
import Text from "../../common/Text";

const CardView = () => {
  return (
    <div className="grid grid-cols-4 mob:grid-cols-2 mob:p-[10px] gap-6 pl-[80px] py-[30px] pr-[160px]">
      {socialMediaPost.map((items) => {
        return (
          <div className="relative flex flex-col items-center justify-center overflow-hidden border border-black rounded-xl">
            <div className="absolute flex justify-between w-full px-3 top-2">
              <div className="bg-[#45818E] text-white  px-2 rounded-md ">
                {items.status}
              </div>
              <div className="flex gap-2">
                <EditOutlined className="p-1 rounded-full !text-white bg-black" />
                <DeleteOutline className="p-1 rounded-full !text-white bg-black" />
              </div>
            </div>
            <div className="flex items-center justify-center w-full bg-cover">
              <Image
                src={items.image}
                className={"max-w-full absolute -z-10 blur-md object-cover"}
                alt={items.discription}
              />
              <Image
                src={items.image}
                className={"max-w-full w-[50%] object-contain"}
                alt={items.discription}
              />
            </div>
            <div className="w-full p-2 bg-black">
              <Text className="font-bold text-white">{items.discription}</Text>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardView;
