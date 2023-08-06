import React from "react";
import HomeLayout from "../../../layout/HomeLayout.jsx";
import CommunityLanding from "../../../pages/CommunityLanding/index.jsx";
import Ambassador from "../../../components/ambassador/index.jsx";

function Guide() {
  return (
    <HomeLayout>
      <CommunityLanding />
      <Ambassador />
    </HomeLayout>
  );
}

export default Guide;
