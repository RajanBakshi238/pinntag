import React, { useState } from "react";
import { Calendar, DateObject } from "react-multi-date-picker";

import "react-multi-date-picker/styles/colors/yellow.css";
import PrimarySwitch from "../../../common/FormElements/Switch/PrimarySwitch";
import AddTimeWidget from "../AddTimeWidget";

const Step2 = () => {
  const [values, setValues] = useState([new DateObject()]);
  const [range, setRange] = useState(false);
  const [multipleTime, setMultipleTime] = useState(false);

  const handleChange = (event) => {
    setValues(event);
  };
  console.log(values, "?????????", range);

  return (
    <div>
      <div className="custom-calendar">
        <div className="mt-3 flex justify-between">
          <h1 className="text-lg font-semibold">Times</h1>
          <PrimarySwitch
            onChange={(value) => {
              setRange(value);
              setValues();
            }}
            labelText="Select date range"
          />
        </div>
        <div className="">
          <Calendar
            value={values}
            range={range}
            multiple={!range}
            className="yellow"
            headerOrder={["MONTH_YEAR", "LEFT_BUTTON", "RIGHT_BUTTON"]}
            monthYearSeparator=" "
            onChange={handleChange}
            format="ddd, D MMMM"
          />
        </div>

        <hr />

        <div className="mt-3 mb-3 flex justify-between">
          <h1 className="text-lg font-semibold">Times</h1>
          <PrimarySwitch
            onChange={(value) => {
              setMultipleTime(value);
            }}
            labelText="Specify for each day"
          />
        </div>
        {multipleTime ? (
          <>
            {values?.map((date) => {
              return <AddTimeWidget date={date.format()} />;
            })}
          </>
        ) : (
          <AddTimeWidget />
        )}
      </div>
    </div>
  );
};

export default Step2;
