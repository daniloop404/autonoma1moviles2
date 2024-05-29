import React, { useState } from 'react';

const Acumulador = () => {
  const [contador, setContador] = useState(25);

  const incrementar = () => {
    setContador(contador + 5);
  };

  const disminuir = () => {
    setContador(contador - 5);
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Contador</h2>
      <h2>{contador}</h2>
      <div className="d-flex">
        <button
          className="btn btn-primary me-2"
          onClick={incrementar}
          style={{ backgroundColor: '#0d6efd', borderColor: '#0d6efd' }}
        >
          +5
        </button>
        <button
          className="btn btn-primary"
          onClick={disminuir}
          style={{ backgroundColor: '#0d6efd', borderColor: '#0d6efd' }}
        >
          -5
        </button>
      </div>
    </div>
  );
};

export default Acumulador;