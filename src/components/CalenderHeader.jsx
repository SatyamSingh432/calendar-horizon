import { format } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";

function CalenderHeader({ currentMonth, onPrev, onNext }) {
  return (
    <div className="flex justify-between items-center py-4 px-6">
      <button onClick={onPrev} className="p-2 rounded ">
        <ChevronLeft className="w-5 h-5 text-gray-700 cursor-pointer" />
      </button>
      <h2 className="text-xl font-bold text-gray-800 ">
        {format(currentMonth, "MMMM yyyy")}
      </h2>
      <button onClick={onNext} className="p-2 rounded cursor-pointer">
        <ChevronRight className="w-5 h-5 text-gray-700" />
      </button>
    </div>
  );
}

export default CalenderHeader;
