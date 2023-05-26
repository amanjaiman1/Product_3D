import Canvas from "./canvas"
import Customizer from "./pages/Customizer"
import Home from "./pages/Home"
import ErrorPage from "./components/404Error"
import Faq from "./components/FaqApp"
import { Navbar, Contact, Social } from "./components";
import Hero from "./pages/Hero";
import ErrorPage from "./components/Error404"
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom"



function App() {
  return (
    <BrowserRouter>
      <div className=" relative  z-0 bg-main">
        <div className="bg-hero-pattern overflow-x-hidden">
          <Navbar />
          <Hero />
        </div>
        <main className="app transition-all ease-in">
          <Canvas />
          <Customizer />
        </main>
        <div className="relative z-0">
            <Contact />
        </div>
        <Social />
      </div>

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home isActive={active} />
                <Canvas />
              </>
            }
          />
          <Route path="/home" element={<Home />} />
          <Route path="/faq" element={<Faq />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    
    </main>
    </BrowserRouter>
  )
}

export default App
