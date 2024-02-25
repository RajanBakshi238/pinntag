import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";


import PrimaryModalHeader from "../../../common/UiElements/PrimaryModalHeader";
import SecondaryButton from "../../../common/FormElements/Button/SecondaryButton";
import { DEC, INC } from "../../../utils/constants/commonConstants";
import PrimaryButton from "../../../common/FormElements/Button/PrimaryButton";
import { useFormikContext } from "formik";

const Step4 = ({ handleStep, handleClose, subscriptionData }) => {
  
  const {values} = useFormikContext() 
  
  return (
    <div>
      <PrimaryModalHeader inputClass="!mb-2">
        <>Add Business | Payment</>
      </PrimaryModalHeader>
      <p className="text-sm mb-3">
        Your credit card will be billed{" "}
        <span className="font-bold">${subscriptionData?.price * values?.locations?.length } every year </span> on the first day of
        the month. Note that you can cancel at any time and the pro-rated amount
        will be refunded to your account.
      </p>
      <div>
        <div className="flex justify-between">
          <h1 className="text-base font-semibold ">Payment Method</h1>
        </div>
        <div className="mt-2 py-3 px-2 bg-[#0000000d] rounded-md">
          <div className="">
            <div className="mb-2">
              <select
                className="secondary-select w-full !border !text-base !p-[6px] "
                name="type"
              >
                <option>Card Type</option>
                <option value={"business_event"}>Facebook</option>
                <option value={"social_event"}>Linked In</option>
              </select>
            </div>
            <div className="mb-2">
              <input
                placeholder="Credit card number"
                className="common-input !border"
              />
            </div>
            <div className="mb-2">
              <input
                placeholder="Expiration Date"
                className="common-input !border"
              />
            </div>
            <div className="">
              <input
                placeholder="CVV / Security Code"
                className="common-input !border"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-3">
        <div>
          {false ? (
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
            onClick={() => handleClose()}
            // onClick={formik.handleSubmit}
          >
            <span>Save</span>
            <ChevronRightIcon className="!text-white" />
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Step4;
