import React from "react";
import Header from "../containers/Header/Navbar";
import Footer from "../containers/Footer/index.jsx";
import styles from "../style";

function HomeLayout({ children }) {
  return (
    <div className="bg-[#110F0F] text-white">
      <div className=" bg-[url(/frame.png)] bg-cover bg-no-repeat">
        <Header />
        <main className="min-[400px]:px-10 mt-8">
          <section className="container mx-auto">{children}</section>
        </main>
      </div>
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default HomeLayout;
