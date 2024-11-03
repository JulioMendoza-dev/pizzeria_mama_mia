import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/pages/Home.jsx';
import Register from './components/pages/Register.jsx';
import Login from './components/pages/Login.jsx';
import Cart from './components/pages/Cart.jsx';
import Pizza from './components/pages/Pizza.jsx';
import Profile from './components/pages/Profile.jsx';
import NotFound from './components/pages/NotFound.jsx';
import { Navbar } from 'react-bootstrap';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Home/></div>,
  },
  {
    path: "/register",
    element: <div><Register/></div>,
  },
  {
    path: "/login",
    element: <div><Login/></div>,
  },
  {
    path: "/cart",
    element: <div><Cart/></div>,
  },
  {
    path: "/pizza/p001",
    element: <div><Pizza/></div>,
  },
  {
    path: "/profile",
    element: <div><Profile/></div>,
  },
  {
    path: "/404",
    element: <div><NotFound/></div>,
  },
  {
    path: "*",
    element: <div><NotFound/></div>,
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={ router } />
    </StrictMode>,
)
