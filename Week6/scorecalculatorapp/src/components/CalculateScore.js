import React from 'react';
import '../stylesheets/mystyle.css';

function CalculateScore() {
  const name = "John Doe";
  const school = "ABC High School";
  const total = 450;
  const goal = 500;

  const average = (total / goal) * 100;

  return (
    <div className="score-container">
      <h2>Student Score Calculator</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>School:</strong> {school}</p>
      <p><strong>Total Marks:</strong> {total}</p>
      <p><strong>Goal:</strong> {goal}</p>
      <p><strong>Average Score:</strong> {average.toFixed(2)}%</p>
    </div>
  );
}

export default CalculateScore;
