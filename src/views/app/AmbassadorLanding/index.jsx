import React from "react";
import HomeLayout from "../../../layout/HomeLayout.jsx";
import AmbassadorHero from "../../../containers/AmbassadorHero/index.jsx";
import Ambassadorfeature from "../../../containers/Ambassadorfeature/index.jsx";

function AmbassadorLanding() {
  return (
    <HomeLayout>
      <AmbassadorHero />
      <Ambassadorfeature />
    </HomeLayout>
  );
}

export default AmbassadorLanding;
