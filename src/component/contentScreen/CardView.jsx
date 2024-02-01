import React from "react";
import { socialMediaPost } from "../../contentmanagement/sidepanal";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import Image from "../image";
import Text from "../../common/Text";

const CardView = ({data}) => {
  return (
    <div className="mx-12">
      <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {data?.map((items) => {
          return (
            <div className="relative flex flex-col items-center justify-center overflow-hidden border border-black rounded-xl">
              <div className="absolute flex justify-between w-full px-3 top-2">
                <div className="bg-[#45818E] text-white capitalize  px-2 rounded-md ">
                  {items.status}
                </div>
                <div className="flex gap-2">
                  <EditOutlined className="p-1 rounded-full !text-white bg-black" />
                  <DeleteOutline className="p-1 rounded-full !text-white bg-black" />
                </div>
              </div>
              <div className="flex h-full items-center justify-center w-full bg-cover">
                {/* <Image
                  src={items.images[0]?.url ?? "https://via.placeholder.com/150"}
                  className={"max-w-full absolute -z-10 blur-md object-cover"}
                  alt={"evnt_img"}
                /> */}
                <Image
                  src={items.images[0]?.url ?? "https://via.placeholder.com/150"}
                  className={"max-w-full w-[50%] object-contain"}
                  alt={"evnt_img"}
                />
              </div>
              <div className="w-full p-2 bg-black">
                <Text className="font-bold text-white">
                  {items.description}
                </Text>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardView;
