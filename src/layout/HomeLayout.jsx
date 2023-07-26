import React from "react";
import Header from "../containers/Header/Navbar";
import Footer from "../containers/Footer/index.jsx";
import styles from "../style";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function HomeLayout({ children }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black text-white">
      <h1 className={"text-3xl"}>The Site is under maintenance</h1>
      <Button onClick={() => navigate("/login")} className={"mt-5"}>
        Go to Design{" "}
      </Button>

      <Link
        className="mt-5 underline"
        target="_blank"
        to={"https://discord.gg/JW9K58FBfs"}
      >
        Contact Team{" "}
      </Link>

      <h2 className="mt-10 text-[30px] max-sm:text-[20px]">
        Updates are going on 'Development' Branch
      </h2>
      <div className="flex">
        <h3 className="mt-3">Do check it out 👉🏻</h3>
        <Link
          to={"https://github.com/amanjaiman1/Product_3D/tree/development"}
          target={"_blank"}
          className={"mt-2 ml-5 text-[20px] underline text-yellow-300"}
        >
          Click me{" "}
        </Link>
      </div>
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
