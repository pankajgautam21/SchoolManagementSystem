import React from 'react';
import './AttendanceSummary.css'; // Import your CSS file

const AttendanceSummary = ({ totalPresentDays, totalWorkingDays }) => {
  const attendancePercentage = ((totalPresentDays / totalWorkingDays) * 100).toFixed(2);

  return (
    <div className="attendance-summary">
      <h2>Attendance Summary</h2>
      <div className="attendance-data">
        <p>Total Working Days: {totalWorkingDays}</p>
        <p>Present Days: {totalPresentDays}</p>
        <p>Absent Days: {totalWorkingDays - totalPresentDays}</p>
        <p>Attendance Percentage: {attendancePercentage}%</p>
      </div>
    </div>
  );
};

export default AttendanceSummary;
