import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { AiFillEye } from "react-icons/ai";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { googleImg, loginImgGif } from "../../assets";
import { HashLoader } from "react-spinners";
const Signup = () => {
  const [hideshowPassword, setHideShowPassword] = useState(false);
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
  const [name, setName] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(false);

  const handleRegistration = (e) => {
    e.preventDefault();
    if (!email || !password || !name) {
      toast.error("Fields can't be empty", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const user = res.user;
        updateProfile(user, {
          displayName: name,
        });
        console.log(user);
        navigate("/app/customizer");
        setSubmitDisabled(false);
      })
      .catch((error) => {
        console.log(error.message);
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          toast.error("Email is already registered", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else if (
          error.message ===
          "Firebase: Password should be at least 6 characters (auth/weak-password)."
        ) {
          toast.error("Password should be at least 6 characters", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }

        setSubmitDisabled(false);
      });
  };
  return (
    <section className="bg-gray-200 min-h-screen flex items-center justify-center">
      {loading ? (
        <div className="flex h-screen w-screen items-center justify-center bg-blue-100">
          <HashLoader
            color="#293fce"
            ariaLabel="grid-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-7xl items-center">
          {/* image container */}

          <div className="md:block hidden w-1/2 " alt="right-bar">
            <img src={loginImgGif} alt="" className="rounded-xl" />
          </div>

          <div className="md:w-1/2 px-8 sm:mt-0 mt-5 md:px-16 max-w-[500px] ml-5 items-center justify-center">
            <h2 className="font-normal text-3xl text-[#002D74]">
              Welcome to
              <span className="font-semibold"> Fashion Froze </span>
            </h2>
            <p className="text-sm mt-4 text-[#002D74]">
              Where creativity meets your wardrobe
            </p>

            {/* form inputs */}

            <form
              action=""
              className="flex flex-col gap-4 "
              onSubmit={handleRegistration}
            >
              <input
                className="p-2 mt-8 rounded-xl border font-normal"
                type="UserName"
                name="UserName"
                placeholder="UserName"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="p-2 rounded-xl border font-normal"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
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
                      className="h-full bg-white rounded-r-xl cursor-pointer"
                    />
                  ) : (
                    <BsFillEyeSlashFill
                      onClick={() => setHideShowPassword(!hideshowPassword)}
                      className="h-full bg-white rounded-r-xl cursor-pointer"
                    />
                  )}
                </div>
              </div>
              <button
                className={`bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl text-white p-3 hover:scale-105 duration-300 max-w-[400px] ${
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

            {/* button inputs  */}

            {/* <button
            className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]"
            type="submit"
            onClick={googleSignin}
          >
            <img src={googleImg} className="w-5 h-5 mr-2" alt="" />
            Sign up with Google
          </button> */}

            <div className="mt-5 text-xs flex justify-center items-center text-[#002D74] mb-2">
              <p>Already have an account ?</p>
              <button
                className="py-2 px-5 ml-2 bg-white border rounded-xl hover:scale-110 duration-300"
                type="submit"
              >
                <a href="./Login">Sign in</a>
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </section>
  );
};

export default Signup;
