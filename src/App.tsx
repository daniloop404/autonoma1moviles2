import React from 'react';
import AreaCuadrado from './components/AreaCuadrado';
import SumaArreglo from './components/SumaArreglo';
import DividirArreglo from './components/DividirArreglo';
import ParImpar from './components/ParImpar';
import DatosArray from './components/DatosArray';
import PromedioCalificaciones from './components/PromedioCalificaciones';
import Acumulador from './components/Acumulador';

function App() {
  return (
    <div className="App container">
      <div className="my-3">
        <AreaCuadrado />
      </div>
      <div className="my-3">
        <SumaArreglo />
      </div>
      <div className="my-3">
        <DividirArreglo />
      </div>
      <div className="my-3">
        <ParImpar />
      </div>
      <div className="my-3">
        <DatosArray />
      </div>
      <div className="my-3">
        <PromedioCalificaciones />
      </div>
      <div className="my-3">
        <Acumulador />
      </div>
    </div>
  );
}

export default App;