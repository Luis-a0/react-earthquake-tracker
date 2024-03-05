import './App.css';
import 'leaflet/dist/leaflet.css';
import Mapa from './componentes/mapa';
import Navbar from './componentes/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Mapa/>
    </div>
  );
}

export default App;
