import { Routes, Route } from 'react-router-dom';
import Calculator from './views/Calculator/calculator';
import Home from './views/Home/Home';
import TerminosYCondiciones from './views/Legal/T&C';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/t&c" element={<TerminosYCondiciones />} />
        <Route path="/simulador" element={<Calculator />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
