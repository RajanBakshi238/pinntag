import React, { useState } from "react";
import PrimarySwitch from "../../../common/FormElements/Switch/PrimarySwitch";
import SecondaryButton from "../../../common/FormElements/Button/SecondaryButton";
import PrimaryButton from "../../../common/FormElements/Button/PrimaryButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { DEC, INC } from "../CreateContent";
import { FormikProvider, useFormik } from "formik";
import classNames from "classnames";
import { postData } from "../../../utils/api";
import { enqueueSnackbar } from "notistack";
import { formatErrorMessage } from "../../../utils/formatErrorMessage";

const Step4 = ({ handleStep, handleClose, id, currentStep, fetchAllEvents }) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      ageGroupsAllowed: [],
      targetGenders: [],
      promotionCode: "",
      isFree: "",
      participationCost: 0,
      bookingUrl: "",
      notifyFollowers: true,
      RSVP: true,
      termsAndConditions: "",
    },
    onSubmit: async (values) => {
      setLoading(true);

      const res = await postData(`event/update/${id}`, {
        ...values,
        participationCost: values.participationCost * 1,
      });

      if (res.data) {
        enqueueSnackbar(res.data.message ?? "", {
          variant: "success",
        });
        fetchAllEvents();
        // handleStep(INC);
        handleClose();
      } else {
        console.log(res, ">>>>>>");
        enqueueSnackbar(
          res.error?.message
            ? formatErrorMessage(res.error?.message)
            : "Something went wrong",
          {
            variant: "error",
          }
        );
      }

      setLoading(false);
    },
  });

  const { handleBlur, handleChange, values, setFieldValue } = formik;

  const handleGender = (gender) => {
    if (values.targetGenders.includes(gender)) {
      formik.setFieldValue("targetGenders", [
        ...values.targetGenders.filter((gen) => {
          return gen != gender;
        }),
      ]);
    } else {
      formik.setFieldValue("targetGenders", [...values.targetGenders, gender]);
    }
  };

  const handleAgeGroups = (gender) => {
    if (values.ageGroupsAllowed.includes(gender)) {
      formik.setFieldValue("ageGroupsAllowed", [
        ...values.ageGroupsAllowed.filter((gen) => {
          return gen != gender;
        }),
      ]);
    } else {
      formik.setFieldValue("ageGroupsAllowed", [
        ...values.ageGroupsAllowed,
        gender,
      ]);
    }
  };

  return (
    <>
      <FormikProvider value={formik}>
        <div>
          <div className="mb-6">
            <h1 className="text-black mb-3 font-bold">Target age groups</h1>
            <div className="grid grid-cols-3 gap-4">
              <div
                className={classNames([
                  "bg-[#DDDDD7] rounded-2xl px-3 py-3 text-center text-[#7C7C72] text-sm font-semibold",
                  { "bg-[#e8e51a]": values.ageGroupsAllowed.includes("all") },
                ])}
                onClick={() => {
                  handleAgeGroups("all");
                }}
              >
                {" "}
                All ages{" "}
              </div>
              <div
                className={classNames([
                  "bg-[#DDDDD7] rounded-2xl px-3 py-3 text-center text-[#7C7C72] text-sm font-semibold",
                  { "bg-[#e8e51a]": values.ageGroupsAllowed.includes("16-19") },
                ])}
                onClick={() => {
                  handleAgeGroups("16-19");
                }}
              >
                16 - 19
              </div>
              <div
                className={classNames([
                  "bg-[#DDDDD7] rounded-2xl px-3 py-3 text-center text-[#7C7C72] text-sm font-semibold",
                  { "bg-[#e8e51a]": values.ageGroupsAllowed.includes("20-25") },
                ])}
                onClick={() => {
                  handleAgeGroups("20-25");
                }}
              >
                20 - 25{" "}
              </div>
              <div
                className={classNames([
                  "bg-[#DDDDD7] rounded-2xl px-3 py-3 text-center text-[#7C7C72] text-sm font-semibold",
                  { "bg-[#e8e51a]": values.ageGroupsAllowed.includes("26-34") },
                ])}
                onClick={() => {
                  handleAgeGroups("26-34");
                }}
              >
                26 - 34{" "}
              </div>
              <div
                className={classNames([
                  "bg-[#DDDDD7] rounded-2xl px-3 py-3 text-center text-[#7C7C72] text-sm font-semibold",
                  { "bg-[#e8e51a]": values.ageGroupsAllowed.includes("35-45") },
                ])}
                onClick={() => {
                  handleAgeGroups("35-45");
                }}
              >
                35 - 45{" "}
              </div>
              <div
                className={classNames([
                  "bg-[#DDDDD7] rounded-2xl px-3 py-3 text-center text-[#7C7C72] text-sm font-semibold",
                  { "bg-[#e8e51a]": values.ageGroupsAllowed.includes("46-55") },
                ])}
                onClick={() => {
                  handleAgeGroups("46-55");
                }}
              >
                46 - 55{" "}
              </div>
              <div
                className={classNames([
                  "bg-[#DDDDD7] rounded-2xl px-3 py-3 text-center text-[#7C7C72] text-sm font-semibold",
                  { "bg-[#e8e51a]": values.ageGroupsAllowed.includes("56-65") },
                ])}
                onClick={() => {
                  handleAgeGroups("56-65");
                }}
              >
                56 - 65{" "}
              </div>
              <div
                className={classNames([
                  "bg-[#DDDDD7] rounded-2xl px-3 py-3 text-center text-[#7C7C72] text-sm font-semibold",
                  { "bg-[#e8e51a]": values.ageGroupsAllowed.includes("66-74") },
                ])}
                onClick={() => {
                  handleAgeGroups("66-74");
                }}
              >
                66 - 74
              </div>
              <div
                className={classNames([
                  "bg-[#DDDDD7] rounded-2xl px-3 py-3 text-center text-[#7C7C72] text-sm font-semibold",
                  { "bg-[#e8e51a]": values.ageGroupsAllowed.includes("75+") },
                ])}
                onClick={() => {
                  handleAgeGroups("75+");
                }}
              >
                {" "}
                75+{" "}
              </div>
            </div>
          </div>

          <hr className="mb-3 text-[#7C7C72]" />

          <div className="mb-6">
            <h1 className="text-black mb-3 font-bold">Target genders</h1>
            <div className="grid grid-cols-3 gap-4">
              <div
                className={classNames([
                  "bg-[#DDDDD7] rounded-2xl px-3 py-3 text-center text-[#7C7C72] text-sm font-semibold",
                  { "bg-[#e8e51a]": values.targetGenders.includes("male") },
                ])}
                onClick={() => {
                  handleGender("male");
                }}
              >
                Male
              </div>
              <div
                className={classNames([
                  "bg-[#DDDDD7] rounded-2xl px-3 py-3 text-center text-[#7C7C72] text-sm font-semibold",
                  { "bg-[#e8e51a]": values.targetGenders.includes("female") },
                ])}
                onClick={() => {
                  handleGender("female");
                }}
              >
                Female
              </div>
              <div
                className={classNames([
                  "bg-[#DDDDD7] rounded-2xl px-3 py-3 text-center text-[#7C7C72] text-sm font-semibold",
                  { "bg-[#e8e51a]": values.targetGenders.includes("other") },
                ])}
                onClick={() => {
                  handleGender("other");
                }}
              >
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
                name="promotionCode"
                onChange={handleChange}
                onBlur={handleBlur}
                className="model-input placeholder:text-[#7C7C72] placeholder:text-sm !border-[#DDDDD7] "
                placeholder="Enter your promo code here"
              />
            </div>
          </div>

          <hr className="mb-3 text-[#7C7C72]" />

          <div className="mb-6 flex justify-between">
            <div>
              <h1 className="text-black font-bold">Free</h1>
              <p className="text-[#888] text-xs">
                Promote in a dedicated area of Pinntag
              </p>
            </div>
            <div>
              <PrimarySwitch
                onChange={(val) => setFieldValue("isFree", val)}
                onBlur={handleBlur}
                name="isFree"
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
                onChange={handleChange}
                onBlur={handleBlur}
                name="bookingUrl"
              />
            </div>
          </div>

          <hr className="mb-3 text-[#7C7C72]" />

          <div className="mb-6">
            <div>
              <h1 className="text-black mb-3 font-bold">Participation cost</h1>
            </div>
            <div>
              <input
                type="text"
                className="model-input placeholder:text-[#7C7C72] placeholder:text-sm !border-[#DDDDD7] "
                placeholder="Participation cost"
                onChange={handleChange}
                onBlur={handleBlur}
                name="participationCost"
              />
            </div>
          </div>

          <hr className="mb-3 text-[#7C7C72]" />

          <div className="mb-6 flex justify-between">
            <div>
              <h1 className="text-black font-bold">Notfiy followers</h1>
              <p className="text-[#888] text-xs">
                Your followers will be notified of this event
              </p>
            </div>
            <div>
              <PrimarySwitch
                onChange={(val) => setFieldValue("notifyFollowers", val)}
              />
            </div>
          </div>

          <hr className="mb-3 text-[#7C7C72]" />

          <div className="mb-6 flex justify-between">
            <div>
              <h1 className="text-black font-bold">RSVP</h1>
              <p className="text-[#888] text-xs">
                You will recieve a notification for each attendance request. You
                will need to confirm each request.
              </p>
            </div>
            <div>
              <PrimarySwitch onChange={(val) => setFieldValue("RSVP", val)} />
            </div>
          </div>

          <hr className="mb-3 text-[#7C7C72]" />

          <div className="mb-6">
            <div>
              <h1 className="text-black mb-3 font-bold">Terms & Conditions</h1>
            </div>
            <div>
              <input
                type="text"
                className="model-input placeholder:text-[#7C7C72] placeholder:text-sm !border-[#DDDDD7] "
                placeholder="Paste here your terms and conditions text"
                onChange={handleChange}
                onBlur={handleBlur}
                name="termsAndConditions"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-auto">
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
            {/* handleStep(INC) */}
            <PrimaryButton
              loading={loading}
              inputClass={"min-w-[100px]"}
              onClick={() => {
                formik.handleSubmit();
              }}
            >
              <span>Submit</span>
              {/* <ChevronRightIcon className="!text-white" /> */}
            </PrimaryButton>
          </div>
        </div>
      </FormikProvider>
    </>
  );
};

export default Step4;
