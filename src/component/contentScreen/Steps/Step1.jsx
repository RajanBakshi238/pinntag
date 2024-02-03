import React, { useEffect, useState } from "react";
import { ErrorMessage, Form, FormikProvider, useFormik } from "formik";
import Autocomplete from "@mui/material/Autocomplete";

import { getData, postData } from "../../../utils/api";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { enqueueSnackbar } from "notistack";
import { formatErrorMessage } from "../../../utils/formatErrorMessage";
import SecondaryButton from "../../../common/FormElements/Button/SecondaryButton";
import PrimaryButton from "../../../common/FormElements/Button/PrimaryButton";
import { DEC, INC } from "../CreateContent";
import { TextField } from "@mui/material";
import * as Yup from "yup";

const Step1 = ({
  handleStep,
  handleClose,
  currentStep,
  setId,
  fetchAllEvents,
}) => {
  const [categories, setCategories] = useState();
  const [keywords, setkeywords] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCategories = async () => {
    const res = await getData("categories");
    if (res.data) {
      setCategories(res.data.categories);
    } else {
      console.error("Something went error", res);
    }
  };

  const getKeywords = async () => {
    const res = await getData("keywords");
    if (res.data) {
      setkeywords(res.data.keywords);
      // formik.setFieldValue("keywords", [res.data.keywords[0]])
    } else {
      console.error("Something went error", res);
    }
  };

  useEffect(() => {
    getCategories();
    getKeywords();
  }, []);

  const validationSchema = Yup.object().shape({
    type: Yup.string().required("Type is required."),
    title: Yup.string().required("Title is required."),
    description: Yup.string().required("Description is required."),
    category: Yup.string().required("Category is required"),
    images: Yup.array()
      .min(1, "Minimum 1 image is required.")
      .max(5, "Maximum 5 images allowed."),
    keywords: Yup.array().min(1, "Minimum 1 keyword is required."),
  });

  const formik = useFormik({
    initialValues: {
      type: "",
      title: "",
      images: [],
      imageUrls: [],
      description: "",
      category: "",
      keywords: [],
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values, ">>>>>>>> values 123")
      setLoading(true);
      let formData = new FormData();
      for (let key in values) {
        if (key == "imageUrls") {
        } else {
          if (key == "images") {
            values.images.forEach((image, index) => {
              formData.append(`images`, image);
            });
          } else if ((key === "keywords")) {
            // values.keywords.forEach((key, index) => {
            //   formData.append(`keywords`, key._id);
            // });
            formData.append('keywords', JSON.stringify(values.keywords.map(({_id}) => {
              return _id
            })))

          } else {
            formData.append([key], values[key]);
          }
        }
      }
      const res = await postData("event", formData);

      if (res.data) {
        setId(res.data.event?._id);
        enqueueSnackbar(res.data.message ?? "", {
          variant: "success",
        });
        fetchAllEvents();
        handleStep(INC);
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

  const { setFieldValue, handleChange, handleBlur, values, errors } = formik;

  const handleUploadImages = (event) => {
    const files = event.target.files;
    formik.setFieldValue("images", [...values.images, ...files]);

    const urls = Array.from(files).map((file) => URL.createObjectURL(file));
    console.log(urls, ">>>>>>> urls");
    formik.setFieldValue("imageUrls", [...values.imageUrls, ...urls]);
  };

  const handleRemoveImage = (index) => {
    setFieldValue("images", [
      ...values?.images?.slice(0, index),
      ...values?.images?.slice(index + 1),
    ]);
    setFieldValue("imageUrls", [
      ...values?.imageUrls?.slice(0, index),
      ...values?.imageUrls?.slice(index + 1),
    ]);
  };

  return (
    <>
      <FormikProvider value={formik}>
        <Form>
          {/* <Form> */}
          {/* <div className="mb-3">
        <select className="secondary-select w-full" placeholder="Category">
          <option>Create from Template</option>
          <option>category1</option>
          <option>category1</option>
          <option>category1</option>
        </select>
      </div> */}
          <div className="mb-4">
            <select
              className="secondary-select w-full"
              name="type"
              onChange={handleChange}
            >
              <option>Offer type (Offer or Event)</option>
              <option value={"business_event"}>Business Event</option>
              <option value={"social_event"}>Social Event</option>
              <option value={"offer"}>Offer</option>
            </select>
            <span className="font-semibold pl-1 text-sm text-red-600">
              <ErrorMessage name="type" />
            </span>
          </div>
          <div className="mb-3">
            <h1 className="text-lg font-bold">Add Images</h1>
            <div className="overflow-auto py-3 image-vertical-scroll">
              <div className="flex gap-3">
                {values?.imageUrls.map((image, index) => {
                  return (
                    <div className="relative">
                      <HighlightOffOutlinedIcon
                        onClick={() => handleRemoveImage(index)}
                        className="cursor-pointer absolute right-[-10px] top-[-12px] !text-white text-xl rounded-full font-extrabold !bg-black "
                      />
                      <label
                        key={index}
                        className="w-32 h-20 flex justify-center items-center border-2 border-black rounded-md text-sm font-semibold"
                      >
                        <img className="w-full h-full" src={image} alt="img" />
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>

            <label
              htmlFor="image"
              className="mt-3 cursor-pointer w-32 h-20 flex justify-center items-center border-2 border-black rounded-md text-sm font-semibold"
            >
              Add Image
            </label>
            <span className="font-semibold pl-1 text-sm text-red-600">
              <ErrorMessage name="images" />
            </span>
            <input
              id="image"
              type="file"
              multiple
              name="image"
              className="hidden"
              onChange={handleUploadImages}
            />
          </div>
          <div className="mb-3">
            <input
              placeholder="Offer Title"
              name="title"
              className="common-input"
              onChange={handleChange}
            />
            <span className="font-semibold pl-1 text-sm text-red-600">
              <ErrorMessage name="title" />
            </span>
          </div>
          <div className="mb-3">
            <textarea
              placeholder="Description"
              className="common-textarea"
              rows={3}
              name="description"
              onChange={handleChange}
            />
            <span className="font-semibold pl-1 text-sm text-red-600">
              <ErrorMessage name="description" />
            </span>
          </div>
          <div className="mb-3">
            <select
              className="secondary-select w-full"
              placeholder="Category"
              name="category"
              onChange={handleChange}
            >
              <option>Category</option>
              {categories?.map((category, index) => {
                return (
                  <option key={index} value={category._id}>
                    {category.name}
                  </option>
                );
              })}
            </select>
            <span className="font-semibold pl-1 text-sm text-red-600">
              <ErrorMessage name="category" />
            </span>
          </div>
          {/* <div className="mb-3">
        <input
          placeholder="Keywords: For example, #Cocktails"
          className="common-input"
        />
      </div> */}
          <div className="mb-3">
            <Autocomplete
              multiple
              limitTags={2}
              size="small"
              id="multiple-limit-tags"
              options={keywords}
              getOptionLabel={(option) => option?.name}
              // defaultValue={[
              //   keywords?.[2], keywords?.[3]
              // ]}
              value={formik.values.keywords}
              isOptionEqualToValue={(option, value) => {
                return option?._id === value?._id;
              }}
              onChange={(e, value) => {
                formik.setFieldValue("keywords", value);
              }}
              sx={{
                outline: "none",
                "& :hover": {
                  outline: "none",
                },
              }}
              renderInput={(params) => (
                <TextField
                  sx={{
                    width: "100% !important",
                    border: "2px solid #00000095",
                    borderRadius: "5px",
                  }}
                  name="keywords"
                  onBlur={handleBlur}
                  {...params}
                  placeholder="Keywords: For example, #Cocktails"
                />
              )}
            />
            <span className="font-semibold pl-1 text-sm text-red-600">
              <ErrorMessage name="keywords" />
            </span>
          </div>

          <div className="flex justify-between items-center mt-auto pb-3">
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
                onClick={formik.handleSubmit}
              >
                <span>Next</span>
                <ChevronRightIcon className="!text-white" />
              </PrimaryButton>
            </div>
          </div>
        </Form>
      </FormikProvider>
    </>
  );
};

export default Step1;
