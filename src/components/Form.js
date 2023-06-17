import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Form = ({ updateTableData }) => {
  const [year, setYear] = useState("");
  const [party, setParty] = useState("");
  const [city, setCity] = useState("");
  const [votes, setVotes] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = { year, party, city, votes };

    fetch("http://localhost:8000/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Respuesta del servidor:", data);

        // Actualizar los datos en la tabla
        updateTableData(data);

        // Redirigir al dashboard
        history.push("/dashboard");
      })
      .catch((error) => {
        console.error("Error al enviar los datos:", error);
      });

    // Reiniciar los campos del formulario
    setYear("");
    setParty("");
    setCity("");
    setVotes("");
  };

  return (
    <div className="card p-4">
      <h2 className="card-title mb-4">Formulario</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="year" className="form-label">
            Año:
          </label>
          <input
            type="text"
            className="form-control"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="party" className="form-label">
            Partido Político:
          </label>
          <input
            type="text"
            className="form-control"
            id="party"
            value={party}
            onChange={(e) => setParty(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            Ciudad:
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="votes" className="form-label">
            Número de Votos:
          </label>
          <input
            type="text"
            className="form-control"
            id="votes"
            value={votes}
            onChange={(e) => setVotes(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      </form>
    </div>
  );
};

export default Form;
