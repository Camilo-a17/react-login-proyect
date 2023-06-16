import React, { useEffect, useState } from 'react';

const DataTable = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/data')
      .then((response) => response.json())
      .then((data) => {
        setTableData(data);
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);

  return (
    <div>
      <h2>Tabla de datos</h2>
      <table>
        <thead>
          <tr>
            <th>Año</th>
            <th>Partido Político</th>
            <th>Ciudad</th>
            <th>Número de Votos</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id}>
              <td>{row.year}</td>
              <td>{row.party}</td>
              <td>{row.city}</td>
              <td>{row.votes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

