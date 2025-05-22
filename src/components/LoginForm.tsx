import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import "../admin.css";

const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin@dogandme.fr");
  const [password, setPassword] = useState("loulou2024");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    const success = await login(email, password);

    if (success) {
      navigate("/admin/dashboard");
    } else {
      setError("Email ou mot de passe incorrect.");
    }

    setLoading(false);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Connexion Admin</h2>

        <div className="input-wrapper">
          <span className="input-icon">📧</span>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
        </div>

        <div className="input-wrapper">
          <span className="input-icon">🔒</span>
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
        </div>

        <button
          onClick={handleLogin}
          disabled={loading}
          className={`login-button ${loading ? "disabled" : ""}`}
        >
          {loading ? "Connexion..." : "Se connecter"}
        </button>

        {error && <p className="login-error">{error}</p>}
      </div>
    </div>
  );
};

export default LoginForm;
