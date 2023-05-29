import React, { useState } from "react";
import { TextField, Button, Slide, Fade } from "@mui/material";
import canvas from "../../assets/image/canvas.png";
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
      <div className="cus-flex">
        <h1 className="text-4xl font-bold mb-8 mt-4 ml-4 ">
          Product{" "}
          <span className="relative z-10">
            <span className="transform rotate-6 inline-block">3</span>
            <span className="transform -rotate-6 inline-block ml-1">D</span>
          </span>
        </h1>
        <Link to="/">
          <Button
            variant="contained"
            color="primary"
            style={{ margin: "10px", background: "#efbc49" }}
          >
            <ArrowBackIcon />
            Go Back
          </Button>
        </Link>
      </div>
      <div className="login-page flex">
        <Fade
          direction="left"
          in={animation}
          mountOnEnter
          unmountOnExit
          timeout={1000}
        >
          <div className="left-panel w-1/2 p-8 flex flex-col justify-center ">
            <div className="login-section">
            <h2 className="text-3xl mb-4">
              {isLogin ? "Welcome back" : "Sign up"}
            </h2>
            <h4 className="mb-4">
              {isLogin ? "Welcome back! please enter your details" : ""}
            </h4>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col mb-4">
                <TextField
                  label="Email"
                  variant="outlined"
                  InputLabelProps={{
                    style: { background: "transparent", padding: "0 8px" },
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex flex-col mb-4">
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  InputLabelProps={{
                    style: {
                      background: "transparent",
                      padding: "0 8px",
                      width: "auto",
                    },
                  }}
                />
              </div>
              {!isLogin && (
                <div className="flex flex-col mb-4">
                  <TextField
                    label="Confirm Password"
                    variant="outlined"
                    type="password"
                    InputLabelProps={{
                      style: {
                        background: "transparent",
                        padding: "0 8px",
                        width: "auto",
                      },
                    }}
                    value={pswd}
                    onChange={(e) => setPswd(e.target.value)}
                  />
                </div>
              )}
              <div className="cus-flex">
                <label
                  htmlFor="rememberMe"
                  style={{ background: "transparent", width: "auto" }}
                >
                  <input
                    type="checkbox"
                    id="rememberMe"
                    checked={checked}
                    onChange={() => {
                      setChecked(!checked);
                    }}
                    style={{
                      display: "inline",
                      transform: "scale(1.2)",
                      marginRight: "8px",
                    }}
                  />
                  Remember me
                </label>
                <Button size="medium" type="button">
                  Forgot password?
                </Button>
              </div>
              <div className="google-button-container">
              <Button
                size="large"
                variant="contained"
                className="w-5/6 text-center mb-2"
                // color="success"
                style={{
                  margin: "5px",
                  backgroundColor: "purple",
                  color: "white",
                }}
                type="submit"
              >
                {isLogin ? "Sign in" : "Sign up"}
              </Button>
                <Button
                  variant="contained"
                  size="large"
                  className="w-5/6 text-center"
                  style={{
                    background: "#fff",
                    color: "#333",
                    border:"1px gray",
                    marginTop:"5px"
                  }}
                >
                  <img src={faGoogle} alt="google-Icon" style={{width:"25px"}}/>
                  <span
                    style={{
                      marginLeft: "5px",
                    }}
                  >
                    {isLogin ? "Sign In with Google" : "sign Up with Google"}
                  </span>
                </Button>
              </div>
            </form>
            <div className="google-button-container">
            <p>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button onClick={handleSwitchMode} className="ml-1 text-blue-500">
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
            <img src={canvas} alt="canvas image" style={{ width: "583px", height: "556px" }} />
            <div className="blur-overlay"></div>
          </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Login;
