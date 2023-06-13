import React from "react";
import Header from "../containers/Header/Navbar";
import Footer from "../containers/Footer/index.jsx";
import styles from '../style';

function EditorLayout({ children }) {
  return (
    <div className="bg-gradient-to-t from-slate-50 to-blue-100">
      <Header />
      <main className="min-[400px]:px-10">
        <section className="container mx-auto px-4 py-8">{children}</section>
      </main>
    </div>
  );
}

export default EditorLayout;
