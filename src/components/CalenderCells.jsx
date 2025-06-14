import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  format,
  isSameDay,
} from "date-fns";

function CalendarCells({ currentMonth, events, onDateClick }) {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  console.log(events);
  const rows = [];
  let days = [];
  let day = startDate;

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      const formatted = format(day, "yyyy-MM-dd");
      const dayEvents = events.filter(
        (e) => (e?.date, "yyyy-MM-dd") === formatted
      );
      console.log(dayEvents);
      const isToday = isSameDay(day, new Date());

      days.push(
        <div
          key={day.toString()}
          onClick={() => {
            onDateClick(day);
          }}
          className={`h-28 p-2 rounded-xl flex flex-col justify-start border cursor-pointer
           
            ${
              isToday
                ? "border-blue-500 shadow-sm"
                : "border-gray-200 hover:border-blue-300"
            }
          `}
        >
          <div className="text-xs font-semibold">{format(day, "d")}</div>
          <div className="mt-1 flex flex-col gap-1 overflow-hidden">
            {dayEvents.slice(0, 2).map((e) => (
              <div
                key={e.id}
                className="truncate text-xs bg-blue-100 text-blue-800 px-1 py-0.5 rounded"
              >
                {e.title}
              </div>
            ))}
            {dayEvents.length > 2 && (
              <div className="text-xs text-blue-600">
                + {dayEvents.length - 2} more
              </div>
            )}
          </div>
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
