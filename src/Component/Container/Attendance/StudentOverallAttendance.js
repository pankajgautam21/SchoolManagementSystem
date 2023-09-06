// StudentOverallAttendance.js

import React from 'react';
import StudentDailyAttendance from './StudentDailyAttendance';

function StudentOverallAttendance({ attendanceData }) {
  return (
    <div className="student-attendance">
      <h2>Your Overall Attendance</h2>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((record) => (
            <StudentDailyAttendance
              key={record.date}
              date={record.date}
              present={record.present}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentOverallAttendance;
