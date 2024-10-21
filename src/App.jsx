import React from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Cart />
      <Footer />

    </>
  );
}

export default App;
