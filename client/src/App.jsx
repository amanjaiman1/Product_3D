import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import { Navbar, Contact, Social } from "./components";
import Hero from "./pages/Hero";
import ErrorPage from "./components/Error404";
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Loading from "./components/PreLoader";
import ScrollToTop from "react-scroll-to-top";
import { color } from "framer-motion";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
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
        </div>
      )}
    </div>
  );
}

export default App;
