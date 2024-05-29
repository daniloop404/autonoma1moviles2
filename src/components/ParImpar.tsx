import React, { useState } from 'react';

const ParImpar: React.FC = () => {
  const [numeros] = useState<number[]>([1, 2, 3, 4]);
  const [resultado, setResultado] = useState<string[]>([]);

  const identificarParImpar = (arr: number[]): string[] => {
    return arr.map(num => (num % 2 === 0 ? 'par' : 'impar'));
  };

  const handleCalcular = () => {
    const resultadoIdentificado = identificarParImpar(numeros);
    setResultado(resultadoIdentificado);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Identificar Par o Impar</h2>
      <p className="mb-3">Arreglo original: {numeros.join(', ')}</p>
      <button onClick={handleCalcular} className="btn btn-primary mb-3">
        Calcular
      </button>
      {resultado.length > 0 && (
        <div>
          <h3 className="mb-3">Resultado:</h3>
          <ul className="list-group">
            {resultado.map((texto, index) => (
              <li key={index} className="list-group-item">
                {texto}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ParImpar;