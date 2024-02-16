import React from "react";
import SecondaryButton from "../../../common/FormElements/Button/SecondaryButton";
import { DEC } from "../../../utils/constants/commonConstants";
import PrimaryButton from "../../../common/FormElements/Button/PrimaryButton";
import CheckBox from "../../../common/FormElements/CheckBox/CheckBox";

const Step6 = ({
  handleStep,
  handleClose,
  id,
  currentStep,
  fetchAllEvents,
  eventData,
}) => {
  return (
    <div className="flex flex-col h-full">
      <div>
        <h1 className="font-bold text-base mt-2">
          Your content will be published to PinnTag{" "}
        </h1>
        <h1 className="font-bold text-base mt-2">
          Would you like to post your content to your social media accounts ?
        </h1>
        <h1 className="font-semibold text-[#888] text-base mt-2">
          Please select additional platforms to post this content :
        </h1>

        <div className="mt-4">
          <div className="mb-3">
            <CheckBox label="Facebook" name="facebook" />
          </div>
          <div className="mb-3">
            <CheckBox label="Instagram" name="instagram" />
          </div>
          <div className="mb-3">
            <CheckBox label="LinkedIn" name="linkedin" />
          </div>
          <div className="mb-3">
            <CheckBox
              label="Snapchat"
              name="snapchat"
            />
          </div>
          <div className="mb-3">
            <CheckBox
              label="X"
              name="twitter"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-auto pb-3">
        <div>
          {currentStep === 1 ? (
            <SecondaryButton onClick={() => handleClose()}>
              <>Cancel</>
            </SecondaryButton>
          ) : (
            <SecondaryButton onClick={() => handleStep(DEC)}>
              <>Skip</>
            </SecondaryButton>
          )}
        </div>
        <div>
          {/* handleStep(INC) */}
          <PrimaryButton
            // loading={loading}
            inputClass={"min-w-[100px]"}
            onClick={() => {
              //   formik.handleSubmit();
            }}
          >
            <span>Publish</span>
            {/* <ChevronRightIcon className="!text-white" /> */}
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Step6;
