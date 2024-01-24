import React, { useState } from "react";
import PrimaryButton from "../../common/FormElements/Button/PrimaryButton";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
        ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    console.log(formData, ">>>>> formdata")

    
  }

  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-1/2 p-4 bg-[#ededed] rounded-lg mt-36">
        <h1 className="text-black text-center text-2xl font-bold mb-4">
          Login
        </h1>
        <div className="">
          <div className="mb-4">
            <input type="text" className="model-input" name="email" placeholder="Login" onChange={handleChange} />
          </div>
          <div className="mb-4">
            <input type="password" className="model-input" name="password" placeholder="Password" onChange={handleChange} />
          </div>
          <div className="flex justify-center">
            <PrimaryButton onClick={handleSubmit} inputClass="py-2 w-1/3">Sign in</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
