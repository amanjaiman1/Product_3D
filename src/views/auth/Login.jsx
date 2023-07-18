import React, { useState, useEffect } from "react";
import { googleImg } from "../../assets";
import Cookies from "js-cookie";
import { AiFillEye } from "react-icons/ai";
import { BsFillEyeSlashFill } from "react-icons/bs";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, db, googleProvider } from "../../firebase/firebase";
import "react-toastify/dist/ReactToastify.css";
import createError from "../../utils/errorHandler";
import ToastMake from "../../utils/toastMaker";
import { Link, useNavigate } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [hideshowPassword, setHideShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetSent, setResetSent] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState(false);
  const handleResetPassword = async (event) => {
    event.preventDefault();
    try {
      const res = await sendPasswordResetEmail(auth, email);
      console.log(res);
      setResetSent(true);
    } catch (error) {
      if (error.message === "Firebase: Error (auth/missing-email).") {
        toast.error("Kindly, provide a email", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 1,
          theme: "dark",
        });
      }
    }
  };

  //google auth
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider).then(async (data) => {
      const user = await getDoc(doc(db, "users", data.user.uid)).catch((err) =>
        console.log(err)
      );
      if (!user.exists()) {
        toast.error("User Not Found");
        return;
      }
      let userInfo = { ...user.data(), uid: user.id };
      console.log(data);
      Cookies.set("access_token", data.user.accessToken, { expires: 3600 });
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      navigate("/app/customizer");
    });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      ToastMake("Fields can't be empty!!", "error");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Cookies.set("access_token", email, { expires: 7 });
      navigate("/app/customizer");
    } catch (error) {
      // let type = ;
      createError(error.code, "error");
      // console.log(error.message);
      // setError(true);
    }
  };
  useEffect(() => {
    async function getVerify() {
      let userInfo = JSON.parse(await localStorage.getItem("userInfo"));
      let access_token = await Cookies.get("access_token");
      if (access_token && userInfo) {
        const response = await axios
          .post("http://localhost:3000/v1/verify", {
            access_token: access_token,
            ...userInfo,
          })
          .catch((err) => console.log(err));
        if (response?.data?.isVerified) {
          navigate("/app/customizer");
        }
      }
    }
    getVerify();
  }, []);
  return (
    <section className="loginSec min-h-screen flex items-center justify-center">
      <div className="loginDiv flex rounded-2xl shadow-lg max-w-7xl items-center p-20">
        <div className=" w-full">
          <h2 className="text-3xl text-[#b7ecff]">
            Welcome back to <span className="font-semibold">Fashion Froze</span>{" "}
          </h2>
          <p className="text-sm max-sm:text-[10px] mt-2 text-[#b6d2ff]">
            Where creativity meets your wardrobe, once again
          </p>
          <form action="" className="flex flex-col gap-4">
            <input
              className="p-2 mt-8 max-sm:mt-4 max-sm:h-8 rounded-[5px] border font-normal"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {resetSent ? (
              ""
            ) : (
              <div className="flex border-2 rounded-xl">
                <input
                  type={!hideshowPassword ? "password" : "text"}
                  className="p-2  w-full rounded-l-xl"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="pl-2 bg-white">
                  {hideshowPassword ? (
                    <AiFillEye
                      onClick={() => setHideShowPassword(!hideshowPassword)}
                      className="h-full bg-white rounded-r-xl cursor-pointer "
                    />
                  ) : (
                    <BsFillEyeSlashFill
                      onClick={() => setHideShowPassword(!hideshowPassword)}
                      className="h-full bg-white rounded-r-xl cursor-pointer"
                    />
                  )}
                </div>
              </div>
            )}
            <Link
              to={"#"}
              onClick={handleResetPassword}
              className="text-sm max-sm:text-[10px] text-[#bec9ff] text-right cursor-pointer"
            >
              Forgot your password?
            </Link>
            <button
              className={`bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl text-white p-3 hover:scale-105 duration-300 max-w-full ${
                showPopup ? "cursor-not-allowed pointer-events-none" : ""
              }`}
              onClick={(e) => {
                handleLoginSubmit(e);
              }}
            >
              Login
            </button>
          </form>
          <div className="forgot-password-popup">
            {resetSent ? (
              <p className="mt-2">
                {error
                  ? "Something went wrong"
                  : "Password reset email sent. Please check your inbox."}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>
          <button
            className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]"
            onClick={handleGoogleSignIn}
          >
            <img src={googleImg} className="w-5 h-5 mr-2" alt="" />
            Login with Google
          </button>

          <div className="mt-3 text-xs flex justify-center items-center text-[#c0fffa] mb-2">
            <p>Don't have an account?&nbsp;</p>
            <Link className="text-blue-300" to="/signup">
              {" "}
              Signup
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Login;
