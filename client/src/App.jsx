import React,{Suspense,lazy} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import { favicon } from "./assets";

import UserTest from "./test/user.test";
import ScrollToTop from "react-scroll-to-top";
import MoonLoader from "react-spinners/MoonLoader";

const Login = lazy(() => import("./views/auth/Login"));
const SignUp = lazy(() => import("./views/auth/SignUp"));
const Home = lazy(() => import("./views/app/Home"));
const Faq = lazy(() => import("./views/app/Faq"));
const blog = lazy(() => import("./views/app/Blog"));
const ErrorPage = lazy(() => import("./views/app/Error"));
const ContributorPage = lazy(() => import("./views/app/ContributorPage"));
const Guide = lazy(() => import("./views/app/Guide"));

function App() {

  return (
        <BrowserRouter>
        <Suspense fallback={<MoonLoader/>}>
          <Routes>
            <Route Component={Home} path="/" />
            <Route Component={Faq} path="/faq" />
            <Route Component={ContributorPage} path="/contact" />
            <Route Component={ErrorPage} path="/*" />
            <Route Component={Login} path="/login" />
            <Route Component={SignUp} path="/signup" />
            <Route Component={BlogPage} path="/blog" />
            <Route Component={UserTest} path="/test" />
            <Route Component={ErrorPage} path="/*" />
            <Route Component={Guide} path="/guidebook"/>
          </Routes>

          <div>
            <ScrollToTop
              smooth
              className="scrlltop"
              viewBox="-60 5 270 160"
              top="100"
              color="white"
            />
          </div>
          </Suspense>
        </BrowserRouter>
  );
}

export default App;
