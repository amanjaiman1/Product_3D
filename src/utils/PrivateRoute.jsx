import axios from "axios";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
function PrivateRoute({ children }) {
  const [loading, setloading] = useState(true);
  const [isAuth, setisAuth] = useState(false);
  let access_token = Cookies.get("access_token");
  useEffect(() => {
    async function getVerify() {
      let userInfo = await JSON.parse(localStorage.getItem("userInfo"));
      if (access_token) {
        const response = await axios
          .post(`${import.meta.env.VITE_APP_BASEURL}/v1/verify`, {
            access_token: access_token,
            ...userInfo,
          })
          .catch((err) => {
            setloading(false);
            console.log(err);
          });
        if (response?.data?.isVerified) {
          setisAuth(true);
        }
      }
      setloading(false);
    }
    window.addEventListener("storage", async () => {
      window.location.reload();
    });

    getVerify();
    return () => {
      window.removeEventListener("storage", () => {});
    };
  }, []);
  return loading ? (
    <h1>Loading...</h1>
  ) : isAuth ? (
    children
  ) : (
    <Navigate to={"/login"} replace />
  );
}
export default PrivateRoute;
