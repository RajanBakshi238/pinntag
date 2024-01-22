import React, { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import PrimaryModal from "../../common/Modal/PrimaryModal";
import StepWizard from "./StepWizard";

import Step1 from "./Steps/Step1"
import Step2 from "./Steps/Step2";
import SecondaryButton from "../../common/FormElements/Button/SecondaryButton";
import PrimaryButton from "../../common/FormElements/Button/PrimaryButton";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";

const INC = "inc"
const DEC = "dec"

const CreateContent = ({ open, handleClose }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const handeStep = (type) => {
    if(currentStep === 4 && type === INC){
      return
    }
    if (type === INC) {
      setCurrentStep((prev) => prev + 1)
    } else if (type === DEC) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  return (
    <PrimaryModal open={open} handleClose={handleClose}>
      <div className="pb-4">
        <h1 className="text-center font-medium text-xl">Create Content</h1>
      </div>
      <div className="mb-3">
        <StepWizard step={currentStep} />
      </div>

      {
        currentStep === 1 ?
          <Step1 /> :
          currentStep === 2 ?
            <Step2 /> :
            currentStep === 3 ?
              <Step3 /> :
              currentStep === 4 ?
                <Step4 /> : <></>
      }

      <div className="mt-6 flex justify-between items-center">
        <div>
          {currentStep === 1 ?
            <SecondaryButton>
              <>Cancel</>
            </SecondaryButton> : <SecondaryButton onClick={() => handeStep(DEC)}>
              <>Back</>
            </SecondaryButton>
          }

        </div>
        <div>
          <PrimaryButton onClick={() => handeStep(INC)}>
            <span>Next</span>
            <ChevronRightIcon className="!text-white" />
          </PrimaryButton>
        </div>
      </div>

    </PrimaryModal>
  );
};

export default CreateContent;
