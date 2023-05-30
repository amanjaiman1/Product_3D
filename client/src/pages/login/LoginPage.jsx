import React, { useState } from "react";
import { TextField, Button, Slide, Fade } from "@mui/material";
import canvas1 from "../../assets/image/canvas1.gif";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import faGoogle from "../../assets/image/google-48.png";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const [mobile, setMobile] = useState("");
  const [Loading, setLoading] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [checked, setChecked] = useState(false);
  const [animation, setanimation] = useState(true);

  const handleChange = () => {
    setanimation((prev) => !prev);
  };

  const handleSwitchMode = () => {
    setIsLogin(!isLogin);
    setEmail("");
    setPswd("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
  };

  return (
    <div
      className="login-container"
      style={{
        overflowX: "hidden",
      }}
    >
      <div className="login-page flex">
        <Fade
          direction="left"
          in={animation}
          mountOnEnter
          unmountOnExit
          timeout={1000}
        >
          <div className="md:w-1/2 md:p-8 flex flex-col ml-[-20px] mt-4">
            <div className="login-section m:p-16 sm:p-8 p-0 lg:pl-36 md:w-1/2 md:p-4 lg:p-16 pt-8 lg:m-0 md:m-0 flex flex-col ">
            <h2 className="text-3xl mb-4 font-bold">
              {isLogin ? "Welcome back" : "Sign up"}
            </h2>
            <h4 className="mb-4 md:w-[400px] md:text-lg w-[300px] text-sm">
              {isLogin ? "Welcome back! Please enter your details" : ""}
            </h4>
            <form onSubmit={handleSubmit}>
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

              <div className="flex flex-col mb-2 mt-8">
              <p className="font-semibold md:w-[400px] md:text-lg w-[300px] text-sm">Password</p>
                <input
                  className="md:w-[400px] w-[300px] border border-slate-600 rounded p-2"
                  label="Password"
                  placeholder="Enter Password"
                  type="password"
                />
              </div>
              {!isLogin && (
                <div className="flex flex-col mb-4">
                <p className="font-semibold md:w-[400px] md:text-lg w-[300px] text-sm">Password</p>
                  <input
                    className="md:w-[400px] w-[300px] border border-slate-600 rounded p-2"
                    label="Password"
                    placeholder="Enter Password"
                    type="password"
                    value={pswd}
                    onChange={(e) => setPswd(e.target.value)}
                  />
                </div>
              )}
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
              <div className="google-button-container">
              <button
                className="md:w-[400px] w-[300px] text-center text-lg font-medium mt-14 mb-4 p-2 border rounded"
                // color="success"
                style={{
                  backgroundColor: "#7E56DA",
                  color: "white",
                }}
                type="submit"
              >
                {isLogin ? "Sign in" : "Sign up"}
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
                    {isLogin ? "Sign In with Google" : "sign Up with Google"}
                  </span>
                </Button>
              </div>
            </form>
            <div className="google-button-container">
            <p className="mt-4 md:w-[400px] w-[300px]">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button onClick={handleSwitchMode} className="ml-1 text-purple-500">
                {isLogin ? "Signup" : "Login"}
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
          <div className="Right-panel hidden md:flex md:w-1/2 flex-grow">
          <div className="slide-image-container">
            <img src={canvas1} alt="canvas image"  className="w-[600px] h-[500px] lg:pr-24"/>
          </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Login;
