# React Calendar Event App

A simple and elegant calendar application built with React and Tailwind CSS. Users can click on any date, add events with time and description, view them inline, and persist data using localStorage.

---

## ✨ Features

- Month-view calendar grid
- Click a date to add/view events
- Event details: title, optional description, time range
- Show up to 2 events per day in the grid, with "+ more" indicator
- Delete events
- Events persist in localStorage

---

## 📸 Screenshot
<img width="1426" alt="Screenshot 2025-06-14 at 11 42 23 AM" src="https://github.com/user-attachments/assets/e60b9d64-9e1d-4bf3-bf6d-1bc41f9f96b6" />

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/SatyamSingh432/calender-horizon.git
cd calender-horizon
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

> The app will be available at [http://localhost:5173](http://localhost:5173)

---

## 🚠 Tech Stack

- **React** – UI framework
- **Vite** – Fast development build tool
- **Tailwind CSS** – Utility-first styling
- **date-fns** – Date manipulation and formatting
- **uuid** – Generates unique event IDs
- **localStorage** – Persisting event data

---

## 📂 Project Structure

```
src/
├── components/
│   ├── CalendarCells.jsx
│   ├── CalendarDays.jsx
│   ├── CalendarHeader.jsx
│   └── Modal.jsx
├── App.jsx
├── App.css
└── main.jsx
```

---

## 📦 Dependencies

```json
"dependencies": {
  "date-fns": "^3.x",
  "uuid": "^9.x",
  "react": "^18.x",
  "react-dom": "^18.x"
}
```

---

## 🔧 Future Ideas

- Add support for recurring events
- Allow editing existing events
- Use a database/backend instead of localStorage
- Add week/day views
- Responsive mobile view improvements
