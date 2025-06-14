import { useState } from "react";
import CalenderHeader from "./components/CalenderHeader";
import { addMonths, subMonths } from "date-fns";
import "./App.css";

function App() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  return (
    <div>
      <CalenderHeader
        currentMonth={currentMonth}
        onPrev={() => setCurrentMonth(subMonths(currentMonth, 1))}
        onNext={() => setCurrentMonth(addMonths(currentMonth, 1))}
      />
    </div>
  );
}

export default App;
