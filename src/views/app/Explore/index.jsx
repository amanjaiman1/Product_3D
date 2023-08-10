import React from "react";
import HomeLayout from "../../../layout/HomeLayout.jsx";
import Explore from "../../../pages/Explore/Explore.jsx";
import ExploreCommunity from "../../../components/ExploreCommunity/index.jsx";
import ExploreCustomized from "../../../components/ExploreCustomized/index.jsx";
import ExploreWork from "../../../components/ExploreWork/index.jsx";
import ExploreEvent from "../../../containers/ExploreEvent/index.jsx";
import EventGallery from "../../../containers/EventGallery/index.jsx";

function ExplorePage() {
  return (
    <HomeLayout>
      <Explore />
      <ExploreCommunity />
      <ExploreCustomized />
      <ExploreWork />
      <ExploreEvent />
      <EventGallery />
    </HomeLayout>
  );
}

export default ExplorePage;
