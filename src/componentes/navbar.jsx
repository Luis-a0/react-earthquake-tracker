import React from 'react';
import { useState } from 'react';

import '../css/navbar.css';

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
            <p className='selectedTimeSpan'>Tiempo seleccionado: {selectedTimeSpan}</p>
        </div>
    </>
    );
}

export default Navbar;