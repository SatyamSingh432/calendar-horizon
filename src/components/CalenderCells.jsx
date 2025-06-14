import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  format,
  isSameDay,
} from "date-fns";

function CalendarCells({ currentMonth }) {
  const monthStart = startOfMonth(currentMonth);
  console.log(monthStart);
  const monthEnd = endOfMonth(monthStart);
  console.log(monthEnd);

  const startDate = startOfWeek(monthStart);
  console.log(startDate);

  const endDate = endOfWeek(monthEnd);
  console.log(endDate);

  const rows = [];
  let days = [];
  let day = startDate;

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      const isToday = isSameDay(day, new Date());
      days.push(
        <div
          key={day.toString()}
          className={`h-28 p-2 rounded-xl flex flex-col justify-start border cursor-pointer
           
            ${
              isToday
                ? "border-blue-500 shadow-sm"
                : "border-gray-200 hover:border-blue-300"
            }
          `}
        >
          <div className="text-xs font-semibold">{format(day, "dd")}</div>
        </div>
      );

      day = addDays(day, 1);
    }

    rows.push(
      <div key={day.toString()} className="grid grid-cols-7 gap-2 mt-2">
        {days}
      </div>
    );
    days = [];
  }

  return <div>{rows}</div>;
}

export default CalendarCells;
