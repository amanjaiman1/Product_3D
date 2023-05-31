import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/app/Home";
import ErrorPage from "./views/app/Error";
import "./index.css";
import Faq from "./views/app/Faq";
import Login from "./views/auth/Login";
import SignUp from "./views/auth/SignUp";

import { Grid } from "react-loader-spinner";

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
          <Grid
            color="#293fce"
            ariaLabel="grid-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            size={12}
          />
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route Component={Home} path="/" />
            <Route Component={Faq} path="/faq" />
            <Route Component={ErrorPage} path="/*" />
            <Route Component={Login} path="/login" />
            <Route Component={SignUp} path="/signup" />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
