import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./views/app/Home";
import ErrorPage from "./views/app/Error";
import "./index.css";
import Faq from "./views/app/Faq";
import Login from "./views/auth/Login";
import SignUp from "./views/auth/SignUp";
import BlogPage from "./views/app/Blog";
import { favicon } from "./assets";
import UserTest from "./test/user.test";
import AutoScroll from "./utils/AutoScroll";
import ScrollToTop from "react-scroll-to-top";

import MoonLoader from "react-spinners/MoonLoader";
import ContributorPage from "./views/app/ContributorPage";

import { Middle } from "./pages/Middle/secondPagePipeline";

import Guide from "./views/app/Guide";
import Customizer from "./views/app/Customizer";
import { HashLoader } from "react-spinners";

function App() {
  const [loading, setLoading] = useState(false);
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  // Function to handle successful authentication
  const handleAuthenticationSuccess = () => {
    setUserAuthenticated(true);
  };

  return (
    <div>
      {loading ? (
        <div className="flex h-screen items-center justify-center bg-blue-100">
          <HashLoader
            color="#293fce"
            ariaLabel="grid-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
          {/* <img src={favicon} className="h-14 w-12 -ml-16"></img> */}
        </div>
      ) : (
        <BrowserRouter>
          <AutoScroll />
          <Routes>
            <Route
              path="/"
              element={
                userAuthenticated ? (
                  <Navigate to="/home" replace={true} />
                ) : (
                  <Login onAuthenticationSuccess={handleAuthenticationSuccess} />
                )
              }
            />
            <Route path="/home" element={<Home />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<ContributorPage />} />
            <Route path="/login" element={<Login onAuthenticationSuccess={handleAuthenticationSuccess} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/test" element={<Customizer />} />
            <Route path="/tshirt-customisation" element={<Middle />} />
            <Route path="/guidebook" element={<Guide />} />
            <Route path="*" element={<ErrorPage />} />
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
