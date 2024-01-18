import React from "react";
import "./checkbox.css";

const CheckBox = ({ label, checked }) => {
  return (
    <label class="cursor-pointer flex content-center items-center">
      <input
        type="checkbox"
        class="checkbox-button__input"
        id="choice1-1"
        name="choice1"
        checked={checked}
      />
      <span class="checkbox-button__control"></span>
      <span class="text-base font-medium">{label}</span>
    </label>
  );
};

export default CheckBox;
