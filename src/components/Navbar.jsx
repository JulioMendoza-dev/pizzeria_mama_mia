import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { getTotalPrice } = useContext(CartContext); // Accede a la función getTotalPrice desde el contexto

  return (
    <nav className="navbar navbar-expand-lg bg-dark" >
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          <h4>Mamma - mia !</h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav gap-5">
            <li className="nav-item">
              <Link className="nav-link text-white active " to="/">
                <img src="/trozo-pizza.webp" width="25" height="20" /> Home
              </Link>
            </li>
            {/* Enlaces de registro e inicio de sesión */}
            <li className="nav-item">
              <Link className="nav-link text-white" to="/register">
                Registro
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/login">
                Iniciar Sesión
              </Link>
            </li>
            {/* Enlace al carrito con el total */}
            <li className="nav-item">
              <Link className="nav-link text-white" to="/cart">
            
                Carrito: ${getTotalPrice()} {/* Muestra el total de la compra */}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;