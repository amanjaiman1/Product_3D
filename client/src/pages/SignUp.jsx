import React, { useState } from "react";
import { TextField, Button, Slide, Fade } from "@mui/material";
import canvas1 from "../assets/image/canvas1.gif";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import faGoogle from "../assets/image/google-48.png";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const [mobile, setMobile] = useState("");
  const [Loading, setLoading] = useState("");
  const [isSignup, setIsSignup] = useState(true);
  const [checked, setChecked] = useState(false);
  const [animation, setanimation] = useState(true);

  const handleChange = () => {
    setanimation((prev) => !prev);
  };

  const handleSwitchMode = () => {
    setIsSignup(!isSignup);
    setName("");
    setEmail("");
    setPswd("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
  };

  return (
    <div
      className="signup-container"
      style={{
        overflowX: "hidden",
      }}
    >
      <div className="flex">
        <Fade
          direction="left"
          in={animation}
          mountOnEnter
          unmountOnExit
          timeout={1000}
        >
          <div className="md:w-1/2 md:p-4 lg:p-6 p-0 ml-[-20px] pt-8 lg:m-0 md:m-0 flex flex-col ">
            <div className="login-section md:p-16 sm:p-8 p-0 lg:pl-36">
            <h2 className="text-3xl mb-4 font-bold">
              {isSignup ? "Sign up" : "Welcome Back"}
            </h2>
            <h4 className="mb-4 md:w-[400px] md:text-lg w-[300px] text-sm">
              {isSignup ? "Please enter your details" : "Enter your details"}
            </h4>
            <form onSubmit={handleSubmit}>

                {/* ------------------Inputs-------------------------------- */}

            <div className="flex flex-col mb-4">
                <p className="font-semibold md:w-[400px] md:text-lg w-[300px] text-sm">Name</p>
                <input
                  className="md:w-[400px] w-[300px] border border-slate-600 rounded p-2"
                  label="Name"
                  placeholder="Enter your Name"
                  type="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="flex flex-col mb-4">
                <p className="font-semibold md:w-[400px] md:text-lg w-[300px] text-sm">Email</p>
                <input
                  className="md:w-[400px] w-[300px] border border-slate-600 rounded p-2"
                  label="Email"
                  placeholder="Enter your Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex flex-col mb-2 mt-4">
              <p className="font-semibold md:w-[400px] md:text-lg w-[300px] text-sm">Password</p>
                <input
                  className="md:w-[400px] w-[300px] border border-slate-600 rounded p-2"
                  label="Password"
                  placeholder="Enter Password"
                  type="password"
                />
              </div>
              <div className="md:w-[400px] w-[300px] text-sm flex flex-inline justify-between mt-2">
                <label
                  htmlFor="rememberMe"
                  className="bg-transparent w-[150px] text-xs md:text-sm"
                >
                  <input
                    className="mr-0"
                    type="checkbox"
                    id="rememberMe"
                    checked={checked}
                    onChange={() => {
                      setChecked(!checked);
                    }}
                  />
                  Remember me
                </label>
                <a className="md:w-[150px] md:text-sm text-xs text-purple-500 cursor-pointer mt-2">
                  Forgot password?
                </a>
              </div>

                    {/* ---------------------Signup buttons------------------------ */}

              <div className="google-button-container mt-10">
              <button
                className="md:w-[400px] w-[300px] text-center text-lg font-medium mb-4 p-2 border rounded"
                // color="success"
                style={{
                  backgroundColor: "#7E56DA",
                  color: "white",
                }}
                type="submit"
              >
                {isSignup ? "Sign up" : "Sign in"}
              </button>
                <Button
                  variant="contained"
                  size="large"
                  className="md:w-[400px] w-[300px] text-center text-lg font-medium mt-4 p-2 border rounded"
                  style={{
                    background: "#fff",
                    color: "#333",
                    border:"1px gray",
                    marginTop:"5px"
                  }}
                >
                  <img src={faGoogle} alt="google-Icon" style={{width:"25px"}}/>
                  <span>
                    {isSignup ? "Sign Up with Google" : "Sign in with Google"}
                  </span>
                </Button>
              </div>
            </form>
            <div className="google-button-container">
            <p className="mt-4 md:w-[400px] w-[300px]">
              {isSignup ? "Already have an account?" : "Don't have an account?"}
              <button onClick={handleSwitchMode} className="ml-1 text-purple-500">
                {isSignup ? "Login" : "Signup"}
              </button>
            </p>
            </div>
          </div>
          </div>
        </Fade>
        <Slide
          direction="left"
          in={animation}
          mountOnEnter
          unmountOnExit
          timeout={700}
        >

                  {/* ----------------------Right side Image-------------------------------- */}

          <div className="Right-panel hidden md:flex md:w-1/2 flex-grow">
          <div className="slide-image-container">
            <img src={canvas1} alt="canvas image"  className="md:w-[600px] h-[500px] lg:pr-24"/>
          </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Signup;
