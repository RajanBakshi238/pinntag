import React from "react";
import Text from "../../common/Text";
import { Add } from "@mui/icons-material";

const ImageGalleryHeader = () => {
  return (
    <div className="my-4 mx-12">
      <div className="flex justify-between items-center">
        <div>
          <Text className="text-[24px] mob:text-[16px] font-bold">
            Image Gallery
          </Text>
        </div>

        <div className="flex justify-between items-center gap-3">
          <div>
            <Text className="text-[18px] text-[#45818E] mob:text-[16px] font-bold">
              Drag & Drop images here or
            </Text>
          </div>
          <div>
            {/* @tobe make it common button */}
            <div className="bg-[#45818E] text-white cursor-pointer px-3 py-0.5 rounded-md flex justify-center items-center gap-1">
              <Add className="!text-white" />
              <span>Upload Image</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGalleryHeader;
