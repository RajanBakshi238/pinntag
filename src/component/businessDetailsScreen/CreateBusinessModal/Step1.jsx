import React from "react";
import ImageIcon from "@mui/icons-material/Image";
import SecondaryButton from "../../../common/FormElements/Button/SecondaryButton";
import { DEC } from "../../../utils/constants/commonConstants";
import PrimaryButton from "../../../common/FormElements/Button/PrimaryButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Step1 = ({ handleStep, handleClose }) => {
  return (
    <div>
      <h1 className="mb-3 text-lg font-semibold text-center">
        Add Business | Details
      </h1>
      <div className="">
        <div className="mb-3">
          <select className="secondary-select w-full" name="type">
            <option>Type [Business / Non-Profit]</option>
            <option value={"business_event"}>Business</option>
            <option value={"social_event"}>Non-Profit</option>
          </select>
        </div>
        <div className="mb-3">
          <h1 className="text-base font-semibold">Image</h1>
          <label
            htmlFor="image"
            className="mt-3 cursor-pointer bg-[rgba(223,223,223,0.86)] text-[#45818E] w-32 h-20 flex flex-col justify-center items-center  rounded-md text-sm font-semibold"
          >
            <ImageIcon className="text-[#666] !w-10 !h-10" />
            <span>Add Image</span>
          </label>
        </div>
        <div className="mb-3">
          <input
            placeholder="Business Name"
            name="title"
            className="common-input"
          />
        </div>
        <div className="mb-3">
          <textarea
            placeholder="Description"
            className="common-textarea"
            rows={3}
            // value={values?.description}
            // onBlur={handleBlur}
            name="description"
            // onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <select className="secondary-select w-full" name="type">
            <option>Category</option>
            <option value={"business_event"}>Category 1</option>
            <option value={"social_event"}>Category 2</option>
          </select>
        </div>
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
