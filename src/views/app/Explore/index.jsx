import React from "react";
import HomeLayout from "../../../layout/HomeLayout.jsx";
import Explore from "../../../pages/Explore/Explore.jsx";
import ExploreCommunity from "../../../components/ExploreCommunity/index.jsx";

function ExplorePage() {
  return (
    <HomeLayout>
      <Explore />
      <ExploreCommunity />
    </HomeLayout>
  );
}

export default ExplorePage;
