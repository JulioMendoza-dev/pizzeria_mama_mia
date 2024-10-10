import React from 'react'
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar"
import Register from './components/Register';
import Cart from './components/Cart';


function App() {
  return (
    <>
    <Navbar />
    <Home/>
    <Register/>                     
    <Cart/>
    <Footer/>
    </>
  )
}

export default App

 