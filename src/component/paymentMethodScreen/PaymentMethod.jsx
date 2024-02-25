import React from "react";
import EditIcon from "@mui/icons-material/Edit";

const PaymentMethodsTable = () => {
  return (
    <div>
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full text-center text-sm font-light border-2 border-[#000000]">
              <thead class=" bg-black text-white font-medium  dark:text-neutral-800">
                <tr>
                  <th scope="col" class=" px-2 py-2 text-white">
                    CREDIT CARD
                  </th>
                  <th scope="col" class=" px-6 py-2 text-white">
                    ASSOCIATED BUSINESS NAME
                  </th>
                  <th scope="col" class=" px-6 py-2 text-white">
                    NAME ON CARD
                  </th>
                  <th scope="col" class=" px-6 py-2 text-white">
                    EXPIRATION
                  </th>
                  {/* <th scope="col" class=" px-6 py-2 text-white">
                      EDIT
                    </th> */}
                  <th scope="col" class=" px-6 py-2 text-white">
                    EDIT
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-2 border-[#000000]">
                  <td class="whitespace-nowrap flex font-semibold justify-center  px-2 py-2">
                    Ending in 0432
                  </td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2 underline">
                    The Golden Buff
                  </td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2">
                    Donna Tellam
                  </td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2">
                    08/27
                  </td>
                  <td
                    class="whitespace-nowrap font-semibold px-6 py-2"
                    onClick={() => {}}
                  >
                    <EditIcon className="text-white rounded-2xl bg-black cursor-pointer" />
                  </td>
                </tr>
                <tr class="border-2 border-[#000000]">
                  <td class="whitespace-nowrap font-semibold flex justify-center  px-2 py-2">
                    Ending in 7888
                  </td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2 underline">
                    The Golden Buff
                  </td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2">
                    Donna Tellam
                  </td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2 text-red-700">
                    Expired!
                  </td>

                  <td
                    class="whitespace-nowrap font-semibold  px-6 py-2"
                    onClick={() => {}}
                  >
                    <EditIcon className="text-white rounded-2xl bg-black cursor-pointer" />
                  </td>
                </tr>
                <tr class="border-2 border-[#000000]">
                  <td class="whitespace-nowrap font-semibold flex justify-center  px-2 py-2">
                    Ending in 9889
                  </td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2 underline">
                    Mike's Camera
                  </td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2">
                    Donna Tellam
                  </td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2">
                    06/25
                  </td>

                  <td
                    class="whitespace-nowrap font-semibold px-6 py-2"
                    onClick={() => {}}
                  >
                    <EditIcon className="text-white rounded-2xl bg-black cursor-pointer" />
                  </td>
                </tr>
                <tr class="border-2 border-[#000000]">
                  <td class="whitespace-nowrap flex font-semibold justify-center  px-2 py-2">
                    Ending in 0222
                  </td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2 underline">
                    Sister's Carmen's Food Pantry
                  </td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2">
                    Donna Tellam
                  </td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2">
                    05/27
                  </td>

                  <td
                    class="whitespace-nowrap font-semibold px-6 py-2"
                    onClick={() => {}}
                  >
                    <EditIcon className="text-white rounded-2xl bg-black cursor-pointer" />
                  </td>
                </tr>
                <tr class="border-2 border-[#000000]">
                  <td class="whitespace-nowrap flex font-semibold justify-center  px-2 py-2">
                    Ending in 0477
                  </td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2 underline">
                    Boulder Bakery
                  </td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2">
                    Donna Tellam
                  </td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2">
                    Yearly
                  </td>

                  <td
                    class="whitespace-nowrap font-semibold  px-6 py-2"
                    onClick={() => {}}
                  >
                    <EditIcon className="text-white rounded-2xl bg-black cursor-pointer" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodsTable;
