import React, { useState } from 'react'
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'

function Date() {

    const [date,setDate] = useState("")

  return (
    <div>
    <DatePicker></DatePicker>
    </div>
  )
}

export default Date
