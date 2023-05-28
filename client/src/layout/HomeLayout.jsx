import React from "react";
import Header from "../containers/Header";
import Footer from "../containers/Footer";

function HomeLayout({ children }) {
  return (
    <div className="bg-gradient-to-t from-slate-50 to-blue-100">
      <Header />
      <main className="px-10">
        <section class="container mx-auto px-4 py-8">{children}</section>
      </main>
      <Footer />
    </div>
  );
}

export default HomeLayout;
