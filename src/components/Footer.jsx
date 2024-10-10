import React from "react";

function Footer() {
  return (
    <>
      <footer className="py-3 bg-dark" style={{ marginTop: "30px" }}>
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-white">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-white">
              Socio
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-white">
              Ofertas
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-white">
              Locales
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-white">
              Sobre nosotros
            </a>
          </li>
        </ul>
        <p className="text-center text-white">
          {" "}
          © 2024m - Pizzería Mamma Mia! - Todos los derechos reservados
        </p>
      </footer>
    </>
  );
}

export default Footer;
