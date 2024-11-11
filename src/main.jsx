// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Cart from "./components/pages/Cart";
import Pizza from "./components/pages/Pizza";
import Profile from "./components/pages/Profile";
import NotFound from "./components/pages/NotFound";
import CounterProvider from "./context/CounterContext";
import { CartProvider } from "./context/CartContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Usa App como el contenedor principal
    children: [
      { path: "/", element: <Home /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/cart", element: <Cart /> },
      { path: "/pizza/p001", element: <Pizza /> },
      { path: "/profile", element: <Profile /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CounterProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </CounterProvider>
  </StrictMode>
);