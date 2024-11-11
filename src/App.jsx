// App.jsx
import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Aquí Outlet se renderizará con la ruta actual */}
      <Footer />
    </>
  );
}

export default App;