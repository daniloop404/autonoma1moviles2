import React from 'react';

const DatosArray: React.FC = () => {
  const datos: (number | string)[] = [7, 5, 'sistemas', 'hola', 'adios', 2];

  // Encuentra el texto más largo
  let textoMayor = '';
  const textos = datos.filter(item => typeof item === 'string') as string[];

  for (const texto of textos) {
    if (texto.length > textoMayor.length) {
      textoMayor = texto;
    }
  }

  // Calcula las operaciones matemáticas (con los tres datos numéricos)
  const numeros = datos.filter(item => typeof item === 'number') as number[];
  
  let suma = 0;
  let resta = 0;
  let multiplicacion = 1;
  let division = 1;
  let modulo = 0;

  if (numeros.length === 3) {
    suma = numeros[0] + numeros[1] + numeros[2];
    resta = numeros[0] - numeros[1] - numeros[2];
    multiplicacion = numeros[0] * numeros[1] * numeros[2];
    division = numeros[0] / numeros[1] / numeros[2];
    modulo = numeros[0] % numeros[1] % numeros[2];
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Datos del Arreglo</h2>
      <p className="mb-3">Arreglo original: {datos.join(', ')}</p> {/* Mostrar el arreglo original */}
      <p className="mb-3">Texto mayor: {textoMayor}</p>
      {numeros.length === 3 && (
        <div>
          <p className="mb-1">Suma: {suma}</p>
          <p className="mb-1">Resta: {resta}</p>
          <p className="mb-1">Multiplicación: {multiplicacion}</p>
          <p className="mb-1">División: {division}</p>
          <p>Módulo: {modulo}</p>
        </div>
      )}
    </div>
  );
};

export default DatosArray;