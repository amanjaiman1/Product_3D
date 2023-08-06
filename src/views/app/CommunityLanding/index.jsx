import React from "react";
import HomeLayout from "../../../layout/HomeLayout.jsx";
import CommunityLanding from "../../../pages/CommunityLanding/index.jsx";
import Ambassador from "../../../components/Ambassador/index.jsx";
import CommmunityNews from "../../../components/CommunityNews/index.jsx";

function Guide() {
  return (
    <HomeLayout>
      <CommunityLanding />
      <Ambassador />
      <CommmunityNews />
    </HomeLayout>
  );
}

export default Guide;
