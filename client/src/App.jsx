import Canvas from "./canvas"
import Customizer from "./pages/Customizer"
import { Navbar, Contact, Social,Faq } from "./components";
import Hero from "./pages/Hero";
import ErrorPage from "./components/Error404"
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <div className=" relative  z-0 bg-main">
        <div className="bg-hero-pattern overflow-x-hidden">
          <Navbar />
        </div>
        <main className="app transition-all ease-in" >
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Canvas />
          <Customizer />
        </main>
        <div className="relative z-0">
      
        
        </div>
        {/* <Social /> */}
      </div>
    </BrowserRouter>
  )
}

export default App
