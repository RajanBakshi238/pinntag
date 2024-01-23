import React from "react";
import { Calendar } from "react-multi-date-picker";

import "react-multi-date-picker/styles/colors/yellow.css"

const Step2 = () => {
  return (
    <div>
      <div className="custom-calendar">
        <Calendar
          value={new Date()}
          className="yellow"
          headerOrder={["MONTH_YEAR", "LEFT_BUTTON", "RIGHT_BUTTON"]} 
          monthYearSeparator=" "
          // onChange={handleChange}
        />
      </div>  
    </div>
  );
};

export default Step2;
