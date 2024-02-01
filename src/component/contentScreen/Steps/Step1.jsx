import React, { useEffect, useState } from "react";
import formik, { Form, FormikProvider, useFormik } from "formik";
import { getData, postData } from "../../../utils/api";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { enqueueSnackbar } from "notistack";
import { formatErrorMessage } from "../../../utils/formatErrorMessage";
import SecondaryButton from "../../../common/FormElements/Button/SecondaryButton";
import PrimaryButton from "../../../common/FormElements/Button/PrimaryButton";
import { DEC, INC } from "../CreateContent";

const Step1 = ({ handleStep, handleClose, currentStep, setId }) => {
  const [categories, setCategories] = useState();
  const [loading, setLoading] = useState(false);

  const getCategories = async () => {
    const res = await getData("categories");
    if (res.data) {
      setCategories(res.data.categories);
    } else {
      console.error("Something went error", res);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const formik = useFormik({
    initialValues: {
      type: "",
      title: "",
      images: [],
      imageUrls: [],
      description: "",
      category: "",
    },
    onSubmit: async (values) => {
      setLoading(true);
      console.log(values, ">>>>>>>>>>");
      let formData = new FormData();
      for (let key in values) {
        if (key == "imageUrls") {
        } else {
          if (key == "images") {
            values.images.forEach((image, index) => {
              formData.append(`images`, image);
            });
          } else {
            formData.append([key], values[key]);
          }
        }
      }
      const res = await postData("event", formData);

      if (res.data) {
        setId(res.data.event?._id)
        enqueueSnackbar(res.data.message ?? "", {
          variant: "success",
        });
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
      handleStep(INC)

      setLoading(false);
    },
  });

  const { handleChange, handleBlur, values } = formik;

  const handleUploadImages = (event) => {
    const files = event.target.files;
    formik.setFieldValue("images", [...values.images, ...files]);

    const urls = Array.from(files).map((file) => URL.createObjectURL(file));
    console.log(urls, ">>>>>>> urls");
    formik.setFieldValue("imageUrls", [...values.imageUrls, ...urls]);
  };

  console.log(formik.values, ">>>>>> ");

  return (
    <>
      <FormikProvider value="formik">
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
        </div>
        <div className="mb-3">
          <h1 className="text-lg font-bold mb-3">Add Images</h1>
          <div className="flex gap-2 overflow-auto">
            {values?.imageUrls.map((image, index) => {
              return (
                <div className="">
                  {/* <HighlightOffOutlinedIcon className="text-red  absolute translate-x-[-11px] translate-y-[-11px]" /> */}
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

          <label
            htmlFor="image"
            className="mt-3 cursor-pointer w-32 h-20 flex justify-center items-center border-2 border-black rounded-md text-sm font-semibold"
          >
            Add Image
          </label>
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
        </div>
        <div className="mb-3">
          <textarea
            placeholder="Description"
            className="common-textarea"
            rows={3}
            name="description"
            onChange={handleChange}
          />
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
        </div>
        {/* <div className="mb-3">
        <input
          placeholder="Keywords: For example, #Cocktails"
          className="common-input"
        />
      </div> */}

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
              <span>Next</span>
              <ChevronRightIcon className="!text-white" />
            </PrimaryButton>
          </div>
        </div>
        {/* </Form> */}
      </FormikProvider>
    </>
  );
};

export default Step1;
