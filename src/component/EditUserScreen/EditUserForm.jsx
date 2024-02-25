import React, { useEffect, useState } from "react";
import Text from "../../common/Text";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import SecondaryButton from "../../common/FormElements/Button/SecondaryButton";
import FullButton from "../../common/FormElements/Button/FullButton";
import { useAuthentication } from "../../context/authContext";
import { FormikProvider, useFormik } from "formik";
import { patchDataTemp, postDatatemp } from "../../utils/api";
import { enqueueSnackbar } from "notistack";
import { formatErrorMessage } from "../../utils/formatErrorMessage";

const EditUserForm = () => {
  const { user } = useAuthentication();

  const [passwordValues, setPasswordValues] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState({
    oldPassword: false,
    newPassword: false,
  });

  const [loading, setLoading] = useState({
    passwordForm: false,
    userForm: false,
  });

  const handlePasswordValues = (e) => {
    setPasswordValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      country: "",
      state: "",
      city: "",
      zip: "",
      countryCode: "91",
      phone: "9466",
    },
    onSubmit: async (values) => {
      setLoading((prev) => ({
        ...prev,
        userForm: true,
      }));
      const res = await postDatatemp("user/update/profile", values);
      if (res.data) {
        enqueueSnackbar(res.data.message ?? "", {
          variant: "success",
        });
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
      setLoading((prev) => ({
        ...prev,
        userForm: false,
      }));
    },
  });

  const {
    values,
    handleChange,
    handleBlur,
    setFieldValue,
    setValues,
    initialValues,
  } = formik;
  useEffect(() => {
    if (user) {
      const userObj = user.user;
      setValues({
        ...initialValues,
        firstName: userObj.firstName,
        lastName: userObj.lastName,
        country: userObj.country,
        state: userObj.state,
        city: userObj.city,
        zip: userObj.zip,
        phone: userObj.phone,
      });
    }
  }, [user]);

  const handlePasswordSubmit = async () => {
    setLoading((prev) => ({
      ...prev,
      passwordForm: true,
    }));
    const res = await patchDataTemp("user/change/password", {
      ...passwordValues,
    });
    console.log(res, ".... response");

    if (res.data) {
      enqueueSnackbar(res.data.message ?? "", {
        variant: "success",
      });
      setPasswordValues({
        oldPassword: "",
        newPassword: "",
      });
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
    setLoading((prev) => ({
      ...prev,
      passwordForm: false,
    }));
  };

  return (
    <div className="">
      <div className="mx-12 my-4">
        <Text className="text-[24px] mob:text-[16px] font-bold">
          User Details
        </Text>
      </div>
      <div className="mx-12">
        <div className="w-full md:w-1/2">
          <FormikProvider value={formik}>
            <div className="mb-4">
              <div className="flex flex-col border  rounded-lg border-black">
                <input
                  name="firstName"
                  className="placeholder:text-[black] py-2 px-4 text-lg border-0 outline-none rounded-2xl"
                  placeholder="First Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                />
                <hr className=" border-black border" />
                <input
                  name="lastName"
                  className="placeholder:text-[black] py-2 px-4 text-lg border-0 outline-none rounded-2xl"
                  placeholder="Last Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                />
              </div>
            </div>
            <div className="mb-2">
              <select
                className="secondary-select w-full !border !text-base !p-[6px] "
                name="country"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.country}
              >
                <option>Country</option>
                <option value={"USA"}>USA</option>
                <option value={"UK"}>UK</option>
              </select>
            </div>
            <div className="mb-4 flex gap-2">
              <div className="w-2/4">
                <input
                  placeholder="City"
                  name="city"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="secondary-select w-full !border !text-base !p-[6px]"
                  value={values.city}
                />
              </div>
              <div className="w-1/4">
                <input
                  name="state"
                  placeholder="ST"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="secondary-select w-full !border !text-base !p-[6px]"
                  value={values.state}
                />
              </div>
              <div className="w-1/4">
                <input
                  placeholder="Zip"
                  name="zip"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="secondary-select w-full !border !text-base !p-[6px]"
                  value={values.zip}
                />
              </div>
            </div>
            {/* <div className="mb-2">
            <input
              placeholder="Email"
              className="secondary-select w-full !border !text-base !p-[6px]"
            />
          </div> */}
            <div className="">
              <PhoneInput
                country={"us"}
                value={values.countryCode + "" + values.phone}
                inputClass="!w-full secondary-select"
                name="phone"
                // containerClass="common-input !border"
                onChange={(value, data, event, formattedValue) => {
                  // console.log(formattedValue, ">>>>", data)

                  setFieldValue("phone", value.slice(data.dialCode.length));
                  setFieldValue("countryCode", data.dialCode);
                }}
                onBlur={handleBlur}
              />
            </div>
            <div className="mt-5">
              <h1 className="font-semibold text-lg mb-2">
                Security Information
              </h1>
              <div className="flex gap-2 items-end">
                <div className="w-[65%]">
                  <div className="relative mb-2">
                    <input
                      type={showPassword.oldPassword ? "text" : "password"}
                      name="oldPassword"
                      onChange={handlePasswordValues}
                      placeholder="Old password"
                      className="secondary-select w-full !border !text-base !p-[6px]"
                    />
                    <span
                      onClick={() => {
                        setShowPassword((prev) => ({
                          ...prev,
                          oldPassword: !prev.oldPassword,
                        }));
                      }}
                      className="absolute top-[50%] right-[10px] translate-y-[-50%] cursor-pointer"
                    >
                      {showPassword?.oldPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <RemoveRedEyeIcon />
                      )}
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword.newPassword ? "text" : "password"}
                      name="newPassword"
                      onChange={handlePasswordValues}
                      placeholder="New password"
                      className="secondary-select w-full !border !text-base !p-[6px]"
                    />
                    <span
                      onClick={() => {
                        setShowPassword((prev) => ({
                          ...prev,
                          newPassword: !prev.newPassword,
                        }));
                      }}
                      className="absolute top-[50%] right-[10px] translate-y-[-50%] cursor-pointer"
                    >
                      {showPassword?.newPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <RemoveRedEyeIcon />
                      )}
                    </span>
                  </div>
                </div>
                <SecondaryButton
                  loading={loading.passwordForm}
                  inputClass={"w-[35%] h-1/2 "}
                  onClick={handlePasswordSubmit}
                >
                  Change Password
                </SecondaryButton>
              </div>
            </div>
            <div className="mt-5">
              <FullButton
                loading={loading.userForm}
                inputClass={"bg-white text-[#45818E] border-2 border-[#45818E]"}
                onClick={formik.handleSubmit}
              >
                Save Details
              </FullButton>
            </div>
          </FormikProvider>
        </div>
      </div>
    </div>
  );
};

export default EditUserForm;
