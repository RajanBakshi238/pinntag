import React from "react";
import Image from "../image";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import pizza from "./../../assets/img/picture.png"
import picture from "./../../assets/img/picture (1).png"
import picture1 from "./../../assets/img/picture (2).png"
import picture2 from "./../../assets/img/picture (3).png"


const ImageGalleryGrid = () => {
  return (
    <div className="mx-12">
      <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        <div className="relative">
          <DeleteOutline className="text-white rounded-2xl bg-black absolute top-2 right-2" />
          <Image
            src={pizza}
            className={"border-2 rounded-lg h-36 lg:h-40 border-black  w-full"}
            alt={"test_image"}
          />
        </div>
        <div className="relative">
          <DeleteOutline className="text-white rounded-2xl bg-black absolute top-2 right-2" />
          <Image
            src={picture}
            className={"border-2 rounded-lg h-36 lg:h-40 border-black  w-full"}
            alt={"test_image"}
          />
        </div>
        <div className="relative">
          <DeleteOutline className="text-white rounded-2xl bg-black absolute top-2 right-2" />
          <Image
            src={picture1}
            className={"border-2 rounded-lg h-36 lg:h-40 border-black  w-full"}
            alt={"test_image"}
          />
        </div>
        <div className="relative">
          <DeleteOutline className="text-white rounded-2xl bg-black absolute top-2 right-2" />
          <Image
            src={picture2}
            className={"border-2 rounded-lg h-36 lg:h-40 border-black  w-full"}
            alt={"test_image"}
          />
        </div>
        <div className="relative">
          <DeleteOutline className="text-white rounded-2xl bg-black absolute top-2 right-2" />
          <Image
            src={picture1}
            className={"border-2 rounded-lg h-36 lg:h-40 border-black  w-full"}
            alt={"test_image"}
          />
        </div>
        <div className="relative">
          <DeleteOutline className="text-white rounded-2xl bg-black absolute top-2 right-2" />
          <Image
            src={pizza}
            className={"border-2 rounded-lg h-36 lg:h-40 border-black  w-full"}
            alt={"test_image"}
          />
        </div>
        <div className="relative">
          <DeleteOutline className="text-white rounded-2xl bg-black absolute top-2 right-2" />
          <Image
            src={picture2}
            className={"border-2 rounded-lg h-36 lg:h-40 border-black  w-full"}
            alt={"test_image"}
          />
        </div>
        <div className="relative">
          <DeleteOutline className="text-white rounded-2xl bg-black absolute top-2 right-2" />
          <Image
            src={picture1}
            className={"border-2 rounded-lg h-36 lg:h-40 border-black  w-full"}
            alt={"test_image"}
          />
        </div>
        <div className="relative">
          <DeleteOutline className="text-white rounded-2xl bg-black absolute top-2 right-2" />
          <Image
            src={picture}
            className={"border-2 rounded-lg h-36 lg:h-40 border-black  w-full"}
            alt={"test_image"}
          />
        </div>
        <div className="relative">
          <DeleteOutline className="text-white rounded-2xl bg-black absolute top-2 right-2" />
          <Image
            src={picture2}
            className={"border-2 rounded-lg h-36 lg:h-40 border-black  w-full"}
            alt={"test_image"}
          />
        </div>
        <div className="relative">
          <DeleteOutline className="text-white rounded-2xl bg-black absolute top-2 right-2" />
          <Image
            src={pizza}
            className={"border-2 rounded-lg h-36 lg:h-40 border-black  w-full"}
            alt={"test_image"}
          />
        </div>
        <div className="relative">
          <DeleteOutline className="text-white rounded-2xl bg-black absolute top-2 right-2" />
          <Image
            src={picture2}
            className={"border-2 rounded-lg h-36 lg:h-40 border-black  w-full"}
            alt={"test_image"}
          />
        </div>
        <div className="relative">
          <DeleteOutline className="text-white rounded-2xl bg-black absolute top-2 right-2" />
          <Image
            src={picture1}
            className={"border-2 rounded-lg h-36 lg:h-40 border-black  w-full"}
            alt={"test_image"}
          />
        </div>
        <div className="relative">
          <DeleteOutline className="text-white rounded-2xl bg-black absolute top-2 right-2" />
          <Image
            src={pizza}
            className={"border-2 rounded-lg h-36 lg:h-40 border-black  w-full"}
            alt={"test_image"}
          />
        </div>
        <div className="relative">
          <DeleteOutline className="text-white rounded-2xl bg-black absolute top-2 right-2" />
          <Image
            src={picture2}
            className={"border-2 rounded-lg h-36 lg:h-40 border-black  w-full"}
            alt={"test_image"}
          />
        </div>
        <div className="relative">
          <DeleteOutline className="text-white rounded-2xl bg-black absolute top-2 right-2" />
          <Image
            src={picture1}
            className={"border-2 rounded-lg h-36 lg:h-40 border-black  w-full"}
            alt={"test_image"}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGalleryGrid;
