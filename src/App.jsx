import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/app/Home";
import ErrorPage from "./views/app/Error";
import "./index.css";
import Faq from "./views/app/Faq";
import Login from "./views/auth/Login";
import SignUp from "./views/auth/SignUp";
import BlogPage from "./views/app/Blog";
import { favicon } from "./assets";
import AutoScroll from "./utils/AutoScroll";
import ScrollToTop from "react-scroll-to-top";
import MoonLoader from "react-spinners/MoonLoader";
import ContributorPage from "./views/app/ContributorPage";
import Guide from "./views/app/Guide";
import Customizer from "./views/app/Customizer";
import { HashLoader } from "react-spinners";
import EditorHome from "./views/app/EditorHome";
import Profile from "./views/app/Profile";
import PrivateRoute from "./utils/PrivateRoute";

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
      {/* {loading ? (
        <div className="flex h-screen items-center justify-center bg-blue-100">
          <HashLoader color="#293fce" aria-label="grid-loading" visible={"true"} />
        </div>
      ) : ( */}
      <BrowserRouter>
        <AutoScroll />
        <Routes>
          <Route Component={Home} path="/" />
          <Route Component={Faq} path="/faq" />
          <Route Component={ContributorPage} path="/contact" />
          <Route Component={ErrorPage} path="/*" />
          <Route Component={Login} path="/login" />
          <Route Component={SignUp} path="/signup" />
          <Route Component={BlogPage} path="/blog" />
          <Route Component={ErrorPage} path="/*" />
          <Route Component={Guide} path="/guidebook" />
          <Route
            element={
              <PrivateRoute>
                <Customizer />
              </PrivateRoute>
            }
            path="/app/customizer/editor/:designId"
          />
          <Route
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
            path="/app/customizer/profile"
          />
          <Route
            element={
              <PrivateRoute>
                <EditorHome />
              </PrivateRoute>
            }
            path="/app/customizer"
          />
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
      {/* )} */}
    </div>
  );
}

export default App;
