import React, { useState } from "react";
import PrimaryButton from "../../common/FormElements/Button/PrimaryButton";
import { useSnackbar } from "notistack";
import { axiosInstance } from "../../config/axiosInstance";
import { useNavigate } from "react-router-dom";
import { PINNTAG_USER } from "../../config/routes/RoleProtectedRoute";
import { useAuthentication } from "../../context/authContext";
import ForgotPasswordModel from "../../component/authScreen/ForgotPasswordModel";
import { formatErrorMessage } from "../../utils/formatErrorMessage";

const Login = () => {
  const [openForgetModel, setOpenForgetModel] = useState(false);
  const [loading, setLoading]= useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { enqueueSnackbar } = useSnackbar();
  const { setUser } = useAuthentication();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true)
    try {
      const response = await axiosInstance.post("/auth/login", {
        ...formData,
      });
      setUser(response.data);
      localStorage.setItem(PINNTAG_USER, JSON.stringify(response.data));
      enqueueSnackbar("Login successfully", { variant: "success" });
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response?.data?.token}`;
      navigate("/dashboard/business-details");
    } catch (err) {
      enqueueSnackbar(err?.response?.data?.message ? formatErrorMessage(err?.response?.data?.message) : "Wrong credentials", {
        variant: "error",
      });
    }
    setLoading(false)

  };

  return (
    <>
      <div className="flex justify-center items-center w-full">
        <div className="lg:w-1/3 w-1/2 p-4 bg-[#ededed] rounded-lg mt-36">
          <h1 className="text-black text-center text-2xl font-bold mb-4">
            Login
          </h1>
          <div className="">
            <div className="mb-4">
              <input
                type="text"
                className="model-input"
                name="email"
                placeholder="Login"
                onChange={handleChange}
              />
            </div>
            <div className="mb-1">
              <input
                type="password"
                className="model-input"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <h1 onClick={() => setOpenForgetModel(true)} className="text-sm cursor-pointer text-[#45818E] font-semibold text-right">
                Forgot password ?
              </h1>
            </div>
            <div className="flex justify-center">
              <PrimaryButton onClick={handleSubmit} inputClass="py-2 w-1/3" loading={loading}>
                Sign in
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
      <ForgotPasswordModel
        openForgetModel={openForgetModel}
        setOpenForgetModel={setOpenForgetModel}
      />
    </>
  );
};

export default Login;
