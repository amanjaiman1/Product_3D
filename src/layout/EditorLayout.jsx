import React from "react";
function EditorLayout({ children }) {
  return (
    <div className="bg-gradient-to-t from-slate-900 to-[#09090C] min-h-screen">
      <main>{children}</main>
    </div>
  );
}
export default EditorLayout;
