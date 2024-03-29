import React, { useState, useEffect } from "react";
import { Calendar, DateObject } from "react-multi-date-picker";

import "react-multi-date-picker/styles/colors/yellow.css";
import PrimarySwitch from "../../../common/FormElements/Switch/PrimarySwitch";
import AddTimeWidget from "../AddTimeWidget";
import { postData } from "../../../utils/api";
import { enqueueSnackbar } from "notistack";
import { formatErrorMessage } from "../../../utils/formatErrorMessage";
import { DEC, INC } from "../CreateContent";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import SecondaryButton from "../../../common/FormElements/Button/SecondaryButton";
import PrimaryButton from "../../../common/FormElements/Button/PrimaryButton";

const Step2 = ({
  handleStep,
  handleClose,
  id,
  currentStep,
  fetchAllEvents,
  fetchEventData,
  eventData,
}) => {
  const [values, setValues] = useState([new DateObject()]);
  const [range, setRange] = useState(false);
  const [multipleTime, setMultipleTime] = useState(false);
  const [dates, setDates] = useState();

  const [loading, setLoading] = useState(false);

  console.log(dates, ">>>>>>>>>>>>>> dates123456", values);

  useEffect(() => {
    // let obj = {};
    let obj = dates ?? {};
    console.log(values, "Values  runned 12345");
    values?.forEach((rawDate) => {
      console.log(rawDate.format(), ">>>>> formatted valuess");
      if (obj[new Date(rawDate.format()).toISOString()]) {
      } else {
        obj[rawDate.format()] = [
          {
            startTime: "15:00",
            endTime: "18:00",
          },
        ];
      }
    });

    setDates(obj);
  }, [values]);

  useEffect(() => {
    if (eventData?.schedule?.length) {
      // setValues();
      let eventDateObj = {};
      let dateValues = [];
      eventData?.schedule?.forEach((eventDate) => {
        eventDateObj = {
          ...eventDateObj,
          [eventDate?.date]: eventDate?.durations?.map((time) => ({
            startTime: getTimeFromISOString(time.startTime),
            endTime: getTimeFromISOString(time.endTime),
          })),
        };
        const date = new DateObject({
          date: eventDate?.date,
          format: "YYYY-MM-DD",
        });
        dateValues.push(date);
      });

      console.log(
        eventDateObj,
        "1234567899876543456789p98765432345678909876543234567890"
      );
      setDates(eventDateObj);
      setValues(dateValues);
      setMultipleTime(eventData?.specifyForEachDay);
    }
  }, [eventData]);

  const handleAddInterval = (date) => {
    if (multipleTime) {
      let obj = { ...dates };
      console.log(obj[date], ">>>>111www");
      obj[date] = [...obj[date], { startTime: "15:00", endTime: "18:00" }];
      setDates(obj);
    } else {
      // will add one duration object to all dates
      let obj = { ...dates };
      for (const key in obj) {
        obj[key] = [...obj[key], { startTime: "15:00", endTime: "18:00" }];
      }
      setDates(obj);
    }
  };

  const onTimeChange = (value, index, timekey, date) => {
    if (multipleTime) {
      let obj = { ...dates };
      obj[date][index][timekey] = value;
      setDates(obj);
    } else {
      // change on every date and interval
      let obj = { ...dates };
      for (const key in obj) {
        debugger
        obj[key][index][timekey] = value;
      }

      setDates(obj);
    }
  };

  const handleChange = (event) => {
    setValues(event);
  };
  // console.log(values, "?????????", range);

  const handleSubmit = async () => {
    setLoading(true);
    const data = Object.keys(dates).map((date) => {
      return {
        date,
        durations: dates[date]?.map((time) => ({
          startTime: getDateWithTime(date, time.startTime),
          endTime: getDateWithTime(date, time.endTime),
        })),
      };
    });

    const res = await postData(`event/update/${id}`, {
      schedule: data,
      specifyForEachDay: multipleTime,
    });

    if (res.data) {
      enqueueSnackbar(res.data.message ?? "", {
        variant: "success",
      });
      fetchEventData(id);
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
  };

  return (
    <div className="flex flex-col">
      <div>
        <div className="custom-calendar">
          <div className="mt-3 flex justify-between">
            <h1 className="text-lg font-semibold">Times</h1>
            {/* <PrimarySwitch
              onChange={(value) => {
                setRange(value);
                setValues();
              }}
              labelText="Select date range"
            /> */}
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
              // format="ddd, D MMMM, YYYY"
              format="YYYY-MM-DD"
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
                return (
                  <AddTimeWidget
                    checkDate={date.format()}
                    multipleTime={multipleTime}
                    dates={dates}
                    onTimeChange={onTimeChange}
                    handleAddInterval={handleAddInterval}
                  />
                );
              })}
            </>
          ) : (
            <AddTimeWidget
              multipleTime={multipleTime}
              dates={dates}
              handleAddInterval={handleAddInterval}
              onTimeChange={onTimeChange}
            />
          )}
        </div>
      </div>
      <div className="flex justify-between items-center mt-auto pb-3">
        <div>
          {currentStep === 1 ? (
            <SecondaryButton onClick={() => handleClose()}>
              <>Cancel</>
            </SecondaryButton>
          ) : (
            // <></>
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
              handleSubmit();
            }}
          >
            <span>Next</span>
            <ChevronRightIcon className="!text-white" />
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Step2;

// utils functions for time

const getDateWithTime = (dateString, timeString) => {
  // Concatenate date and time strings
  if (dateString.includes("T")) {
    const [datePart] = dateString.split("T");

    // Concatenate the date part with the new time
    const newISOString = datePart + "T" + timeString + ":00";

    return newISOString;
  }
  const combinedString = dateString + "T" + timeString + ":00";

  // Create a new Date object from the combined string
  const combinedDateTime = new Date(combinedString);

  // Get ISO string representation
  const isoString = combinedDateTime.toISOString();
  console.log(combinedDateTime, isoString, "?????????????????????????");

  return isoString;
  // console.log(isoString);
};

const getTimeFromISOString = (isoString) => {
  // Create a new Date object from the ISO string
  const dateTime = new Date(isoString);

  // Get hours and minutes from the Date object
  const hours = dateTime.getUTCHours().toString().padStart(2, "0");
  const minutes = dateTime.getUTCMinutes().toString().padStart(2, "0");

  // Concatenate hours and minutes
  const testTime = hours + ":" + minutes;
  // console.log(testTime, "..... testTime")

  // console.log(isoString, dateTime, time, ">>>>>>>KKKKKKKKKKKKKKKKKKKKKK")
  // return time;
  // const time = dateTime.toLocaleTimeString([], {
  //   hour: "2-digit",
  //   minute: "2-digit",
  //   hour12: false,
  // });
  return testTime;
};

// const getTimeFromISOString = (isoString) => {
//   // Create a new Date object from the ISO string
//    const dateTime = new Date(isoString);
//    // Get local time hours and minutes from the Date object in 24-hour format
//    const time = dateTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false});
//     console.log(isoString, dateTime, time, ">>>>>>>KKKKKKKKKKKKKKKKKKKKKK")
//     return time;
//   }
//     // Example usage: const isoString = "2024-02-20T12:30:00Z"; const localTime = getTimeFromISOString(isoString); console.log(localTime); // Output will be the local time in 24-hour format (HH:MM)
