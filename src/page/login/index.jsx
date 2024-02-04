import React, { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

import PrimaryButton from "../../common/FormElements/Button/PrimaryButton";
import { axiosInstance, axiosTempInstance } from "../../config/axiosInstance";
import { PINNTAG_USER } from "../../config/routes/RoleProtectedRoute";
import { useAuthentication } from "../../context/authContext";
import ForgotPasswordModel from "../../component/authScreen/ForgotPasswordModel";
import { formatErrorMessage } from "../../utils/formatErrorMessage";

const Login = () => {
  const [openForgetModel, setOpenForgetModel] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    try {
      const response = await axiosTempInstance.post("/auth/login", {
        ...formData,
        deviceType: "web",
      });
      setUser(response.data);
      localStorage.setItem(PINNTAG_USER, JSON.stringify(response.data));
      enqueueSnackbar("Login successfully", { variant: "success" });
      axiosTempInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response?.data?.tokens[0]?.userToken}`;
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response?.data?.tokens[0]?.businessToken}`;
      navigate("/dashboard/business-details");
    } catch (err) {
      console.log(err, "...... err");
      enqueueSnackbar(
        err?.response?.data?.message
          ? formatErrorMessage(err?.response?.data?.message)
          : "Wrong credentials",
        {
          variant: "error",
        }
      );
    }
    setLoading(false);
  };

  return (
    <>
      <div className="flex justify-center items-center w-full">
        <div className="lg:w-1/3 md:w-1/2 sm:w-2/3 p-4 bg-[#ededed] rounded-lg mt-36">
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
            <div className="mb-1 relative">
              <input
                type={showPassword ? "text" : "password"}
                className="model-input"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
              <span onClick={() => {
                setShowPassword((prev) => !prev )
              }} className="absolute top-[50%] right-[10px] translate-y-[-50%] cursor-pointer">
                {showPassword ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
              </span>
            </div>
            <div className="mb-3">
              <h1
                onClick={() => setOpenForgetModel(true)}
                className="text-sm cursor-pointer text-[#45818E] font-semibold text-right"
              >
                Forgot password ?
              </h1>
            </div>
            <div className="flex justify-center">
              <PrimaryButton
                onClick={handleSubmit}
                inputClass="py-2 w-1/3"
                loading={loading}
              >
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
