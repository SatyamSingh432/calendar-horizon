import React, { useState } from "react";
import { format } from "date-fns";
import { v4 as uuidv4 } from "uuid";

const Modal = ({ date, events, onClose, onSave, onDelete }) => {
  const formattedDate = format(date, "yyyy-MM-dd");
  const dayEvents = events.filter((e) => e.date === formattedDate);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSave = () => {
    if (!title.trim()) return;

    const newEvent = {
      id: uuidv4(),
      title,
      description,
      date: formattedDate,
      startTime,
      endTime,
    };

    onSave(newEvent);
    setTitle("");
    setDescription("");
    setStartTime("");
    setEndTime("");
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-lg font-bold text-gray-600 hover:text-gray-800"
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-4 text-center text-gray-800">
          Events on {format(date, "PPP")}
        </h2>

        {dayEvents.length > 0 && (
          <div className="mb-4 space-y-2">
            {dayEvents.map((e) => (
              <div
                key={e.id}
                className="flex justify-between items-start bg-blue-100 p-3 rounded-lg"
              >
                <div className="flex-1">
                  <p className="font-semibold text-gray-700">{e.title}</p>
                  {e.description && (
                    <p className="text-sm text-gray-600">{e.description}</p>
                  )}
                  {(e.startTime || e.endTime) && (
                    <p className="text-xs text-gray-500 mt-1">
                      {e.startTime || "All day"}{" "}
                      {e.endTime ? `– ${e.endTime}` : ""}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => onDelete(e.id)}
                  className="ml-2 text-red-500 hover:text-red-600"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="space-y-3">
          <input
            type="text"
            className="w-full border rounded-lg p-2 text-sm"
            placeholder="Event title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="w-full border rounded-lg p-2 text-sm resize-none"
            placeholder="Optional description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
          />
        </div>

        <div className="flex space-x-2 mt-3">
          <div>
            <label className="block text-xs mb-1">Start Time</label>
            <input
              type="time"
              className="w-full border rounded-lg p-2 text-sm"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-xs mb-1">End Time</label>
            <input
              type="time"
              className="w-full border rounded-lg p-2 text-sm"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-end items-center mt-5">
          <button
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm rounded-lg"
          >
            Add Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
