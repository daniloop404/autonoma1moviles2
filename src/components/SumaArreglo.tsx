import React, { useState } from 'react';

const SumaArreglo: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [suma, setSuma] = useState<number | null>(null);

  const calcularSuma = (arr: number[]): number => {
    return arr.reduce((acc, curr) => acc + curr, 0);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const numeros = inputValue.split(',').map(num => parseFloat(num.trim()));
    if (numeros.every(num => !isNaN(num))) {
      setSuma(calcularSuma(numeros));
    } else {
      setSuma(null);
      alert('Por favor, ingrese un arreglo de números válidos separados por comas.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Calcular Suma de un Arreglo</h2>
      <form onSubmit={handleSubmit} className="form-inline">
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="numeros" className="sr-only">
            Ingrese los números separados por comas:
          </label>
          <input
            type="text"
            className="form-control"
            id="numeros"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Ej: 1,2,3,4"
          />
        </div>
        <button type="submit" className="btn btn-primary mb-2">
          Calcular
        </button>
      </form>
      {suma !== null && (
        <div className="alert alert-success mt-3" role="alert">
          <p className="text-center">La suma de los elementos del arreglo es: {suma}</p>
        </div>
      )}
    </div>
  );
};

export default SumaArreglo;