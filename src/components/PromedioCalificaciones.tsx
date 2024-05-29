import React from 'react';

interface Alumno {
  name: string;
  edad: number;
  calificacion: number;
}

const PromedioCalificaciones: React.FC = () => {
  const alumnos: Alumno[] = [
    {
      name: 'Viviana',
      edad: 19,
      calificacion: 10,
    },
    {
      name: 'Wendy',
      edad: 20,
      calificacion: 8,
    },
    {
      name: 'Gerson',
      edad: 18,
      calificacion: 9,
    },
  ];

  const promedio =
    alumnos.reduce((acc, alumno) => acc + alumno.calificacion, 0) /
    alumnos.length;

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Promedio de Calificaciones</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Edad</th>
            <th scope="col">Calificación</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((alumno, index) => (
            <tr key={index}>
              <td>{alumno.name}</td>
              <td>{alumno.edad}</td>
              <td>{alumno.calificacion}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-center mt-3">Promedio de calificaciones: {promedio.toFixed(2)}</p>
    </div>
  );
};

export default PromedioCalificaciones;