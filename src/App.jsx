import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/app/Home";
import ErrorPage from "./views/app/Error";
import "./index.css";

import Login from "./views/auth/Login";
import SignUp from "./views/auth/SignUp";

import { favicon } from "./assets";
import AutoScroll from "./utils/AutoScroll";
import ScrollToTop from "react-scroll-to-top";
import MoonLoader from "react-spinners/MoonLoader";

import Customizer from "./views/app/Customizer";
import { HashLoader } from "react-spinners";
import EditorHome from "./views/app/EditorHome";
import Profile from "./views/app/Profile";
import PrivateRoute from "./utils/PrivateRoute";
import Favourite from "./views/app/Favourite";
import CreatePost from "./pages/Blog/CreatePost";

// Pages Importing
import ContributorPage from "./views/app/ContributorPage";
import Guide from "./views/app/Guide";
import BlogPage from "./views/app/Blog";
import AboutUs from "./views/app/About us";
import Faq from "./views/app/Faq";
import CreatePage from "./views/app/Create";
import ExplorePage from "./views/app/Explore";
import HelpCenterPage from "./views/app/Helpcentre";
import HowitWorksPage from "./views/app/How-it-works";
import NewslettersPage from "./views/app/Newsletters";
import SuggestionPage from "./views/app/Suggestions";
import Settings from "./views/app/Settings";
import Community from "./views/app/Community";
import CommunityLanding from "./views/app/CommunityLanding";
import Plugins from "./views/app/Plugins";
import Teams from "./views/app/Teams";
import CreateTeam from "./views/app/CreateTeam";
import Ambassador from "./components/Ambassador";
import AmbassadorLanding from "./views/app/AmbassadorLanding";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    window.addEventListener("contextmenu", (event) => {
      event.preventDefault();
    });
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {/* {loading ? (
        <div className="flex h-screen items-center justify-center bg-blue-100">
          <HashLoader color="#293fce" aria-label="grid-loading" visible={"true"} />
        </div>
      ) : ( */}
      <BrowserRouter>
        <AutoScroll />
        <Routes>
          <Route Component={Home} path="/" />
          <Route Component={Faq} path="/faq" />
          <Route Component={ContributorPage} path="/contact" />
          <Route Component={ErrorPage} path="/*" />
          <Route Component={Login} path="/login" />
          <Route Component={SignUp} path="/signup" />
          <Route Component={CommunityLanding} path="/community" />
          <Route Component={ErrorPage} path="/*" />
          <Route Component={AmbassadorLanding} path="/ambassador" />

          {/* Pages Routing  */}
          <Route Component={AboutUs} path="/about" />
          <Route Component={BlogPage} path="/blog" />
          <Route Component={Guide} path="/guidebook" />
          <Route Component={CreatePage} path="/create" />
          <Route Component={ExplorePage} path="/explore" />
          <Route Component={HelpCenterPage} path="/helpcenter" />
          <Route Component={HowitWorksPage} path="/how-it-works" />
          <Route Component={NewslettersPage} path="/newsletters" />
          <Route Component={SuggestionPage} path="/suggestions" />
          <Route
            element={
              <PrivateRoute>
                <Community />
              </PrivateRoute>
            }
            path="/app/customizer/community"
          />
          <Route
            element={
              <PrivateRoute>
                <CreatePost />
              </PrivateRoute>
            }
            path="/app/customizer/create-post"
          />
          <Route
            element={
              <PrivateRoute>
                <Customizer />
              </PrivateRoute>
            }
            path="/app/customizer/editor/:designId"
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
          <Route
            element={
              <PrivateRoute>
                <Favourite />
              </PrivateRoute>
            }
            path="/app/customizer/favourite"
          />
          <Route
            element={
              <PrivateRoute>
                <Plugins />
              </PrivateRoute>
            }
            path="/app/customizer/plugins"
          />
          <Route
            element={
              <PrivateRoute>
                <Teams />
              </PrivateRoute>
            }
            path="/app/customizer/teams"
          />
          <Route
            element={
              <PrivateRoute>
                <CreateTeam />
              </PrivateRoute>
            }
            path="/app/customizer/teams/create"
          />
          <Route
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
            path="/app/customizer/settings"
          />
        </Routes>

        <div>
          <ScrollToTop
            smooth
            style={{
              backgroundColor: "transparent",
              border: "2px solid #7E57C2",
              borderRadius: "50%",
            }}
            className="scrlltop items-center pb-1 w-10 h-10"
            viewBox="-60 5 270 160"
            top="100"
            color="white"
          />
        </div>
      </BrowserRouter>
      {/* )}  */}
    </div>
  );
}

export default App;
