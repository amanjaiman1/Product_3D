import React from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { favicon } from "./assets";
import AutoScroll from "./utils/AutoScroll";
import ScrollToTop from "react-scroll-to-top";
import { HashLoader } from "react-spinners";
import PrivateRoute from "./utils/PrivateRoute";

const Login = lazy(() => import("./views/auth/Login"));
const SignUp = lazy(() => import("./views/auth/SignUp"));
const Home = lazy(() => import("./views/app/Home"));
const BlogPage = lazy(() => import("./views/app/Blog"));
const Faq = lazy(() => import("./views/app/Faq"));
const ErrorPage = lazy(() => import("./views/app/Error"));
const Guide = lazy(() => import("./views/app/Guide"));
const EditorHome = lazy(() => import("./views/app/EditorHome"));
const Profile = lazy(() => import("./views/app/Profile"));
const Customizer = lazy(() => import("./views/app/Customizer"));
const ContributorPage = lazy(() => import("./views/app/ContributorPage"));

function App() {

  return (
    <div>
      <BrowserRouter>
        <AutoScroll />
          <Suspense
          fallback={
            <div className="flex h-screen items-center justify-center bg-blue-100">
              <HashLoader
                color="#293fce"
                aria-label="grid-loading"
                visible={"true"}
              />
              <img src={favicon} className="h-14 w-12 -ml-16"></img>
            </div>
          }
        >
        <Routes>
          <Route Component={Home} path="/" />
          <Route Component={Faq} path="/faq" />
          <Route Component={ContributorPage} path="/contact" />
          <Route Component={ErrorPage} path="/*" />
          <Route Component={Login} path="/login" />
          <Route Component={SignUp} path="/signup" />
          <Route Component={BlogPage} path="/blog" />
          <Route Component={ErrorPage} path="/*" />
          <Route Component={Guide} path="/guidebook" />
          <Route
            element={
              <PrivateRoute>
                <Customizer />
              </PrivateRoute>
            }
            path="/app/customizer/editor"
          />
          <Route
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
            path="/app/customizer/profile"
          />
          <Route
            element={
              <PrivateRoute>
                <EditorHome />
              </PrivateRoute>
            }
            path="/app/customizer"
          />
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
