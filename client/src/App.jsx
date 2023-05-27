
import Canvas from "./canvas"
import Customizer from "./pages/Customizer"
import { Navbar, Contact, Social,Faq } from "./components";

import Hero from "./pages/Hero";
import ErrorPage from "./components/Error404";
import React, { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";




import ScrollToTop from "react-scroll-to-top";
import { color } from "framer-motion";
function App() {
  return (
    <BrowserRouter>
      <div className=" relative  z-0 bg-main">
        <div className="bg-hero-pattern overflow-x-hidden">
          <Navbar />


          <Hero />

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

          <Contact />
        </div>

        <Social />
        <div>
          <div style={{ marginTop: "100vh" }} />
          <ScrollToTop
            smooth
            className="scrlltop"
            viewBox="0 0 150 250"
            top="100"
          />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
