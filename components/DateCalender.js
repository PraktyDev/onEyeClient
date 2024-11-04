'use client'
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

const DateCalender = () => {
    const [date, setDate] = useState(new Date())

    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border bg-white flex justify-center items-center"
      />
    )
}

export default DateCalender