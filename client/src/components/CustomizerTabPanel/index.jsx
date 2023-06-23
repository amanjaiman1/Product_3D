import React from "react";

export default function CustomizerTabPanel({ currentIndex, data }) {
  const currentComponent = data[currentIndex].tabPanel;
  return <>{currentComponent}</>;
}
