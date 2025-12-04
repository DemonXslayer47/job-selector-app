import React, { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    try {
      await axios.post("/auth/forgot-password", { email });
      alert("Reset link sent to your email");
      navigate("/login");
    } catch (err) {
      alert("Email not found");
    }
  };

  return (
    <div className="auth-page-gradient">

      <div className="auth-wrapper">

        <h2 className="auth-title">
          Reset Your Password
        </h2>

        <div className="auth-card-large login-card-height">
          <h3 className="auth-heading">Forgot Password</h3>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className="auth-btn" onClick={handleSubmit}>
            Send Reset Link
          </button>

          <p className="auth-footer">
            Remembered password?{" "}
            <span onClick={() => navigate("/login")}>Login</span>
          </p>
        </div>
      </div>
    </div>
  );
}
