//login page
import React, { useState, useEffect } from "react";
import { googleImg, loginImgGif } from "../../assets";
import Cookies from "js-cookie";
import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetSent, setResetSent] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    type: "success",
  });
  const [showPopup, setShowPopup] = useState(false);
  const handleResetPassword = async (event) => {
    event.preventDefault();
    try {
      const res = await sendPasswordResetEmail(auth, email);
      console.log(res);
      setResetSent(true);
    } catch (error) {
      console.log("Error sending reset password email:", error);
    }
  };

  //google auth
  const [value, setValue] = useState("");
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider).then((data) => {
      console.log(data);
      setValue(data.user.email);
      setValue(data.user.photoURL);
      setValue(data.user.DisplayName);
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("photoURL", data.user.photoURL);
      localStorage.setItem("displayName", data.user.displayName);
    });
  };
  useEffect(() => {
    setValue(localStorage.getItem("email"));
    setValue(localStorage.getItem("photoURL"));
    setValue(localStorage.getItem("displayName"));
  });

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/app/customizer");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section className="loginSec min-h-screen flex items-center justify-center">
      <div className="loginDiv shape flex rounded-[10px] shadow-lg items-center p-20 max-sm:p-10">
        {/* image container   */}

        {/* <div className="md:block hidden w-1/3 ml-20  ">
          <img src={loginImgGif} alt="" className="rounded-xl" />
        </div> */}

        <div className=" max-sm:w-[200px] max-sm:-10 max-sm:h-[] w-[500px]">
          <h2 className="text-3xl max-sm:text-2xl text-[#b7ecff]">
            Welcome back to <span className="font-semibold">Fashion Froze</span>{" "}
          </h2>
          <p className="text-sm max-sm:text-[10px] mt-2 text-[#b6d2ff]">
            Where creativity meets your wardrobe, once again
          </p>

          {/* form inputs */}

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
              <div className="relative">
                <input
                  className="p-2 max-sm:h-8 rounded-[5px] border w-full"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            )}
            <a
              href="#"
              onClick={handleResetPassword}
              className="text-sm max-sm:text-[10px] text-[#bec9ff] text-right cursor-pointer"
            >
              Forgot your password?
            </a>
            <button
              className={`bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl text-white p-3 hover:scale-105 duration-300 max-w-[400px] ${
                showPopup ? "cursor-not-allowed pointer-events-none" : ""
              }`}
              onClick={handleLoginSubmit}
            >
              Login
            </button>
          </form>
          <div className="forgot-password-popup">
            {resetSent ? (
              <p className="mt-2">
                Password reset email sent. Please check your inbox.
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
          {showPopup && <ForgotPasswordPopup />}
          {/* button inputs */}
          {value ? (
            navigate("/app/customizer")
          ) : (
            <button
              className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]"
              onClick={handleGoogleSignIn}
            >
              <img src={googleImg} className="w-5 h-5 mr-2" alt="" />
              Login with Google
            </button>
          )}
          <div className="mt-3 text-xs flex justify-center items-center text-[#c0fffa] mb-2">
            <p>Don't have an account?</p>
            <button className="py-2 px-5 ml-2 bg-white border rounded-xl hover:scale-110 duration-300">
              <a href="./Signup">Signup</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
