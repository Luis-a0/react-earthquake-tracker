import React from 'react';
import { useState } from 'react';

import '../css/navbar.css';
import { FaGithub } from 'react-icons/fa';

function Navbar({ handleTimeSpanChange }){
    const [selectedTimeSpan, setselectedTimeSpan] = useState('hour');

    const handleChange = (e) => {
        const value = e.target.value;
        setselectedTimeSpan(value);
        handleTimeSpanChange(value);
      };

    return (
        <>
        <div className='navbar'>
            <label className='label'>
                Terremotos de la última:
                <select value={selectedTimeSpan}
                        onChange={handleChange}
                        name="selectedTimeSpan"
                        className='select'>
                    <option value="hour">Hora</option>
                    <option value="day">Día</option>
                    <option value="week">Semana</option>
                    <option value="month">Mes</option>
                </select>
            </label>
            <hr className='hr'/>
            <a href="https://github.com/Luis-a0/react-earthquake-tracker" className="github-link" target="_blank"> 
                <FaGithub className="github-icon" /> 
            </a>
        </div>
    </>
    );
}

export default Navbar;