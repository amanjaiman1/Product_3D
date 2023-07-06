import React, { useState, useEffect } from "react";
import { googleImg, loginImgGif } from "../../assets";
import Cookies from "js-cookie";
import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithRedirect,
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
  const [user, setUser] = useState({
    name: "",
    email: "",
    profilePic: "",
  });
  //const googleProvider = new GoogleAuthProvider();
  const firebaseAuth = getAuth();

  // useEffect(() => {
  //   getRedirectResult(firebaseAuth)
  //     .then((result) => {
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       const token = credential.accessToken;
  //       const user = result.user;
  //       Cookies.set('access_token', token, { expires: 7 });
  //       // Set the user data to the state or take appropriate actions
  //       setUser({
  //         name: user.displayName,
  //         email: user.email,
  //         profilePic: user.photoURL,
  //       });
  //     })
  //     .catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       const email = error.email;
  //       const credential = GoogleAuthProvider.credentialFromError(error);
  //       // ...
  //     });
  // }, []); // Empty dependency array to ensure this effect runs only once
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

  const handleGoogleSignIn = () => {
    signInWithGooglePopup();
  };

  const signInWithGooglePopup = () => {
    signInWithRedirect(firebaseAuth, googleProvider)
      .then((res) => {
        setUser({
          //name: res.user.displayName,
          ...user,
          email: res?.user.email,
          //profilePic: res.user.photoURL,
        });

        // localStorage.setItem("name", res.user.displayName);
        // localStorage.setItem("email", res.user.email);
        // localStorage.setItem("profilePic", res.user.photoURL);

        setAlert({
          open: true,
          message: `Google Sign Up Successful. Welcome ${res?.user.email}`,
          type: "success",
        });
        console.log(alert.message);
      })
      .catch((error) => {
        setAlert({
          open: true,
          message: error.message,
          type: "error",
        });
      });
  };

  return (
    <section className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-7xl items-center">
        {/* image container   */}

        <div className="md:block hidden w-1/2 ">
          <img src={loginImgGif} alt="" className="rounded-xl" />
        </div>

        <div className="md:w-1/2 px-8 sm:mt-0 mt-5 md:px-16 max-w-[500px] ml-5">
          <h2 className="font-normal text-3xl text-[#002D74]">
            Welcome back to <span className="font-semibold">Fashion Froze</span>{" "}
          </h2>
          <p className="text-sm mt-4 text-[#002D74]">
            Where creativity meets your wardrobe, once again
          </p>

          {/* form inputs */}

          <form action="" className="flex flex-col gap-4">
            <input
              className="p-2 mt-8 rounded-xl border font-normal"
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
                  className="p-2 rounded-xl border w-full"
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
              className="text-sm bg-gradient-to-r bg-clip-text from-indigo-500 via-purple-500 to-pink-500 text-right cursor-pointer"
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
          {/* 
          <button
            className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]"
            onClick={handleGoogleSignIn}
          >
            <img src={googleImg} className="w-5 h-5 mr-2" alt="" />
            Login with Google
          </button> */}

          <div className="mt-3 text-xs flex justify-center items-center text-[#002D74] mb-2">
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
