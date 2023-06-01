import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/app/Home";
import ErrorPage from "./views/app/Error";
import "./index.css";
import Faq from "./views/app/Faq";
import Login from "./views/auth/Login";
import SignUp from "./views/auth/SignUp";
import blog from "./pages/Faq/Blog";
import { favicon } from "./assets";
import ScrollToTop from "react-scroll-to-top";
import MoonLoader from "react-spinners/MoonLoader";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="flex h-screen items-center justify-center bg-blue-100">
          <MoonLoader
            color="#293fce"
            ariaLabel="grid-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
          <img src={favicon} className="h-14 w-12 -ml-16"></img>
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route Component={Home} path="/" />
            <Route Component={Faq} path="/faq" />
            <Route Component={ErrorPage} path="/*" />
            <Route Component={Login} path="/login" />
            <Route Component={SignUp} path="/signup" />
            <Route Component={blog} path="/blog" />
          </Routes>

          <div>
            <ScrollToTop
              smooth
              className="scrlltop"
              viewBox="-60 5 270 160"
              top="100"
              color="white"
            />
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
