import React from "react";
import HomeLayout from "../../../layout/HomeLayout.jsx";
import HelpCentre from "../../../pages/Helpcenter/Helpcentre.jsx";
import Needhelp from "../../../components/Needhelp/index.jsx";
import Helpfaq from "../../../components/Helpfaq/index.jsx";

function HelpCentrePage() {
  return (
    <HomeLayout>
      <HelpCentre />
      <Needhelp />
      <Helpfaq />
    </HomeLayout>
  );
}

export default HelpCentrePage;
