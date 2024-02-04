import React from "react";
import Image from "../image";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ListView = ({ handleOpen, data }) => {
  return (
    <>
      <div class="flex flex-col mx-12">
        {data ? (
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full text-center text-sm font-light border-2 border-[#000000]">
                  <thead class=" bg-black text-white font-medium  dark:text-neutral-800">
                    <tr>
                      <th scope="col" class=" px-2 py-2 text-white">
                        IMAGE
                      </th>
                      <th scope="col" class=" px-6 py-2 text-white">
                        TITLE
                      </th>
                      <th scope="col" class=" px-6 py-2 text-white">
                        TYPE
                      </th>
                      <th scope="col" class=" px-6 py-2 text-white">
                        STATUS
                      </th>
                      <th scope="col" class=" px-6 py-2 text-white">
                        EDIT
                      </th>
                      <th scope="col" class=" px-6 py-2 text-white">
                        DELETE
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((item) => {
                      return (
                        <tr class="border-2 border-[#000000]">
                          <td class="whitespace-nowrap flex justify-center  px-2 py-2">
                            <Image
                              src={
                                item.images[0]?.url ??
                                "https://www.photoshopessentials.com/newsite/wp-content/uploads/2018/08/resize-images-print-photoshop-f.jpg"
                              }
                              className={"w-7 h-7 rounded-3xl"}
                              alt={"test_image"}
                            />
                          </td>
                          <td class="whitespace-nowrap font-semibold px-6 py-2 underline">
                            {item.title}
                          </td>
                          <td class="whitespace-nowrap font-semibold px-6 capitalize py-2">
                            {item.type}
                          </td>
                          <td class="whitespace-nowrap font-semibold px-6 py-2">
                            {item.status}
                          </td>
                          <td class="whitespace-nowrap  px-6 py-2">
                            <EditIcon
                              onClick={handleOpen}
                              className="cursor-pointer text-white rounded-2xl bg-black "
                            />
                          </td>
                          <td class="whitespace-nowrap  px-6 py-2">
                            <DeleteIcon className="text-white rounded-2xl bg-black " />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="mt-10 text-center text-[#666] font-semibold text-lg">
              <p>No Events created yet!</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ListView;
