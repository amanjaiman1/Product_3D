import React from "react";
import Header from "../containers/Header";
import Footer from "../containers/Footer";

function HomeLayout({ children }) {
  return (
    <>
      <Header />
      <main>
        <section class="container mx-auto px-4 py-8">{children}</section>
      </main>
      <Footer />
    </>
  );
}

export default HomeLayout;
