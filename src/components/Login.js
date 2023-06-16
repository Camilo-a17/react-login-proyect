import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = () => {
    // Aquí puedes agregar la lógica de autenticación
    // Por simplicidad, comprobaremos el nombre de usuario y la contraseña en el archivo JSON

    fetch("http://localhost:8000/users")
      .then((response) => response.json())
      .then((data) => {
        const user = data.find(
          (user) => user.username === username && user.password === password
        );
        if (user) {
          history.push("/dashboard");
        } else {
          alert("Nombre de usuario o contraseña incorrectos");
        }
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
};

export default Login;
