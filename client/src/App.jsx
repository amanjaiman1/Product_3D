import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/app/Home";
import ErrorPage from "./views/app/Error";
import "./index.css";
import Faq from "./views/app/Faq";
import Login from "./views/auth/Login";
import SignUp from "./views/auth/SignUp";
import blog from "./views/app/Blog";
import { favicon } from "./assets";
import UserTest from "./test/user.test";

import MoonLoader from "react-spinners/MoonLoader";
import ContributorPage from "./views/app/ContributorPage";
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
            <Route Component={ContributorPage} path="/contact" />
            <Route Component={ErrorPage} path="/*" />
            <Route Component={Login} path="/login" />
            <Route Component={SignUp} path="/signup" />
            <Route Component={blog} path="/blog" />
            <Route Component={UserTest} path="/test" />
            <Route Component={ErrorPage} path="/*" />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
