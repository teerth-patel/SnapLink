import React from 'react';
import Login from './components/Login';
import SignUp from './components/Signup';
import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {
  return (
    <>
      <Router>
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h1>Welcome to SnapLink</h1>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} /> 
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
