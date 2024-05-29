import React, { useState } from 'react';

const AreaCuadrado: React.FC = () => {
  const [lado, setLado] = useState<number | string>('');
  const [area, setArea] = useState<number | null>(null);

  const calcularArea = (lado: number) => {
    return lado * lado;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLado(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const ladoNumerico = parseFloat(lado.toString());
    if (!isNaN(ladoNumerico)) {
      setArea(calcularArea(ladoNumerico));
    } else {
      setArea(null);
      alert('Por favor, ingrese un número válido.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Calcular Área de un Cuadrado</h2>
      <form onSubmit={handleSubmit} className="form-inline">
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="lado" className="sr-only">
            Lado del cuadrado:
          </label>
          <input
            type="text"
            className="form-control"
            id="lado"
            value={lado}
            onChange={handleInputChange}
            placeholder="Ingrese el lado"
          />
        </div>
        <button type="submit" className="btn btn-primary mb-2">
          Calcular
        </button>
      </form>
      {area !== null && (
        <div className="alert alert-success mt-3" role="alert">
          <p className="text-center">El área del cuadrado es: {area}</p>
        </div>
      )}
    </div>
  );
};

export default AreaCuadrado;