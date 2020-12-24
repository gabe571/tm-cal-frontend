import React from 'react'
import moment from "moment"

export default function Calendar() {
    const value = moment() //Javascript Library
    const firstDay = value.clone().startOf('month').startOf('week') //Start date of week
    const lastDay = value.clone().endOf('month').endOf('week') //Last day of the week
    const day = firstDay.clone().subtract(1, "day" );
    const calendar = []

    while(day.isBefore(lastDay, "day")) {  //whileloop to iterate over days
        calendar.push(
            Array(7).fill(0).map(() => day.add(1, "day").clone()) //matrix (array of arrays)
        )
    } // mapping over each day of the month
return ( 
 <div>  
  {
      calendar.map(week => <div> 
          {
              week.map(day => <div>
                 {day.format("D")} 
              </div>)
          }
      </div>)
  }
 </div>
    )
}