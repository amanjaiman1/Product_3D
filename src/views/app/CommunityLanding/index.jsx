import React from "react";
import HomeLayout from "../../../layout/HomeLayout.jsx";
import CommunityLanding from "../../../pages/CommunityLanding/index.jsx";
import Ambassador from "../../../components/Ambassador/index.jsx";
import CommmunityNews from "../../../components/CommunityNews/index.jsx";
import CommunityVideos from "../../../components/CommunityVideos/index.jsx";
import CommunityFunding from "../../../containers/CommunityFunding/index.jsx";

function Guide() {
  return (
    <HomeLayout>
      <CommunityLanding />
      <Ambassador />
      <CommmunityNews />
      <CommunityVideos />
      <CommunityFunding />
    </HomeLayout>
  );
}

export default Guide;
