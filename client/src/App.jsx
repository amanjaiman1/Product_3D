import React,{lazy,Suspense} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { favicon } from "./assets";
import UserTest from "./test/user.test";

import ScrollToTop from "react-scroll-to-top";

import MoonLoader from "react-spinners/MoonLoader";

const Login=lazy(()=>import('./views/auth/Login'))
const SignUp=lazy(()=>import('./views/auth/SignUp'))
const Home=lazy(()=>import('./views/app/Home'))
const BlogPage=lazy(()=>import('./views/app/Blog'))
const Faq=lazy(()=>import('./views/app/Faq'))
const ErrorPage=lazy(()=>import('./views/app/Error'))
const Guide=lazy(()=>import('./views/app/Guide'))
const ContributorPage=lazy(()=>import('./views/app/ContributorPage'))
const Middle=lazy(()=>import('./pages/Middle/secondPagePipeline').then(module => ({ default: module.Middle })))

function App() {
  return (
    <div>
        <BrowserRouter>
          <Suspense fallback={<div className="flex h-screen items-center justify-center bg-blue-100">
            <MoonLoader
              color="#293fce"
              ariaLabel="grid-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
            <img src={favicon} className="h-14 w-12 -ml-16" loading="lazy"></img>
          </div>}>
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

            <Route Component={Middle} path="/tshirt-customisation" />

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
    </div>
  );
}

export default App;
