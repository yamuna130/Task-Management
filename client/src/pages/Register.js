import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Only register styles

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      alert('Registration successful! Please login.');
      navigate('/login');
    } else {
      alert(data.error || 'Registration failed');
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url('/images/login.jpg')", // ✅ from public folder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px 0',
      }}
    >
      <div className="auth-container register-container">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
