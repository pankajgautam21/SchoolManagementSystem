// TimetableRow.js
import React from 'react';

function TimetableRow({ time, subject, teacher, room }) {
  return (
    <tr className="timetable-row">
      <td className="time">{time}</td>
      <td className="subject">{subject}</td>
      <td className="teacher">{teacher}</td>
      <td className="room">{room}</td>
    </tr>
  );
}

export default TimetableRow;
