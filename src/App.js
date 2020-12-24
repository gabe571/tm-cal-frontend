import React, { useState } from "react";
import moment from "moment";
import Calendar from "./Components/Calendar";


export default function () {
  const [selectedDate, setSelectedDate] = useState(moment());
  return <Calendar value={selectedDate} onChange={setSelectedDate} />;
}
