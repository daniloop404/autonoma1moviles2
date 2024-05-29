import React, { useState } from 'react';

const DividirArreglo: React.FC = () => {
  const [arreglo] = useState<number[]>([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
  const [resultado, setResultado] = useState<number[]>([]);

  const dividirArreglo = (arr: number[]): number[] => {
    return arr.map(num => num / 5);
  };

  const handleCalcular = () => {
    const resultadoDividido = dividirArreglo(arreglo);
    setResultado(resultadoDividido);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Dividir Arreglo por 5</h2>
      <h3 className="mb-3">Arreglo Original:</h3>
      <ul className="list-group mb-3">
        {arreglo.map((num, index) => (
          <li key={index} className="list-group-item">
            {num}
          </li>
        ))}
      </ul>
      <button onClick={handleCalcular} className="btn btn-primary mb-3">
        Calcular
      </button>
      {resultado.length > 0 && (
        <div>
          <h3 className="mb-3">Resultado:</h3>
          <ul className="list-group">
            {resultado.map((num, index) => (
              <li key={index} className="list-group-item">
                {num}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DividirArreglo;