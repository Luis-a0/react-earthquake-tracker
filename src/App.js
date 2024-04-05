import './css/App.css';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';

import Mapa from './componentes/mapa';
import Navbar from './componentes/navbar';

function App() {
  const [selectedTimeSpan, setSelectedTimeSpan] = useState('hour');
  const [selectedMagnitude, setSelectedMagnitude] = useState(null);


  const handleTimeSpanChange = (value) => {
    setSelectedTimeSpan(value);
  };

  const handleMagnitudeChange = (value) => {
    setSelectedMagnitude(parseFloat(value));
  };
    
  return (
    <div className="App">
      <Navbar handleTimeSpanChange={handleTimeSpanChange} handleMagnitudeChange={handleMagnitudeChange} />
      <Mapa selectedTimeSpan={selectedTimeSpan} selectedMagnitude={selectedMagnitude} />
    </div>
  );
}

export default App;
