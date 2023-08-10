import React from "react";
import CustomizerSidebar from "../components/CustomizerSidebar";
import CustomizerTopbar from "../components/CustomizerTopbar";

function EditorHomeLayout({ children }) {
  return (
    <div className="grid grid-flow-col grid-cols-6 h-screen">
      <CustomizerSidebar />
      <main className="col-span-6 bg-gradient-to-t from-slate-800 to-[#09090C]">
        <CustomizerTopbar />
        {children}
      </main>
    </div>
  );
}

export default EditorHomeLayout;
