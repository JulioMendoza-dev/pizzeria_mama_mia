import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { UserContext } from './components/UserContext';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Footer from './components/Footer';  // Importa el Footer aquí

const App = () => {
  const { token } = useContext(UserContext);

  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <Navbar />  {/* Renderiza el Navbar aquí */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={token ? <Navigate to="/" /> : <Login />} />
          <Route path="/register" element={token ? <Navigate to="/" /> : <Register />} />
          <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />
        </Routes>
      </div>
      <Footer />  {/* Renderiza el Footer aquí */}
    </BrowserRouter>
  );
};

export default App;
