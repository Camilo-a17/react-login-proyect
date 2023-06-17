import React, { useEffect, useState } from "react";

const DataTable = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:8000/data")
      .then((response) => response.json())
      .then((data) => {
        setTableData(data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  };

  return (
    <div className="card p-4">
      <h2 className="card-title mb-4">Tabla de datos</h2>
      <table className="table">
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


