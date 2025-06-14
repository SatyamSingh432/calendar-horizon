import { useState } from "react";
import CalenderHeader from "./components/CalenderHeader";
import { addMonths, subMonths } from "date-fns";
import "./App.css";
import CalenderDays from "./components/CalenderDays";
import CalendarCells from "./components/CalenderCells";
import Modal from "./components/Modal";

function App() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <CalenderHeader
        currentMonth={currentMonth}
        onPrev={() => setCurrentMonth(subMonths(currentMonth, 1))}
        onNext={() => setCurrentMonth(addMonths(currentMonth, 1))}
      />
      <CalenderDays />
      <CalendarCells
        currentMonth={currentMonth}
        onDateClick={() => {
          setShowModal(true);
        }}
      />
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default App;
