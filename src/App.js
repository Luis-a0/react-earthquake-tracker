import './App.css';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';

import Mapa from './componentes/mapa';
import Navbar from './componentes/navbar';

function App() {
  const [selectedTimeSpan, setSelectedTimeSpan] = useState('hour');

  const handleTimeSpanChange = (value) => {
    setSelectedTimeSpan(value);
  };
    
  return (
    <div className="App">
      <Navbar handleTimeSpanChange={handleTimeSpanChange} />
      <Mapa selectedTimeSpan={selectedTimeSpan} />
    </div>
  );
}

export default App;
