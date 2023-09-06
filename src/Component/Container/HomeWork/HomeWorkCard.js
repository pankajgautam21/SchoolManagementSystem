// HomeWorkCard.js
import React from 'react';
import './Cards.css';

export default function HomeWorkCard(props) {
  return (
    <div className="homework-card my-2">
      <div className="homework-image-container">
        <img className="homework-image" src={props.image} alt="Subject" />
      </div>
      <div className="homework-content">
        <h3 className="homework-title">{props.SubjectName}</h3>
        <a href="#" className="homework-btn btn btn-primary">
          See Homework
        </a>
      </div>
    </div>
  );
}
