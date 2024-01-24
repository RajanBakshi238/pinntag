import React from "react";

const Step4 = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-black mb-3 font-bold">Target age groups</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-[#e8e51a] rounded-2xl px-3 py-3 text-center text-white text-sm font-semibold">
            {" "}
            All ages{" "}
          </div>
          <div className="bg-[#DDDDD7] rounded-2xl px-3 py-3 text-center text-[#7C7C72] text-sm font-semibold">
            16 - 19
          </div>
          <div className="bg-[#DDDDD7] rounded-2xl px-3 py-3 text-center text-[#7C7C72] text-sm font-semibold">
            20 - 25{" "}
          </div>
          <div className="bg-[#DDDDD7] rounded-2xl px-3 py-3 text-center text-[#7C7C72] text-sm font-semibold">
            26 - 34{" "}
          </div>
          <div className="bg-[#DDDDD7] rounded-2xl px-3 py-3 text-center text-[#7C7C72] text-sm font-semibold">
            35 - 45{" "}
          </div>
          <div className="bg-[#DDDDD7] rounded-2xl px-3 py-3 text-center text-[#7C7C72] text-sm font-semibold">
            46 - 55{" "}
          </div>
          <div className="bg-[#DDDDD7] rounded-2xl px-3 py-3 text-center text-[#7C7C72] text-sm font-semibold">
            56 - 65{" "}
          </div>
          <div className="bg-[#DDDDD7] rounded-2xl px-3 py-3 text-center text-[#7C7C72] text-sm font-semibold">
            66 - 74
          </div>
          <div className="bg-[#DDDDD7] rounded-2xl px-3 py-3 text-center text-[#7C7C72] text-sm font-semibold">
            {" "}
            75+{" "}
          </div>
        </div>
      </div>

      <hr className="mb-3 text-[#7C7C72]" />

      <div className="mb-6">
        <h1 className="text-black mb-3 font-bold">Target genders</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-[#DDDDD7] rounded-2xl px-3 py-3 text-center text-[#7C7C72] text-sm font-semibold">
            Male
          </div>
          <div className="bg-[#DDDDD7] rounded-2xl px-3 py-3 text-center text-[#7C7C72] text-sm font-semibold">
            Female
          </div>
          <div className="bg-[#DDDDD7] rounded-2xl px-3 py-3 text-center text-[#7C7C72] text-sm font-semibold">
            Other
          </div>
        </div>
      </div>

      <hr className="mb-3 text-[#7C7C72]" />

      <div className="mb-6">
        <div>
          <h1 className="text-black mb-3 font-bold">Promotional Code</h1>
        </div>
        <div>
          <input
            type="text"
            className="model-input placeholder:text-[#7C7C72] placeholder:text-sm !border-[#DDDDD7] "
            placeholder="Enter your promo code here"
          />
        </div>
      </div>

      <hr className="mb-3 text-[#7C7C72]" />

      <div className="mb-6">
        <div>
          <h1 className="text-black mb-3 font-bold">Booking URL</h1>
        </div>
        <div>
          <input
            type="text"
            className="model-input placeholder:text-[#7C7C72] placeholder:text-sm !border-[#DDDDD7] "
            placeholder="https://yourlinkhere.com"
          />
        </div>
      </div>
    </div>
  );
};

export default Step4;
