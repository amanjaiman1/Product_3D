import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db, googleProvider } from "../../firebase/firebase";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { googleImg, loginImgGif } from "../../assets";
import { HashLoader } from "react-spinners";
import createError from "../../utils/errorHandler";
import ToastMake from "../../utils/toastMaker";
import { async } from "regenerator-runtime";
import { doc, setDoc } from "firebase/firestore";
import Cookies from "js-cookie";
import ReCAPTCHA from "react-google-recaptcha";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null); // Added state for reCAPTCHA token

  const handleSignUpWithGoogle = (e) => {
    signInWithPopup(auth, googleProvider).then(async (data) => {
      const user = await setDoc(doc(db, "users", data.user.uid), {
        fullName: data.user.displayName,
        email: data.user.email,
        profilePic: data.user.photoURL,
      }).catch((err) => console.log(err));
      let userInfo = { ...user, uid: data.user.uid };
      // console.log(data);
      Cookies.set("access_token", data.user.accessToken, { expires: 3600 });
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      navigate("/app/customizer");
    });
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    if (!email || !password || !name) {
      ToastMake("Fields can't be empty!!", "error");
      return;
    }
    if (!validateEmail(email)) {
      ToastMake("Please enter a valid email address!", "error");
      return;
    }

    if (!validatePassword(password)) {
      ToastMake(
        "Password must contain at least one lowercase letter, one uppercase letter, one number, one special character, and be at least 8 characters long!",
        "error"
      );
      return;
    }

    if (password !== confirmPassword) {
      ToastMake("Passwords do not match!", "error");
      return;
    }

    // Check if the reCAPTCHA token is available
    if (!captchaToken) {
      ToastMake("Please verify that you're not a robot!", "error");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        const user = res.user;
        let userInfo = {
          fullName: name,
          email: email,
        };
        await setDoc(doc(db, "users", user.uid), userInfo).catch((err) =>
          console.log(err)
        );
        Cookies.set("access_token", res.user.accessToken, { expires: 3600 });
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        navigate("/app/customizer");
        setSubmitDisabled(false);
      })
      .catch((error) => {
        let type = "error";
        console.log(error);
        createError(error.code, type);
        setSubmitDisabled(false);
      });
  };

  function onChange(value) {
    console.log("Captcha value:", value);
    setCaptchaToken(value); // Update reCAPTCHA token when user interacts with reCAPTCHA
  }

  const validateEmail = (email) => {
    // Email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    // Password validation regex pattern
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return passwordPattern.test(password);
  };

  return (
    <section className="loginSec min-h-screen flex items-center justify-center">
      <div className="loginDiv shape flex rounded-[10px] shadow-lg items-center max-sm:p-10 p-10">
        {/* image container */}
        <div className="max-sm:w-[200px] max-sm:-10 max-sm:h-[] w-[500px]">
          <h2 className="text-3xl max-sm:text-2xl text-[#cadfff]">
            Welcome to
            <span className="font-semibold"> Fashion Froze </span>
          </h2>
          <p className="text-sm max-sm:text-[10px] mt-2 text-[#3cdcf5]">
            Where creativity meets your wardrobe
          </p>

          {/* Form inputs */}
          <form
            action=""
            className="flex flex-col gap-4 "
            onSubmit={handleRegistration}
          >
            <input
              className="p-2 mt-8 max-sm:mt-4 max-sm:h-8 rounded-[5px] border font-normal"
              type="UserName"
              name="UserName"
              placeholder="UserName"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="p-2 max-sm:h-8 rounded-[5px] border font-normal"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="p-2 max-sm:h-8 rounded-[5px] border w-full"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              placeholder="Password"
            />
            <input
              className="p-2 max-sm:h-8 rounded-[5px] border w-full"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              name="confirmPassword"
              placeholder="Confirm Password"
            />
            <ReCAPTCHA
              sitekey="6LfTrjcnAAAAAFmUQ6swpJDy55CYtU7JsbjaS5bA"
              onChange={onChange}
            />
            <button
              className={`bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl text-white p-3 hover:scale-105 duration-300 max-w-full ${
                submitDisabled ? "cursor-not-allowed pointer-events-none" : ""
              }`}
            >
              Sign up
            </button>
          </form>

          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>
          <button
            className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]"
            onClick={handleSignUpWithGoogle}
          >
            <img src={googleImg} className="w-5 h-5 mr-2" alt="" />
            SignUp with Google
          </button>

          <div className="mt-5 text-xs flex justify-center items-center text-[#002D74] mb-2">
            <p>Already have an account ?</p>
            <button
              className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
              type="submit"
            >
              <a href="./Login">Sign in</a>
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Signup;
