import React from "react";
import HomeLayout from "../../../layout/HomeLayout.jsx";
import Hero from "../../../containers/Hero/index.jsx";
import HightLights from "../../../containers/HightLights/index.jsx";
import Contributor from "../../../containers/Contributors/index.jsx";
import TeamPost from "../../../containers/TeamPost/index.jsx";
import NewsLetter from "../../../containers/NewsLetter/index.jsx";

function Home() {
  return (
    <HomeLayout>
      {/* Hero Section */}
      <Hero />
      {/* Feature */}
      <HightLights />
      {/* Contributor */}
      <Contributor />
      {/* Team Post */}
      <TeamPost />
      {/* News Letter */}
      <NewsLetter />
    </HomeLayout>
  );
}

export default Home;
