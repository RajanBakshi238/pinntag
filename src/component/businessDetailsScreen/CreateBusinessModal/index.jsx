import React, { useState } from "react";
import PrimaryModal from "../../../common/Modal/PrimaryModal";
import Step1 from "./Step1";
import { INC, DEC } from "./../../../utils/constants/commonConstants";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import { FormikProvider, useFormik } from "formik";
import { postDatatemp } from "../../../utils/api";
import { enqueueSnackbar } from "notistack";
import { formatErrorMessage } from "../../../utils/formatErrorMessage";

const CreateBusinessModal = ({
  open,
  handleClose,
  fetchAllBusinessProfiles,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleCloseModal = () => {
    formik.resetForm();
    setCurrentStep(1);
    handleClose();
  };

  const handleStep = (type) => {
    if (currentStep === 2 && type === INC) {
      return;
    }
    if (type === INC) {
      setCurrentStep((prev) => prev + 1);
    } else if (type === DEC) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      bio: "",
      type: "",
      subscriptionType: false,
      email: "",
      website: "",
      locations: [
        {
          address1: "",
          address2: "",
          city: "",
          state: "",
          zip: "",
          website: "",
          email: "",
          phone: "",
        },
      ],
      businessImage: "",
      profilePhoto: "",
    },
    onSubmit: async (values) => {
      setLoading(true);
      const formData = new FormData();
      formData.append("photo", values.businessImage);

      const photoRes = await postDatatemp("auth/upload/photo", formData);
      if (photoRes.data) {
        enqueueSnackbar(photoRes.data.message ?? "", {
          variant: "success",
        });
        const res = await postDatatemp("business-profile/create", {
          ...values,
          profilePhoto: photoRes.data?.url,
        });
        if (res.data) {
          enqueueSnackbar(photoRes.data.message ?? "", {
            variant: "success",
          });
          fetchAllBusinessProfiles();
          handleCloseModal();
        } else {
          enqueueSnackbar(
            res.error?.message
              ? formatErrorMessage(res.error?.message)
              : "Something went wrong",
            {
              variant: "error",
            }
          );
        }
      } else {
        enqueueSnackbar(
          photoRes.error?.message
            ? formatErrorMessage(photoRes.error?.message)
            : "Something went wrong",
          {
            variant: "error",
          }
        );
      }
      setLoading(false);
    },
  });

  console.log(formik.values, "????? formik Values");

  return (
    <PrimaryModal
      open={open}
      handleClose={handleCloseModal}
      modalClass="w-[380px] sm:w-[500px] md:w-1/2 lg:w-2/5 xl:w-1/3 h-auto"
    >
      <FormikProvider value={formik}>
        <div className="flex flex-col h-full">
          {currentStep === 1 ? (
            <>
              <Step1 handleStep={handleStep} handleClose={handleCloseModal} />
            </>
          ) : currentStep === 2 ? (
            <>
              <Step2
                handleStep={handleStep}
                loading={loading}
                handleClose={handleCloseModal}
              />
            </>
          ) : currentStep === 3 ? (
            <>
              <Step3 handleStep={handleStep} handleClose={handleCloseModal} />
            </>
          ) : currentStep === 4 ? (
            <>
              <Step4 handleStep={handleStep} handleClose={handleCloseModal} />
            </>
          ) : (
            <></>
          )}
        </div>
      </FormikProvider>
    </PrimaryModal>
  );
};

export default CreateBusinessModal;

//tailgrids.com
