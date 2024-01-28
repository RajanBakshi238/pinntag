import { FieldArray, Form, FormikProvider, useFormik } from "formik";
import React, { useEffect, useState } from "react";
import PrimaryButton from "../../common/FormElements/Button/PrimaryButton";
import { Add } from "@mui/icons-material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SecondaryButton from "../../common/FormElements/Button/SecondaryButton";
import { useNavigate, useParams } from "react-router-dom";
import { getData } from "../../utils/api";

const EditBusiness = () => {
  const initState = {
    businessName: "",
    businessType: "",
    businessDescription: "",
    businessCategory: "",
    businessImage: "",
    imageBlob: "",
    imageUrl: "",
    businessSocialMedia: [
      {
        app: "",
        password: "",
        userId: "",
      },
    ],
    businessLocations: [
      {
        address1: "",
        address2: "",
        city: "",
        st: "",
        zip: "",
        website: "",
        email: "",
        telePhonenumber: "",
      },
    ],
  };
  const navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = useState();

  const fetchBusinessDetail = async () => {
    const resposne = await getData(`business-profile/${id}`);
    if (resposne.data) {
      setData(resposne.data?.businessProfiles);
      console.log(resposne.data, ">>>>>>>>");
    } else {
      console.log(resposne.error, "Error while fetching business details");
    }
  };

  useEffect(() => {
    fetchBusinessDetail();
  }, []);

  const formik = useFormik({
    initialValues: initState,
    onSubmit: async () => {
      console.log("Yes we are");
    },
  });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        formik.setFieldValue("businessImage", reader.result);
        formik.setFieldValue("imageBlob", file);
      };
      reader.readAsDataURL(file);
    }
  };

  console.log(formik.values, ">>>>> value", id);

  return (
    <div className="mx-12">
      <FormikProvider value={formik}>
        <Form onSubmit={formik.handleSubmit}>
          <div className="flex gap-6 md:flex-row flex-col">
            <div className="md:w-1/2 w-full">
              <div className="mb-3">
                <div className="mb-3">
                  <img
                    className="w-36 h-36 rounded-full border-4 border-[#e8e51a]"
                    src={
                      formik.values.businessImage
                        ? formik.values.businessImage
                        : "https://via.placeholder.com/150"
                    }
                    alt=""
                  />
                </div>

                <label htmlFor="businessImage">
                  {" "}
                  <PrimaryButton inputClass="w-fit">Upload Image</PrimaryButton>
                </label>
                <input
                  id="businessImage"
                  type="file"
                  name="businessImage"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </div>
              <div className="mb-3">
                <input
                  placeholder="Business Name"
                  name="businessName"
                  className="common-input"
                  onChange={formik.handleChange}
                />
              </div>
              <div className="mb-3">
                <select
                  className="common-select w-full"
                  name="businessType"
                  placeholder="Category"
                  onChange={formik.handleChange}
                >
                  <option>Type [Business/Non-profit]</option>
                  <option>Business</option>
                  <option>Non-profit</option>
                </select>
              </div>
              <div className="mb-3">
                <textarea
                  placeholder="Description"
                  name="businessDescription"
                  className="common-textarea"
                  rows={3}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="mb-3">
                <select
                  className="common-select w-full"
                  name="businessCategory"
                  placeholder="Category"
                  onChange={formik.handleChange}
                >
                  <option>Category</option>
                  <option>category2</option>
                  <option>category3</option>
                  <option>category3</option>
                </select>
              </div>

              <div className="mt-6">
                <FieldArray
                  name="businessSocialMedia"
                  render={(arrayHelpers) => (
                    <div>
                      <div className="flex justify-between">
                        <h1 className="text-base font-bold ">
                          Social Media Login Details
                        </h1>
                        <PrimaryButton
                          onClick={() =>
                            arrayHelpers.push({
                              app: "",
                              password: "",
                              userId: "",
                            })
                          }
                        >
                          <Add className="!text-white" />
                          <span>Add</span>
                        </PrimaryButton>
                      </div>
                      {formik.values.businessSocialMedia.map(
                        (socialMedia, index) => {
                          return (
                            <div className="mt-3 py-3 px-2 bg-[#0000000d] rounded-md">
                              <div className="flex gap-2">
                                <div className="w-[90%]">
                                  <div className="mb-3">
                                    <select
                                      className="common-select w-full"
                                      name={`businessSocialMedia[${index}].app`}
                                      placeholder="Category"
                                      onChange={formik.handleChange}
                                    >
                                      <option>Social media app</option>
                                      <option>category2</option>
                                      <option>category3</option>
                                      <option>category3</option>
                                    </select>
                                  </div>
                                  <div className="mb-3">
                                    <input
                                      placeholder="User ID"
                                      name={`businessSocialMedia[${index}].userId`}
                                      className="common-input"
                                      onChange={formik.handleChange}
                                    />
                                  </div>
                                  <div className="">
                                    <input
                                      type="password"
                                      placeholder="Password"
                                      name={`businessSocialMedia[${index}].password`}
                                      className="common-input"
                                      onChange={formik.handleChange}
                                    />
                                  </div>
                                </div>
                                <div>
                                  <DeleteOutlineIcon
                                    className="cursor-pointer"
                                    onClick={() => arrayHelpers.remove(index)}
                                  />
                                </div>
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  )}
                />
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="">
                <FieldArray
                  name="businessLocations"
                  render={(arrayHelpers) => (
                    <div>
                      <div className="flex justify-between">
                        <h1 className="text-base font-bold ">
                          Location Details
                        </h1>
                        <PrimaryButton
                          onClick={() =>
                            arrayHelpers.push({
                              address1: "",
                              address2: "",
                              city: "",
                              st: "",
                              zip: "",
                              website: "",
                              email: "",
                              telePhonenumber: "",
                            })
                          }
                        >
                          <Add className="!text-white" />
                          <span>Add</span>
                        </PrimaryButton>
                      </div>
                      {formik.values.businessLocations.map(
                        (location, index) => {
                          return (
                            <div className="mt-3 py-3 px-2 bg-[#0000000d] rounded-md">
                              <div className="flex gap-2">
                                <div className="w-[90%]">
                                  <div className="mb-3">
                                    <input
                                      placeholder="Address 1"
                                      name={`businessLocations[${index}].address1`}
                                      className="common-input"
                                      onChange={formik.handleChange}
                                    />
                                  </div>
                                  <div className="mb-3">
                                    <input
                                      placeholder="Address 2"
                                      name={`businessLocations[${index}].address2`}
                                      className="common-input"
                                      onChange={formik.handleChange}
                                    />
                                  </div>
                                  <div className="mb-3 flex gap-2">
                                    <div className="w-2/4">
                                      <input
                                        placeholder="City"
                                        name={`businessLocations[${index}].city`}
                                        className="common-input"
                                        onChange={formik.handleChange}
                                      />
                                    </div>
                                    <div className="w-1/4">
                                      <input
                                        placeholder="ST"
                                        name={`businessLocations[${index}].st`}
                                        className="common-input"
                                        onChange={formik.handleChange}
                                      />
                                    </div>
                                    <div className="w-1/4">
                                      <input
                                        placeholder="Zip"
                                        name={`businessLocations[${index}].zip`}
                                        className="common-input"
                                        onChange={formik.handleChange}
                                      />
                                    </div>
                                  </div>
                                  <div className="mb-3">
                                    <input
                                      placeholder="Website"
                                      name={`businessLocations[${index}].website`}
                                      className="common-input"
                                      onChange={formik.handleChange}
                                    />
                                  </div>
                                  <div className="mb-3">
                                    <input
                                      placeholder="Email"
                                      name={`businessLocations[${index}].email`}
                                      className="common-input"
                                      onChange={formik.handleChange}
                                    />
                                  </div>
                                  <div className="mb-3">
                                    <input
                                      placeholder="Email"
                                      name={`businessLocations[${index}].telePhonenumber`}
                                      className="common-input"
                                      onChange={formik.handleChange}
                                    />
                                  </div>
                                </div>
                                <div>
                                  <DeleteOutlineIcon
                                    className="cursor-pointer"
                                    onClick={() => arrayHelpers.remove(index)}
                                  />
                                </div>
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  )}
                />
              </div>

              <div className="mt-6 gap-4 flex flex-row-reverse">
                <SecondaryButton
                  onClick={() => navigate("/dashboard/business-details")}
                  inputClass="px-7"
                >
                  Cancel
                </SecondaryButton>
                <PrimaryButton inputClass="px-9">Save</PrimaryButton>
              </div>
            </div>
          </div>
        </Form>
      </FormikProvider>
    </div>
  );
};

export default EditBusiness;
