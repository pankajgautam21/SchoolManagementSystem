import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Cal.css';
import AttendanceSummary from './AttendanceSummary';
function Cal() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [attendanceData, setAttendanceData] = useState({
    '2023-08-15': 'present',
    '2023-08-16': 'absent',
    '2023-08-17': 'present',
    // ... Add more dates and data here
  });

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const totalWorkingDays = Array.from({ length: new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate() })
    .filter((_, index) => new Date(selectedDate.getFullYear(), selectedDate.getMonth(), index + 1).getDay() !== 0 && new Date(selectedDate.getFullYear(), selectedDate.getMonth(), index + 1).getDay() !== 6)
    .length;

  const totalPresentDays = Object.values(attendanceData).filter(status => status === 'present').length;
  const overallAttendancePercentage = (totalPresentDays / totalWorkingDays) * 100;

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const dateString = date.toISOString().split('T')[0];
      const attendanceStatus = attendanceData[dateString];
      const isSunday = date.getDay() === 0;
      const isSaturday = date.getDay() === 6;

      return (
        <div
          className={`attendance-tile ${attendanceStatus} ${isSunday ? 'sunday' : ''} ${isSaturday ? 'saturday' : ''}`}
        >
          {attendanceStatus === 'present' ? 'P' : attendanceStatus === 'absent' ? 'A' : ''}
          {attendanceStatus !== '' && (
            <div className="tooltip">
              <span className="tooltip-text">{date.getDate()}</span>
              <div className="tooltip-content">
                {attendanceStatus === 'present' ? 'Present' : 'Absent'}
              </div>
            </div>
          )}
        </div>
      );
    }
  };

  return (
    <div className="App">
      <h1><center>Attendance</center></h1>
      <div className="calendar-container">
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          tileContent={tileContent}
        />
         <AttendanceSummary totalPresentDays={totalPresentDays} totalWorkingDays={totalWorkingDays} />
      </div>
     
    </div>
  );
}

export default Cal;
