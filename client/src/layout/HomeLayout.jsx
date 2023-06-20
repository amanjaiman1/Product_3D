import React from "react"
import Header from "../containers/Header/Navbar"
import Footer from "../containers/Footer/index.jsx"
import styles from "../style"

function HomeLayout({ children }) {
  return (
    <div className="bg-gradient-to-t from-slate-50 to-blue-100">
      <Header />
      <main className="min-[400px]:px-10">
        <section className="container mx-auto">{children}</section>
      </main>
      <div className={`bg-[#F4F8FD] ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default HomeLayout
