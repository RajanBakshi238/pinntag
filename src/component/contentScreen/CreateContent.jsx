import React, { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import PrimaryModal from "../../common/Modal/PrimaryModal";
import StepWizard from "./StepWizard";

import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import SecondaryButton from "../../common/FormElements/Button/SecondaryButton";
import PrimaryButton from "../../common/FormElements/Button/PrimaryButton";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";

import "./content.css";

export const INC = "inc";
export const DEC = "dec";

const CreateContent = ({ open, handleClose, fetchAllEvents }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [id, setId] = useState("");
  // 65bbd57c9cef5b960094aa95
  const handleStep = (type) => {
    if (currentStep === 4 && type === INC) {
      return;
    }
    if (type === INC) {
      setCurrentStep((prev) => prev + 1);
    } else if (type === DEC) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <PrimaryModal
      open={open}
      handleClose={handleClose}
      modalClass="w-[380px] sm:w-[500px] md:w-1/2 lg:w-2/5 xl:w-1/3"
    >
      <div className="flex flex-col h-full">
        <div className="pb-4">
          <h1 className="text-center font-medium text-xl">Create Content</h1>
        </div>
        <div className="mb-3">
          <StepWizard step={currentStep-1} />
        </div>

        {currentStep === 1 ? (
          <Step1
            handleStep={handleStep}
            handleClose={handleClose}
            currentStep={currentStep}
            setId={setId}
            fetchAllEvents={fetchAllEvents}
          />
        ) : currentStep === 2 ? (
          <Step2
            handleStep={handleStep}
            handleClose={handleClose}
            currentStep={currentStep}
            id={id}
            fetchAllEvents={fetchAllEvents}
          />
        ) : currentStep === 3 ? (
          <Step3
            handleStep={handleStep}
            handleClose={handleClose}
            currentStep={currentStep}
            id={id}
            fetchAllEvents={fetchAllEvents}
          />
        ) : currentStep === 4 ? (
          <Step4
            handleStep={handleStep}
            handleClose={handleClose}
            currentStep={currentStep}
            id={id}
            fetchAllEvents={fetchAllEvents}
          />
        ) : (
          <></>
        )}

        {/* <div className="flex justify-between items-center mt-auto">
          <div>
            {currentStep === 1 ? (
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
            <PrimaryButton onClick={() => handleStep(INC)}>
              <span>Next</span>
              <ChevronRightIcon className="!text-white" />
            </PrimaryButton>
          </div>
        </div> */}
      </div>
    </PrimaryModal>
  );
};

export default CreateContent;
