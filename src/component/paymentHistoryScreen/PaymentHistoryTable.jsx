import React from "react";

const PaymentHistoryTable = () => {
  return (
    <div>
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full text-center text-sm font-light border-2 border-[#000000]">
              <thead class=" bg-black text-white font-medium  dark:text-neutral-800">
                <tr>
                  <th scope="col" class=" px-2 py-2 text-white">
                    DATE
                  </th>
                  <th scope="col" class=" px-6 py-2 text-white">
                    BUSINESS NAME
                  </th>
                  <th scope="col" class=" px-6 py-2 text-white">
                    LOCATIONS
                  </th>
                  <th scope="col" class=" px-6 py-2 text-white">
                    TERM
                  </th>
                  {/* <th scope="col" class=" px-6 py-2 text-white">
                      EDIT
                    </th> */}
                  <th scope="col" class=" px-6 py-2 text-white">
                    AMOUNT PAID
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-2 border-[#000000]">
                  <td class="whitespace-nowrap flex font-semibold justify-center  px-2 py-2">
                    04/01/2024
                  </td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2 underline">
                    The Golden Buff
                  </td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2">3</td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2">
                    Yearly
                  </td>

                  <td
                    class="whitespace-nowrap font-semibold px-6 py-2"
                    onClick={() => {}}
                  >
                    $10800.00
                  </td>
                </tr>
                <tr class="border-2 border-[#000000]">
                  <td class="whitespace-nowrap font-semibold flex justify-center  px-2 py-2">
                    04/01/2024
                  </td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2 underline">
                    Mike's Camera
                  </td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2">1</td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2">
                    Yearly
                  </td>

                  <td
                    class="whitespace-nowrap font-semibold  px-6 py-2"
                    onClick={() => {}}
                  >
                    $360.00
                  </td>
                </tr>
                <tr class="border-2 border-[#000000]">
                  <td class="whitespace-nowrap font-semibold flex justify-center  px-2 py-2">
                    04/01/2024
                  </td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2 underline">
                    Sister Carmen's Food Pantry
                  </td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2">1</td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2">
                    Monthly
                  </td>

                  <td
                    class="whitespace-nowrap font-semibold px-6 py-2"
                    onClick={() => {}}
                  >
                    $39.99
                  </td>
                </tr>
                <tr class="border-2 border-[#000000]">
                  <td class="whitespace-nowrap flex font-semibold justify-center  px-2 py-2">
                    04/01/2024
                  </td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2 underline">
                    Boulder Bakery
                  </td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2">2</td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2">
                    Yearly
                  </td>

                  <td
                    class="whitespace-nowrap font-semibold px-6 py-2"
                    onClick={() => {}}
                  >
                    $720.00
                  </td>
                </tr>
                <tr class="border-2 border-[#000000]">
                  <td class="whitespace-nowrap flex font-semibold justify-center  px-2 py-2">
                    03/01/2024
                  </td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2 underline">
                    The Golden Buff
                  </td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2">3</td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2">
                    Yearly
                  </td>

                  <td
                    class="whitespace-nowrap font-semibold  px-6 py-2"
                    onClick={() => {}}
                  >
                    $1080.00
                  </td>
                </tr>
                <tr class="border-2 border-[#000000]">
                  <td class="whitespace-nowrap flex font-semibold justify-center  px-2 py-2">
                    03/01/2024
                  </td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2 underline">
                    Mike's Camera
                  </td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2">1</td>
                  <td class="whitespace-nowrap font-semibold px-6 py-2">
                    Yearly
                  </td>

                  <td
                    class="whitespace-nowrap font-semibold px-6 py-2"
                    onClick={() => {}}
                  >
                    $360.00
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

export default PaymentHistoryTable;
