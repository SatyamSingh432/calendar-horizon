import React from "react";

const CalenderDays = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-600 border-b pb-2">
      {days.map((day) => (
        <div key={day} className="uppercase tracking-wide">
          {day}
        </div>
      ))}
    </div>
  );
};

export default CalenderDays;
