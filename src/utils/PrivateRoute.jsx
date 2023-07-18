import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Cookies from "js-cookie";

function PrivateRoute() {
  const isAuth = Cookies.get("access_token");
  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
}

export default PrivateRoute;
