import React from "react";
import Image from "../image";
import DeleteOutline from "@mui/icons-material/DeleteOutline";

const ImageGalleryGrid = ({ deleteImage, data }) => {
  return (
    <div className="mx-12">
      <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {data?.map(({ url, _id }, index) => {
          return (
            <div className="relative" key={index}>
              <DeleteOutline
                className="text-white rounded-2xl bg-black absolute top-2 right-2 cursor-pointer"
                onClick={() => deleteImage(_id)}
              />
              <Image
                src={url}
                className={
                  "border-2 rounded-lg h-36 lg:h-40 border-black  w-full"
                }
                alt={"test_image"}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageGalleryGrid;
