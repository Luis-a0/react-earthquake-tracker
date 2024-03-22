import React from 'react';
import { useState } from 'react';

function Navbar({ handleTimeSpanChange }){
    const [selectedTimeSpan, setselectedTimeSpan] = useState('hour');

    const handleChange = (e) => {
        const value = e.target.value;
        setselectedTimeSpan(value);
        handleTimeSpanChange(value);
      };

    return (
        <>
        <label>
            Terremotos de la última:
            <select value={selectedTimeSpan}
                    onChange={handleChange}
                    name="selectedTimeSpan">
                <option value="hour">Hora</option>
                <option value="day">Día</option>
                <option value="week">Semana</option>
                <option value="month">Mes</option>
            </select>
        </label>
        <hr />
        <p>Tiempo seleccionado: {selectedTimeSpan}</p>
    </>
    );
}

export default Navbar;