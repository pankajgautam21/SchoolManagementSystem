// Timetable.js
import React, { useState, useEffect } from 'react';
import TimetableHeader from './TimeTableHeader';
import TimetableRow from './TimeTablerow';
import './TimeTable.css'; // Import your CSS file
function Timetable() {
  // Sample mock timetable data
  const mockTimetableData = [
    {
      time: '9:00 AM - 10:30 AM',
      subject: 'Mathematics',
      teacher: 'Mr. Smith',
      room: 'Room 101',
    },
    {
      time: '10:45 AM - 12:15 PM',
      subject: 'Science',
      teacher: 'Mrs. Johnson',
      room: 'Room 102',
    },
    // Add more mock entries as needed
  ];
 
  const [timetable, setTimetable] = useState([]);
  const [currentDate, setCurrentDate] = useState('');
  useEffect(() => {
    // Simulate fetching data from an API (replace with your API call)
    setTimeout(() => {
      setTimetable(mockTimetableData);
      const today = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      setCurrentDate(today.toLocaleDateString(undefined, options));
    }, 1000);
  }, []);

  return (
    <div className="timetable-container">
      <TimetableHeader currentDate={currentDate} />
      {timetable.length === 0 ? (
        <p className="no-timetable-message">No timetable available.</p>
      ) : (
      <div className="timetable-grid">
        {timetable.map((entry, index) => (
          <TimetableRow
            key={index}
            time={entry.time}
            subject={entry.subject}
            teacher={entry.teacher}
            room={entry.room}
          />
        ))}
      </div>)}
    </div>
  );
}

export default Timetable;
