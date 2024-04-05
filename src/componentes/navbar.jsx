import React, { useState } from 'react';
import '../css/navbar.css';
import { FaGithub } from 'react-icons/fa';

function Navbar({ handleTimeSpanChange, handleMagnitudeChange }) {
  const [selectedTimeSpan, setSelectedTimeSpan] = useState('hour');
  const [selectedMagnitude, setSelectedMagnitude] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'selectedTimeSpan') {
      setSelectedTimeSpan(value);
      handleTimeSpanChange(value);
    } else if (name === 'selectedMagnitude') {
      setSelectedMagnitude(value);
      handleMagnitudeChange(value);
    }
  };

  return (
    <>
      <div className='navbar'>
        <label className='label'>
          Terremotos de la última:
          <select
            value={selectedTimeSpan}
            onChange={handleChange}
            name="selectedTimeSpan"
            className='select'
          >
            <option value="hour">Hora</option>
            <option value="day">Día</option>
            <option value="week">Semana</option>
            <option value="month">Mes</option>
          </select>
        </label>

        <label className='label'>
          Magnitud:
          <select
            value={selectedMagnitude}
            onChange={handleChange}
            name="selectedMagnitude"
            className='select'
          >
            <option value="">Cualquier magnitud</option>
            <option value="2.5">2.5+</option>
            <option value="4.0">4.0+</option>
            <option value="6.0">6.0+</option>
          </select>
        </label>

        <hr className='hr' />
        <a href="https://github.com/Luis-a0/react-earthquake-tracker" className="github-link" target="_blank">
          <FaGithub className="github-icon" />
        </a>
      </div>
    </>
  );
}

export default Navbar;
