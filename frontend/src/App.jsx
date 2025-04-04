import React from 'react';
import Login from './components/Login';
import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {
  return (
    <>
      <Router>
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
