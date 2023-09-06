// Page.js
import React from 'react';
import { Study, vector } from '../../../assests/icon';
import HomeWorkCard from './HomeWorkCard';
import './Page.css';

const subjects = [
  {
    id: 1,
    color: '#FFC7EA',
    title: 'Maths',
    img:
      'https://images.pexels.com/photos/2097/desk-office-pen-ruler.jpg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    color: '#FBF0B2',
    title: 'Physics',
    img:
      'https://images.pexels.com/photos/4126743/pexels-photo-4126743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    color: '#D8B4F8',
    title: 'English',
    img:
      'https://images.pexels.com/photos/6958535/pexels-photo-6958535.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 4,
    color: '#CAEDFF',
    title: 'Hindi',
    img:
      'https://images.pexels.com/photos/8612992/pexels-photo-8612992.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Page() {
  return (
    <div className="page-container">
      <a href="#">
        <img src={vector} className="vector-icon" alt="icon" />
      </a>
      <div className="heading">
        <img src={Study} alt="icon" />
        <h1>Home-Work</h1>
      </div>
      <div className="homework-cards">
        {subjects.map((component) => (
          <HomeWorkCard
            key={component.id}
            SubjectName={component.title}
            image={component.img}
            color={component.color}
          />
        ))}
      </div>
    </div>
  );
}
