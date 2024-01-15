import React from "react";
import Image from "../image";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const BusinessTable = () => {
  return (
    <div class="flex flex-col mx-12">
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
                    NAME
                  </th>
                  <th scope="col" class=" px-6 py-2 text-white">
                    TYPE
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
                <tr class="border-2 border-[#000000]">
                  <td class="whitespace-nowrap flex justify-center  px-2 py-2">
                    <Image
                      src={
                        "https://github.com/ImageGlass/sample-images/blob/master/Samples/JPG/auto_rotate.jpg?raw=true"
                      }
                      className={"w-7 h-7 rounded-3xl"}
                      alt={"test_image"}
                    />
                  </td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2 underline">Robin Seth</td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2">Admin</td>
                  <td class="whitespace-nowrap  px-6 py-2"><EditIcon className="text-white rounded-2xl bg-black " /></td>
                  <td class="whitespace-nowrap  px-6 py-2"><DeleteIcon className="text-white rounded-2xl bg-black "/></td>
                </tr>
                <tr class="border-2 border-[#000000]">
                  <td class="whitespace-nowrap flex justify-center px-2 py-2">
                    <Image
                      src={
                        "https://github.com/ImageGlass/sample-images/blob/master/Samples/JPG/auto_rotate.jpg?raw=true"
                      }
                      className={"w-7 h-7 rounded-3xl"}
                      alt={"test_image"}
                    />
                  </td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2 underline">Donna Tellam</td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2">Editor</td>
                  <td class="whitespace-nowrap  px-6 py-2"><EditIcon className="text-white rounded-2xl bg-black "/></td>
                  <td class="whitespace-nowrap  px-6 py-2"><DeleteIcon className="text-white rounded-2xl bg-black "/></td>
                </tr>
                <tr class="border-2 border-[#000000]">
                  <td class="whitespace-nowrap flex justify-center px-2 py-2">
                    <Image
                      src={
                        "https://github.com/ImageGlass/sample-images/blob/master/Samples/JPG/auto_rotate.jpg?raw=true"
                      }
                      className={"w-7 h-7 rounded-3xl"}
                      alt={"test_image"}
                    />
                  </td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2 underline">Donna Tellam</td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2">Editor</td>
                  <td class="whitespace-nowrap  px-6 py-2"><EditIcon className="text-white rounded-2xl bg-black " /></td>
                  <td class="whitespace-nowrap  px-6 py-2"><DeleteIcon className="text-white rounded-2xl bg-black "/></td>
                </tr>
                <tr class="border-2 border-[#000000]">
                  <td class="whitespace-nowrap flex justify-center px-2 py-2">
                    <Image
                      src={
                        "https://github.com/ImageGlass/sample-images/blob/master/Samples/JPG/auto_rotate.jpg?raw=true"
                      }
                      className={"w-7 h-7 rounded-3xl"}
                      alt={"test_image"}
                    />
                  </td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2 underline">Donna Tellam</td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2">Editor</td>
                  <td class="whitespace-nowrap  px-6 py-2"><EditIcon className="text-white rounded-2xl bg-black " /></td>
                  <td class="whitespace-nowrap  px-6 py-2"><DeleteIcon className="text-white rounded-2xl bg-black " /></td>
                </tr>
                <tr class="">
                  <td class="whitespace-nowrap flex justify-center px-2 py-2">
                    <Image
                      src={
                        "https://github.com/ImageGlass/sample-images/blob/master/Samples/JPG/auto_rotate.jpg?raw=true"
                      }
                      className={"w-7 h-7 rounded-3xl"}
                      alt={"test_image"}
                    />
                  </td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2 underline">John Smith</td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2">Editor</td>
                  <td class="whitespace-nowrap  px-6 py-2"><EditIcon className="text-white rounded-2xl bg-black " /></td>
                  <td class="whitespace-nowrap  px-6 py-2"><DeleteIcon className="text-white rounded-2xl bg-black " /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessTable;
