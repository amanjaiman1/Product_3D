import React from "react";
import HomeLayout from "../../../layout/HomeLayout.jsx";
import Explore from "../../../pages/Explore/Explore.jsx";
import ExploreCommunity from "../../../components/ExploreCommunity/index.jsx";
import ExploreCustomized from "../../../components/ExploreCustomized/index.jsx";
import ExploreWork from "../../../components/ExploreWork/index.jsx";

function ExplorePage() {
  return (
    <HomeLayout>
      <Explore />
      <ExploreCommunity />
      <ExploreCustomized />
      <ExploreWork />
    </HomeLayout>
  );
}

export default ExplorePage;
