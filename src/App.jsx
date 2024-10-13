import React from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Register from "./components/pages/Register";
import Cart from "./components/Cart";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Cart />
      <Navbar />
      <Home />
      <Register />
      <Footer />
    </>
  );
}

export default App;
