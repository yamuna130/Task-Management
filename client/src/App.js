import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Tasks from './pages/Tasks';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ padding: '1rem' }}>
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
