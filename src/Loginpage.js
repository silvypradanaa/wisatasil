import React from "react";
import { useNavigate } from "react-router-dom";
import './Style.css'; // Import CSS

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/list");
  };

  return (
    <div className="container">
      <h1>Welcome to Wisata Silvy</h1>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button onClick={handleLogin}>Sign In</button>
    </div>
  );
}

export default Login;
