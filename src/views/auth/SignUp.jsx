import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db, googleProvider } from "../../firebase/firebase";
import { AiFillEye } from "react-icons/ai";
import { BsFillEyeSlashFill } from "react-icons/bs";
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
  const [name, setName] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const handleSignUpWithGoogle = (e) => {
    signInWithPopup(auth, googleProvider).then(async (data) => {
      const user = await setDoc(doc(db, "users", data.user.uid), {
        fullName: data.user.displayName,
        email: data.user.email,
        profilePic: data.user.photoURL,
      }).catch((err) => console.log(err));
      let userInfo = { ...user, uid: data.user.uid };
      console.log(data);
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
  return (
    <section className="loginSec flex items-center justify-center">
      <div className="flex w-full">
        <div className="w-1/2">
          <div className="flex flex-col items-center justify-center h-screen w-full ml-5">
            <h1 className="text-7xl text-white leading-tight font-semibold animate-[lights_5s_750ms_linear_infinite]">
              Welcome ! <br /> to Fashion Froze
            </h1>
            <p className="text-xl max-sm:text-[10px] mt-2 text-[#cadfff] ">
              Where creativity meets your wardrobe
            </p>
          </div>
        </div>
        <div className="shape flex ml-10 items-center max-sm:p-10 p-10 w-1/2 w-100%">
          {/* image container */}

          <div className="loginDiv p-10 rounded-[10px] shadow-lg border max-sm:w-[200px] max-sm:-10 max-sm:h-[] w-[500px] ">
            <h2 className="text-3xl text-white max-sm:text-2xl ">Sign up</h2>
            <p className="text-sm text-white max-sm:text-[10px] mt-2">
              Just some details to get you in.!
            </p>

            {/* form inputs */}

            <form
              action=""
              className="flex flex-col gap-4 "
              onSubmit={handleRegistration}
            >
              <input
                className="bg-transparent outline-0 text-white p-2 mt-8 max-sm:mt-4 max-sm:h-8 border-2 placeholder-white rounded-[5px] font-normal"
                type="UserName"
                name="UserName"
                placeholder="UserName"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="bg-transparent outline-0 text-white p-2 max-sm:h-8 placeholder-white rounded-[5px] border-2 font-normal"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="flex border-2 rounded-[5px]">
                <input
                  className="bg-transparent outline-0 text-white p-2 max-sm:h-8 placeholder-white   w-full"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  placeholder="Password"
                />
                <div className=" bg-transparent text-white mr-2">
                  <AiFillEye className="h-full text-white bg-transparent cursor-pointer " />
                </div>
              </div>

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

            <div className="mt-5 text-sm text-white flex justify-center items-center text-[#002D74] mb-2">
              <p className="mr-5">Already have an account ?</p>
              <button
                className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
                type="submit"
              >
                <a href="./Login">Sign in</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
