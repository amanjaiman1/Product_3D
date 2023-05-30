import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/app/Home";
import ErrorPage from "./views/app/Error";
import './index.css'
import Faq from "./views/app/Faq";
// import LoginPage from "./pages/login/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Home} path="/"/>
        <Route Component={Faq} path="/faq"/>
        {/* <Route Component={LoginPage} path="/login"/> */}
        <Route Component={ErrorPage} path=""/> {/* please keep this the last path else '/*' means everything and is giving errors in the routes when typed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
