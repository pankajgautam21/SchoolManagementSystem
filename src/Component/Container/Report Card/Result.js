// Result.js
import React, { useState } from 'react';
import './Result.css';
import { Resulticon, vector } from '../../../assests/icon';

// Dummy data for different exams and sessions
const examOptions = ['1st Term', '2nd Term', '3rd Term', 'Half Yearly', 'Yearly'];
const sessionOptions = ['2022-2023', '2023-2024', '2024-2025']; // Replace with your session data

const Result = () => {
  const [selectedExam, setSelectedExam] = useState(examOptions[0]);
  const [selectedSession, setSelectedSession] = useState(sessionOptions[0]);

  // Dummy result data for demonstration
  const mockResultData = [
    // Replace with actual result data for the selected exam and session
    { subject: 'Math', marks: 15, totalmark: 100 },
    { subject: 'Science', marks: 90, totalmark: 100 },
    { subject: 'English', marks: 90, totalmark: 100 },
    { subject: 'History', marks: 40, totalmark: 100 },
    // Add more mock data here...
  ];

  const totalObtainedMarks = mockResultData.reduce((total, result) => total + result.marks, 0);
  const totalMarks = mockResultData.reduce((total, result) => total + result.totalmark, 0);
  const percentage = totalMarks !== 0 ? ((totalObtainedMarks / totalMarks) * 100).toFixed(2) : 0;

  const determineSubjectStatus = (marks) => (marks >= 40 ? 'PASS' : 'FAIL');

  return (
    <div className="result-container">
      <a href="/card">
        <img src={vector} alt="Go back" />
      </a>
      <h2>
        <img src={Resulticon} alt="Result icon" /> Your Report Card
      </h2>
      <div className="result-selector">
        <label htmlFor="examSelect" className='mx-3'>Select Exam:</label>
        <select
          id="examSelect"
          onChange={(e) => setSelectedExam(e.target.value)}
          value={selectedExam}
        >
          {examOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <label htmlFor="sessionSelect" className='mx-3'>Select Session:</label>
        <select
          id="sessionSelect"
          onChange={(e) => setSelectedSession(e.target.value)}
          value={selectedSession}
        >
          {sessionOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {totalMarks === 0 ? (
        <p>No results available for the selected exam and session.</p>
      ) : (
        <div>
          <table className="result-table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Marks Obtained</th>
                <th>Total Marks</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {mockResultData.map((result, index) => (
                <tr key={index}>
                  <td>{result.subject}</td>
                  <td>{result.marks}</td>
                  <td>{result.totalmark}</td>
                  <td>{determineSubjectStatus(result.marks)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>
            <b>Total Marks Obtained: {totalObtainedMarks}/{totalMarks}</b>
          </p>
          <p>
            <b>Percentage: {percentage}%</b>
          </p>
        </div>
      )}
    </div>
  );
};

export default Result;
