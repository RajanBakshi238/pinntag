import React from 'react'
import DatePicker from 'react-multi-date-picker'
import { Calendar } from "react-multi-date-picker"
const Step2 = () => {
  return (
    <div className='mx-auto'>
      <Calendar
        value={new Date()}
        // onChange={handleChange}
      />


    </div>
  )
}

export default Step2