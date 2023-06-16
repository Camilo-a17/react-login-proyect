import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Form = () => {
  const [year, setYear] = useState('');
  const [party, setParty] = useState('');
  const [city, setCity] = useState('');
  const [votes, setVotes] = useState('');
  const [dataUpdated, setDataUpdated] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = { year, party, city, votes };

    fetch('http://localhost:8000/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Respuesta del servidor:', data);

        // Aquí puedes realizar acciones adicionales después de enviar los datos al servidor

        // Redirigir al dashboard
        history.push('/dashboard');

        // Indicar que los datos han sido actualizados
        setDataUpdated(true);
      })
      .catch((error) => {
        console.error('Error al enviar los datos:', error);
      });

    // Reiniciar los campos del formulario
    setYear('');
    setParty('');
    setCity('');
    setVotes('');
  };

  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Año:
          <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
        </label>
        <label>
          Partido Político:
          <input type="text" value={party} onChange={(e) => setParty(e.target.value)} />
        </label>
        <label>
          Ciudad:
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
        </label>
        <label>
          Número de Votos:
          <input type="text" value={votes} onChange={(e) => setVotes(e.target.value)} />
        </label>
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default Form;

