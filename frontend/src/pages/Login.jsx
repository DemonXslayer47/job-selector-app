import React, { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");

    // 🔥 FRONTEND VALIDATION (no backend logic touched)
    if (!email.trim() || !password.trim()) {
      setError("Email and Password are required.");
      return;
    }

    try {
      const res = await api.post("/auth/login", { email, password });
localStorage.setItem("token", res.data.token);
localStorage.setItem("email", email);
navigate("/dashboard");

    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="auth-page-gradient">

      <div className="auth-wrapper">

        {/* <h2 className="auth-title">
          Job Selector – Intelligent Job & Course Recommendation System
        </h2> */}

        <div className="auth-card-large login-card-height">
          <h3 className="auth-heading">Login</h3>

          {/* 🔥 show validation message */}
          {error && <p className="error-msg">{error}</p>}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="auth-btn" onClick={handleLogin}>Login</button>

          <p className="forgot-text" onClick={() => navigate("/forgot-password")}>
            Forgot Password?
          </p>

          <p className="auth-footer">
            Don’t have an account?{" "}
            <span onClick={() => navigate("/register")}>Register</span>
          </p>
        </div>
      </div>
    </div>
  );
}
