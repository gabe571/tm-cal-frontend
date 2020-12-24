import React, {useState, useEffect } from 'react'
import moment from "moment"
import CalStyles from "../CalStyles.css"

export default function Calendar() {
    const [calendar, setCalendar] = useState([]) //matrix of calendar weeks and days
    const [value, setValue] = useState(moment()); //current day selected

    const firstDay = value.clone().startOf('month').startOf('week') //Start date of week
    const lastDay = value.clone().endOf('month').endOf('week') //Last day of the week

    useEffect(() => {
        const day = firstDay.clone().subtract(1, "day" );
        const d = [] //empty array useed to store day
        while(day.isBefore(lastDay, "day")) {  //whileloop to iterate over days
            d.push(
                Array(7)
                .fill(0)
                .map(() => day.add(1, "day").clone()) //matrix (array of arrays)
            )
        } // mapping over each day of the month
        setCalendar(d)
    }, [value]) //calendar day being re-rendered each day

return ( 
 <div className="calendar">  
  {calendar.map(week => 
  <div> 
    {week.map(day =>
    <div className="day" onClick={() => setValue(day)}> 
    <div
        className={value.isSame(day, "day") ? "selected" : ""}>
    {day.format("D")}</div>
    </div>
            )
         }
      </div>)
  }
 </div>
    )
}