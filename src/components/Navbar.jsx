import React from "react";
import cartPizzas from "../assets/cartPizza";
import { Link } from "react-router-dom";

function Navbar() {
  const total = 0;
  const token = false;
  
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid ">
          <Link className="navbar-brand text-white" to="/">
            <h4>Mamma - mia !</h4>
          </Link>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            
          </button>

          <div className="collapse navbar-collapse " id="navbarNav">
            
              <ul className="navbar-nav gap-5">
                <li className="nav-item">
                  <Link
                    className="nav-link text-white active border border-warning"
                    aria-current="page"
                    to="/"
                  >
                    <img src="/trozo-pizza.webp" width="25" height="20" /> Home
                  </Link>
                </li>                
                <li className="nav-item">
                  <Link
                    className="nav-link text-white border border-warning"
                    to="/register"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-lock"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
                    </svg>{" "}
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-white border border-warning"
                    to="/login"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-lock"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
                    </svg>{" "}
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-white border border-warning"
                    to="/cart"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-lock"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
                    </svg>{" "}
                    Cart {cartPizzas.length}
                  </Link>
                </li>
              </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
