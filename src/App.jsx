import { useState, useEffect } from "react";
import CalenderHeader from "./components/CalenderHeader";
import { addMonths, subMonths } from "date-fns";
import "./App.css";
import CalenderDays from "./components/CalenderDays";
import CalendarCells from "./components/CalenderCells";
import Modal from "./components/Modal";

function App() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [events, setEvents] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("events");
    if (stored) setEvents(JSON.parse(stored));
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("events", JSON.stringify(events));
    }
  }, [events, loaded]);

  const saveEvent = (event) => {
    setEvents([...events, event]);
    setShowModal(false);
  };

  const deleteEvent = (id) => {
    setEvents(events.filter((e) => e.id !== id));
    setShowModal(false);
  };
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
        events={events}
        onDateClick={(date) => {
          setSelectedDate(date);
          setShowModal(true);
        }}
      />
      {showModal && selectedDate && (
        <Modal
          date={selectedDate}
          events={events}
          onClose={() => setShowModal(false)}
          onSave={saveEvent}
          onDelete={deleteEvent}
        />
      )}
    </div>
  );
}

export default App;
