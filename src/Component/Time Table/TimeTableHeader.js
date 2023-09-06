// TimetableHeader.js
import React from 'react';
import { Timetablemarked } from '../../assests/icon';
function TimetableHeader({ currentDate }) {
  return (
    <div className="timetable-header">
      <img src={Timetablemarked}></img>
      <h1>Today's Timetable</h1>
      <p>{currentDate}</p>
    </div>
  );
}

export default TimetableHeader;
