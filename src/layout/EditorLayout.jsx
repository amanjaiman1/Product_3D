import React from "react";
function EditorLayout({ children }) {
  return (
    <div className="bg-gradient-to-t from-slate-50 to-blue-100 min-h-screen">
      <main>{children}</main>
    </div>
  );
}
export default EditorLayout;
