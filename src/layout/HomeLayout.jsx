import React from "react";
import Header from "../containers/Header/Navbar";
import Footer from "../containers/Footer/index.jsx";
import styles from "../style";

function HomeLayout({ children }) {
  return (
    <div className="bghomelayout text-white ">
      <div className="jesus">
        <Header />
        <main className="">
          <section className="">{children}</section>
        </main>
      </div>
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <Footer />
      </div>
    </div>
  );
}

export default HomeLayout;
