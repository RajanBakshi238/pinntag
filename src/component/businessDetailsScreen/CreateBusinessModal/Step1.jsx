import React, { useState } from "react";
import ImageIcon from "@mui/icons-material/Image";

import { ErrorMessage, useFormikContext } from "formik";

import SecondaryButton from "../../../common/FormElements/Button/SecondaryButton";
import { DEC, INC } from "../../../utils/constants/commonConstants";
import PrimaryButton from "../../../common/FormElements/Button/PrimaryButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import PhoneInput from "react-phone-input-2";

const Step1 = ({ handleStep, handleClose }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const { values, handleChange, handleBlur, setFieldValue, setTouched, touched } =
    useFormikContext();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        setFieldValue("businessImage", file);
        setFieldValue("profilePhoto", URL.createObjectURL(file));
      }
    }
  };

  const handleRemoveImage = () => {
    setFieldValue("businessImage", "");
    setFieldValue("profilePhoto", "");
  };

  return (
    <div>
      <h1 className="mb-3 text-lg font-semibold text-center">
        Add Business | Details
      </h1>
      <div className="">
        <div className="mb-3">
          <h1 className="text-base font-semibold mb-1">Subscription type</h1>
          <label className="themeSwitcherThree relative inline-flex cursor-pointer select-none items-center">
            <input
              type="checkbox"
              name="subscriptionType"
              checked={values.subscriptionType}
              onChange={(e) =>
                setFieldValue("subscriptionType", e.target.checked)
              }
              className="sr-only"
            />

            <div className="shadow-card flex h-[39px] w-auto items-center border border-black justify-center rounded-md bg-white">
              <span
                className={`flex h-[36px] w-20 items-center justify-center rounded ${
                  !values.subscriptionType
                    ? "bg-primary text-white"
                    : "text-body-color"
                }`}
              >
                Yearly
              </span>
              <span
                className={`flex h-[36px] w-20 items-center justify-center rounded ${
                  values.subscriptionType
                    ? "bg-primary text-white"
                    : "text-body-color"
                }`}
              >
                Monthly
              </span>
            </div>
          </label>
        </div>
        <div className="mb-3">
          <select
            className="secondary-select w-full"
            name="type"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.type}
          >
            <option>Type [Business / Non-Profit]</option>
            <option value={"business_event"}>Business</option>
            <option value={"social_event"}>Non-Profit</option>
          </select>
        </div>
        <div className="mb-3">
          <h1 className="text-base font-semibold">Image</h1>
          {values.businessImage ? (
            <div className="relative w-fit">
              <HighlightOffOutlinedIcon
                onClick={() => handleRemoveImage()}
                className="cursor-pointer absolute right-[-10px] top-[-12px] !text-white text-xl rounded-full font-extrabold !bg-black "
              />
              <label className="w-32 h-20 flex justify-center items-center border-2 border-black rounded-md text-sm font-semibold">
                <img
                  className="w-full h-full"
                  src={values.profilePhoto}
                  alt="img"
                />
              </label>
            </div>
          ) : (
            <label
              htmlFor="businessImage"
              className="mt-3 cursor-pointer bg-[rgba(223,223,223,0.86)] text-[#45818E] w-32 h-20 flex flex-col justify-center items-center  rounded-md text-sm font-semibold"
            >
              <ImageIcon className="text-[#666] !w-10 !h-10" />
              <span>Add Image</span>
            </label>
          )}
          <input
            id="businessImage"
            type="file"
            name="businessImage"
            className="hidden"
            onChange={handleImageUpload}
            onBlur={handleBlur}
          />
          <span className="font-semibold pl-1 text-sm text-red-600">
            <ErrorMessage name="businessImage" />
          </span>
        </div>
        <div className="mb-3">
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Business Name"
            name="name"
            value={values.name}
            className="common-input"
          />
          <span className="font-semibold pl-1 text-sm text-red-600">
            <ErrorMessage name="name" />
          </span>
        </div>
        <div className="mb-3">
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            type="email"
            placeholder="Email"
            name="email"
            value={values.email}
            className="common-input"
          />
          <span className="font-semibold pl-1 text-sm text-red-600">
            <ErrorMessage name="email" />
          </span>
        </div>
        <div className="mb-3">
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Website"
            name="website"
            value={values.website}
            className="common-input"
          />
          <span className="font-semibold pl-1 text-sm text-red-600">
            <ErrorMessage name="website" />
          </span>
        </div>
        <div className="mb-3">
          <PhoneInput
            country={"us"}
            value={values.countryCode + "" + values.phone}
            inputClass="!w-full"
            name="phone"
            //   containerClass="common-input !border"
            onChange={(value, data) => {
              setFieldValue("countryCode", `${data.dialCode}`);
              setFieldValue("phone", value.slice(data.dialCode.length) * 1);
            }}
            onBlur={handleBlur}
          />
          <span className="font-semibold pl-1 text-sm text-red-600">
            <ErrorMessage name="phone" />
          </span>
        </div>
        <div className="mb-3">
          <textarea
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Description"
            className="common-textarea"
            rows={3}
            value={values?.bio}
            // value={values?.description}
            // onBlur={handleBlur}
            name="bio"
            // onChange={handleChange}
          />
          <span className="font-semibold pl-1 text-sm text-red-600">
            <ErrorMessage name="bio" />
          </span>
        </div>
        {/* <div className="mb-3">
          <select className="secondary-select w-full" name="type">
            <option>Category</option>
            <option value={"business_event"}>Category 1</option>
            <option value={"social_event"}>Category 2</option>
          </select>
        </div> */}
      </div>
      <div className="flex justify-between items-center mt-auto pb-3">
        <div>
          {true ? (
            <SecondaryButton onClick={() => handleClose()}>
              <>Cancel</>
            </SecondaryButton>
          ) : (
            <SecondaryButton onClick={() => handleStep(DEC)}>
              <>Back</>
            </SecondaryButton>
          )}
        </div>
        <div>
          {/* handleStep(INC) */}
          <PrimaryButton
            // loading={loading}
            inputClass={"min-w-[100px]"}
            onClick={() => {
              setTouched({
                ...touched,
                name: true,
                bio: true,
                businessImage: true,
                email: true,
                website: true,
                phone: true
              });
              handleStep(INC);
            }}
            // onClick={formik.handleSubmit}
          >
            <span>Next</span>
            <ChevronRightIcon className="!text-white" />
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Step1;
