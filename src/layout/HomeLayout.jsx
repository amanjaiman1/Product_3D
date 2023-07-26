import React from "react";
import Header from "../containers/Header/Navbar";
import Footer from "../containers/Footer/index.jsx";
import styles from "../style";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function HomeLayout({ children }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className={"text-3xl"}>The Site is under maintenance</h1>
      <Button onClick={() => navigate("/login")} className={"mt-5"}>
        Go to Design{" "}
      </Button>
      {/* <Header />
       <main className="min-[400px]:px-10 mt-8">
        <section className="container mx-auto">{children}</section>
      </main>
      <div className={`bg-[#F4F8FD] ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>  */}
    </div>
  );
}

export default HomeLayout;
