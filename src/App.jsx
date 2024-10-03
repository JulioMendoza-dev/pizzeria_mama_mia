import React from 'react'
import CardPizza from "./components/CardPizza"
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar"
import RegisterPage from './components/RegisterPage';

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <RegisterPage/>
    <Footer />
    </>
  )
}

export default App

