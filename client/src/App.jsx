import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/app/Home";
import ErrorPage from "./views/app/Error";
import './index.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Home} path="/"/>
        <Route Component={ErrorPage} path="/*"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
