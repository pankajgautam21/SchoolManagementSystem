// Card.js
import React from 'react';
import './Cards.css';

export default function Card(props) {
  return (
    <div className='my-3'>
      <a href={props.path} className={`card shadow`} style={{ backgroundColor: props.color}}>
        <div className="card-icon d-flex justify-content-center h-100">
          <div>
            <img src={props.icon} alt="Icon" />
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title w-100">{props.title}</h5>
        </div>
      </a>
    </div>
  );
}
